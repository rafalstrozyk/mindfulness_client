import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import RequireAuth from '../components/Routing/RequireAuth';

const Root = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="profile" element={<Profile />} /> */}
    <Route
      path="profile"
      element={
        <RequireAuth>
          <Profile />
        </RequireAuth>
      }
    />
  </Routes>
);

export default Root;
