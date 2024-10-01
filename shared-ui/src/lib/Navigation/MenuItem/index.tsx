import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import { MenubarTriggerWrapper, MenuLinkWrapper } from '../../styles';

interface MenuProps {
	to: string;
	children: React.ReactNode;
}
export const MenuItem = ({ to, children }: MenuProps) => (
	<Menubar.Menu>
		<MenubarTriggerWrapper>
			<MenuLinkWrapper to={to}>{children}</MenuLinkWrapper>
		</MenubarTriggerWrapper>
	</Menubar.Menu>
);
