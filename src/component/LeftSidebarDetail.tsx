import React from 'react';
import { BasicInfo } from '../models/LeftSidebarModel';
import { MyInput } from './Input';


const Basic: React.FC<BasicInfo> = (info: BasicInfo) => {
  return (
    <div style={{ width: '400px' }}>
      <label style={{ color: 'white' }}>基本信息</label>
      <MyInput title='姓名' text={info.name} onChange={(text) => { info.name = text }}></MyInput>
      <MyInput title='生日' text={info.birthday} onChange={(text) => { info.birthday = text }}></MyInput>
      <MyInput title='邮箱' text={info.email} onChange={(text) => { info.email = text }}></MyInput>
      <MyInput title='电话' text={info.phone} onChange={(text) => { info.phone = text }}></MyInput>
    </div>
  );
};

const Location: React.FC = () => {
  return (
    <div style={{ width: '400px' }}>
      <label style={{ color: 'white' }}>籍贯</label>
      <MyInput title='国家' text='' onChange={() => { }}></MyInput>
      <MyInput title='城市' text='' onChange={() => { }}></MyInput>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MyInput title='区域' text='' onChange={() => { }}></MyInput>
        <MyInput title='xxx' text='' onChange={() => { }}></MyInput>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MyInput title='xxx' text='' onChange={() => { }}></MyInput>
        <MyInput title='xxx' text='' onChange={() => { }}></MyInput>
      </div>
    </div>
  );
};

const ProfessionalSkill: React.FC = () => {
  return (
    <div style={{ width: '400px' }}>
      <label style={{ color: 'white' }}>籍贯</label>
      <MyInput title='国家' text='' onChange={() => { }}></MyInput>
      <MyInput title='城市' text='' onChange={() => { }}></MyInput>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MyInput title='区域' text='' onChange={() => { }}></MyInput>
        <MyInput title='xxx' text='' onChange={() => { }}></MyInput>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MyInput title='xxx' text='' onChange={() => { }}></MyInput>
        <MyInput title='xxx' text='' onChange={() => { }}></MyInput>
      </div>
    </div>
  );
};

const Common: React.FC = () => {
  return (
    <div></div>
  )
}


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
        <Basic title='' name='aaa' birthday='bbb' email='ccc' phone=''></Basic>
        <Location></Location>
        <ProfessionalSkill />
      </div>

    </div>
  );
};

export default LeftSidebarDetail;