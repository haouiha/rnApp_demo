import React from 'react';
import { Layout, Text, Button, Icon } from '@ui-kitten/components';
import { disableAndroidBackHandler } from 'utils/disableAndroidBackHandler';
import TopNavigation from 'components/navigation/TopNavigation';
import { TouchableOpacity } from 'react-native';

const MenuIcon = props => {
	const { onPress } = props;

	return (
		<TouchableOpacity onPress={onPress}>
			<Icon style={{ width: 24, height: 24, tintColor: '#fff' }} name={'menu'} />
		</TouchableOpacity>
	);
};

const HomeScreen = props => {
	const { navigation } = props;
	disableAndroidBackHandler();

	const navigateToDeviceStack = () => navigation.navigate('Device');
	const navigateToCamera = () => navigation.navigate('Camera');

	const openDrawer = () => navigation.openDrawer();

	return (
		<>
			<TopNavigation title="HOME Screen" accessoryLeft={() => <MenuIcon onPress={openDrawer} />} />
			<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Button onPress={navigateToDeviceStack}>Device</Button>

				<Button onPress={navigateToCamera}>Camera</Button>
				{/* <Icon style={{ width: 32, height: 32 }} fill="#8F9BB3" name="home" pack="material" /> */}
			</Layout>
		</>
	);
};

export default HomeScreen;
