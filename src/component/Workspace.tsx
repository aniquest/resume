import React from 'react';
import './Workspace.css';
import lefticon from '../icons/arrow-left.svg'
import righticon from '../icons/arrow-right.svg'
import homeicon from '../icons/home.svg'
import topicon from '../icons/top.svg'

import { MyButton } from './Button';
import Draggable from 'react-draggable';

interface WorkspaceProps {
  text: string;
  onLeftClick: () => void;
  onRightClick: () => void;
}

const Workspace: React.FC<WorkspaceProps> = ({ text, onLeftClick, onRightClick }) => {
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
    </div>

  );
};

export default Workspace;