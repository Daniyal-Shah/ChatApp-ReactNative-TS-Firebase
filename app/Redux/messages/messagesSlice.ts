/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import MessageModel from '../../Models/MessageModel';

const initialState: Array<MessageModel> = [];

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    loadMessages(
      state: Array<MessageModel>,
      action: PayloadAction<Array<MessageModel>>,
    ) {
      return action.payload;
    },
    clearMessages(state: Array<MessageModel>) {
      return initialState;
    },
  },
});

export const {loadMessages, clearMessages} = messagesSlice.actions;

export default messagesSlice.reducer;
