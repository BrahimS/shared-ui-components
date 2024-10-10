import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FormField> = {
	component: FormField,
	title: 'FormField',
};
export default meta;
type Story = StoryObj<typeof FormField>;

export const Primary = {
	args: {
		name: '',
		label: '',
		type: '',
		required: false,
		placeholder: '',
	},
};

export const Heading: Story = {
	args: {
		name: '',
		label: '',
		type: '',
		required: false,
		placeholder: '',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByText(/Welcome to FormField!/gi)).toBeTruthy();
	},
};
