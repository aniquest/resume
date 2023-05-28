import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftSidebar from './component/LeftSidebar';
import RightSidebar from './component/RightSidebar';
import Workspace from './component/Workspace';

function App() {
  const [isLeftVisible, setLeftIsVisible] = useState(true);
  const [isRightVisible, setRightIsVisible] = useState(true);

  const handleLeftClick = () => {
    setLeftIsVisible(!isLeftVisible);
  };

  const handleRightClick = () => {
    setRightIsVisible(!isRightVisible);
  };

  return (
    <div className="App">
      <LeftSidebar visible={isLeftVisible}/>
      <Workspace text='我的简历' onLeftClick={handleLeftClick} onRightClick={handleRightClick} />
      <RightSidebar visible={isRightVisible}/>
    </div>
  );
}

export default App;
