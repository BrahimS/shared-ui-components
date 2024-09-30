import styled from 'styled-components';
import { theme } from './theme';
import { Button } from '@radix-ui/themes';

export const AppWrapper = styled.div`
	display: block;
	margin: 0 auto;
	max-width: 1280px;
	height: 100vh;
	border: solid 1px black;
`;

export const HeaderWrapper = styled.header`
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

export const MainWrapper = styled.main`
	display: flex;
	justify-content: center;
	justify-items: center;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: #ffffff;
	color: #000000;
	height: 100%;
	width: 100%;
	border: 1px solid #333;
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
