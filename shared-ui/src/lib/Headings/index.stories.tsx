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
export const H2: Story = {
	args: {
		as: 'h2',
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
export const H3: Story = {
	args: {
		as: 'h3',
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
export const H4: Story = {
	args: {
		as: 'h4',
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
export const H5: Story = {
	args: {
		as: 'h5',
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
