import type { Meta, StoryObj } from '@storybook/react';
import { SocialLoginButton } from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

const meta: Meta<typeof SocialLoginButton> = {
	component: SocialLoginButton,
	title: 'SocialLoginButton',
};
export default meta;
type Story = StoryObj<typeof SocialLoginButton>;

export const Primary = {
	args: {
		icon: '',
		children: '',
	},
};

export const Heading: Story = {
	args: {
		icon: <GitHubLogoIcon />,
		children: 'Welcome to SocialLoginButton!',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.getByText(/Welcome to SocialLoginButton!/gi)).toBeTruthy();
	},
};
