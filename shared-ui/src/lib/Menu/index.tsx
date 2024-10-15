import React from 'react';
import { MenubarRootWrapper } from '../styles';
import { MenuItem } from '../Navigation/MenuItem';

export const Menu = (): React.ReactNode => {
	return (
		<MenubarRootWrapper>
			<MenuItem to="/">Style Guide</MenuItem>
			<MenuItem to="/login-form">Login Form</MenuItem>
			{/* <MenuItem to="/product-card">Product Card</MenuItem> */}
		</MenubarRootWrapper>
	);
};
