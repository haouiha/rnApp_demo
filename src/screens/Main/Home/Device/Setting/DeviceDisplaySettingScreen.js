import React from 'react';
import { Layout, Text, Button, Input } from '@ui-kitten/components';

const DeviceDisplaySettingScreen = props => {
	const { navigation } = props;

	return (
		<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text category="h1">DeviceDisplaySettingScreen</Text>
		</Layout>
	);
};

export default DeviceDisplaySettingScreen;
