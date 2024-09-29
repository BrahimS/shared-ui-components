import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
	// Color Palette
	colors: {
		primary: '#FF6F61', // Fashionable coral
		secondary: '#252525', // Dark charcoal
		accent: '#FFD700', // Gold accent for luxury feel
		background: '#F7F7F7', // Light grey for background
		text: {
			primary: '#252525', // Dark for readability
			secondary: '#6F6F6F', // Muted grey for secondary info
			accent: '#FF6F61', // Coral for emphasis
		},
		border: '#E0E0E0', // Light grey borders
		success: '#4CAF50', // Green for success messages
		error: '#F44336', // Red for error messages
	},

	// Typography
	typography: {
		fontFamily: `'Poppins', sans-serif`, // Fashion-friendly font
		fontSize: {
			h1: '3rem', // Headline size
			h2: '2.5rem',
			h3: '2rem',
			h4: '1.5rem',
			body: '1rem', // Default text size
			small: '0.875rem', // Small text
		},
		fontWeight: {
			light: 300,
			regular: 400,
			medium: 500,
			bold: 700,
		},
		lineHeight: {
			body: '1.6', // Spacing for readability
			heading: '1.3', // Tighter for headings
		},
	},

	// Spacing
	spacing: {
		xs: '0.5rem',
		sm: '1rem',
		md: '1.5rem',
		lg: '2rem',
		xl: '3rem',
	},

	// Breakpoints for responsiveness
	breakpoints: {
		mobile: '576px',
		tablet: '768px',
		laptop: '1024px',
		desktop: '1200px',
	},

	// Shadows
	shadows: {
		light: '0 1px 3px rgba(0, 0, 0, 0.1)',
		medium: '0 3px 6px rgba(0, 0, 0, 0.1)',
		large: '0 10px 20px rgba(0, 0, 0, 0.2)',
	},

	// Button styles
	buttons: {
		primary: {
			background: '#FF6F61',
			color: '#FFFFFF',
			border: 'none',
			borderRadius: '8px',
			padding: '0.75rem 1.5rem',
			fontWeight: '500',
			hover: {
				background: '#FF5A4E',
			},
		},
		secondary: {
			background: '#FFFFFF',
			color: '#252525',
			border: '1px solid #252525',
			borderRadius: '8px',
			padding: '0.75rem 1.5rem',
			fontWeight: '500',
			hover: {
				background: '#252525',
				color: '#FFFFFF',
			},
		},
	},

	// Input styles
	input: {
		background: '#FFFFFF',
		border: '1px solid #E0E0E0',
		borderRadius: '6px',
		padding: '0.75rem',
		fontSize: '1rem',
		fontWeight: '400',
		focus: {
			border: '1px solid #FF6F61',
			outline: 'none',
			boxShadow: '0 0 0 3px rgba(255, 111, 97, 0.3)',
		},
	},

	// Card styles
	card: {
		background: '#FFFFFF',
		borderRadius: '12px',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
		padding: '1.5rem',
		hover: {
			boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
		},
	},

	// Badge styles
	badge: {
		background: '#FFD700',
		color: '#252525',
		padding: '0.5rem 1rem',
		borderRadius: '12px',
		fontSize: '0.875rem',
		fontWeight: '600',
	},
};
