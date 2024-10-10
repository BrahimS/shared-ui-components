import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Header> = {
	component: Header,
	title: 'Header',
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Primary = {
	args: {
		logo: '',
		children: '',
		style: '',
	},
};

export const Heading: Story = {
	args: {
		logo: '',
		children: '',
		style: '',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByText(/Welcome to Header!/gi)).toBeTruthy();
	},
};
