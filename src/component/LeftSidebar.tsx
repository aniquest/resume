import React from 'react';
import LeftSidebarDetail from './LeftSidebarDetail';
import './LeftSidebar.css';
import { MyButton } from './Button';
import topicon from '../icons/top.svg'

interface LeftSidebarProps {
    visible: boolean;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ visible }) => {
    return (
        <div style={{ display: visible ? 'flex' : 'none', flexDirection: 'row', justifyContent: 'space-between' }}>
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
                <MyButton src={topicon} onClick={() => { }} ></MyButton>
                <MyButton src={topicon} onClick={() => { }} ></MyButton>
                <MyButton src={topicon} onClick={() => { }} ></MyButton>
                <MyButton src={topicon} onClick={() => { }} ></MyButton>
                <MyButton src={topicon} onClick={() => { }} ></MyButton>
            </div>
            <LeftSidebarDetail />
        </div>
    );
};

export default LeftSidebar;