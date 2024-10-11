import type { Meta, StoryObj } from '@storybook/react';
import { Head } from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Head> = {
	component: Head,
	title: 'Head',
};
export default meta;
type Story = StoryObj<typeof Head>;

export const Primary = {
	args: {
		title: '',
		description: '',
		keywords: '',
	},
};

export const Heading: Story = {
	args: {
		title: '',
		description: '',
		keywords: '',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByText(/Welcome to Head!/gi)).toBeTruthy();
	},
};
