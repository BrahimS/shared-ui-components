import React from 'react';
import { HeaderWrapper } from '../styles';
interface HeaderProps {
	children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps): React.ReactNode => {
	return <HeaderWrapper>{children}</HeaderWrapper>;
};
