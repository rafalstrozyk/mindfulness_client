import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  profile: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

export const { setToken, setProfile } = userSlice.actions;
export default userSlice.reducer;
