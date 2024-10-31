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
		title: 'This is the app title',
		description: 'this is the app description',
		keywords: 'keyword1, keyword2, keyword3',
	},
};
