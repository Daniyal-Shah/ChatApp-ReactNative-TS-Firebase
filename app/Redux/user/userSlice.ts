/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import UserModal from '../../Models/UserModel';

const initialState: UserModal = {
  id: '',
  name: '',
  email: '',
  password: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state: UserModal, action: PayloadAction<UserModal>) {
      return {...action.payload};
    },
    logoutUser(state: UserModal) {
      state = initialState;
    },
  },
});

export const {loginUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;
