import cloudbase from '@cloudbase/js-sdk';
import React from 'react';
import { BasicInfo } from '../models/LeftSidebarModel';
import ResumeData from '../service/GetResumeData';
import getResumeData from '../service/GetResumeData';
import { MyButton } from './Button';
import { MyInput } from './Input';
import topicon from '../icons/top.svg'
import { Abbreviation } from './Abbreviation';

interface IBasicInfo {
  basicInfo: BasicInfo,
  onChanged: (info: BasicInfo) => void,
}

class Basic extends React.Component<IBasicInfo> {
  render() {
    const { basicInfo, onChanged } = this.props;

    return (
      <div style={{ width: '400px' }}>
        <label style={{ color: 'white' }}>基本信息</label>
        <MyInput title='姓名' text={basicInfo.name} onChange={(text) => { basicInfo.name = text; onChanged(basicInfo); }}></MyInput>
        <MyInput title='生日' text={basicInfo.birthday} onChange={(text) => { basicInfo.birthday = text; onChanged(basicInfo); }}></MyInput>
        <MyInput title='邮箱' text={basicInfo.email} onChange={(text) => { basicInfo.email = text; onChanged(basicInfo); }}></MyInput>
        <MyInput title='电话' text={basicInfo.phone} onChange={(text) => { basicInfo.phone = text; onChanged(basicInfo); }}></MyInput>
      </div>
    );
  }
}

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

interface IProfiles {
  prifiles: [{
    network: string,
    username: string,
    website: string,
  }]
}

class Profiles extends React.Component<IProfiles> {
  render() {
    const profiles = this.props.prifiles.map((item) => {
      return (
        <div>
          <MyInput title='网站' text={item.network} onChange={(text) => { }}></MyInput>
          <MyInput title='用户名' text={item.username} onChange={(text) => { }}></MyInput>
          <MyInput title='网址' text={item.website} onChange={(text) => { }}></MyInput>
        </div>
      );
    });

    return (
      <div style={{ width: '400px' }}>
        <label style={{ color: 'white' }}>社交账号</label>
        {profiles}
      </div>
    );
  }
}


const Common: React.FC = () => {
  return (
    <div></div>
  )
}

class LeftSidebarDetail extends React.Component {
  state = {
    isLoading: true,
    error: null,
    basicInfo: { name: "", birthday: "", title: "", email: "", phone: "" },
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

    console.log("data changed");
    console.log(this.state.basicInfo);

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
            basicInfo={basicInfo}
            onChanged={(info) => { this.setState({ basicInfo: info }) }} />
          <Location></Location>
          <ProfessionalSkill />
          <Profiles prifiles={[{network:"微信",username:"wulawula233",website:"www.weixin.qq"}]} />
          <Abbreviation text="test"/>
          <MyButton src={topicon} onClick={() => { this.updateResume(); }}></MyButton>
        </div>

      </div>
    );
  }
}

export default LeftSidebarDetail;