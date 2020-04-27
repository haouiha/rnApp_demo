import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Layout, Text } from '@ui-kitten/components';

const delay = ms => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

const AuthLoadingScreen = props => {
	const { navigation, isLogin } = props;

	const authLoading = useCallback(async () => {
		await delay(700);
		const firstRoute = isLogin ? 'Main' : 'Auth';
		// const firstRoute = 'Main';

		navigation.navigate(firstRoute);
	}, []);

	useEffect(() => {
		authLoading();
	}, [authLoading]);

	return (
		<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text category="h1">AuthLoadingScreen</Text>
		</Layout>
	);
};

const mapStateToProps = ({ main }) => ({
	isLogin: main.authReducer.isLogin,
});

export default connect(mapStateToProps)(AuthLoadingScreen);
