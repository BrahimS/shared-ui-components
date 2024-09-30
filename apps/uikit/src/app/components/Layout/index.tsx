import React from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from '../Menu';
import {
	AppWrapper,
	Footer,
	Header,
	MainContent,
} from '@react-monorepo/shared-ui';

export const Layout = () => {
	return (
		<AppWrapper>
			<Header>
				<Menu />
			</Header>
			<MainContent>
				<Outlet />
			</MainContent>
			<Footer>This is the footer</Footer>
		</AppWrapper>
	);
};
