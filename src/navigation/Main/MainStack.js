import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Layout, Text } from '@ui-kitten/components';
import DrawerContent from '././DrawerContent.component';
import BottomTabBar from './BottomTabBar.component';

import HomeScreen from '../../screens/Main/Home/HomeScreen';
import OverviewScreen from '../../screens/Main/Home/Device/Overview/OverviewScreen';
import {
	SettingScreen,
	AlertParametersScreen,
	AlertSettingScreen,
	ChatScreen,
	DeviceDisplaySettingScreen,
	DeviceInfoSettingScreen,
	GrantUsageRightsScreen,
	ProtectParametersScreen,
	ProtectSettingScreen,
	RCBOSettingScreen,
	SoftwareUpdateScreen,
	WifiSettingScreen,
} from '../../screens/Main/Home/Device/Setting';

const Main = createDrawerNavigator();
const MainStack = () => (
	<Main.Navigator drawerType={'slide'} drawerContent={props => <DrawerContent {...props} />}>
		<Main.Screen name="Home" component={HomeStack} />
		<Main.Screen name="Profile" component={ProfileScreen} />
		<Main.Screen name="Notification" component={NotificationScreen} />
		<Main.Screen name="AppSetting" component={AppSettingScreen} />
		<Main.Screen name="Camera" component={CameraScreen} options={{ swipeEnabled: false }} />
	</Main.Navigator>
);
export default MainStack;

const Home = createStackNavigator();
const HomeStack = () => {
	return (
		<Home.Navigator headerMode="none">
			<Home.Screen name="Home" component={HomeScreen} />
			<Home.Screen name="Device" component={DeviceStack} />
		</Home.Navigator>
	);
};

const Device = createBottomTabNavigator();
const DeviceStack = () => (
	<Device.Navigator tabBar={props => <BottomTabBar {...props} />}>
		<Device.Screen name="Overview" component={OverviewStack} />
		<Device.Screen name="Timer" component={TimerScreen} />
		<Device.Screen name="History" component={TimerScreen} />
		<Device.Screen name="Report" component={TimerScreen} />
		<Device.Screen name="Setting" component={SettingStack} />
	</Device.Navigator>
);

const Overview = createStackNavigator();
const OverviewStack = () => {
	return (
		<Overview.Navigator headerMode="none">
			<Overview.Screen name="Overview" component={OverviewScreen} />
			<Overview.Screen name="MCBLink" component={MCBLinkStack} />
		</Overview.Navigator>
	);
};

const Setting = createStackNavigator();
const SettingStack = () => {
	return (
		<Setting.Navigator headerMode="none">
			<Setting.Screen name="Setting" component={SettingScreen} />
			<Setting.Screen name="AlertParameters" component={AlertParametersScreen} />
			<Setting.Screen name="AlertSetting" component={AlertSettingScreen} />
			<Setting.Screen name="Chat" component={ChatScreen} />
			<Setting.Screen name="DeviceDisplaySetting" component={DeviceDisplaySettingScreen} />
			<Setting.Screen name="DeviceInfoSetting" component={DeviceInfoSettingScreen} />
			<Setting.Screen name="GrantUsageRights" component={GrantUsageRightsScreen} />
			<Setting.Screen name="ProtectParameters" component={ProtectParametersScreen} />
			<Setting.Screen name="ProtectSetting" component={ProtectSettingScreen} />
			<Setting.Screen name="RCBOSetting" component={RCBOSettingScreen} />
			<Setting.Screen name="SoftwareUpdate" component={SoftwareUpdateScreen} />
			<Setting.Screen name="WifiSetting" component={WifiSettingScreen} />
		</Setting.Navigator>
	);
};

const MCBLink = createStackNavigator();
const MCBLinkStack = () => {
	return (
		<MCBLink.Navigator headerMode="none">
			<MCBLink.Screen name="MCBLink Home" component={MCBLinkScreen} />
			<MCBLink.Screen name="MCBLink Setting" component={MCBLinkSettingScreen} />
		</MCBLink.Navigator>
	);
};

const ProfileScreen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text category="h1">ProfileScreen</Text>
	</Layout>
);

const NotificationScreen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text category="h1">NotificationScreen</Text>
	</Layout>
);

const AppSettingScreen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text category="h1">AppSettingScreen</Text>
	</Layout>
);

const CameraScreen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text category="h1">CameraScreen</Text>
	</Layout>
);

const TimerScreen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text category="h1">TimerScreen</Text>
	</Layout>
);
