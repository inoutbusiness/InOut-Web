import { useState } from "react"

import { Box } from "@mui/material"
import { Navigate } from "react-router-dom"
import { Grid } from "../../../../components/Grid/DefaultGrid"
import { DefaultBox } from "../../../../components/Box/DefaultBox"
import { DefaultTypography } from "../../../../components/Labels/Typography"
import { SkipLine } from "../../../../components/SkipLine/styles"
import { PasswordTextField } from "../../../../components/TextField/TextField"
import { DefaultButton } from "../../../../components/Button/Default/DefaultButton"
import { handleResetPassword } from "../../../../services/Login/resetpassword"

export default function ResetPasswordCard() {

  const [passwordRequest, setPasswordRequest] = useState("");
  const [RepeatPasswordRequest, setRepeatPasswordRequest] = useState("");
  const [goToLogin, setgoToLogin] = useState(false);

  if (goToLogin){
    return <Navigate to="/signin" />
  }

  const ResetPassword = () => {

    const data = {
      AccountId: window.location.pathname.substring(15), // Melhorar
      NewPassword: passwordRequest
    }

    handleResetPassword(data)
    .then(res => res.data.success ? setgoToLogin(true) : console.log(res))
    .catch(err => console.log(err))
  };

  return(
    <Grid>
      <DefaultBox width="600" height="400">
        <Box paddingTop="40px">
          <DefaultTypography variant="h4" color="#0E6BA8" textAlign="center" paddingTop="35"
            text="Alteração de Senha" />
        </Box>
        <Box textAlign="center" paddingTop="30px">
          <Box>
            <SkipLine />
            <PasswordTextField variant="standard" label="Informe sua nova senha" width="300px" onChange={(value)=> setPasswordRequest(value.target.value) } />
          </Box>
          <Box paddingTop="30px">
            <SkipLine />
            <PasswordTextField variant="standard" label="Informe sua nova senha novamente" width="300px"
              onChange={(value)=> setRepeatPasswordRequest(value.target.value) } />
          </Box>
          <Box textAlign="center" paddingTop="30px">
            <SkipLine />
            <DefaultButton onClick={ResetPassword} backgroundColor="#0E6BA8" title="Confirmar" />
          </Box>
        </Box>
      </DefaultBox>
    </Grid>
  );
}