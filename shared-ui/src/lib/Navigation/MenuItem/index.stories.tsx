import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof MenuItem> = {
	component: MenuItem,
	title: 'MenuItem',
};
export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Primary = {
	args: {
		to: '',
		children: '',
	},
};

export const Heading: Story = {
	args: {
		to: '',
		children: '',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByText(/Welcome to MenuItem!/gi)).toBeTruthy();
	},
};
