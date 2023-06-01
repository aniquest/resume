import React from 'react';
import './Workspace.css';
import lefticon from '../icons/arrow-left.svg'
import righticon from '../icons/arrow-right.svg'
import homeicon from '../icons/home.svg'
import topicon from '../icons/top.svg'
import { MyButton } from './Button';
import Draggable from 'react-draggable';
import MyLogin from './Login';
import { makeStyles, TextField } from '@mui/material';

interface WorkspaceProps {
  text: string;
  onLeftClick: () => void;
  onRightClick: () => void;
}

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#f5f5f5',
  },
}));

const Workspace: React.FC<WorkspaceProps> = ({ text, onLeftClick, onRightClick }) => {
  const classes = useStyles();

  return (
    <div className='Workspace'>
      <div className='WorkspaceTopbar'>
        <MyButton src={lefticon} onClick={onLeftClick} />
        <div className='WorkspaceTitle'>
          <MyButton src={homeicon} onClick={onRightClick} />
          <p className='Title'>{text}</p>
          <MyButton src={topicon} onClick={onRightClick} />
        </div>
        <MyButton src={righticon} onClick={onRightClick} />
      </div>

      <div className='WorkspaceContent'>
        <Draggable>
          <div style={{ color: 'white' }}>
            I can be dragged and resized
          </div>
        </Draggable>
      </div>


      <TextField id="outlined-basic" label="Outlined" variant="outlined" color='primary' className={classes.root} />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </div>
  );
};

export default Workspace;