import React from 'react';
import { TextField, Button, Grid, Box, IconButton } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles"
import { Typography } from '@material-ui/core';
import Footer from '../../Footer/Footer'
import axios from 'axios';

const useStyles = makeStyles({
    root: {
      minWidth: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    boxStyle: {
      backgroundColor: "#FFFFFF",
      borderRadius: 15,
      width: 1100,
      height: 500,
      alignItems: "center",
      justifyContent: "center",
      border: "groove",
      borderColor: "#0E6BA8",
      boxShadow: "0 0 50px rgba(14, 107, 168)",
    }
  });

const ForgotMyPasswordCard = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleEnviarEmail = () => {

    axios.post("https://localhost:7221/api/v1/forgotPassword/sendResetPasswordCode", email, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log('success!');
    })
    .catch(function (error) {
      console.log(error)
    });
  };
    
  return (
      <Grid className={classes.root} alignItems="center">
          <Box className={classes.boxStyle}>
                <Typography
                  variant="h3"
                  style={{
                    color: "#0E6BA8",
                    textAlign: "center",
                    paddingTop: 35,
                  }}
                >
                Redefina sua senha:
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    color: "#0E6BA8",
                    textAlign: "center",
                    paddingTop: 35,
                  }}
                >
                Informe seu Email e vamos enviar um código de 6 dígitos para que você possa refazer sua senha.
                </Typography>
                <Box
                  sx={{
                    paddingBlock: 10,
                    textAlign: "center"
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Informe seu Email"
                    placeholder="name@example.com"
                    type="email"
                    onChange={handleEmailChange}
                    style={{
                      width: 400,
                      height: 50,
                      backgroundColor: "white"
                    }}
                  >
                  </TextField>
                </Box>
                <Box
                  sx={{
                    textAlign: "center"
                  }}
                >
                  <Button
                    onClick={handleEnviarEmail}
                    //href="/emailCodeResetPassword"
                    style={{
                      backgroundColor: "white",
                      borderColor: "#0E6BA8",
                      border: "solid",
                      width: 400,
                      height: 75,
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    Enviar Código
                  </Button>
                </Box>
          </Box>
      <Footer />
    </Grid>
  );
}

export default ForgotMyPasswordCard;