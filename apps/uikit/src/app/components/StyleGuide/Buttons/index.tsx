import {
	Box,
	Button,
	FlexBox,
	TagText,
	theme,
} from '@react-monorepo/shared-ui';
import React from 'react';

export const Buttons = () => {
	return (
		<Box
			display="flex"
			flexDirection="row"
			justifyContent="space-between"
			alignItems="start"
			flexWrap="wrap"
			w="38%"
			p={theme.spacing.sm}
			shadow={theme.shadows.medium}
			borderRadius={theme.spacing.sm}
			as={'div'}
			asChild={false}
		>
			<Box as="div" asChild w="100%" p="8px 0" justifyContent="start">
				<TagText>Buttons</TagText>
			</Box>
			<FlexBox
				display="flex"
				direction="row"
				justify="space-between"
				gap="4"
				align="center"
			>
				<Button variant="solid" color="primary" size="medium">
					Primary
				</Button>
				<Button variant="outlined" color="secondary" size="medium">
					Outlined
				</Button>
				<Button variant="ghost" color="danger" size="medium">
					Ghost
				</Button>
				<Button variant="solid" color="primary" size="medium" disabled>
					Disabled
				</Button>
			</FlexBox>
		</Box>
	);
};
