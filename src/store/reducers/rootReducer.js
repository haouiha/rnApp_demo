import { combineReducers } from 'redux';
import authReducer from './authReducer';
import appSettingReducer from './appSettingReducer';
import tokenReducer from './tokenReducer';

const rootReducer = combineReducers({
	authReducer,
	appSettingReducer,
});

export { rootReducer, tokenReducer };
