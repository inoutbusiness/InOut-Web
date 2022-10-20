import "./header.css"
import * as FaIcons from "react-icons/fa";

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap"
import { IconButton, Menu, Avatar, MenuItem } from "@mui/material"
import { ProfileModal } from "../Modal/ModalDialog"

import React from "react"

export default class Header extends React.PureComponent {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      showModal: false,
      profileOptionsPosition: null
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  
  render() {
    const { ontoggleNav } = this.props;

    return (
      <div>
        <Navbar color="" light expand="md">
          <NavbarBrand>
            <span className="hmbger" onClick={ontoggleNav}>
              <FaIcons.FaBars />
            </span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
            <Collapse style={{position: "fixed", marginLeft: "70%"}} isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <IconButton onClick={(event) => this.setState({ profileOptionsPosition: event.currentTarget })}>
                  <Avatar />
                </IconButton>
                <Menu anchorEl={this.state.profileOptionsPosition} open={this.state.profileOptionsPosition} onClose={() => this.setState({ profileOptionsPosition: null })}>
                  <MenuItem onClick={() => this.setState({ showModal: true, profileOptionsPosition: null })}>Profile</MenuItem>
                  <MenuItem component="a" href="/signin">Logout</MenuItem>
                </Menu>
                <ProfileModal open={this.state.showModal} href="/profile" onClose={() => this.setState({ showModal: false })} />
              </Nav>
            </Collapse>
          </Navbar>
      </div>
    );
  }
}
