import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    ThemeProvider,
    CssBaseline,
    Box,
    Typography,
    Switch,
    FormControlLabel,
    IconButton,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    FormGroup,
    Checkbox
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import getTheme from '../../theme_template/Theme';
import { setDarkMode, setLanguage, setNotificationSettings } from '../../redux/settings/Settings_store';

const Settings = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.theme.darkMode);
    const language = useSelector((state) => state.theme.language);
    const notifications = useSelector((state) => state.theme.notifications);

    const handleToggleDarkMode = () => {
        dispatch(setDarkMode(!darkMode));
    };

    const handleLanguageChange = (event) => {
        dispatch(setLanguage(event.target.value));
    };

    const handleNotificationChange = (event) => {
        dispatch(setNotificationSettings({ [event.target.name]: event.target.checked }));
    };

    const handleBackClick = () => {
        window.history.back();
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
                <IconButton onClick={handleBackClick} sx={{ mb: 2 }}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h4" gutterBottom>
                    Settings
                </Typography>

                {/* Dark Mode Toggle */}
                <FormControlLabel
                    control={<Switch checked={darkMode} onChange={handleToggleDarkMode} />}
                    label="Dark Mode"
                    sx={{ mb: 3 }}
                />

                {/* Language Selector */}
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel id="language-select-label">Language</InputLabel>
                    <Select
                        labelId="language-select-label"
                        id="language-select"
                        value={language}
                        label="Language"
                        onChange={handleLanguageChange}
                    >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="fr">French</MenuItem>
                        <MenuItem value="es">Spanish</MenuItem>
                        {/* Add more languages as needed */}
                    </Select>
                </FormControl>

                {/* Notification Settings */}
                <Typography variant="h6" gutterBottom>
                    Notifications
                </Typography>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={notifications.email}
                                onChange={handleNotificationChange}
                                name="email"
                            />
                        }
                        label="Email Notifications"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={notifications.sms}
                                onChange={handleNotificationChange}
                                name="sms"
                            />
                        }
                        label="SMS Notifications"
                    />
                </FormGroup>

                <Typography variant="body1" sx={{ mt: 3 }}>
                    Configure your application settings here.
                </Typography>
            </Box>
        </ThemeProvider>
    );
};

export default Settings;
