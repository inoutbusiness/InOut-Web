import React from 'react';
import { TextField, Button, Grid, Box } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles"
import { Typography } from '@material-ui/core';
import Footer from '../../Footer/Footer'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

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
      width: 500,
      height: 400,
      alignItems: "center",
      justifyContent: "center",
      border: "groove",
      borderColor: "#0E6BA8",
      boxShadow: "0 0 50px rgba(14, 107, 168)",
    }
  });

const ResetPassword = () => {
    const classes = useStyles();
    const [password, setPassword] = useState();
    const [RepeatPassword, setRepeatPassword] = useState();
    const params = useParams();
    const [goToLogin, setGoToLogin] = useState(false);

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleRepeatPasswordChange = (e) => {
      setRepeatPassword(e.target.value);
    };

    if (goToLogin){
      return <Navigate to="/signin" />
    }

    const callResetPassword = () => {

    const data = {
      AccountId: params.accountId.substr(10),
      NewPassword: password
    };

      axios.post("https://localhost:7221/api/v1/forgotPassword/ResetPassword", JSON.stringify(data), {
          headers: {
            "Content-Type": "application/json"
          },
      })
      .then((response) => {
        if (response.data.success){
          setGoToLogin(true);
        };
      })
      .catch(function (error) {
        console.log(error)
      });
    };

    return(
        <Grid className={classes.root} alignItems="center">
            <Box className={classes.boxStyle}>
              <Box>
                <Box>
                  <Typography
                  variant="h4"
                  style={{
                    color: "#0E6BA8",
                    textAlign: "center",
                    paddingTop: 35,
                  }}
                  >                  
                    Alteração de Senha
                  </Typography>
                </Box>
              </Box>
              <Box
                  sx={{
                    paddingTop: 5,
                    textAlign: "center"
                  }}              
              >
                <Typography>
                  <TextField
                    id="outlined-basic"
                    variant="standard"
                    label="Informe sua nova senha"
                    type="password"
                    onChange={handlePasswordChange}
                    style={{
                      width: 400,
                      height: 50,
                      backgroundColor: "white"
                    }}
                  >                   
                  </TextField>
                </Typography>
              </Box>
              <Box
                  sx={{
                    paddingTop: 5,
                    textAlign: "center"
                  }}              
              >
                <Typography>
                  <TextField
                    id="outlined-basic"
                    variant="standard"
                    label="Informe sua nova senha novamente"
                    type="password"
                    onChange={handleRepeatPasswordChange}
                    style={{
                      width: 400,
                      height: 50,
                      backgroundColor: "white"
                    }}
                  >                   
                  </TextField>
                </Typography>
              </Box>
              <Box
                  sx={{
                    paddingBlock: 7,
                    textAlign: "center"
                  }}              
              >
                <Typography>
                  <Button
                    onClick={callResetPassword}
                    style={{
                      backgroundColor: "#0E6BA8",
                      borderColor: "#0E6BA8",
                      border: "solid",
                      width: 250,
                      height: 50,
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "white"
                    }}                  
                  >
                    Confirmar                   
                  </Button>
                </Typography>
              </Box>
            </Box>
          <Footer />
        </Grid>
    );

};

export default ResetPassword;