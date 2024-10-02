import React from 'react';
import { FlexBoxProps, FlexWrapper } from '../styles';

export const FlexBox = ({
	children,
	direction,
	gap,
	align,
	justify,
	wrap,
	style,
	...props
}: FlexBoxProps) => {
	return (
		<FlexWrapper
			direction={direction}
			gap={gap}
			align={align}
			justify={justify}
			wrap={wrap}
			style={style}
			{...props}
		>
			{children}
		</FlexWrapper>
	);
};
