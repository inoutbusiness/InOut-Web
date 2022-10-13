import React from "react";
import { BoxDifus } from "./styles";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu,  Container, Avatar, Tooltip, MenuItem } from '@mui/material';

import "./styles.css"

export const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          {new Date().getFullYear()} - InOut
        </p> 
      </section>
    </div>
  )
}

//
//  Alterar todo esse arquivo, mudando o nome dele e o nome dos métodos, e melhorar o método Head
//

export const Head = () => {
  const settings = ['Profile', 'Logout'];
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean((anchorElUser))}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}