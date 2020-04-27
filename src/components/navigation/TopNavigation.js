import React from 'react';
import styled from 'styled-components';
import { TopNavigation, TopNavigationAction, useTheme } from '@ui-kitten/components';

const TopNavigationText = styled.Text`
	color: #fff;
`;

const renderBackAction = accessoryLeft => () => {
	return <TopNavigationAction icon={accessoryLeft} />;
};

const TopNavigationComponent = props => {
	const theme = useTheme();
	const { title, accessoryLeft, accessoryRight } = props;

	return (
		<TopNavigation
			style={{ backgroundColor: theme['color-primary-500'] }}
			alignment="center"
			title={<TopNavigationText>{title}</TopNavigationText>}
			accessoryLeft={renderBackAction(accessoryLeft)}
			accessoryRight={renderBackAction(accessoryRight)}
		/>
	);
};

export default TopNavigationComponent;
