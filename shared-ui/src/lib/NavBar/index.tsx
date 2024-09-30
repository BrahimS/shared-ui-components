import React from 'react';
import { MenuList, MenuWrapper } from '../styles';
interface NavBarProps {
	children: React.ReactNode;
}

export const NavBar = ({ children }: NavBarProps) => {
	return (
		<MenuWrapper>
			<MenuList>{children}</MenuList>
		</MenuWrapper>
	);
};
