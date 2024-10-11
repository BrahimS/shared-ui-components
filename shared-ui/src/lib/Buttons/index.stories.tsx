import type { Meta, StoryObj } from '@storybook/react';
import { SubmitButton, SubmitButtonProps } from './index';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SubmitButtonProps> = {
	component: SubmitButton,
	title: 'SubmitButton',
};
export default meta;
type Story = StoryObj<SubmitButtonProps>;

export const Solid: Story = {
	args: {
		children: 'Submit',
		variant: 'solid',
	},
};

export const outlined: Story = {
	args: {
		children: 'Submit',
		variant: 'ghost',
	},
};
export const Ghost: Story = {
	args: {
		children: 'Submit',
		variant: 'ghost',
	},
};
export const Disabled: Story = {
	args: {
		children: 'Submit',
		variant: 'solid',
		disabled: true,
	},
};
export const Medium: Story = {
	args: {
		children: 'Submit',
		variant: 'solid',
		size: 'medium',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByText(/Submit/gi)).toBeTruthy();
		expect(canvas.getByRole('button')).toBeTruthy();
	},
};
