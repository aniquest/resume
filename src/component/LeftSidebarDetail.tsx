import cloudbase from '@cloudbase/js-sdk';
import React from 'react';
import { BasicInfo } from '../models/LeftSidebarModel';
import ResumeData from '../service/GetResumeData';
import getResumeData from '../service/GetResumeData';
import { MyButton } from './Button';
import { MyInput } from './Input';
import topicon from '../icons/top.svg'
import { Abbreviation } from './Abbreviation';
import { Box, styled, TextField } from '@mui/material';

interface IBasicInfo {
  basicInfo: BasicInfo,
  onChanged: (info: BasicInfo) => void,
}

const MyTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid #4D4D4D',
      color: '#4D4D4D',
    },
    '&:hover fieldset': {
      border: '1px solid #F5F5F5',
      color: '#4D4D4D',
    },
    '&.Mui-focused fieldset': {
      border: '1px solid #F5F5F5',
      color: '#4D4D4D',
    },
  },
  '& .MuiInputBase-input': {
    color: '#F5F5F5',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    color: '#F5F5F5',
  },
  autoComplete: "off",
  variant: "outlined",
  userSelect: 'none'
});

class Basic extends React.Component<IBasicInfo> {
  render() {
    const { basicInfo, onChanged } = this.props;

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2, gap: 3, }}>
        <label style={{ color: 'white', }}>基本信息</label>
        <MyTextField id="outlined-basic" label="姓名" value={basicInfo.name} type="text" InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { basicInfo.name = text.target.value; onChanged(basicInfo); }} />
        <MyTextField id="outlined-basic" label="生日" value={basicInfo.birthday} type="date" InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { basicInfo.birthday = text.target.value; onChanged(basicInfo); }} />
        <MyTextField id="outlined-basic" label="邮箱" value={basicInfo.email} type="email" InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { basicInfo.email = text.target.value; onChanged(basicInfo); }} />
        <MyTextField id="outlined-basic" label="电话" value={basicInfo.phone} type="number" InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { basicInfo.phone = text.target.value; onChanged(basicInfo); }} />
      </Box>
    );
  }
}

const Location: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2, gap: 3 }}>
      <label style={{ color: 'white' }}>籍贯</label>
      <MyTextField id="outlined-basic" label="国家" value={'basicInfo.name'} InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
      <MyTextField id="outlined-basic" label="城市" value={'basicInfo.birthday'} InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        <MyTextField id="outlined-basic" label="国家" value={'basicInfo.name'} InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
        <MyTextField id="outlined-basic" label="城市" value={'basicInfo.birthday'} InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        <MyTextField id="outlined-basic" label="国家" InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
        <MyTextField id="outlined-basic" label="城市" InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
      </Box>

    </Box>
  );
};

const ProfessionalSkill: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2, gap: 3 }}>
      <label style={{ color: 'white' }}>籍贯</label>
      <MyTextField id="outlined-basic" label="国家" value={''} InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
      <MyTextField id="outlined-basic" label="城市" value={''} InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        <MyTextField id="outlined-basic" label="国家" value={''} InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
        <MyTextField id="outlined-basic" label="城市" value={''} InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        <MyTextField id="outlined-basic" label="国家" InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
        <MyTextField id="outlined-basic" label="城市" InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
      </Box>

    </Box>
  );
};


interface IProfiles {
  profiles: {
    network: string,
    username: string,
    website: string,
  }[]
}

class Profiles extends React.Component<IProfiles> {
  render() {
    const profiles = this.props.profiles.map((item) => {
      return (
        <Abbreviation mainTitle={item.network} subTitle={item.username} >
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
            <MyTextField id="outlined-basic" label="网站" value={item.network} InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
            <MyTextField id="outlined-basic" label="用户名" value={item.username} InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
          </Box>
          <MyTextField id="outlined-basic" label="网址" value={item.website} InputLabelProps={{ style: { color: '#ffffffb3' } }} onChange={(text) => { }} />
        </Abbreviation>
      );
    });

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <label style={{ color: 'white' }}>社交账号</label>
        {profiles}
      </Box>
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
      <Box sx={{ overflow: 'auto', backgroundColor: '#171717', padding: '16px', borderRight: '3px solid #2E2E2E', }}>
        <style>
          {`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
        </style>
        <Basic
          basicInfo={basicInfo}
          onChanged={(info) => { this.setState({ basicInfo: info }) }} />
        <Location></Location>
        <ProfessionalSkill />
        <Profiles profiles={[{ network: "微信", username: "wulawula233", website: "www.weixin.qq" }, { network: "微信", username: "wulawula233", website: "www.weixin.qq" }]} />
        <MyButton src={topicon} onClick={() => { this.updateResume(); }}></MyButton>
      </Box>
    );
  }
}

export default LeftSidebarDetail;

