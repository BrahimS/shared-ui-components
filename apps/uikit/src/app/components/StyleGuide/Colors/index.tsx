import { Box, colorScheme, TagText, theme } from '@react-monorepo/shared-ui';
import React from 'react';

export const Colors = () => {
	return (
		<Box
			display="flex"
			flexDirection="row"
			justifyContent="start"
			alignItems="start"
			flexWrap="wrap"
			w="100%"
			p={theme.spacing.md}
			shadow={theme.shadows.medium}
			borderRadius={theme.spacing.sm}
			as={'div'}
			asChild={false}
		>
			<Box as="div" asChild w="100%">
				<TagText>Colors</TagText>
			</Box>
			{Object.entries(colorScheme).map(([key, value]) => (
				<Box
					key={key}
					w="106px"
					h="106px"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					shadow={theme.shadows.medium}
					flexWrap="wrap"
					borderRadius={theme.spacing.xs}
					m={theme.spacing.xs}
					bg={value}
					style={{
						color:
							value === theme.colors.white || value === theme.colors.cream
								? theme.colors.black
								: theme.colors.white,
					}}
					as="div"
					asChild
				>
					{key}
				</Box>
			))}
		</Box>
	);
};
