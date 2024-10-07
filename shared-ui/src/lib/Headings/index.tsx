import React from 'react';

interface HeadingProps {
	children: React.ReactNode;
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	color?: string;
	style?: React.CSSProperties;
	role?: string;
}

export const Heading = ({
	as,
	color,
	style,
	children,
	role,
	...props
}: HeadingProps) => {
	return React.createElement(as, { role: 'heading', ...props }, children);
};
