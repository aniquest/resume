import React from 'react';
import { MyButton } from './Button';
import RightSidebarDetail from './RightSidebarDetail';
import topicon from '../icons/top.svg'

interface RightSidebarProps {
  visible: boolean;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ visible }) => {
  return (
    <div style={{ display: visible ? 'flex' : 'none', flexDirection: 'row', justifyContent: 'space-between' }}>
      <RightSidebarDetail />

      <div className='Sidebar'>
        <MyButton src={topicon} onClick={() => { }} ></MyButton>
        <MyButton src={topicon} onClick={() => { }} ></MyButton>
        <MyButton src={topicon} onClick={() => { }} ></MyButton>
        <MyButton src={topicon} onClick={() => { }} ></MyButton>
        <MyButton src={topicon} onClick={() => { }} ></MyButton>
        <MyButton src={topicon} onClick={() => { }} ></MyButton>
        <MyButton src={topicon} onClick={() => { }} ></MyButton>
        <MyButton src={topicon} onClick={() => { }} ></MyButton>
        <MyButton src={topicon} onClick={() => { }} ></MyButton>
        <MyButton src={topicon} onClick={() => { }} ></MyButton>
        <MyButton src={topicon} onClick={() => { }} ></MyButton>
        <MyButton src={topicon} onClick={() => { }} ></MyButton>
      </div>

    </div>

  );
};

export default RightSidebar;