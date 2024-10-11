import React from 'react';
import * as Form from '@radix-ui/react-form';
import { Button, ButtonProps } from '../styles';

export interface SubmitButtonProps extends ButtonProps {
	children: string;
	style?: React.CSSProperties;
}
export const SubmitButton = ({ children, style }: SubmitButtonProps) => {
	return (
		<Form.Submit asChild>
			<Button type="submit" style={style} variant="solid">
				{children}
			</Button>
		</Form.Submit>
	);
};
