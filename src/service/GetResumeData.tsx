import cloudbase from '@cloudbase/js-sdk';
import { ServerResponse } from 'http';
import { BasicInfo } from '../models/LeftSidebarModel';
import Result from './ServiceResponse';

export default class ResumeData {
  private app: cloudbase.app.App;

  constructor() {
    this.app = cloudbase.init({
      env: "resume-9gs40dv7c06431fd",
      region: "ap-guangzhou",
      debug: true
    });
  }

  public signIn(): Promise<any> {
    return this.app
      .auth({
        persistence: "session"
      })
      .anonymousAuthProvider()
      .signIn()
      .then(() => {
        // 登录成功
        console.log("登录成功");
      });
  }

  public getResumeData(): Promise<BasicInfo> {
    return this.app
      .callFunction({
        // 云函数名称
        name: "getResumeData",
        // 传给云函数的参数
        data: {
          "key1": "test value 1",
          "key2": "test value 2",
          "userInfo": {
            "appId": "",
            "openId": "oaoLb4qz0R8STBj6ipGlHkfNCO2Q"
          }
        }
      })
      .then((res) => {
        const res1: Result = res.result;
        const info: BasicInfo = {
          title: "",
          name: res1.res.data[0].basic_info.name,
          birthday: res1.res.data[0].basic_info.birthday,
          email: res1.res.data[0].basic_info.email,
          phone: res1.res.data[0].basic_info.phone
        };

        return info;
      })
  }

}


