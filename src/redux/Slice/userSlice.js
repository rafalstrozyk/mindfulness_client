import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { createString } = userSlice.actions;
export default userSlice.reducer;
