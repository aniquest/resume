
import React from 'react'
import cloudbase from "@cloudbase/js-sdk";


const app = cloudbase.init({
  env: "resume-9gs40dv7c06431fd"
});


export default class MyLogin extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleSendPhoneCode() {
    if (this.state.username && this.state.password) {
      app
        .auth({ persistence: 'local' })
        .sendPhoneCode(this.state.username)
        .then(() => {
          // 发送短信验证码
        });
      //this.props.history.replace('/home')
      //window.localStorage.islogin = '1'
      alert('欢迎！')
    } else {
      alert('请输入用户名和密码！')
    }
  }

  handleLogin() {
    app
      .auth({ persistence: 'local' })
      .signUpWithPhoneCode(this.state.username, this.state.username, this.state.username)
      .then(() => {
        // 手机短信注册账号
      });
  }

  render() {
    return (
      <div className="login">
        <h2>欢迎来到XXX博客区</h2>
        <form className="form">
          <div className="formItem">
            <label htmlFor="username">用户名：</label>
            <input
              type="text"
              id="username"
              value={this.state.username}
              onChange={(e) => {
                this.setState({ username: e.target.value })
              }}
            />
          </div>
          <div className="formItem">
            <label htmlFor="password">密码：</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value })
              }}
            />
          </div>
          <div
            className="loginBtn"
            onClick={() => {
              this.handleSendPhoneCode()
            }}
          >
            登录
          </div>
        </form>
      </div>
    );
  }
}

