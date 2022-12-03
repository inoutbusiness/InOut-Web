import { useState } from "react"
import cpfCnpjChange from "../../../commom/signinCommom"
import InputMask from "react-input-mask"

import { Box, TextField } from "@mui/material"
import { DefaultTextField, PasswordTextField } from "../../../components/Basic/TextField/TextField"
import { DefaultBox } from "../../../components/Basic/Box/DefaultBox"
import { Grid } from "../../../components/Basic/Grid/DefaultGrid"
import { SkipLine } from "../../../components/Basic/SkipLine/styles"
import { DefaultButton } from "../../../components/Basic/Button/Default/DefaultButton"
import { DefaultIconButton } from "../../../components/Basic/Icons/IconButton"
import { handleSignUp } from "../../../services/Login/signup"
import { COLORS } from "../../../config/defaultColors"

export default function SignUpCard() {

  const [cpfCnpjRequest, setCpfCnpjRequest] = useState("");
  const [passwordRequest, setPasswordRequest] = useState("");
  const [emailRequest, setEmailRequest] = useState("");
  const [firstNameRequest, setFirstNameRequest] = useState("");
  const [lastNameRequest, setLastNameRequest] = useState("");
  const [phoneRequest, setPhoneRequest] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => { setShowPassword(!showPassword) };

    const SignUp = () => {

      handleSignUp({
        Email: emailRequest,
        Password: passwordRequest,
        FirstName: firstNameRequest,
        LastName: lastNameRequest,
        CpfCnpj: cpfCnpjRequest,
        Phone: phoneRequest.replace(/\D/g,''),
        BranchId: 1
      })
    }

    return (
      <Grid backgroundColor={COLORS.SecondColor}>
        <DefaultBox width="1000px" height="800px">
          <div id="content">
            <Box>
              <SkipLine paddingTop="40" />
              <DefaultTextField value={cpfCnpjRequest} variant="outlined" label="CPF/CNPJ" type="email"
                                onChange={(value) => setCpfCnpjRequest(cpfCnpjChange(value)) } />
            </Box>
            <Box>
              <SkipLine paddingTop="40" />
              <DefaultTextField label="E-mail" variant="outlined" type="email" 
                                onChange={(value) => setEmailRequest(value.target.value) } />
            </Box>
            <Box>
              <SkipLine paddingTop="40" />
              <PasswordTextField label="Senha" variant="outlined" type={showPassword ? "text" : "password" } 
                                 onChange={(value) => setPasswordRequest(value.target.value) } />
              <DefaultIconButton onClick={handleClickShowPassword} showPassword={showPassword} />
            </Box>
            <Box>
              <SkipLine paddingTop="40" />
              <DefaultTextField label="Nome" variant="outlined" type="text" 
                                onChange={((value) => setFirstNameRequest(value.target.value)) } />
            </Box>
            <Box>
              <SkipLine paddingTop="40" />
              <DefaultTextField label="Sobrenome" variant="outlined" type="text" 
                                onChange={(value) => setLastNameRequest(value.target.value)} />
            </Box>
            <Box>
              <SkipLine paddingTop="40" />
              <InputMask mask="+99 (99) 9 9999-9999" disabled={false} maskChar=" " 
                         onChange={(value) => setPhoneRequest(value.target.value) }>
                         { () => <TextField label="Telefone" variant="outlined" type="text" /> }
              </InputMask>
            </Box>
            <Box>
              <SkipLine paddingTop="40" />
              <DefaultButton onClick={SignUp} backgroundColor={COLORS.PrimaryColor} title="Registrar" />
            </Box>
          </div>
        </DefaultBox>
      </Grid>
    );
}