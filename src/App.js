import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Root from './pages/Root';
import api from './apis/api';
import { setToken } from './redux/Slice/userSlice';
import GlobalStyle from './GlobalStyle';
import { theme } from './theme';

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/gql',
});

const authLink = setContext((_, headers) => {
  const token = localStorage.getItem('refreshToken');
  console.log('cookie', document.cookie);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
    setTimeout(verifyUser, 5 * 60 * 1000);
  }, [setToken]);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  return (
    <div style={{ height: '100vh' }}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          {console.log(localStorage)}
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Root />
          </ThemeProvider>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
};

export default App;
