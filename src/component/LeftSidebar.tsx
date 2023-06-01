import React from 'react';
import LeftSidebarDetail from './LeftSidebarDetail';
import './LeftSidebar.css';
import { Box, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
interface LeftSidebarProps {
  visible: boolean;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ visible }) => {
  return (
    <Box sx={{
      display: visible ? 'flex' : 'none',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#2E2E2E',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 1
      }}>
        <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
          <AccountCircleIcon />
        </IconButton>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 1
        }}>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <LocationOnIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <LocationOnIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <LocationOnIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <LocationOnIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <LocationOnIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <LocationOnIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <LocationOnIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton size="large" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <LocationOnIcon />
          </IconButton>
        </Box>
      </Box>

      <LeftSidebarDetail />
    </Box>
  );
};

export default LeftSidebar;