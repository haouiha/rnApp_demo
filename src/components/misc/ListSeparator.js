import React from 'react';
import { StyleSheet, View } from 'react-native';

const ListSeparator = () => {
	return <View style={styles.ListSeparator} />;
};

export default ListSeparator;

const styles = StyleSheet.create({
	ListSeparator: {
		marginHorizontal: 15,
		borderBottomColor: 'gray',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});
