import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography, IconButton, Box, Avatar, Menu, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
    handleClose();
  };

  return (
    <Paper
      sx={{
        padding: 2,
        mb: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1976d2',
        color: '#fff',
        borderRadius: 2,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        React Dashboard
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        {user && (
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Avatar sx={{ bgcolor: grey[300] }}>{user.name[0]}</Avatar>
            <Typography
              variant="body1"
              sx={{ ml: 1, cursor: 'pointer', fontWeight: 'bold' }}
              onClick={handleClick}
            >
              {user.name}
            </Typography>
          </Box>
        )}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.1))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={() => navigate('/settings')}>Settings</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Box>
    </Paper>
  );
};

export default Header;
