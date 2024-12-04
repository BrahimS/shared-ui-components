import React from 'react';
import {
	Box,
	Button,
	FlexBox,
	TagText,
	theme,
} from '@react-monorepo/shared-ui';

export const Buttons = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="space-between"
			alignItems="start"
			flexWrap="wrap"
			w="100%"
			p={theme.spacing.sm}
			shadow={theme.shadows.medium}
			borderRadius={theme.spacing.sm}
			as={'div'}
			asChild={false}
		>
			<Box as="div" asChild w="100%" p="8px 0" justifyContent="start">
				<TagText>Buttons</TagText>
			</Box>
		</Box>
	);
};
