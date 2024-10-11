import type { Meta, StoryObj } from '@storybook/react';
import { MainContent } from './MainContent';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof MainContent> = {
	component: MainContent,
	title: 'MainContent',
};
export default meta;
type Story = StoryObj<typeof MainContent>;

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
		expect(canvas.getByText(/Welcome to MainContent!/gi)).toBeTruthy();
	},
};
