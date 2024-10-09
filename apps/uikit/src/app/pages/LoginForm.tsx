import React from 'react';
import { Intro } from '../components/StyleGuide/Intro';
import { Box, LoginFormC, theme } from '@react-monorepo/shared-ui';

const LoginForm = (): React.ReactNode => (
	<section>
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
			alignItems="start"
			flexWrap="wrap"
			w="100%"
			p={theme.spacing.md}
			shadow={theme.shadows.medium}
			borderRadius={theme.spacing.sm}
			as={'div'}
			asChild={false}
		>
			<LoginFormC />
		</Box>
	</section>
);

export default LoginForm;
