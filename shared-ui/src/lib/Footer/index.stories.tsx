import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Footer> = {
	component: Footer,
	title: 'Footer',
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary = {
	args: {
		children: '',
	},
};

export const Heading: Story = {
	args: {
		children: '',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByText(/Welcome to Footer!/gi)).toBeTruthy();
	},
};
