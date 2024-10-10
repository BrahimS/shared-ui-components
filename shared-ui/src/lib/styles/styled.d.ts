// styled.d.ts
import 'styled-components';

export declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			blue: string;
			teal: string;
			red: string;
			danger: string;
			darkRed: string;
			green: string;
			olive: string;
			yellow: string;
			yellow: string;
			orange: string;
			red: string;
			darkGrey: string;
			violet: string;
			purple: string;
			brown: string;
			pink: string;
			grey: string;
			ligthGrey: string;
			darkGrey: string;
			charcoal: string;
			black: string;
			white: string;
			cream: string;
			primary: string;
			darkPrimary: string;
			secondary: string;
			accent: string;
			background: string;
			text: {
				primary: string;
				secondary: string;
				accent: string;
			};
		};
		typography: {
			fontFamily: string;
			fontSize: {
				h1: string;
				h2: string;
				h3: string;
				h4: string;
				h5: string;
				body: string;
				small: string;
			};
			fontWeight: {
				light: number;
				regular: number;
				medium: number;
				bold: number;
			};
			lineHeight: {
				body: string;
				heading: string;
			};
		};
		spacing: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
		sizes: {
			containerSM: string;
			containerMD: string;
			containerLG: string;
			containerXL: string;
			containerFULL: string;
		};
		breakpoints: {
			initial: string;
			mobile: string;
			tablet: string;
			laptop: string;
			desktop: string;
			tv: string;
		};
		shadows: {
			light: string;
			medium: string;
			large: string;
		};

		logo: {
			color: string;
			size: {
				small: string;
				large: string;
			};
			border: {
				type: string;
				width: string;
				color: string;
				radius: string;
			};
			rotation: {
				small: string;
				large: string;
			};
			translate: string;
		};
		input: {
			background: string;
			border: string;
			borderRadius: string;
			padding: string;
			fontSize: string;
			fontWeight: string | number;
			focus: {
				border: string;
				outline: string;
				boxShadow: string;
			};
		};
		card: {
			background: string;
			borderRadius: string;
			boxShadow: string;
			padding: string;
			hover: {
				boxShadow: string;
			};
		};
		badge: {
			background: string;
			color: string;
			padding: string;
			borderRadius: string;
			fontSize: string;
			fontWeight: string | number;
		};
	}
}
