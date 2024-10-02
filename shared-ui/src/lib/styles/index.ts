import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import * as Menubar from '@radix-ui/react-menubar';
import { Box, Button } from '@radix-ui/themes';
import { theme } from './theme';

export interface ContainerWrapperProps {
	children: React.ReactNode;
	size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
	padding?: keyof typeof theme.spacing;
	style?: React.CSSProperties;
}

export const ContainerWrapper = styled.div<ContainerWrapperProps>`
	margin: 0 auto;
	width: 100%;
	padding-left: ${({ theme, padding }) => theme.spacing[padding || 'md']};
	padding-right: ${({ theme, padding }) => theme.spacing[padding || 'md']};
	${({ theme, size }) => {
		switch (size) {
			case 'sm':
				return `max-width: ${theme.sizes.containerSM};`;
			case 'md':
				return `max-width: ${theme.sizes.containerMD};`;
			case 'lg':
				return `max-width: ${theme.sizes.containerLG};`;
			case 'xl':
				return `max-width: ${theme.sizes.containerXL};`;
			case 'full':
				return `max-width: ${theme.sizes.containerFULL};`;
			default:
				return ``;
		}
	}}
`;

export const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	justify-items: center;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: ${theme.colors.white};
	min-height: 80px;
	width: 100vw;
	box-shadow: ${theme.shadows.medium};
	color: ${theme.colors.primary};
	z-index: 1;
`;

export const MainWrapper = styled.main`
	display: flex;
	justify-content: center;
	justify-items: center;
	align-items: center;
	padding: 0.5rem 1rem;
	height: calc(100vh - 120px);
	color: ${theme.colors.primary};
	background-color: transparent;
`;

export const MenubarRootWrapper = styled(Menubar.Root)`
	display: flex;
	background-color: white;
	padding: 4px;
	border-radius: 6px;
`;

export const MenubarTriggerWrapper = styled(Menubar.Trigger)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	all: unset;
	padding: 8px 12px;
	outline: none;
	user-select: none;
	font-weight: 500;
	line-height: 1;
	border-radius: 4px;
	color: ${theme.colors.primary};
	font-size: 14px;
	gap: 3px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.yellow};
	}
`;

export const MenuLinkWrapper = styled(Link)`
	color: inherit;
	text-decoration: none;
`;
export const LogoWrapper = styled.div`
	display: flex;
`;

export const BigSquare = styled.div`
	height: ${theme.logo.size.large};
	width: ${theme.logo.size.large};
	border: ${theme.logo.border.type} ${theme.logo.border.width};
	border-color: ${theme.logo.border.color};
	border-radius: ${theme.logo.border.radius};
	transform: ${theme.logo.rotation.large};
`;

export const SmallSquare = styled.div`
	height: 30px;
	width: 30px;
	border: ${theme.logo.border.type} ${theme.logo.border.width};
	border-color: ${theme.logo.border.color};
	border-radius: ${theme.logo.border.radius};
	transform: ${theme.logo.rotation.small} ${theme.logo.translate};
`;
export const BoxElement = styled(Box)<{ $isBig?: boolean }>`
	background-color: ${theme.colors.white};
	color: ${theme.colors.black};
	border-radius: ${theme.spacing.xs};
	padding: ${theme.spacing.md};
	min-height: 100px;
	min-width: 100px;
	box-sizing: 'border-box';
	${(props) =>
		props.$isBig &&
		css`
			min-height: 500px;
			min-width: 400px;
			background: transparent;
			padding: ${theme.spacing.md};
			color: ${theme.colors.primary};
			box-shadow: ${theme.shadows.medium};
		`}
`;

export const FooterWrapper = styled.footer`
	display: flex;
	justify-content: center;
	justify-items: center;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: #ffffff;
	color: #000000;
	max-height: 60px;
	width: 100%;
`;

export const DefaultButton = styled(Button)`
	background-color: ${theme.colors.primary};
	color: ${theme.colors.white};
	border-color: ${(props) => props.theme.colors.primary};
	&:hover {
		background-color: ${(props) => props.theme.colors.accent};
		border-color: ${(props) => props.theme.colors.accent};
		color: ${(props) => props.theme.colors.primary};
	}
`;
