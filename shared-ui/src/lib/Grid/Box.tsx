import React from 'react';
import { Responsive } from '@radix-ui/themes/dist/cjs/props/prop-def';
interface BoxProps {
	as: 'div' | 'span';
	asChild: boolean;
	shadow?: string;
	borderRadius?: string;
	display?: Responsive<'none' | 'inline' | 'inline-block' | 'block' | 'flex'>;
	flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	justifyContent?: 'space-between' | 'center' | 'start' | 'end' | 'between';
	alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
	flexWrap?: 'wrap' | 'nowrap';
	w?: string;
	h?: string;
	p?: string;
	m?: string;
	bg?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export const Box = ({
	asChild,
	as,
	display,
	w,
	h,
	p,
	m,
	style,
	bg,
	shadow,
	borderRadius,
	children,
	flexDirection,
	justifyContent,
	alignItems,
	flexWrap,
	...props
}: BoxProps): React.ReactNode => {
	return React.createElement(
		asChild ? 'div' : as,
		{
			...props,
			style: {
				display: display,
				flexDirection: flexDirection,
				justifyContent: justifyContent,
				alignItems: alignItems,
				flexWrap: flexWrap,
				width: w,
				height: h,
				padding: p,
				margin: m,
				borderRadius: borderRadius,
				background: bg,
				boxShadow: shadow,
				...style,
			},
		},
		children,
	);
};
