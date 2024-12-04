import React from 'react';
import * as Form from '@radix-ui/react-form';
import { StyledButton } from '../../styles';

export const SubmitButton = ({ children }: { children: string }) => {
	return (
		<Form.Submit asChild>
			<StyledButton type="submit">{children}</StyledButton>
		</Form.Submit>
	);
};
