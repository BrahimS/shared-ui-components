import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle<{ $dark?: boolean }>`
  body {
      background-color: ${(props) => (props.$dark ? 'black' : 'white')};
      color: ${(props) => (props.$dark ? 'white' : 'black')}
  }
`;
