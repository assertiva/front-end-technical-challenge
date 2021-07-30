import React from 'react';
import { Container } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Home from './pages/Home';

import { GlobalStyle } from './styles/global';
import theme from './styles/theme';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </Container>
    </>
  );
}

export default App;
