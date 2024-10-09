import React from 'react';
import * as Form from '@radix-ui/react-form';
import { Button } from '../../styles';

export const SubmitButton = ({ children }: { children: string }) => {
	return (
		<Form.Submit asChild>
			<Button type="submit">{children}</Button>
		</Form.Submit>
	);
};
