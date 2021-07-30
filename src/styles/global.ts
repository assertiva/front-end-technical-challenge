import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background-color: #f5f5f5;
    font-family: -apple-system, Roboto, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /*
    NECESSÁRIO POIS O POPOVER CRIA UMA DIV
    FORA DO ESCOPO NO QUAL ESTÁ INSERIDO
  */
  .MuiPopover-paper {
    padding: 10px;
  }
`;
