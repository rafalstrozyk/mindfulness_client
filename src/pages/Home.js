import React from 'react';
import { useSelector } from 'react-redux';
import LoginRegister from '../components/LoginRegister/LoginRegister';

const Home = () => {
  const token = useSelector((state) => state.user.token);
  return (
    <>
      {console.log(document.cookie)}
      {token === null ? (
        <LoginRegister />
      ) : token ? (
        <div>
          <h1>Home</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Home;
