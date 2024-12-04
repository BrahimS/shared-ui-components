import React from 'react';
import { StyledButton } from '../styles';

interface ButtonProps {
	children: React.ReactNode;
}

export const Button = (children: React.ReactNode) => {
	return <StyledButton>{children}</StyledButton>;
};
