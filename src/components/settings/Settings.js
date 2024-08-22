// src/settings/Settings.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider, CssBaseline, Box, Typography, Switch, FormControlLabel, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import getTheme from '../../theme_template/Theme';
import { setDarkMode } from '../../redux/settings/Settings_store';

const Settings = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const toggleDarkMode = () => {
    dispatch(setDarkMode(!darkMode));
  };

  return (
    <ThemeProvider theme={getTheme(darkMode ? 'dark' : 'light')}>
      <CssBaseline />
      <Box
        sx={{
          p: 3,
          backgroundColor: 'background.default',
          color: 'text.primary',
          minHeight: '100vh',
        }}
      >
        <IconButton onClick={() => window.history.back()} sx={{ mb: 2 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
          label="Dark Mode"
        />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Configure your application settings here.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Settings;
