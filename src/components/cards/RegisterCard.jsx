import React from "react";
import { TextField, Button, Grid, Box, IconButton } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import Footer from "../../Footer/Footer";
import "../../api/apiMap.js";
import "../../styles/RegisterCard.css";
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
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: 500,
    height: 600,
    alignItems: "center",
    justifyContent: "center",
    border: "groove",
    borderColor: "#0E6BA8",
    boxShadow: "0 0 50px rgba(14, 107, 168)",
  }
});

const RegisterCard = () =>{
    const classes = useStyles();
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCpfCnpjChange = (e) => {
        let data = e.target.value.replace(/\D/g, "");
        if (data.length > 11) {
          let cnpj = `${data.substr(0, 2)}.${data.substr(2, 3)}.${data.substr(
            5,
            3
          )}/`;
          if (data.length > 12) {
            cnpj += `${data.substr(8, 4)}-${data.substr(12, 2)}`;
          } else {
            cnpj += data.substr(8);
          }
          data = cnpj;
        } else {
          let cpf = "";
          let parts = Math.ceil(data.length / 3);
          for (let i = 0; i < parts; i++) {
            if (i === 3) {
              cpf += `-${data.substr(i * 3)}`;
              break;
            }
            cpf += `${i !== 0 ? "." : ""}${data.substr(i * 3, 3)}`;
          }
          data = cpf;
        }
        setCpfCnpj(data);
};

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const [values, setValues] = React.useState({
      password: "",
      showPassword: false,
    });

    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleSignup = () => {
      var data = {
        Email: email,
        Password: password,
        FirstName: "Primeiro Nome Teste",
        LastName: "Segundo Nome Teste",
        CpfCnpj: cpfCnpj,
        Phone: "(00) 00000-0000",
        BranchId: 3,
      };

    axios.post("https://localhost:7221/api/v1/auth/signup", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log('success!');
      })
      .catch(function (error) {
        console.log(error);
      });

    };

    return (
        <Grid className={classes.root} alignItems="center">
          <Box className={classes.boxStyle}>
            <div id="content">
                <div>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            paddingTop: 5,
                        }}
                    >
                        <TextField
                            value={cpfCnpj}
                            id="outlined-basic"
                            variant="outlined"
                            label="CPF/CNPJ"
                            type="email"
                            onChange={(value) => handleCpfCnpjChange(value)}
                            style={{
                                width: 400,
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
                            label="E-mail"
                            type="email"
                            onChange={handleEmailChange}
                            style={{
                                width: 400,
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
                            type={values.showPassword ? "text" : "password"}
                            onChange={handlePasswordChange}
                            style={{
                                width: 400,
                                backgroundColor: "white",
                        }}
                        />
                        <IconButton onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}>
                              {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
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
                            label="Senha Novamente"
                            type="password"
                            style={{
                                width: 400,
                                backgroundColor: "white",
                        }}
                        />
                    </Box>
                    <Box    sx={{
                                display: "flex",
                                alignItems: "center",
                                paddingTop: 10,
                            }}>
                        <Button
                            href=''
                            className={classes.buttonStyle}
                            onClick={handleSignup}
                            style={{
                                backgroundColor: "#0E6BA8",
                                color: "#FFFFFF",
                                width: 400,
                                height: 75,
                                borderRadius: 25,
                                fontWeight: "bold",
                                fontSize: 20,
                        }}
                    >
                    Registrar
                    </Button>
                    </Box>
                </div>
            </div>
          </Box>
          <Footer />
        </Grid>
      );
}

export default RegisterCard;