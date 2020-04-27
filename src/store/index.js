import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { rootReducer, tokenReducer } from './reducers/rootReducer';
import rootSagas from './sagas/rootSagas';
import createSensitiveStorage from 'redux-persist-sensitive-storage';

const composeEnhancers = composeWithDevTools({
	realtime: true,
	name: 'SafetySmartApp',
	hostname: 'localhost',
	port: 1234,
});

const sensitiveStorage = createSensitiveStorage({
	keychainService: 'myKeychain',
	sharedPreferencesName: 'mySharedPrefs',
});

const mainPersistConfig = {
	key: 'main',
	storage: AsyncStorage,
	whitelist: ['authReducer'], // Whitelist (Save Specific Reducers)
};

const tokenPersistConfig = {
	key: 'token',
	storage: sensitiveStorage,
};

const configureStore = () => {
	const appRootReducer = combineReducers({
		main: persistReducer(mainPersistConfig, rootReducer),
		token: persistReducer(tokenPersistConfig, tokenReducer),
	});
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware];
	const store = createStore(appRootReducer, composeEnhancers(applyMiddleware(...middlewares)));

	sagaMiddleware.run(rootSagas);

	console.log('__DEV__ && module.hot', __DEV__, module.hot);

	if (module.hot) {
		module.hot.accept(() => {
			const nextRootReducer = require('./reducers/rootReducer').rootReducer;
			const nextTokenReducer = require('./reducers/rootReducer').tokenReducer;
			store.replaceReducer({ main: nextRootReducer, token: nextTokenReducer });
		});
	}

	const persistor = persistStore(store);

	return { store, persistor };
};

export default configureStore;

// if (__DEV__ && module.hot) {
// 	module.hot.accept('./reducers/rootReducer', () =>
// 		store.replaceReducer({
// 			main: rootReducer,
// 		})
// 	);
// }
