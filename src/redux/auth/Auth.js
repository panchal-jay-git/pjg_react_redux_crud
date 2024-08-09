import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const response = await axios.post('/api/login', credentials);
  return response.data;
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  const response = await axios.post('/api/register', userData);
  return response.data;
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (email) => {
  const response = await axios.post('/api/forgot-password', { email });
  return response.data;
});

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logout } = auth.actions;

export default auth.reducer;
