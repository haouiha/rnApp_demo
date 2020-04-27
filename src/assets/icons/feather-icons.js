import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const createIconsMap = () => {
	return new Proxy(
		{},
		{
			get(target, name) {
				return IconProvider(name);
			},
		}
	);
};

export const FeatherIconsPack = {
	name: 'feather',
	icons: createIconsMap(),
};

const IconProvider = name => ({
	toReactElement: props => FeatherIcon({ name, ...props }),
});

const FeatherIcon = ({ name, style }) => {
	const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
	return <Icon name={name} size={height} color={tintColor} style={iconStyle} />;
};
