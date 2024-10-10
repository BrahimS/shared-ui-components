import type { Meta, StoryObj } from '@storybook/react';
import { ScrollButton } from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ScrollButton> = {
	component: ScrollButton,
	title: 'ScrollButton',
};
export default meta;
type Story = StoryObj<typeof ScrollButton>;

export const Primary = {
	args: {
		direction: 'up',
	},
};

export const Up: Story = {
	args: {
		direction: 'up',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByRole('button')).toBeTruthy();
	},
};
export const Down: Story = {
	args: {
		direction: 'down',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByRole('button')).toBeTruthy();
	},
};
