import { Button } from '../../styles';
import { theme } from '../../styles/theme';

interface SocialLoginButtonProps {
	icon: React.JSX.Element;
	children: React.ReactNode;
}

export const SocialLoginButton = ({
	icon,
	children,
	...props
}: SocialLoginButtonProps) => (
	<Button
		variant="outlined"
		style={{
			color: theme.colors.text.primary,
			borderColor: theme.colors.ligthGrey,
			borderWidth: '2px',
			marginBottom: theme.spacing.sm,
			background: 'none',
		}}
		{...props}
	>
		<div style={{ marginRight: theme.spacing.xs }}>{icon}</div>
		{children}
	</Button>
);
