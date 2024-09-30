import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
	AppWrapper,
	Footer,
	GlobalStyle,
	Header,
	MainContent,
	theme,
} from '@react-monorepo/shared-ui';

function App(): React.ReactElement {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppWrapper>
				<Header />
				<MainContent />
				<Footer />
			</AppWrapper>
		</ThemeProvider>
	);
}

export default App;
