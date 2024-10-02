import React from 'react';
import { Outlet } from 'react-router-dom';

import {
	BigSquare,
	ContainerWrapper,
	Footer,
	Head,
	Header,
	LogoWrapper,
	MainContent,
	Menu,
	SmallSquare,
} from '@react-monorepo/shared-ui';

const Logo = (): React.ReactNode => (
	<LogoWrapper>
		<BigSquare />
		<SmallSquare />
	</LogoWrapper>
);
export const Layout = (): React.ReactNode => {
	return (
		<>
			<Head
				title="Custom UI Kit library"
				description="Custom ui kit library"
				keywords="ui, kit, library"
			/>

			<Header logo={<Logo />} children={<Menu />}></Header>
			<ContainerWrapper size="full">
				<MainContent>
					<Outlet />
				</MainContent>
				<Footer> ©{new Date().getFullYear()} - Made with love by BS</Footer>
			</ContainerWrapper>
		</>
	);
};
