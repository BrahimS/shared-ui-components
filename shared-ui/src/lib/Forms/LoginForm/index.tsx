import React from 'react';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { ContactForm } from '../ContactForm';
import { Box } from '../../Grid/Box';
import { Text } from '../../Text';
import { theme } from '../../styles/theme';
import { Heading } from '../../Headings';
import { Link } from 'react-router-dom';
import { SocialLoginButton } from '../../Buttons/IconButton';

export const LoginFormC = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			w="100%"
			h="100%"
			p={'0 30'}
			as={'div'}
			asChild={false}
		>
			<Heading as="h4">Sign in to Yellow</Heading>
			<ContactForm
				style={{ width: '100%' }}
				fields={[
					{ name: 'email', label: 'Email', type: 'text', required: true },
					{
						name: 'password',
						label: 'Password',
						type: 'text',
						required: true,
					},
				]}
				onSubmit={(data) => console.log(data)}
			/>
			<Box
				w="100%"
				display="flex"
				flexDirection="column"
				alignItems="center"
				as={'div'}
				asChild={false}
			>
				<Text
					as="p"
					style={{
						margin: `${theme.spacing.lg} 0`,
						padding: `0 ${theme.spacing.sm}`,
						display: 'inline-block',
						textAlign: 'center',
						backgroundColor: theme.colors.white,
						fontWeight: theme.typography.fontWeight.medium,
						fontSize: theme.typography.fontSize.small,
						zIndex: 1,
					}}
				>
					Or login with
				</Text>
				<div
					style={{
						width: '100%',
						backgroundColor: theme.colors.ligthGrey,
						height: '1px',
						position: 'relative',
						top: '-40px',
					}}
				></div>
				<SocialLoginButton icon={<TwitterLogoIcon />}>Google</SocialLoginButton>
				<SocialLoginButton icon={<GitHubLogoIcon />}>GitHub</SocialLoginButton>
				<Text
					as="p"
					style={{
						margin: `${theme.spacing.md} 0`,
						textAlign: 'center',
						color: theme.colors.grey,
						fontWeight: theme.typography.fontWeight.medium,
						fontSize: theme.typography.fontSize.small,
					}}
					role={'textbox'}
				>
					Dont have an account? <Link to="/">Sign up now</Link>
				</Text>
			</Box>
		</Box>
	);
};
