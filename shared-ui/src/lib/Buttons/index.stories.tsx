import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button } from './index';
import { Icon } from '../Icones/Icon';
import { ButtonLink, ButtonStylingProps } from './styles';

const buttonContainer: React.CSSProperties = {
	display: 'flex',
	gap: 4,
	padding: 16,
};
const buttonContainerDarkMode: React.CSSProperties = {
	display: 'flex',
	gap: 4,
	padding: 16,
	backgroundColor: '#333333',
};

const meta: Meta<ButtonStylingProps> = {
	component: Button,
	title: 'Button',
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<ButtonStylingProps>;

/**
 * Primary appearance of the Button component.
 *  This is the primary button style with a solid background.
 */

export const Primary: Story = {
	args: {
		children: 'Label',
		appearance: 'primary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		expect(button).toBeTruthy();
		expect(button).toHaveTextContent('Label');
		expect(button).not.toBeDisabled();
	},
};
/**
 * Secondary appearance of the Button component.
 *  This is the secondary button style with a solid background.
 */
export const Secondary: Story = {
	args: {
		children: 'Label',
		appearance: 'secondary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		expect(button).toBeTruthy();
		expect(button).toHaveTextContent('Label');
		expect(button).not.toBeDisabled();
	},
};
/**
 * Tertiary appearance of the Button component.
 *  This is the tertiary button style with a solid background.
 */
export const Tertiary: Story = {
	args: {
		children: 'Label',
		appearance: 'tertiary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		expect(button).toBeTruthy();
		expect(button).toHaveTextContent('Label');
		expect(button).not.toBeDisabled();
	},
};

/**
 *  Story demonstrating different sizes of the Button component.
 */

export const Sizes = () => (
	<div style={buttonContainer}>
		<Button appearance="primary" size="large">
			Large
		</Button>
		<Button appearance="primary" size="medium">
			Medium
		</Button>
		<Button appearance="primary" size="small">
			Small
		</Button>
	</div>
);
/**
 * Story showcasing all available button appearances.
 */

export const All = () => (
	<>
		<div style={buttonContainer}>
			<Button appearance="primary">Primary</Button>
			<Button appearance="secondary">Secondary</Button>
			<Button appearance="tertiary">Tertiary</Button>
			<Button appearance="outline">Outline</Button>
			<Button appearance="primaryOutline">Outline primary</Button>
			<Button appearance="secondaryOutline">Outline secondary</Button>
		</div>
		<div style={buttonContainerDarkMode}>
			<Button appearance="inversePrimary">Primary inverse</Button>
			<Button appearance="inverseSecondary">Secondary inverse</Button>
			<Button appearance="inverseOutline">Outline inverse</Button>
			<Button appearance="inverse">Inverse</Button>
			<Button appearance="inverseNoChrome">No Chrome Inverse</Button>
		</div>
	</>
);

/**
 * Story showing buttons with SVG icons.
 */
export const ContainsSVG = () => (
	<div style={buttonContainer}>
		<Button appearance="secondary">
			<Icon icon="lock" />
			Default
		</Button>
		<Button appearance="secondary" size="small">
			<Icon icon="lock" />
			Small
		</Button>
		<Button appearance="secondary">
			<Icon icon="check" />
			Default
		</Button>
		<Button appearance="secondary" size="small">
			<Icon icon="check" />
			Small
		</Button>
		<Button appearance="secondary">
			<Icon icon="grid" />
			Default
		</Button>
		<Button appearance="secondary" size="small">
			<Icon icon="grid" />
			Small
		</Button>
	</div>
);
/**
 *  Story demonstrating loading state buttons.
 */

export const Loading = () => (
	<div style={buttonContainer}>
		<Button appearance="primary" isLoading>
			Primary
		</Button>
		<Button appearance="secondary" isLoading>
			Secondary
		</Button>
		<Button appearance="tertiary" isLoading>
			Tertiary
		</Button>
		<Button appearance="outline" isLoading>
			Outline
		</Button>
		<Button appearance="outline" isLoading loadingText="Custom...">
			Outline
		</Button>
	</div>
);
/**
 * Story showcasing disabled buttons.
 */

export const Disabled = () => (
	<div style={buttonContainer}>
		<Button appearance="primary" isDisabled>
			Primary
		</Button>
		<Button appearance="secondary" isDisabled>
			Secondary
		</Button>
		<Button appearance="tertiary" isDisabled>
			Tertiary
		</Button>
		<Button appearance="outline" isDisabled>
			Outline
		</Button>
	</div>
);
/**
 * Story demonstrating a button with an icon.
 */

export const ContainsIcon = () => (
	<div style={buttonContainer}>
		<Button appearance="outline" containsIcon>
			<Icon icon="link" aria-label="Link" />
		</Button>
		<Button appearance="outline" size="small" containsIcon>
			<Icon icon="link" aria-label="Link" />
		</Button>
	</div>
);
/**
 * Story demonstrating a link button.
 */

export const LinkButton = () => (
	<div style={buttonContainer}>
		<ButtonLink href="#">Link</ButtonLink>
	</div>
);
