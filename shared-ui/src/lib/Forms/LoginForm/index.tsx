import React from 'react';
import { ContactForm } from '../ContactForm';

export const LoginFormC = () => {
	return (
		<ContactForm
			fields={[
				{ name: 'email', label: 'Email', type: 'text', required: true },
				{ name: 'password', label: 'Password', type: 'text', required: true },
			]}
			onSubmit={(data) => console.log(data)}
		/>
	);
};
