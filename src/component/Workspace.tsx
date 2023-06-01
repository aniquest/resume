import React, { useState } from 'react';
import './Workspace.css';
import Draggable from 'react-draggable';
import MyLogin from './Login';
import { AppBar, Box, Divider, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Classic } from '../template/classic';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
import LinkIcon from '@mui/icons-material/Link';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import InsertPageBreakIcon from '@mui/icons-material/InsertPageBreak';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';

interface WorkspaceProps {
  text: string;
  onLeftClick: () => void;
  onRightClick: () => void;
}

const FloatingToolbar = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: 500,
      height: 40,
      backgroundColor: '#676767' + 'cc',
      borderRadius: 25,
      zIndex: 999,
      position: "absolute",
      bottom: 50,
      '&:hover': { backgroundColor: '#262626' + 'cc', }
    }}>
      <Toolbar>
        <IconButton style={{ color: '#F1F3F6' }}>
          <UndoIcon />
        </IconButton>
        <IconButton style={{ color: '#F1F3F6' }}>
          <RedoIcon />
        </IconButton>

        <Divider sx={{ backgroundColor: '#ffffff', height: 30, }} orientation='vertical' />

        <IconButton style={{ color: '#F1F3F6' }}>
          <ZoomInIcon />
        </IconButton>
        <IconButton style={{ color: '#F1F3F6' }}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton style={{ color: '#F1F3F6' }}>
          <FilterCenterFocusIcon />
        </IconButton>

        <Divider sx={{ backgroundColor: '#ffffff', height: 30, }} orientation='vertical' />

        <IconButton style={{ color: '#F1F3F6' }}>
          <AlignVerticalCenterIcon />
        </IconButton>
        <IconButton style={{ color: '#F1F3F6' }}>
          <InsertPageBreakIcon />
        </IconButton>
        <IconButton style={{ color: '#F1F3F6' }}>
          <ViewSidebarIcon />
        </IconButton>

        <Divider sx={{ backgroundColor: '#ffffff', height: 30, }} orientation='vertical' />

        <IconButton style={{ color: '#F1F3F6' }}>
          <LinkIcon />
        </IconButton>
        <IconButton style={{ color: '#F1F3F6' }}>
          <FileDownloadIcon />
        </IconButton>

      </Toolbar>

    </Box>

  );
};

const Workspace: React.FC<WorkspaceProps> = ({ text, onLeftClick, onRightClick }) => {
  const [isLeftFolded, setIsLeftFolded] = useState(false);
  const [isRightFolded, setIsRightFolded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuShow = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: '100%',
      width: '100%',
      backgroundColor: '#171717',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 1,
        zIndex: 999
      }}>
        <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => {
          onLeftClick();
          setIsLeftFolded(!isLeftFolded);
        }}>
          {isLeftFolded ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
        </IconButton>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: 2
        }} >
          <IconButton size="small" style={{ color: '#F5F5F5' }}>
            <HomeIcon />
          </IconButton>
          <Typography id="modal-modal-description" sx={{ color: "#F5F5F5" }}>
            {text}
          </Typography>
          <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={handleMenuShow} >
            <MenuOpenIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
          </Menu>
        </Box>
        <IconButton size="small" style={{ color: '#F5F5F5' }} onClick={() => {
          onRightClick();
          setIsRightFolded(!isLeftFolded);
        }}>
          {isRightFolded ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
        </IconButton>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-around',
        backgroundColor: '#171717'
      }}>
        <Classic src=""></Classic>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#transparent'
      }}>
        <FloatingToolbar />
      </Box>
    </Box>
  );
};

export default Workspace;