import React from 'react';

import {
	Box,
	Button,
	FlexBox,
	TagText,
	theme,
} from '@react-monorepo/shared-ui';

const ButtonStyle = {
	marginRight: '1rem',
};

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
			<FlexBox
				display="flex"
				direction="row"
				justify="space-between"
				gap="4"
				align="center"
				wrap="nowrap"
				style={{
					width: '100%',
				}}
			>
				<Button
					role="button"
					variant="solid"
					color="primary"
					size="small"
					style={ButtonStyle}
				>
					Primary
				</Button>
				<Button
					role="button"
					variant="outlined"
					color="secondary"
					size="small"
					style={ButtonStyle}
				>
					Outlined
				</Button>
				<Button
					role="button"
					variant="solid"
					color="primary"
					size="small"
					disabled
					style={ButtonStyle}
				>
					Disabled
				</Button>
				<Button role="button" variant="ghost" color="danger" size="small">
					Ghost
				</Button>
			</FlexBox>
		</Box>
	);
};
