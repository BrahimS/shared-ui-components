import React from 'react';
import { MenubarRootWrapper, MenuItem } from '@react-monorepo/shared-ui';

export const Menu = (): React.ReactNode => {
	return (
		<MenubarRootWrapper>
			<MenuItem to="/">Style Guide</MenuItem>
			<MenuItem to="/login-form">Login Form</MenuItem>
			<MenuItem to="/product-card">Product Card</MenuItem>
		</MenubarRootWrapper>
	);
};
