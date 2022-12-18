import * as FaIcons from "react-icons/fa";

import { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap"
import { IconButton, Menu, Avatar, MenuItem } from "@mui/material"
import { ProfileModal } from "../../Structured/Modal/ModalDialog"
import { COLORS } from "../../../config/defaultColors"


export default function Header(props) {

  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [profileOptionsPosition, setProfileOptionsPosition] = useState(null);
  
  const toggle = () => {
    setOpen(!open);
  }

  const onLogout = () => {
    localStorage.removeItem('accessToken'); 
    localStorage.removeItem('accessUserInfo');
  }

  const openProfile = () => {
    setShowModal(true);
    setProfileOptionsPosition(null);
  }

  return (
    <div>
      <Navbar color="" light expand="md">
        <Collapse style={{position: "fixed", marginLeft: "70%"}} isOpen={open} navbar>
          <Nav className="ml-auto" navbar>
            <div style={{ marginTop: "75%" }}>
              <IconButton onClick={(event) => setProfileOptionsPosition(event.currentTarget)}>
                <Avatar />
              </IconButton>
            </div>
            <Menu anchorEl={profileOptionsPosition} open={profileOptionsPosition} onClose={() => setProfileOptionsPosition(null)}>
              <MenuItem onClick={openProfile}>Profile</MenuItem>
              <MenuItem component="a" href="/signin" onClick={onLogout}>Logout</MenuItem>
            </Menu>
            <ProfileModal open={showModal} href="/profile" onClose={()=> setShowModal(false)}/>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}