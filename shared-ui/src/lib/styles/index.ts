import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import * as Menubar from '@radix-ui/react-menubar';
import { Box, Button } from '@radix-ui/themes';
import { theme } from './theme';

export const AppWrapper = styled.div`
	display: block;
	margin: 0 auto;
	max-width: 1280px;
	height: 100vh;
	border: solid 1px black;
`;

export const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: center;
	justify-items: center;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: #ffffff;
	color: #000000;
	min-height: 120px;
	width: 100%;
	border: 1px solid #333;
`;

export const MenuWrapper = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: center;
	justify-items: center;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: transparent;
	color: ${theme.colors.primary};
	width: 100%;
`;

export const MenuList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	& li {
		margin: 0 ${theme.spacing.sm};
	}
`;

export const MainWrapper = styled.main`
	display: flex;
	justify-content: center;
	justify-items: center;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: #ffffff;
	color: #000000;
	border: 1px solid #333;
`;

export const MenubarRootWrapper = styled(Menubar.Root)`
	display: flex;
	background-color: white;
	padding: 4px;
	border-radius: 6px;
`;

export const MenubarTriggerWrapper = styled(Menubar.Trigger)`
	all: unset;
	padding: 8px 12px;
	outline: none;
	user-select: none;
	font-weight: 500;
	line-height: 1;
	border-radius: 4px;
	color: ${({ theme }) => theme.colors.primary};
	font-size: 14px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2px;

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
	min-height: 120px;
	width: 100%;
	border: 1px solid #333;
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
