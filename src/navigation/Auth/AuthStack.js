import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Layout, Text } from '@ui-kitten/components';
import LoginScreen from '../../screens/Auth/LoginScreen';

const Auth = createStackNavigator();
const AuthStack = () => {
	return (
		<Auth.Navigator headerMode="none">
			<Auth.Screen name="Login" component={LoginScreen} />
			<Auth.Screen name="Onboarding" component={OnboardingScreen} />
			<Auth.Screen name="Forget" component={ForgotPasswordScreen} />
			<Auth.Screen name="SendEmail" component={SendEmailScreen} />
			<Auth.Screen name="Register" component={RegisterScreen} />
		</Auth.Navigator>
	);
};

export default AuthStack;

// const LoginScreen = () => (
// 	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// 		<Text category="h1">LoginScreen</Text>
// 	</Layout>
// );

const OnboardingScreen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text category="h1">OnboardingScreen</Text>
	</Layout>
);

const ForgotPasswordScreen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text category="h1">ForgotPasswordScreen</Text>
	</Layout>
);

const RegisterScreen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text category="h1">RegisterScreen</Text>
	</Layout>
);

const SendEmailScreen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text category="h1">SendEmailScreen</Text>
	</Layout>
);
