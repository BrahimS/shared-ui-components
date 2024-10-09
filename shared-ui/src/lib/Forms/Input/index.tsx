import React from 'react';
import * as Form from '@radix-ui/react-form';

import {
	StyledErrorMessage,
	StyledFieldHeader,
	StyledFormField,
	StyledInput,
	StyledLabel,
	StyledTextarea,
} from '../../styles';

interface FormFieldProps {
	name: string;
	label: string;
	type: 'text' | 'email' | 'textarea';
	required?: boolean;
}

export const FormField = ({ name, label, type, required }: FormFieldProps) => {
	return (
		<StyledFormField key={name} name={name}>
			<StyledFieldHeader>
				<StyledLabel>{label}</StyledLabel>
				{required && (
					<StyledErrorMessage match="valueMissing">
						Please enter {label.toLowerCase()}
					</StyledErrorMessage>
				)}
				{type === 'email' && (
					<StyledErrorMessage match="typeMismatch">
						Please provide a valid email
					</StyledErrorMessage>
				)}
			</StyledFieldHeader>
			<Form.Control asChild>
				{type === 'textarea' ? (
					<StyledTextarea required={required} />
				) : (
					<StyledInput
						type={type}
						required={required}
						placeholder="Placeholder"
					/>
				)}
			</Form.Control>
		</StyledFormField>
	);
};
