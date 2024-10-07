import React from 'react';

interface TextProps {
	children: React.ReactNode;
	as: 'span' | 'div' | 'label' | 'p';
	color?: string;
	style?: React.CSSProperties;
	role: string;
	truncate?: boolean;
	align?: 'left' | 'center' | 'right';
	weight?: string;
	size?: string;
	lineheight?: string;
}

export const Text = ({
	children,
	as,
	color,
	style,
	role,
	truncate,
	align,
	weight,
	size,
	lineheight,
}: TextProps) => {
	return React.createElement(
		as,
		{
			role: 'textbox',
			style,
			color,
			truncate,
			align,
			weight,
			size,
			lineheight,
		},
		children,
	);
};
