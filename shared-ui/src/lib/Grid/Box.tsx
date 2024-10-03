import React from 'react';
import { BoxWrapper } from '../styles';
interface BoxProps {
	w?: string;
	h?: string;
	p?: string;
	m?: string;
	style?: React.CSSProperties;
	bg?: string;
	children?: React.ReactNode;
}

export const Box = ({
	w,
	h,
	p,
	m,
	style,
	bg,
	children,
	...props
}: BoxProps): React.ReactNode => {
	return (
		<BoxWrapper
			width={w}
			height={h}
			style={{ margin: m, padding: p, backgroundColor: bg, ...style }}
			{...props}
		>
			{children}
		</BoxWrapper>
	);
};
