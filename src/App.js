import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Root from './pages/Root';
import GlobalStyle from './GlobalStyle';
import { theme } from './theme';

const App = () => {
  return (
    <div style={{ height: '100vh' }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Root />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
