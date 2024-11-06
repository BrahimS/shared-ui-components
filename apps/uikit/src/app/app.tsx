import React from 'react';
import { theme } from '@react-monorepo/shared-ui';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@react-monorepo/shared-ui';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import ProdutCard from './pages/ProdutCard';
import LoginForm from './pages/LoginForm';
import NoMatch from './pages/NoMatch';

function App(): React.ReactNode {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/login-form" element={<LoginForm />} />
					<Route path="/product-card" element={<ProdutCard />} />
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
