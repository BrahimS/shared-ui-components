import React from 'react';
import { ContainerWrapper, ContainerWrapperProps } from '../styles';

export const Container = ({
	size,
	padding,
	children,
	style,
	...props
}: ContainerWrapperProps) => {
	return (
		<ContainerWrapper size={size} padding={padding} style={style} {...props}>
			{children}
		</ContainerWrapper>
	);
};
