import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Root from './pages/Root';
import api from './apis/api';
import { setToken } from './redux/Slice/userSlice';
import GlobalStyle from './GlobalStyle';
import { theme } from './theme';

const App = () => {
  const dispatch = useDispatch();
  const verifyUser = useCallback(() => {
    api
      .post('/auth/refreshToken')
      .then((res) => {
        dispatch(setToken(res.data.token));
      })
      .catch((error) => {
        dispatch(setToken(null));
        console.log(error);
      });
    setTimeout(verifyUser, 1 * 60 * 1000);
  }, [setToken]);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

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
