import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import {
	MenubarRootWrapper,
	MenubarTriggerWrapper,
	MenuLinkWrapper,
} from '@react-monorepo/shared-ui';

interface MenuProps {
	to: string;
	children: React.ReactNode;
}

const MenuItem = ({ to, children }: MenuProps) => (
	<Menubar.Menu>
		<MenubarTriggerWrapper>
			<MenuLinkWrapper to={to}>{children}</MenuLinkWrapper>
		</MenubarTriggerWrapper>
	</Menubar.Menu>
);

export const Menu = (): React.ReactNode => {
	return (
		<MenubarRootWrapper>
			<MenuItem to="/">Style Guide</MenuItem>
			<MenuItem to="/login-form">Login Form</MenuItem>
			<MenuItem to="/product-card">Product Card</MenuItem>
		</MenubarRootWrapper>
	);
};
