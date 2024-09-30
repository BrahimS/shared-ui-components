import React from 'react';
import { Button, Flex, Theme } from '@radix-ui/themes';

import { DefaultButton, theme } from '@react-monorepo/shared-ui';
import { ThemeProvider } from 'styled-components';
import {
	AppWrapper,
	Footer,
	GlobalStyle,
	Header,
	MainContent,
} from '@react-monorepo/shared-ui';

function App(): React.ReactElement {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppWrapper>
				<Header>This is the header</Header>
				<MainContent>This is the main content</MainContent>

				<DefaultButton>Edit profile</DefaultButton>

				<Footer>This is the footer</Footer>
			</AppWrapper>
		</ThemeProvider>
	);
}

export default App;
