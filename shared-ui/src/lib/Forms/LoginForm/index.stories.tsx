import type { Meta, StoryObj } from '@storybook/react';
import { LoginFormC } from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof LoginFormC> = {
	component: LoginFormC,
	title: 'LoginFormC',
};
export default meta;
type Story = StoryObj<typeof LoginFormC>;

export const Primary = {
	args: {},
};

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByText(/Welcome to LoginFormC!/gi)).toBeTruthy();
	},
};
