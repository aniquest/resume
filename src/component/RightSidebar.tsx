import React from 'react';
import { MyButton } from './Button';
import RightSidebarDetail from './RightSidebarDetail';
import topicon from '../icons/top.svg'
import { Box, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
interface RightSidebarProps {
  visible: boolean;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ visible }) => {
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
        </Box>
      </Box>
      <RightSidebarDetail />
    </Box>
  );
};

export default RightSidebar;