import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Paper
      sx={{
        padding: 2,
        mt: 4,
        backgroundColor: '#1976d2',
        color: '#fff',
        borderRadius: 2,
        textAlign: 'center',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        © {new Date().getFullYear()} React App
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Typography variant="body2">
          <a href="/privacy-policy" style={{ color: '#fff', textDecoration: 'none' }}>
            Privacy Policy
          </a>
          {' | '}
          <a href="/terms-of-service" style={{ color: '#fff', textDecoration: 'none', marginLeft: '8px' }}>
            Terms of Service
          </a>
        </Typography>
      </Box>
    </Paper>
  );
};

export default Footer;
