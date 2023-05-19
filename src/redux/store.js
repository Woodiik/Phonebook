import { configureStore } from '@reduxjs/toolkit';
//import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    //filter: filterReducer,
  },
});
