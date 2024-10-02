import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import * as Menubar from '@radix-ui/react-menubar';
import { Box, Button, Container } from '@radix-ui/themes';
import { theme } from './theme';

export const ContainerWrapper = styled(Container)`
	background-color: ${theme.colors.white};
	color: ${theme.colors.primary};
`;

export const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: center;
	justify-items: center;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: ${theme.colors.white};
	color: ${theme.colors.primary};
	min-height: 80px;
	width: 100%;
	box-shadow: ${theme.shadows.medium};
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

export const Card = styled.div`
	background: ${({ theme }) => theme.card.background};
	border-radius: ${({ theme }) => theme.card.borderRadius};
	box-shadow: ${({ theme }) => theme.card.boxShadow};
	padding: ${({ theme }) => theme.card.padding};
	&:hover {
		box-shadow: ${({ theme }) => theme.card.hover.boxShadow};
	}
`;
