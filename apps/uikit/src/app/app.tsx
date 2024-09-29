import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { AppWrapper, GlobalStyle, theme } from '@react-monorepo/shared-ui';
import { MainContent } from './components/Main/MainContent';
import { Footer } from './components/Footer';

function App(): React.ReactElement {
	return (
		<ThemeProvider theme={theme ?? {}}>
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
