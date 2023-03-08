/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {sortChatByDate} from '../../Helper/filter';
import ChatListModel from '../../Models/ChatListModel';
import ChatUpdateModel from '../../Models/ChatUpdateModel';

const initialState: Array<ChatListModel> = [];

export const allChatSlice = createSlice({
  name: 'allChat',
  initialState,
  reducers: {
    loadChat(
      state: Array<ChatListModel>,
      action: PayloadAction<Array<ChatListModel>>,
    ) {
      return sortChatByDate(action.payload, 'DESC');
    },
    updateChat(
      state: Array<ChatListModel>,
      action: PayloadAction<ChatUpdateModel>,
    ) {
      return sortChatByDate(
        state.map(item => {
          if (item.id === action.payload.id) {
            // a whole new object
            let newObj: ChatListModel = {
              id: item.id,
              name: item.name,
              email: item.email,
              roomId: item.roomId,
              lastMsg: action.payload.lastMsg,
              sendTime: action.payload.sendTime,
              unseenMessages: action.payload.unseenMessages,
            };

            return newObj;
          }
          return item;
        }),
        'DESC',
      );
    },
  },
});

export const {loadChat, updateChat} = allChatSlice.actions;

export default allChatSlice.reducer;
