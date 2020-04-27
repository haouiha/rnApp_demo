import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainStack from './Main/MainStack';
import AuthStack from './Auth/AuthStack';
import SplashScreen from '../screens/Splash/SplashScreen';
import { TransitionPresets } from '@react-navigation/stack';

const RootStack = createStackNavigator();
const AppNavigation = () => {
	return (
		<RootStack.Navigator
			initialRouteName="AuthLoading"
			headerMode="none"
			screenOptions={({ route, navigation }) => ({
				...TransitionPresets.SlideFromRightIOS,
			})}
		>
			<RootStack.Screen name="AuthLoading" component={SplashScreen} />
			<RootStack.Screen name="Auth" component={AuthStack} />
			<RootStack.Screen name="Main" component={MainStack} />
		</RootStack.Navigator>
	);
};

export default AppNavigation;
