import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  test: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createString: (state) => {
      state.test = 'test';
    },
  },
});

export const { createString } = userSlice.actions;
export default userSlice.reducer;
