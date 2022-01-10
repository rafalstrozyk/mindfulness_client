import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';

const Root = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="profile" element={<Profile />} />
  </Routes>
);

export default Root;
