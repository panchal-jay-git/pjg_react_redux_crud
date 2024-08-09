import { configureStore } from '@reduxjs/toolkit';
import auth from './auth/Auth';

export const store = configureStore({
  reducer: {
    auth: auth,
  },
});
