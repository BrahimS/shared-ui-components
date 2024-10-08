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
			<FlexBox
				display="flex"
				direction="row"
				justify="space-between"
				gap="4"
				align="center"
				style={{ marginBottom: theme.spacing.sm }}
			>
				<Button role="button" variant="solid" color="primary" size="small">
					Primary
				</Button>
				<Button role="button" variant="outlined" color="secondary" size="small">
					Outlined
				</Button>
				<Button
					role="button"
					variant="solid"
					color="primary"
					size="small"
					disabled
				>
					Disabled
				</Button>
				<Button role="button" variant="ghost" color="danger" size="small">
					Ghost
				</Button>
			</FlexBox>
			<FlexBox
				display="flex"
				direction="row"
				justify="space-between"
				gap="4"
				align="center"
				style={{ marginBottom: theme.spacing.sm }}
			>
				<Button role="button" variant="solid" color="secondary" size="medium">
					Primary
				</Button>
				<Button variant="outlined" color="secondary" size="medium">
					Outlined
				</Button>
				<Button
					role="button"
					variant="solid"
					color="primary"
					size="medium"
					disabled
				>
					Disabled
				</Button>
				<Button role="button" variant="ghost" color="danger" size="medium">
					Ghost
				</Button>
			</FlexBox>
			<FlexBox
				display="flex"
				direction="row"
				justify="space-between"
				gap="4"
				align="center"
			>
				<Button role="button" variant="solid" color="secondary" size="large">
					Primary
				</Button>
				<Button role="button" variant="outlined" color="secondary" size="large">
					Outlined
				</Button>
				<Button
					role="button"
					variant="solid"
					color="primary"
					size="large"
					disabled
				>
					Disabled
				</Button>
				<Button role="button" variant="ghost" color="danger" size="large">
					Ghost
				</Button>
			</FlexBox>
		</Box>
	);
};
