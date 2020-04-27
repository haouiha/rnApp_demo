import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Text, Button, List, ListItem, Icon } from '@ui-kitten/components';
// import ListSeparator from 'components/misc/ListSeparator';

const ArrowIcon = () => {
	const style = {
		width: 20,
		height: 20,
		tintColor: 'rgba(143, 155, 179, 0.7)',
		marginHorizontal: 10,
		marginVertical: 5,
	};
	return <Icon {...style} name="arrow-ios-forward-outline" />;
};

const SettingScreen = props => {
	const { navigation } = props;

	const settingList = [
		{
			label: 'wifi',
			navigateTo: 'WifiSetting',
			// description: SSID,
			sentParams: null,
		},
		{
			label: 'RCBO',
			navigateTo: 'RCBOSetting',
			// description:
			//     MODE === 'au' ? 'Auto' : RANGE.length > 3 ? `${RANGE.slice(0, 2)} mA` : `${RANGE.slice(0, 1)} mA`,
			// sentParams: {
			//     field: 'RCBO',
			//     data: MODE === 'au' ? MODE : RANGE,
			// },
		},
		{
			label: 'grantUsage',
			navigateTo: 'GrantUsageRights',
			description: '',
			sentParams: null,
		},
		{
			label: 'alert',
			navigateTo: 'AlertParameters',
			description: '',
			// sentParams: { notification: notification, deviceId: deviceId },
		},
		{
			label: 'protect',
			navigateTo: 'ProtectParameters',
			description: '',
			// sentParams: { deviceId: deviceId },
		},
		{
			label: 'chat',
			navigateTo: 'Chat',
			description: '',
			sentParams: null,
		},
		{
			label: 'deviceDisplay',
			navigateTo: 'DeviceDisplaySetting',
			description: '',
			sentParams: null,
		},
		{
			label: 'clearUnit',
			navigateTo: '',
			description: '',
			sentParams: null,
		},
		{
			label: 'software',
			navigateTo: 'SoftwareUpdate',
			description: '',
			sentParams: null,
		},
	];

	const renderItem = ({ item, index }) => (
		<ListItem title={item.label} accessory={ArrowIcon} onPress={() => navigation.navigate(item.navigateTo)} />
	);

	return (
		<Layout>
			<List
				data={settingList}
				renderItem={renderItem}
				// ItemSeparatorComponent={() => <ListSeparator />}
			/>
		</Layout>
	);
};

export default SettingScreen;
