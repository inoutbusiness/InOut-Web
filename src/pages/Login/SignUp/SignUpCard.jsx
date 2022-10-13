// Single imports
import React from "react"
import cpfCnpjChange from "../../../commom/signinCommom"
import InputMask from "react-input-mask"

// Multiple imports
import { Box, TextField } from "@mui/material"
import { useState } from "react"
import { DefaultTextField, PasswordTextField } from "../../../components/TextField/TextField"
import { DefaultBox } from "../../../components/Box/DefaultBox"
import { Grid } from "../../../components/Grid/DefaultGrid"
import { SkipLine } from "../../../components/SkipLine/styles"
import { DefaultButton } from "../../../components/Button/Default/DefaultButton"
import { DefaultIconButton } from "../../../components/Icons/IconButton"
import { handleSignUp } from "../../../services/Login/signup"
import { Footer } from "../../../components/Footer/Footer"

const SignUpCard = () => {
    const [cpfCnpjRequest, setCpfCnpj] = useState("");
    const [emailRequest, setEmail] = useState("");
    const [passwordRequest, setPassword] = useState("");
    const [firstNameRequest, setFirstName] = useState("");
    const [lastNameRequest, setLastName] = useState("");
    const [phoneRequest, setPhoneRequest] = useState("");

    const [values, setValues] = React.useState({
      password: "",
      showPassword: false,
    });

    const handleClickShowPassword = () => { setValues({ ...values, showPassword: !values.showPassword }); };

    const SignUp = () => {
      var data = {
        Email: emailRequest,
        Password: passwordRequest,
        FirstName: firstNameRequest,
        LastName: lastNameRequest,
        CpfCnpj: cpfCnpjRequest,
        Phone: phoneRequest.replace(/\D/g,''),
        BranchId: 1
      }

      handleSignUp(data)
    }

    return (
        <Grid>
          <DefaultBox width="500" height="800" >
            <div id="content">
              <Box>
              <SkipLine paddingTop="40" />
                  <DefaultTextField value={cpfCnpjRequest} variant="outlined" label="CPF/CNPJ" type="email" 
                                    onChange={(value) => setCpfCnpj(cpfCnpjChange(value))} />
              </Box>
              <Box>
                <SkipLine paddingTop="40" />
                <DefaultTextField label="E-mail" variant="outlined" type="email" 
                                  onChange={(value) => setEmail(value.target.value)} />
              </Box>
              <Box>
                <SkipLine paddingTop="40" />
                <PasswordTextField label="Senha" variant="outlined" type={values.showPassword ? "text" : "password"} 
                                   onChange={(value) => setPassword(value.target.value)} />
                  <DefaultIconButton onClick={handleClickShowPassword} showPassword={values.showPassword} />
              </Box>
              <Box>
                  <PasswordTextField label="Senha Novamente" variant="outlined" type={values.showPassword ? "text" : "password"}
                                     onChange={(value) => setPassword(value.target.value)} />
              </Box>
              <Box>
                <SkipLine paddingTop="40" />
                <DefaultTextField label="Nome" variant="outlined" type="text" 
                                  onChange={((value) => setFirstName(value.target.value))} />
              </Box>
              <Box>
                <SkipLine paddingTop="40" />
                <DefaultTextField label="Sobrenome" variant="outlined" type="text" 
                                  onChange={(value) => setLastName(value.target.value)} />
              </Box>
              <Box>
                <SkipLine paddingTop="40" />
                <InputMask mask="+99 (99) 9 9999-9999" disabled={false} maskChar=" " 
                           onChange={(value) => setPhoneRequest(value.target.value)}>
                          { () => <TextField label="Telefone" variant="outlined" type="text" /> }
                  </InputMask>
              </Box>
              <Box>
                <SkipLine paddingTop="40" />
                <DefaultButton onClick={SignUp} backgroundColor="#0E6BA8" title="Registrar" />
              </Box>
          </div>
        </DefaultBox>
      </Grid>
    );
}

export default SignUpCard;