import React from 'react';
import { Intro } from '../components/StyleGuide/Intro';
import { Box, Container, LoginFormC, theme } from '@react-monorepo/shared-ui';

const LoginForm = (): React.ReactNode => (
	<Container size="xl">
		<Intro
			title={'Login Form'}
			description={
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor nisi dolores repellat aliquam reiciendis,'
			}
		/>

		<Box
			display="flex"
			flexDirection="row"
			justifyContent="start"
			alignItems="center"
			flexWrap="nowrap"
			w="100%"
			h="100%"
			p={theme.spacing.sm}
			m={`${theme.spacing.lg} 0`}
			shadow={theme.shadows.medium}
			borderRadius={theme.spacing.sm}
			as={'div'}
			asChild
		>
			<LoginFormC />
		</Box>
	</Container>
);

export default LoginForm;
