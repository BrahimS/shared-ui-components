import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '@react-monorepo/shared-ui';

export const Menu = (): React.ReactNode => {
	return (
		<NavBar>
			<li>
				<Link to="/"> Style guide</Link>
			</li>
			<li>
				<Link to="/product-card"> Login Form</Link>
			</li>
			<li>
				<Link to="/login-form"> Produt Card</Link>
			</li>
		</NavBar>
	);
};
