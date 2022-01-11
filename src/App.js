import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Root />
    </BrowserRouter>
  );
};

export default App;
