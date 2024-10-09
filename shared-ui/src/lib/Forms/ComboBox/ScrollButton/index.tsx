import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { StyledSelectScrollButton } from '../../../styles';

interface SelectScrollButtonProps {
	direction: 'up' | 'down';
}

export const ScrollButton = ({
	direction,
	...props
}: SelectScrollButtonProps) => {
	return (
		<StyledSelectScrollButton {...props}>
			{direction === 'up' ? <ChevronUpIcon /> : <ChevronDownIcon />}
		</StyledSelectScrollButton>
	);
};
