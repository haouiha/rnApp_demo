import React from 'react';
import { Layout, Text, Button, Input } from '@ui-kitten/components';

const WifiSettingScreen = props => {
	const { navigation } = props;

	return (
		<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text category="h1">WifiSettingScreen</Text>
		</Layout>
	);
};

export default WifiSettingScreen;
