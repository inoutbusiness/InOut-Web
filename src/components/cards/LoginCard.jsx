import React from "react";
import { TextField, Button, Grid, Box, Link, Typography } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Navigate } from "react-router-dom";

import Footer from "../../Footer/Footer";
import "../../styles/LoginCard.css";
import "../../api/apiMap.js";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  boxStyle: {
    backgroundColor: "#222222",
    borderRadius: 15,
    width: 500,
    height: 585,
    alignItems: "center",
    justifyContent: "center",
  },
});

const LoginCard = () => {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [goToHomePage, setGoToHomePage] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  if (goToHomePage){
    return <Navigate to="/Home" />
  }

  const handleEntrar = () => {
    var data = {
      email: email,
      password: password,
    };

    axios.post("https://localhost:7221/api/v1/auth/signin", JSON.stringify(data), {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log(response.data.data.token);
            if (response.data.success){
              setGoToHomePage(true);
            };
          })
          .catch(function (error) {
            console.log(error);
          });
    };

  return (
    <Grid className={classes.root} alignItems="center">
      <Box className={classes.boxStyle}>
        <div id="content">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="E-mail"
              onChange={handleEmailChange}
              style={{
                width: 400,
                height: 50,
                borderRadius: 15,
                backgroundColor: "white",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              paddingTop: 5,
            }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Senha"
              type="password"
              onChange={handlePasswordChange}
              style={{
                width: 400,
                height: 50,
                borderRadius: 15,
                backgroundColor: "white",
              }}
            />
          </Box>
          <Box>
            <Link
              href="/forgotmypassword"
              underline="none"
              style={{
                paddingTop: 3,
                color: "white",
                float: "right",
                marginBottom: 30,
              }}
            >
              Esqueci minha senha
            </Link>
          </Box>
          <Box>
            <Button
              onClick={handleEntrar}
              style={{
                backgroundColor: "#98CE00",
                color: "#222222",
                width: 400,
                height: 75,
                borderRadius: 15,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Entrar
            </Button>
          </Box>
          <Typography
            variant="h5"
            component="h2"
            style={{
              color: "#98CE00",
              textAlign: "center",
              paddingTop: 15,
              paddingBottom: 15,
            }}
          >
            OU
          </Typography>
          <Box>
            <Button
               href='/signup'
               className={classes.buttonStyle}
               style={{
                 backgroundColor: "#98CE00",
                 color: "#222222",
                 width: 400,
                 height: 75,
                 borderRadius: 15,
                 fontWeight: "bold",
                 fontSize: 20,
              }}
            >
              Registrar
            </Button>
          </Box>
        </div>
      </Box>
      <Footer />
    </Grid>
  );
};

export default LoginCard;
