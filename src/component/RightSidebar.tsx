import React from 'react';
import { MyButton } from './Button';
import RightSidebarDetail from './RightSidebarDetail';
import topicon from '../icons/top.svg'
import { Box, IconButton } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import MarginIcon from '@mui/icons-material/Margin';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import StyleIcon from '@mui/icons-material/Style';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import LinkIcon from '@mui/icons-material/Link';

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
      zIndex: 999
    }}>
      <RightSidebarDetail />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 1,
        gap: 1
      }}>
        <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
          <CategoryIcon />
        </IconButton>
        <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
          <MarginIcon />
        </IconButton>
        <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
          <FontDownloadIcon />
        </IconButton>
        <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
          <ColorLensIcon />
        </IconButton>
        <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
          <StyleIcon />
        </IconButton>
        <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
          <ShareIcon />
        </IconButton>
        <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
          <DownloadIcon />
        </IconButton>
        <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
          <SettingsIcon />
        </IconButton>
        <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => { }}>
          <LinkIcon />
        </IconButton>
      </Box>

    </Box>
  );
};

export default RightSidebar;