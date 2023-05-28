import React from 'react';
import { MyInput } from './Input';


const Basic: React.FC = () => {
  return (
    <div style={{ width: '400px' }}>
      <label style={{ color: 'white' }}>基本信息</label>
      <MyInput title='姓名' onClick={() => { }}></MyInput>
      <MyInput title='生日' onClick={() => { }}></MyInput>
      <MyInput title='邮箱' onClick={() => { }}></MyInput>
    </div>
  );
};

const Location: React.FC = () => {
  return (
    <div style={{ width: '400px' }}>
      <label style={{ color: 'white' }}>籍贯</label>
      <MyInput title='国家' onClick={() => { }}></MyInput>
      <MyInput title='城市' onClick={() => { }}></MyInput>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MyInput title='区域' onClick={() => { }}></MyInput>
        <MyInput title='xxx' onClick={() => { }}></MyInput>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MyInput title='xxx' onClick={() => { }}></MyInput>
        <MyInput title='xxx' onClick={() => { }}></MyInput>
      </div>
    </div>
  );
};

const ProfessionalSkill: React.FC = () => {
  return (
    <div style={{ width: '400px' }}>
      <label style={{ color: 'white' }}>籍贯</label>
      <MyInput title='国家' onClick={() => { }}></MyInput>
      <MyInput title='城市' onClick={() => { }}></MyInput>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MyInput title='区域' onClick={() => { }}></MyInput>
        <MyInput title='xxx' onClick={() => { }}></MyInput>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MyInput title='xxx' onClick={() => { }}></MyInput>
        <MyInput title='xxx' onClick={() => { }}></MyInput>
      </div>
    </div>
  );
};

const LeftSidebarDetail: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      backgroundColor: '#171717',
      borderRight: '3px solid #2E2E2E',
      padding: '16px',
    }}>
      <div style={{
        overflowY: 'auto',
      }}>
        <Basic></Basic>
        <Location></Location>
        <ProfessionalSkill />
      </div>

    </div>
  );
};

export default LeftSidebarDetail;