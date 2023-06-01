import React, { useState } from 'react';
import './Workspace.css';
import Draggable from 'react-draggable';
import MyLogin from './Login';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

interface WorkspaceProps {
  text: string;
  onLeftClick: () => void;
  onRightClick: () => void;
}

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
      justifyContent: 'space-between',
      height: '100%',
      width: '100%'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2E2E2E',
        padding: 1
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

      <div className='WorkspaceContent'>
        <Draggable>
          <div style={{ color: 'white' }}>
            I can be dragged and resized
          </div>
        </Draggable>
      </div>

    </Box>
  );
};

export default Workspace;