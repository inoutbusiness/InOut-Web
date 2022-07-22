import React from 'react';
import { TextField, Button, Grid, Box } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles"
import { Typography } from '@material-ui/core';
import Footer from '../../Footer/Footer'
import axios from 'axios';
import { Navigate  } from 'react-router-dom';

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

  const EmailCodeResetPassword = () => {
    const classes = useStyles();
    const [codeN1, setCodeN1] = useState("");
    const [codeN2, setCodeN2] = useState("");
    const [codeN3, setCodeN3] = useState("");
    const [codeN4, setCodeN4] = useState("");
    const [codeN5, setCodeN5] = useState("");
    const [codeN6, setCodeN6] = useState("");
    const [goToResetPassword, setGoToResetPassword] = useState(false);

  const handleSetCodeN1 = (e) => { setCodeN1(e.target.value) };
  const handleSetCodeN2 = (e) => { setCodeN2(e.target.value) };
  const handleSetCodeN3 = (e) => { setCodeN3(e.target.value) };
  const handleSetCodeN4 = (e) => { setCodeN4(e.target.value) };
  const handleSetCodeN5 = (e) => { setCodeN5(e.target.value) };
  const handleSetCodeN6 = (e) => { setCodeN6(e.target.value) };

  const joinCodeNums = () => {
    return codeN1 + codeN2 + codeN3 + codeN4 + codeN5 + codeN6;
  };

  if (goToResetPassword){
    return <Navigate to="/resetPassword" />
  };

  const handleConfirm = () => {

    axios.post("https://localhost:7221/api/v1/forgotPassword/emailCodeChecker", JSON.stringify(joinCodeNums()), {
          headers: {
            "Content-Type": "application/json", 
          },
    })
    .then((response) => {
      if (response.data.success){
          setGoToResetPassword(true);
      };
    })
    .catch(function (error) {
      alert(error);
    });
  };
    
  return (
      <Grid className={classes.root} alignItems="center">
          <Box className={classes.boxStyle}>
            <Box>
              <Typography
                variant="h3"
                style={{
                  color: "#228B22",
                  textAlign: "center",
                  paddingTop: 30,
                  fontFamily: "Helvetica"
                }}
              >
                Código enviado!
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center"
                }}
            >
              <Typography
                variant="h6"
                style={{
                  color: "#228B22",
                  paddingTop: 20,
                  textAlign: "center",
                  fontFamily: "Helvetica"
                }}
              >
                Enviamos um código no Email informado anteriormente, este código tem validade de X minutos 
                e deve ser colocado nos campos abaixo para que você possa refazer sua senha.
              </Typography>
            </Box>
                <Box
                  sx={{
                    paddingBlock: 10,
                    textAlign: "center"
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    type="number"
                    onChange={handleSetCodeN1}
                    InputProps={{
                      inputProps: { 
                          max: 9, min: 0 
                      }
                  }}
                    style={{
                      width: 60,
                      height: 50,
                      backgroundColor: "white"
                    }}
                  >
                  </TextField>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    type="number"
                    onChange={handleSetCodeN2}
                    InputProps={{
                      inputProps: { 
                          max: 9, min: 0 
                      }
                  }}
                    style={{
                      width: 60,
                      height: 50,
                      backgroundColor: "white"
                    }}
                  >
                  </TextField>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    type="number"
                    onChange={handleSetCodeN3}
                    InputProps={{
                      inputProps: { 
                          max: 9, min: 0 
                      }
                  }}
                    style={{
                      width: 60,
                      height: 50,
                      backgroundColor: "white"
                    }}
                  >
                  </TextField>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    type="number"
                    onChange={handleSetCodeN4}
                    InputProps={{
                      inputProps: { 
                          max: 9, min: 0 
                      }
                  }}
                    style={{
                      width: 60,
                      height: 50,
                      backgroundColor: "white"
                    }}
                  >
                  </TextField>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    type="number"
                    onChange={handleSetCodeN5}
                    InputProps={{
                      inputProps: { 
                          max: 9, min: 0 
                      }
                  }}
                    style={{
                      width: 60,
                      height: 50,
                      backgroundColor: "white"
                    }}
                  >
                  </TextField>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    type="number"
                    onChange={handleSetCodeN6}
                    InputProps={{
                      inputProps: { 
                          max: 9, min: 0 
                      }
                  }}
                    style={{
                      width: 60,
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
                    onClick={handleConfirm}
                    style={{
                      color: "white",
                      backgroundColor: "#0E6BA8",
                      width: 360,
                      height: 75,
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    Confirmar
                  </Button>
                </Box>
          </Box>
      <Footer />
    </Grid>
  );
}

export default EmailCodeResetPassword;