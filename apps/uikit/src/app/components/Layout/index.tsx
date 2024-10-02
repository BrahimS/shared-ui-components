import React from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from '../Menu';
import {
	ContainerWrapper,
	Footer,
	Head,
	Header,
	MainContent,
} from '@react-monorepo/shared-ui';

export const Layout = (): React.ReactNode => {
	return (
		<>
			<Head
				title="Custom UI Kit library"
				description="Custom ui kit library"
				keywords="ui, kit, library"
			/>

			<ContainerWrapper>
				<Header>
					<Menu />
				</Header>
				<MainContent>
					<Outlet />
				</MainContent>
				<Footer> ©{new Date().getFullYear()} - Made with love by BS</Footer>
			</ContainerWrapper>
		</>
	);
};
