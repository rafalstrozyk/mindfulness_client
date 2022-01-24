import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProfile } from '../redux/Slice/userSlice';
import api from '../apis/api';

const Profile = () => {
  const profile = useSelector((state) => state.user.profile),
    token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  const fetchUserDetails = useCallback(() => {
    api
      .get('/auth/me', { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        dispatch(setProfile(res.data));
      })
      .catch((error) => {
        if (error.status === 401) {
          // Edge case: when the token has expired.
          // This could happen if the refreshToken calls have failed due to network error or
          // User has had the tab open from previous day and tries to click on the Fetch button
          window.location.reload();
        } else {
          dispatch(setProfile(null));
        }
      });
  }, [token]);

  useEffect(() => {
    !profile && fetchUserDetails();
  }, [profile]);

  return (
    <div>
      {!profile ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Hello on profile!</h1>
          <p>{profile.firstName}</p>
          <p>{profile.lastName}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
