/* 
    登录的路由组件
*/
import React, { Component } from "react";

import "./login.less"
import logo from "./images/logo.png"


export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="login">
            <header className="login-header">
              <img src={logo} alt="logo"/>
              <h1>React: 后台管理项目</h1>
            </header>
            <section className="login-content">
              <h2>用户登陆</h2>
              
            </section>
        </div>
    );
  }
}
