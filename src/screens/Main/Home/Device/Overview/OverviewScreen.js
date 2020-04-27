import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import TopNavigation from 'components/navigation/TopNavigation';
import BackIcon from 'components/icons/BackIcon';

const OverviewScreen = props => {
	const { navigation } = props;

	const popScreen = () => navigation.popToTop();
	return (
		<>
			<TopNavigation title="Overview Screen" accessoryLeft={() => <BackIcon onPress={popScreen} name="home" />} />
			<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text category="h1">OverviewScreen</Text>
			</Layout>
		</>
	);
};

export default OverviewScreen;
