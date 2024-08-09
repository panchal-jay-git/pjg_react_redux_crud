import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ItemList from '../components/dashboard/Dashboard';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import ForgotPassword from '../components/forgot_password/ForgotPassword';

const AppRouter = () => {
  const isAuthenticated = true; // This should be updated based on your authentication logic

  return (
    <Router>
      <Routes>
        {/* Redirect to dashboard if authenticated */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />

        {/* Protected route for dashboard */}
        <Route path="/dashboard" element={isAuthenticated ? <ItemList /> : <Navigate to="/" />} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Navigate to login if route doesn't match */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
