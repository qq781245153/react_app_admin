// 应用的根组件
import React, { Component } from "react";

/*
    BrowserRouter/HashRouter路由器,一个采用history路由模式，一个采用hash路由模式
    Route 用于将路由映射到相应页面
    Switch 用于匹配当前页面所对应路由，匹配的页面之外的页面将不显示在组件内
*/
import { BrowserRouter, Route, Switch } from "react-router-dom"; // 引入全局路由器和路由组件

import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
