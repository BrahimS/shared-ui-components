import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

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
    font-size: 16px; /* Set base font size */
    overflow-y: scroll;
	  overflow-x: hidden;
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

 body {
   background-color: ${theme.colors.background};
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: ${theme.colors.text};
   font-weight: ${theme.typography.fontWeight.regular};
   line-height: ${theme.typography.lineHeight.body};
   font-size: ${theme.typography.fontSize.body};
   font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5 {
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: ${theme.typography.lineHeight.heading};
    color: ${theme.colors.text.primary};
    font-family: ${theme.typography.fontFamily};
  }

  h1 {
    font-size: ${theme.typography.fontSize.h1};
  }
  h2 {
    font-size: ${theme.typography.fontSize.h2};
  }
  h3 {
    font-size: ${theme.typography.fontSize.h3};
  }
  h4 {
    font-size: ${theme.typography.fontSize.h4};
  }
  h5 {
    font-size: ${theme.typography.fontSize.h5};
  }
`;
