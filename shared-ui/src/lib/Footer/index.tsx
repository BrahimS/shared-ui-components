import React from 'react';
import { FooterWrapper } from '../styles';

interface FooterProps {
	children: React.ReactNode;
}

export const Footer = ({ children }: FooterProps): React.ReactNode => {
	return <FooterWrapper>{children}</FooterWrapper>;
};
