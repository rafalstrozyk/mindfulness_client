import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginRegister from '../components/LoginRegister/LoginRegister';

const Home = () => {
  const token = useSelector((state) => state.user.token);
  return (
    <>
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
