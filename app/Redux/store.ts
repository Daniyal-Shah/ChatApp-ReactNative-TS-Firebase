import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import loadingReducer from './loading/loadingSlice';
import allUserReducer from './allUsers/allUserSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    allUser: allUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
