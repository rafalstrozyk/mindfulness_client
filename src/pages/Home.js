import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import LoginRegister from '../components/LoginRegister/LoginRegister';
// import api from '../apis/api';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    getAllPosts {
      id
      title
    }
  }
`;

const Home = () => {
  const token = useSelector((state) => state.user.token);
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  //   const getPosts = `
  //   query someTest {
  //     getAllPosts {
  //     id,
  //     title,
  //   }
  // }
  //   `;

  return (
    <>
      {console.log('data', data)}
      {console.log('loading', loading)}
      {console.log('error', error)}
      {token === null ? (
        <LoginRegister />
      ) : token ? (
        <div>
          <h1>Home</h1>

          <Link to="/profile">Profile</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Home;
