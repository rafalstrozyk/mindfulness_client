import React from 'react';
import { useSelector } from 'react-redux';
import LoginRegister from '../components/LoginRegister/LoginRegister';

const Home = () => {
  const token = useSelector((state) => {
    state.user.token;
  });
  return (
    <div>
      {token ? (
        <div>
          <h1>Home</h1>
        </div>
      ) : (
        <LoginRegister />
      )}
    </div>
  );
};

export default Home;
