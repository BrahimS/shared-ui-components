import { DefaultTheme } from 'styled-components';

const colorScheme = {
	blue: '#2185D0',
	teal: '#00B5AD',
	green: '#21BA45',
	olive: '#B5CC18',
	yellow: '#FBBD08',
	orange: '#F2711C',
	red: '#DB2828',
	violet: '#6435C9',
	purple: '#A333C8',
	brown: '#A5673F',
	pink: '#E03997',
	grey: '#767676',
	charcoal: '#43425D',
	black: '#1B1C1D',
	cream: '#F7F7F7',
	white: 'FFFFFF',
};

export const theme: DefaultTheme = {
	// Color Palette
	colors: {
		blue: colorScheme.blue,
		teal: colorScheme.teal,
		green: colorScheme.green,
		olive: colorScheme.olive,
		yellow: colorScheme.yellow,
		orange: colorScheme.orange,
		red: colorScheme.red,
		violet: colorScheme.violet,
		purple: colorScheme.purple,
		brown: colorScheme.brown,
		pink: colorScheme.pink,
		grey: colorScheme.grey,
		charcoal: colorScheme.charcoal,
		black: colorScheme.black,
		white: colorScheme.white,
		cream: colorScheme.cream,
		primary: colorScheme.charcoal,
		secondary: '#43425D', // Dark charcoal
		accent: colorScheme.yellow,
		background: colorScheme.white,

		text: {
			primary: '#252525', // Dark for readability
			secondary: '#6F6F6F', // Muted grey for secondary info
			accent: '#FF6F61', // Coral for emphasis
		},
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
		initial: '0px',
		mobile: '520px',
		tablet: '1024px',
		laptop: '1280px',
		desktop: '1640px',
		tv: '1920px',
	},

	// Shadows
	shadows: {
		light: '0 1px 3px rgba(0, 0, 0, 0.1)',
		medium: '0 3px 6px rgba(0, 0, 0, 0.1)',
		large: '0 10px 20px rgba(0, 0, 0, 0.2)',
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
