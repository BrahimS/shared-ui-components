import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './ContainerWrapper';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Container> = {
	component: Container,
	title: 'Container',
};
export default meta;
type Story = StoryObj<typeof Container>;

export const Primary = {
	args: {},
};

export const Heading: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByText(/Welcome to Container!/gi)).toBeTruthy();
	},
};
