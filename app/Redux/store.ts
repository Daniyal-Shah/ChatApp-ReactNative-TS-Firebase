import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import loadingReducer from './loading/loadingSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
