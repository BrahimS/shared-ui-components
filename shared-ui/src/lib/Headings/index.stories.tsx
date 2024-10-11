import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './index';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Heading> = {
	component: Heading,
	title: 'Heading',
};
export default meta;
type Story = StoryObj<typeof Heading>;

export const Primary = {
	args: {
		as: '',
		children: '',
		style: '',
		color: '',
		role: '',
		props: '',
	},
};

export const H1: Story = {
	args: {
		as: 'h1',
		children: 'Welcome to Heading!',
		style: { fontFamily: 'sans-serif' },
		color: 'red',
		role: 'heading',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByText(/Welcome to Heading!/gi)).toBeTruthy();
	},
};
