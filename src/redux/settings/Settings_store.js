import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: {
      darkMode: false,
    },
    language: 'en', // Default language
    notifications: {
      email: true, // Example notification setting
      sms: false,
    },
  },
  reducers: {
    setDarkMode(state, action) {
      state.theme.darkMode = action.payload;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setNotificationSettings(state, action) {
      state.notifications = {
        ...state.notifications,
        ...action.payload, // Merge the new settings with the existing ones
      };
    },
  },
});

export const { setDarkMode, setLanguage, setNotificationSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
