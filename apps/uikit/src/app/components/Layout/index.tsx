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
	theme,
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

			<Header
				logo={<Logo />}
				children={<Menu />}
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					width: '100%',
					zIndex: 9999,
					backgroundColor: theme.colors.white,
				}}
			/>

			<ContainerWrapper style={{ margin: '64px 0' }}>
				<MainContent>
					<Outlet />
				</MainContent>
			</ContainerWrapper>
			<Footer> ©{new Date().getFullYear()} - Made with love by BS</Footer>
		</>
	);
};
