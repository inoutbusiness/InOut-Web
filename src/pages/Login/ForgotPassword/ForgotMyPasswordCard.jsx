import React from "react"
import Footer from "../../../components/Footer/Footer"

import { Box } from "@mui/material"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { DefaultBox } from "../../../components/Box/DefaultBox"
import { Grid } from "../../../components/Grid/DefaultGrid"
import { DefaultTypography } from "../../../components/Labels/Typography"
import { SkipLine } from "../../../components/SkipLine/styles"
import { DefaultTextField } from "../../../components/TextField/TextField"
import { DefaultButton } from "../../../components/Button/Default/DefaultButton"
import { handleSendResetPasswordCodeEmail } from "../../../services/Login/forgotmypassword"
import { getAccountIdByEmail } from "../../../services/Getters/account"

const ForgotMyPasswordCard = () => {
  const [emailRequest, setEmailRequest] = useState("");
  const [goToResetPassword, setGoToResetPassword] = useState(false);
  const [accountId, setAccountId] = useState("");
  
  if (goToResetPassword && accountId != ""){                                  //
    var urlWithAccountId = "/emailCodeResetPassword/accountId=" + accountId;  // Validar a possibilidade de melhorar isso    
    return <Navigate to={urlWithAccountId} />                                 //
  }
  
  const SendResetPasswordCodeEmail = () => {
    try {

      handleSendResetPasswordCodeEmail(emailRequest)

      setGoToResetPassword(true);
      
      getAccountIdByEmail(emailRequest).then(res => setAccountId(res.data.data))
                                       .catch(err => console.log(err))
    }catch(err) {
      console.log("Erro ao Enviar email: " + err)
    }
  }
    
  return (
    <Grid>
      <DefaultBox width="950" height="500">
        <SkipLine paddingTop="40" />
        <DefaultTypography variant="h3" color="#0E6BA8" textAlign="center" paddingTop="35" text="Redefina sua senha" />
          <DefaultTypography variant="h6" color="#0E6BA8" textAlign="center" paddingTop="35" 
                             text="Informe seu Email e vamos enviar um código de 6 dígitos para que você possa refazer sua senha." />
            <Box textAlign="center" >
              <SkipLine paddingTop="80" />
              <DefaultTextField label="Informe seu Email" variant="outlined" type="email" placeholder="name@example.com" width="600px"
                                onChange={(value) => setEmailRequest(value.target.value)} />
            </Box>
            <Box textAlign="center" >
              <SkipLine paddingTop="100" />
              <DefaultButton onClick={SendResetPasswordCodeEmail} backgroundColor="#0E6BA8" title="Enviar Código" />
            </Box>
        </DefaultBox>
      <Footer />
    </Grid>
  );
}

export default ForgotMyPasswordCard;