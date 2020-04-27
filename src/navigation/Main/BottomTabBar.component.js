import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Keyboard } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

const BottomTabOptions = [
	{ label: 'device', icon: 'smartphone-outline' },
	{ label: 'timer', icon: 'clock-outline' },
	{ label: 'history', icon: 'bar-chart-outline' },
	{ label: 'report', icon: 'bell-outline' },
	{ label: 'setting', icon: 'settings-2-outline' },
];

const BottomNavContainer = styled.SafeAreaView`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	background-color: white;
	shadow-color: #000;
	shadowoffset: {
		width: 0px, height 5px;
	}
	shadow-opacity: 0.3;
	shadow-radius: 6.27px;
	elevation: 10;
	padding-horizontal: 25px;
`;

const BottomTabBar = ({ navigation, state }) => {
	const [isVisible, setIsVisible] = useState(true);
	const onSelect = index => navigation.navigate(state.routeNames[index]);

	useEffect(() => {
		const keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', () => setIsVisible(false));
		const keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', () => setIsVisible(true));
		return () => {
			keyboardWillShowSub.remove();
			keyboardWillHideSub.remove();
		};
	}, [Keyboard]);

	if (!isVisible) return null;
	return (
		<BottomNavContainer>
			<BottomNavigation indicatorStyle={{ borderRadius: 5 }} selectedIndex={state.index} onSelect={onSelect}>
				{BottomTabOptions.map(tab => (
					<BottomNavigationTab
						style={{ marginTop: 6 }}
						key={tab.label}
						title={tab.label}
						icon={style => <Icon {...style} name={tab.icon} />}
					/>
				))}
			</BottomNavigation>
		</BottomNavContainer>
	);
};

export default BottomTabBar;
