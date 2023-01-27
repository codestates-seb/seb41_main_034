import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dbId: `${localStorage.getItem('userDbId') || ''}`,
  userId: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginDbId: (state, action) => {
      state.dbId = action.payload;
    },
    loginUserId: (state, action) => {
      state.userId = action.payload;
    },
    logoutUser: (state) => {
      state.dbId = '';
      state.userId = '';
    }
  }
});

export default userSlice;
export const { loginDbId, loginUserId, logoutUser } = userSlice.actions;
