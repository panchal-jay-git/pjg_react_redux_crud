import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: false,
  },
  reducers: {
    setDarkMode(state, action) {
      state.darkMode = action.payload;
    },
  },
});

export const { setDarkMode } = settingsSlice.actions;
export default settingsSlice.reducer;
