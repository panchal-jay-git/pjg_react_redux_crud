import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { 
  Paper, Typography, IconButton, Box, Avatar, Menu, MenuItem, Drawer, 
  List, ListItem, ListItemIcon, ListItemText, Divider 
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
import { useNavigate, Link } from 'react-router-dom';
import Settings from '../settings/Settings';

const Sidebar = ({ open, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This will navigate to the previous page
  };

  return (
    <Drawer anchor="left" open={open} onClose={toggleSidebar}>
      <Box
        sx={{
          width: 250,
          height: '100%',
          background: 'linear-gradient(180deg, #ffffff 0%, #020B17 100%)',
          color: '#1976d2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 2,
        }}
        role="presentation"
        onClick={toggleSidebar}
        onKeyDown={toggleSidebar}
      >
        <Box>
          <List>
            <ListItem button onClick={handleBack} sx={{ borderRadius: 2 }}>
              <ListItemIcon sx={{ color: '#1976d2' }}>
                <ArrowBackIcon />
              </ListItemIcon>
              <ListItemText primary="Back" />
            </ListItem>
            <Divider sx={{ backgroundColor: '#7f8c8d', marginY: 1 }} />
            <ListItem button sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#7f8c8d', color: '#fff' } }}>
              <ListItemIcon sx={{ color: '#1976d2' }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#7f8c8d', color: '#fff' } }}>
              <ListItemIcon sx={{ color: '#1976d2' }}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Products Details" />
            </ListItem>
            <ListItem  button 
              component={Link} 
              to="/settings"
              sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#7f8c8d', color: '#fff' } }}
            >
              <ListItemIcon sx={{ color: '#1976d2' }}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
        <Box>
          <Divider sx={{ backgroundColor: '#7f8c8d', marginY: 1 }} />

          <List>
            <ListItem button sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#7f8c8d', color: '#fff' } }}>
              <ListItemIcon sx={{ color: '#1976d2' }}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
          <List>
            <ListItem button sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#7f8c8d', color: '#fff' } }}>
              <ListItemIcon sx={{ color: '#e74c3c' }}>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>

        </Box>
      </Box>
    </Drawer>
  );
};

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Paper
        sx={{
          padding: 2,
          mb: 4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#1976d2',
          color: '#ffffff',
          borderRadius: 2,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1100,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 'bold', ml: 2 }}>
            React Dashboard
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          {user && (
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
              <Avatar sx={{ bgcolor: grey[500], border: '2px solid #ffffff' }}>{user.name[0]}</Avatar>
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

      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
