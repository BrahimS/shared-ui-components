import React from 'react';
import { HeadingProps, StyledHeading } from '../styles';

export const Heading: React.FC<HeadingProps> = ({
	as = 'h1',
	children,
	style,
	color,
	role = 'heading',
	...props
}) => {
	return (
		<StyledHeading as={as} style={style} {...props} color={color} role={role}>
			{children}
		</StyledHeading>
	);
};
