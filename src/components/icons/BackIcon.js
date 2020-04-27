import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@ui-kitten/components';

const iconName = {
	home: 'home-outline',
	back: 'arrow-ios-back-outline',
};

const BackIcon = props => {
	const { name, onPress } = props;

	return (
		<TouchableOpacity onPress={onPress}>
			<Icon style={{ width: 24, height: 24, tintColor: '#fff' }} name={iconName[name || 'back']} pack="eva" />
		</TouchableOpacity>
	);
};

export default BackIcon;
