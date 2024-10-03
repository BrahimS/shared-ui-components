import React from 'react';
import { FooterWrapper } from '../styles';
import { Container } from '../Grid/ContainerWrapper';

export interface FooterProps {
	children: React.ReactNode;
}

export const Footer = ({ children }: FooterProps): React.ReactNode => {
	return (
		<FooterWrapper style={{ padding: '8px 0' }} data-testid="footer-wrapper">
			<Container
				data-testid="container"
				size="xl"
				padding="md"
				style={{ textAlign: 'right' }}
			>
				{children}
			</Container>
		</FooterWrapper>
	);
};
