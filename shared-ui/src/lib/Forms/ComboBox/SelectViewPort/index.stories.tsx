import type { Meta, StoryObj } from '@storybook/react';
import { SelectViewPort } from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SelectViewPort> = {
	component: SelectViewPort,
	title: 'SelectViewPort',
};
export default meta;
type Story = StoryObj<typeof SelectViewPort>;

export const Primary = {
	args: {},
};

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByText(/Welcome to SelectViewPort!/gi)).toBeTruthy();
	},
};
