import { configureStore } from '@reduxjs/toolkit';
import auth from './auth/Auth';
import themeReducer from './settings/Settings_store';


export const store = configureStore({
  reducer: {
    auth: auth,
    theme: themeReducer,
  },
});
