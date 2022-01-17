import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Root from './pages/Root';
import GlobalStyle from './GlobalStyle';
import { theme } from './theme';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Root />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
