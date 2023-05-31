import cloudbase from '@cloudbase/js-sdk';
import React from 'react';
import { BasicInfo } from '../models/LeftSidebarModel';
import ResumeData from '../service/GetResumeData';
import getResumeData from '../service/GetResumeData';
import { MyButton } from './Button';
import { MyInput } from './Input';
import topicon from '../icons/top.svg'


const Basic: React.FC<BasicInfo> = (info: BasicInfo) => {
  return (
    <div style={{ width: '400px' }}>
      <label style={{ color: 'white' }}>基本信息</label>
      <MyInput title='姓名' text={info.name} onChange={(text) => { console.log(text); }}></MyInput>
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

class LeftSidebarDetail extends React.Component {
  state = {
    isLoading: true,
    error: null,
    basicInfo: {name:"",birthday:"",title:"",email:"",phone:""},
  };

  componentDidMount() {
    const data = new ResumeData();
    data
      .signIn()
      .then(() => {
        data
          .getResumeData()
          .then((res) => {
            this.setState({
              basicInfo: res,
              isLoading: false,
            });
          })
          .catch(error => {
            this.setState({
              error: error,
              isLoading: false,
            });
          })
      })
      .catch(error => {
        this.setState({
          error: error,
          isLoading: false,
        });
      })
  }

  updateResume() {
    const data = new ResumeData();
    data.updateResumeData(this.state.basicInfo);
  }

  render() {
    const { basicInfo, isLoading, error } = this.state;

    if (isLoading) {
      return <div>loading...</div>
    }

    if (error) {
      return <div>error...</div>
    }

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
          <Basic
            title={basicInfo.title}
            name={basicInfo.name}
            birthday={basicInfo.birthday}
            email={basicInfo.email}
            phone={basicInfo.phone} ></Basic>
          <Location></Location>
          <ProfessionalSkill />
          <MyButton src={topicon} onClick={()=>{ this.updateResume(); }}></MyButton>
        </div>

      </div>
    );
  }
}

export default LeftSidebarDetail;