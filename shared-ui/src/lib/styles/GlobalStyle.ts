import { createGlobalStyle } from 'styled-components';
import { color, typography } from './styles';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Global Styles */
  html {
    box-sizing: border-box;
    font-size: 1rem; /* Set base font size */
    height: 100vh;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

 body {
	font-family: ${typography.type.primary};
	font-size: ${typography.size.s3}px;
	color: ${color.darkest};

	margin: 0;
	overflow-y: auto;
	overflow-x: hidden;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color: transparent;
	-webkit-overflow-scrolling: touch;

	* {
		box-sizing: border-box;
	}
  }

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: ${typography.weight.regular};
		margin: 0;
		padding: 0;
	}

button,
	input,
	textarea,
	select {
		font-family: ${typography.type.primary};
	}

	sub,
	sup {
		font-size: 0.8em;
	}

	sub {
		bottom: -0.2em;
	}

	sup {
		top: -0.2em;
	}

	b,
	em {
		font-weight: ${typography.weight.bold};
	}

	em {
		font-style: normal;
	}

	hr {
		border: none;
		border-top: 1px solid ${color.border};
		clear: both;
		margin-bottom: 1.25rem;
	}

	code,
	pre {
		font-family: ${typography.type.code};
		font-size: ${typography.size.s2 - 1}px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		display: inline-block;
		padding-left: 2px;
		padding-right: 2px;
		vertical-align: baseline;
		color: ${color.secondary};
	}

	pre {
		line-height: 18px;
		padding: 11px 1rem;
		white-space: pre-wrap;
		background: rgba(0, 0, 0, 0.05);
		color: ${color.darkest};
		border-radius: 3px;
		margin: 1rem 0;
	}

`;
