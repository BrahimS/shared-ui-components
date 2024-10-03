import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Footer } from './index';
import { ThemeProvider } from 'styled-components';

// Mock theme
const mockTheme = {
	sizes: {
		containerXL: '1200px',
		containerLG: '992px',
		containerMD: '768px',
		containerSM: '576px',
	},
	// Add other necessary theme properties here
};

// Mock the styled components
vi.mock('../../styles', () => ({
	FooterWrapper: ({ children }: { children: React.ReactNode }) => (
		<footer data-testid="footer-wrapper">{children}</footer>
	),
}));

vi.mock('../../Grid/ContainerWrapper', () => ({
	Container: ({ children }: { children: React.ReactNode }) => (
		<div data-testid="container">{children}</div>
	),
}));

describe('Footer', () => {
	const renderWithTheme = (ui: React.ReactElement) => {
		return render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>);
	};

	it('renders children correctly', () => {
		renderWithTheme(
			<Footer>
				<span>Footer content</span>
			</Footer>,
		);

		const footerWrapper = screen.getByTestId('footer-wrapper');
		const container = screen.getByTestId('container');
		const footerContent = screen.getByText('Footer content');
		expect(footerWrapper).toBeInTheDocument();
		expect(container).toBeInTheDocument();
		expect(footerContent).toBeInTheDocument();
	});

	it('applies correct styles to FooterWrapper', () => {
		renderWithTheme(
			<Footer>
				<span>Footer content</span>
			</Footer>,
		);

		const footerWrapper = screen.getByTestId('footer-wrapper');
		expect(footerWrapper).toHaveStyle({ padding: '8px 0' });
	});

	it('applies correct styles to Container', () => {
		renderWithTheme(
			<Footer>
				<span>Footer content</span>
			</Footer>,
		);

		const container = screen.getByTestId('container');
		expect(container).toHaveStyle({ textAlign: 'right' });
	});
});
