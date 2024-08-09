import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockLoginApi } from '../../mock_api/MockApi'; 

const initialState = {
  user: JSON.parse(sessionStorage.getItem('user')) || null,
  error: null,
};

// Async Thunks
export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const response = await mockLoginApi(credentials); // Use the mock API
  return response.data; // This returns the static user data
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  // You can mock this similarly
  const response = {
    id: '1',
    name: userData.name,
    email: userData.email,
    token: 'dummy-token',
  };
  return response;
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (email) => {
  // Simulate API response for forgot password
  return { success: true };
});

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      sessionStorage.removeItem('user'); // Clear session storage on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        sessionStorage.setItem('user', JSON.stringify(action.payload)); // Save user to session storage
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        sessionStorage.setItem('user', JSON.stringify(action.payload)); // Save user to session storage
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        // Handle forgot password success response
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
