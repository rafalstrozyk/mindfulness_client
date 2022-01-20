import React from 'react';
import { useSelector } from 'react-redux';
import LoginRegister from '../components/LoginRegister/LoginRegister';

const Home = () => {
  const token = useSelector((state) => {
    state.user.token;
  });
  return (
    <>
      {token ? (
        <div>
          <h1>Home</h1>
        </div>
      ) : (
        <LoginRegister />
      )}
    </>
  );
};

export default Home;
