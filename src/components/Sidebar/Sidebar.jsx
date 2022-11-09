import classnames from "classnames";
import Header from "../Header/Header";

import { useState } from "react";
import { COLORS } from "../../config/defaultColors";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css"

export default function Sidebar(props) {
  const [open, setOpen] = useState(true);
  const mobile = window.matchMedia("(max-width: 768px)").matches;

  const onToggleNav = () => {
    setOpen(!open)
  }

  const onLogout = () => {
    localStorage.removeItem('accessToken'); 
    localStorage.removeItem('accessUserInfo');
  }

  return (
    <div>
      <div className="navHeaderWrap" style={{ backgroundColor: COLORS.PrimaryColor }}>
        <Header ontoggleNav={onToggleNav} />
      </div>
      <div className="bodyWrap">
        <div className={classnames({ blur: mobile && open })} style={{ backgroundColor: COLORS.SecondColor }} />
        <div className={classnames("sidenav", { sidenavOpen: open }, { sidenavClose: !open })}
          style={{ backgroundColor: COLORS.SecondColor }}>
          <a href="/home">Home</a>
          <a href="/profile">Profile</a>
          <a href="/signin" onClick={onLogout}>Logout</a>
        </div>
        <div className={classnames("main", { mainShrink: open }, { mainExpand: !open }, { noscroll: mobile && open })}>
          {props.content}
        </div>
      </div>
    </div>
  );
}