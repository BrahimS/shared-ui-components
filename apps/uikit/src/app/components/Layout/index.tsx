import React from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from '../Menu';
import {
	AppWrapper,
	Footer,
	Header,
	MainContent,
} from '@react-monorepo/shared-ui';

export const Layout = (): React.ReactNode => {
	return (
		<AppWrapper>
			<Header>
				<Menu />
			</Header>
			<MainContent>
				<Outlet />
			</MainContent>
			<Footer> ©{new Date().getFullYear()} - Made with love by BS</Footer>
		</AppWrapper>
	);
};
