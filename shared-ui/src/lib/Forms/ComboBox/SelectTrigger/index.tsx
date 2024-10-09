import React from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import {
	StyledSelectTrigger,
	StyledSelectValue,
	StyledSelectIcon,
} from '../../../styles';

type SelectTriggerProps = {
	icon?: React.ReactNode;
	placeholder: string;
	ariaLabel?: string;
};

export const SelectTrigger = ({
	icon,
	placeholder,
	ariaLabel,
	...props
}: SelectTriggerProps) => {
	return (
		<StyledSelectTrigger aria-label={ariaLabel} {...props}>
			<StyledSelectValue placeholder={placeholder} />
			<StyledSelectIcon>{icon || <ChevronDownIcon />}</StyledSelectIcon>
		</StyledSelectTrigger>
	);
};
