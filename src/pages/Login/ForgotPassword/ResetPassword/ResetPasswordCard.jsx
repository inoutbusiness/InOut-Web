import React from "react"

import { Box } from "@mui/material"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { Grid } from "../../../../components/Grid/DefaultGrid"
import { DefaultBox } from "../../../../components/Box/DefaultBox"
import { DefaultTypography } from "../../../../components/Labels/Typography"
import { SkipLine } from "../../../../components/SkipLine/styles"
import { PasswordTextField } from "../../../../components/TextField/TextField"
import { DefaultButton } from "../../../../components/Button/Default/DefaultButton"
import { handleResetPassword } from "../../../../services/Login/resetpassword"
import { Footer } from "../../../../components/Footer/Footer"

const ResetPasswordCard = () => {
    const [password, setPassword] = useState("")
    const [RepeatPassword, setRepeatPassword] = useState("")
    const params = useParams()
    const [goToLogin, setGoToLogin] = useState(false)

    if (goToLogin){
      return <Navigate to="/signin" />
    }

    const ResetPassword = () => {

      const data = {
        AccountId: params.accountId.substr(10), // Obter o ID da conta de uma melhor forma Ex: Algo que a gente só informe a palavra dentro da url e ele tras o valor que ela vale
        NewPassword: password
      }

      console.log(data)
      handleResetPassword(data).then(res => res.data.success ? setGoToLogin(true) : console.log(res))
                                               .catch(err => console.log(err))

    };

    return(
      <Grid>
        <DefaultBox width="600" height="400" >
          <Box paddingTop="40px" >
            <DefaultTypography variant="h4" color="#0E6BA8" textAlign="center" paddingTop="35" text="Alteração de Senha" />
          </Box>
          <Box textAlign="center" paddingTop="30px" >
            <Box>
              <SkipLine />
              <PasswordTextField variant="standard" label="Informe sua nova senha" width="300px" onChange={(value) => setPassword(value.target.value)} />
            </Box>
            <Box paddingTop="30px">
              <SkipLine />
              <PasswordTextField variant="standard" label="Informe sua nova senha novamente" width="300px" onChange={(value) => setRepeatPassword(value.target.value) } />
            </Box>
            <Box textAlign="center" paddingTop="30px" >
              <SkipLine />
              <DefaultButton onClick={ResetPassword} backgroundColor="#0E6BA8" title="Confirmar" />
            </Box>
          </Box>
        </DefaultBox>
      </Grid>
    );

};

export default ResetPasswordCard;