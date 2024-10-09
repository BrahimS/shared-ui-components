import React from 'react';
import {
	StyledSelectItem,
	StyledSelectItemIndicator,
	StyledSelectItemText,
} from '../../../styles';
import { CheckIcon } from '@radix-ui/react-icons';
interface SelectProps {
	children: React.ReactNode;
	className?: string;
	forwardedRef?: React.Ref<HTMLInputElement>;
	value: string;
	disabled?: boolean;
	textValue?: string;
}

export const SelectItem = React.forwardRef(
	({ children, forwardedRef, className, ...props }: SelectProps) => {
		return (
			<StyledSelectItem {...props} ref={forwardedRef}>
				<StyledSelectItemText>{children}</StyledSelectItemText>
				<StyledSelectItemIndicator className="SelectItemIndicator">
					<CheckIcon />
				</StyledSelectItemIndicator>
			</StyledSelectItem>
		);
	},
);
