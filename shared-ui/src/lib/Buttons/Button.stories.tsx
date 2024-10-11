import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button, ButtonProps } from '../styles';

const meta: Meta<ButtonProps> = {
	component: Button,
	title: 'Button',
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<ButtonProps>;

/**
 * Solid variant of the Button component.
 * This is the default button style with a solid background.
 */
export const Solid: Story = {
	args: {
		children: 'Submit',
		variant: 'solid',
	},

	// Play function for interaction testing
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		expect(button).toBeTruthy();
		expect(button).toHaveTextContent('Submit');
		expect(button).not.toBeDisabled();
	},
};

/**
 * Outlined variant of the Button component.
 * The button will have an outlined style instead of a solid background.
 */
export const Outlined: Story = {
	args: {
		children: 'Submit',
		variant: 'outlined',
	},

	// Play function for interaction testing
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		expect(button).toBeTruthy();
		expect(button).toHaveTextContent('Submit');
		expect(button).not.toBeDisabled();
	},
};

/**
 * Ghost variant of the Button component.
 * The button will have a transparent background with minimal styles.
 */
export const Ghost: Story = {
	args: {
		children: 'Submit',
		variant: 'ghost',
	},

	// Play function for interaction testing
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		expect(button).toBeTruthy();
		expect(button).toHaveTextContent('Submit');
		expect(button).not.toBeDisabled();
	},
};

/**
 * Disabled state of the Button component.
 * The button will be non-interactive and visually indicate a disabled state.
 */
export const Disabled: Story = {
	args: {
		children: 'Submit',
		variant: 'solid',
		disabled: true,
	},

	// Play function for interaction testing
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		expect(button).toBeTruthy();
		expect(button).toHaveTextContent('Submit');
		expect(button).toBeDisabled();
	},
};

/**
 * Small size variant of the Button component.
 * This story also includes a test to ensure the button is rendered properly.
 */
export const Small: Story = {
	args: {
		children: 'Submit',
		variant: 'solid',
		size: 'small',
	},

	// Play function for interaction testing
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		expect(button).toBeTruthy();
		expect(button).toHaveTextContent('Submit');
		expect(button).not.toBeDisabled();
	},
};
