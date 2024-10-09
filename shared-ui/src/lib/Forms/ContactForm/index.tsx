import React from 'react';
import { StyledForm } from '../../styles';
import { FormField } from '../Input';
import { SubmitButton } from '../../Buttons/SubmitButton';

interface FormFieldProps {
	name: string;
	label: string;
	type: 'text' | 'email' | 'textarea';
	required?: boolean;
}

interface ContactFormProps {
	fields: FormFieldProps[];
	onSubmit?: (data: Record<string, string>) => void;
	submitButtonText?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
	fields,
	onSubmit,
	submitButtonText = 'Submit',
}) => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data: Record<string, string> = {};
		fields.forEach((field) => {
			data[field.name] = formData.get(field.name) as string;
		});
		onSubmit && onSubmit(data);
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			{fields.map((field) => (
				<FormField key={field.name} {...field} />
			))}
			{onSubmit && <SubmitButton>{submitButtonText}</SubmitButton>}
		</StyledForm>
	);
};
