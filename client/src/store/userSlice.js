import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: ''
};

const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userId = action.payload;
    }
  }
});

export default userSlice;
