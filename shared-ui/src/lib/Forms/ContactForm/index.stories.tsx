import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ContactForm> = {
	component: ContactForm,
	title: 'ContactForm',
};
export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Primary = {
	args: {
		fields: '',
		onSubmit: '',
		submitButtonText: '',
		style: '',
	},
};

export const Heading: Story = {
	args: {
		fields: '',
		onSubmit: '',
		submitButtonText: '',
		style: '',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByText(/Welcome to ContactForm!/gi)).toBeTruthy();
	},
};
