import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './navigation/AppNavigation';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { Provider } from 'react-redux';
import configureStore from './store';
import * as eva from '@eva-design/eva';
import customTheme from '../custom-theme';
import { PersistGate } from 'redux-persist/integration/react';
import { navigationRef, isMountedRef } from './utils/appNavigation';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { FeatherIconsPack } from './assets/icons/feather-icons';
import { MaterialIconsPack } from './assets/icons/material-icons';

console.disableYellowBox = true;

const { store, persistor } = configureStore();

const App = () => {
	useEffect(() => {
		isMountedRef.current = true;
		return () => (isMountedRef.current = false);
	}, []);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<IconRegistry icons={[EvaIconsPack, FeatherIconsPack, MaterialIconsPack]} />
				<ApplicationProvider {...eva} theme={customTheme}>
					<SafeAreaProvider>
						<NavigationContainer ref={navigationRef}>
							<AppNavigation />
						</NavigationContainer>
					</SafeAreaProvider>
				</ApplicationProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
