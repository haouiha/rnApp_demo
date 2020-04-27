import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';

export const disableAndroidBackHandler = () => {
	useFocusEffect(
		useCallback(() => {
			const onBackPress = () => true; //note! true will ignore androidBackHandler

			BackHandler.addEventListener('hardwareBackPress', onBackPress);
			return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
		}, [])
	);
};
