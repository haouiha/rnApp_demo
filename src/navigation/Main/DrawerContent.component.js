import React from 'react';
import { Drawer, DrawerItem, Button } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';

const drawerItems = [{ title: 'Profile' }, { title: 'Notification' }, { title: 'Setting' }];

const Header = () => <Button>SAFETY SMART</Button>;
const Footer = logout => <Button onPress={logout}>Logout</Button>;

const DrawerContent = ({ navigation, state, logout }) => {
	const onSelect = index => navigation.navigate(state.routeNames[index]);

	const handleLogout = () => {
		logout();
		navigation.closeDrawer();
	};

	return (
		<Drawer header={Header} footer={() => Footer(handleLogout)} onSelect={onSelect}>
			{drawerItems.map((item, index) => (
				<DrawerItem key={`Drawer${index}`} {...item} />
			))}
		</Drawer>
	);
};

const mapDispatchToProps = {
	logout,
};

export default connect(
	null,
	mapDispatchToProps
)(DrawerContent);
