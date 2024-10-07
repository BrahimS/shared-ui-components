import React from 'react';
import { FlexBoxProps } from '../styles';

export const FlexBox = ({
	display,
	children,
	direction,
	gap,
	align,
	justify,
	wrap,
	style,
	...props
}: FlexBoxProps) => {
	return React.createElement(
		'div',
		{
			direction,
			gap,
			align,
			justify,
			wrap,
			...props,
			style: {
				display: display,
				flexDirection: direction,
				justifyContent: justify,
				alignItems: align,
				flexWrap: wrap,

				...style,
			},
		},
		children,
	);
};
