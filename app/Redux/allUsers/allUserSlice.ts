/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import UserModal from '../../Models/UserModel';

const initialState: Array<UserModal> = [];

export const allUserSlice = createSlice({
  name: 'allUser',
  initialState,
  reducers: {
    loadUsers(
      state: Array<UserModal>,
      action: PayloadAction<Array<UserModal>>,
    ) {
      return action.payload;
    },
  },
});

export const {loadUsers} = allUserSlice.actions;

export default allUserSlice.reducer;
