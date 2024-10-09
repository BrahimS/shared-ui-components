import React from 'react';
import { Box, ContactForm, TagText, theme } from '@react-monorepo/shared-ui';
import { ComboBoxDemo } from './Select';

export const Forms = () => {
	return (
		<Box
			display="flex"
			flexDirection="row"
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
				<TagText>Forms</TagText>
			</Box>
			<ContactForm
				fields={[
					{
						name: 'label',
						label: 'Label',
						type: 'text',
						required: true,
					},
				]}
			/>
			<ComboBoxDemo />
		</Box>
	);
};
