import React from "react";
import classnames from "classnames";
import Header from "../Header/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css"

import axios from "axios"
export default class Sidebar extends React.Component {
  state = {
    open: window.matchMedia("(min-width: 1024px)").matches || false
  };

  ontoggleNav = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { open } = this.state;
    const mobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div>
      <div className="navHeaderWrap">
        <Header ontoggleNav={this.ontoggleNav} />
      </div>
      <div className="bodyWrap">
        <div className={classnames({ blur: mobile && open })} />
        <div className={classnames("sidenav", { sidenavOpen: open }, { sidenavClose: !open })}>
          <a href="javascript:void(0)" className="closebtn hidex" onClick={() => this.ontoggleNav("0px")}>
            &times;
          </a>
          <a href="/home">Home</a>
          <a href="/profile">Profile</a>
          <a href="/signin" onClick={ function(){ localStorage.removeItem('accessToken'); localStorage.removeItem('accessUserInfo') } } >Logout</a>
        </div>
        <div className={classnames("main", { mainShrink: open }, { mainExpand: !open }, { noscroll: mobile && open })}>
          {this.props.content}
        </div>
      </div>
    </div>
  );
  }
}
