import React from 'react';
import styled from 'styled-components';
import { icons } from './paths';
export type IconType = keyof typeof icons;

export interface IconProps {
	icon: IconType;
}

const Svg = styled.svg`
	display: inline-block;
	shape-rendering: inherit;
	transform: translate3d(0, 0, 0);
	vertical-align: middle;

	path {
		fill: currentColor;
	}
`;

export const Icon: React.FC<IconProps> = ({ icon, ...props }: IconProps) => {
	return (
		<Svg viewBox="0 0 16 16" width="16px" height="16px" {...props}>
			{icons[icon]}
		</Svg>
	);
};
