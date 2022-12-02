import classnames from "classnames";
import Header from "../Header/Header";

import { useState } from "react";
import { SubMenu } from "../../Structured/Submenu/Submenu";
import { SidebarData } from "../../Structured/Submenu/sidebarData";
import { COLORS } from "../../../config/defaultColors";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"


export default function Sidebar(props) {
  const [open, setOpen] = useState(true);
  const mobile = window.matchMedia("(max-width: 768px)").matches;

  const onToggleNav = () => {
    setOpen(!open)
  }

  return (
    <div>
      <div className="navHeaderWrap" style={{ backgroundColor: COLORS.PrimaryColor }}>
        <Header ontoggleNav={onToggleNav} />
      </div>
      <div className="bodyWrap">
        <div className={classnames({ blur: mobile && open })} style={{ backgroundColor: COLORS.SecondColor }} />
        <div className={classnames("sidenav", { sidenavOpen: open }, { sidenavClose: !open })} style={{ backgroundColor: COLORS.SecondColor }}>
          {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
          })}
        </div>
        <div className={classnames("main", { mainShrink: open }, { mainExpand: !open }, { noscroll: mobile && open })}>
          {props.content}
        </div>
      </div>
    </div>
  );
}