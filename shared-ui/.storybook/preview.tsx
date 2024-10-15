import React from 'react';
import type { Preview } from '@storybook/react';
import { GlobalStyle } from '../src/lib/styles/GlobalStyle';

const withGlobalStyle = (storyFn: () => JSX.Element) => (
	<>
		<GlobalStyle />
		{storyFn()}
	</>
);

const preview: Preview = {
	globalTypes: {
		theme: {
			description: 'Global theme for components',
			toolbar: {
				// The label to show for this toolbar item
				title: 'Theme',
				icon: 'circlehollow',
				// Array of plain string values or MenuItem shape (see below)
				items: ['light', 'dark'],
				// Change title based on selected value
				dynamicTitle: true,
			},
		},
	},
	initialGlobals: {
		theme: 'light',
	},
	decorators: [withGlobalStyle],
};

export default preview;
