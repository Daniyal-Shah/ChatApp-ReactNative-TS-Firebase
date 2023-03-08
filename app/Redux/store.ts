import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import loadingReducer from './loading/loadingSlice';
import allUserReducer from './allUsers/allUserSlice';
import messagesReducer from './messages/messagesSlice';
import allChatReducer from './allchats/allChatSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    allUser: allUserReducer,
    allChat: allChatReducer,
    messages: messagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
