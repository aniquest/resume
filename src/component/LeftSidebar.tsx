import React from 'react';
import LeftSidebarDetail from './LeftSidebarDetail';
import './LeftSidebar.css';
import { Box, Divider, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import TwitterIcon from '@mui/icons-material/Twitter';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import LanguageIcon from '@mui/icons-material/Language';
import SailingIcon from '@mui/icons-material/Sailing';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CoffeeIcon from '@mui/icons-material/Coffee';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';

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
      zIndex: 999
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 1
      }}>
        <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
          <AccountCircleIcon />
        </IconButton>
        <Divider sx={{ bgcolor: '#ffffff' }} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 1
        }}>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <PersonIcon />
          </IconButton>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <MapIcon />
          </IconButton>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <TwitterIcon />
          </IconButton>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <WorkIcon />
          </IconButton>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <SchoolIcon />
          </IconButton>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <EmojiEventsIcon />
          </IconButton>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <CardGiftcardIcon />
          </IconButton>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <MenuBookIcon />
          </IconButton>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <ArchitectureIcon />
          </IconButton>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <LanguageIcon />
          </IconButton>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <SailingIcon />
          </IconButton>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <VolunteerActivismIcon />
          </IconButton>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <CoffeeIcon />
          </IconButton>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <GroupIcon />
          </IconButton>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
            <StarIcon />
          </IconButton>
        </Box>
      </Box>

      <LeftSidebarDetail />
    </Box>
  );
};

export default LeftSidebar;