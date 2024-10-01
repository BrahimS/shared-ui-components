import React from 'react';
import { theme } from '@react-monorepo/shared-ui';
import { ThemeProvider } from 'styled-components';
import { AppWrapper, GlobalStyle } from '@react-monorepo/shared-ui';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import ProdutCard from './pages/ProdutCard';
import LoginForm from './pages/LoginForm';
import NoMatch from './pages/NoMatch';
import Styleguide from './pages/Styleguide';

function App(): React.ReactElement {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppWrapper>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<Styleguide />} />
						<Route path="/login-form" element={<LoginForm />} />
						<Route path="/product-card" element={<ProdutCard />} />
						<Route path="*" element={<NoMatch />} />
					</Route>
				</Routes>
			</AppWrapper>
		</ThemeProvider>
	);
}

export default App;
