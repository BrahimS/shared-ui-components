export interface Theme {
	colors: {
		// Palette
		primary: string;
		secondary: string;
		tertiary: string;
		orange: string;
		gold: string;
		green: string;
		seafoam: string;
		purple: string;
		ultraviolet: string;

		// Monochrome
		lightest: string;
		lighter: string;
		light: string;
		mediumlight: string;
		medium: string;
		mediumdark: string;
		dark: string;
		darker: string;
		darkest: string;

		// border
		border: string;

		// Status
		positive: string;
		negative: string;
		warning: string;
	};
	spacing: {
		padding: {
			small: string;
			medium: string;
			large: string;
		};
		borderRadius: {
			small: string;
			medium: string;
			large: string;
		};
		margin: {
			small: string;
			medium: string;
			large: string;
		};
	};
	typography: {
		fontFamily: {
			primary: string;
			code: string;
		};
		fontSize: {
			body: string;
			h1: string;
			h2: string;
			h3: string;
			h4: string;
			h5: string;
			h6: string;
		};
		fontWeight: {
			regular: string;
			medium: string;
			bold: string;
		};
		lineHeight: {
			body: string;
			heading: string;
		};
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
}
