import React from "react"

import { Box } from "@mui/material"
import { Navigate } from "react-router-dom"
import { DefaultBox } from "../../../components/Box/DefaultBox"
import { Grid } from "../../../components/Grid/DefaultGrid"
import { DefaultTypography } from "../../../components/Labels/Typography"
import { SkipLine } from "../../../components/SkipLine/styles"
import { DefaultTextField } from "../../../components/TextField/TextField"
import { DefaultButton } from "../../../components/Button/Default/DefaultButton"
import { handleSendResetPasswordCodeEmail } from "../../../services/Login/forgotmypassword"
import { getAccountIdByEmail } from "../../../services/Getters/account"

export default class ForgotMyPasswordCard extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      emailRequest: "",
      goToResetPassword: false,
      accountId: ""
    };
  }
  
  render() {
    if (this.state.goToResetPassword && this.state.accountId !== ""){                      //
      var urlWithAccountId = "/emailCodeResetPassword/accountId=" + this.state.accountId;  // Validar a possibilidade de melhorar isso    
      return <Navigate to={urlWithAccountId} />                                            //
    }
    
    const SendResetPasswordCodeEmail = () => {

      handleSendResetPasswordCodeEmail(this.state.emailRequest);
  
      this.setState({ goToResetPassword: true });
      
      getAccountIdByEmail(this.state.emailRequest)
      .then(res => this.setState({ accountId: res.data.data }))
      .catch(err => console.log(err));
    }
      
    return (
      <Grid>
        <DefaultBox width="950" height="500">
          <SkipLine paddingTop="40" />
          <DefaultTypography variant="h3" color="#0E6BA8" textAlign="center" paddingTop="35"
            text="Redefina sua senha" />
          <DefaultTypography variant="h6" color="#0E6BA8" textAlign="center" paddingTop="35"
            text="Informe seu Email e vamos enviar um código de 6 dígitos para que você possa refazer sua senha." />
          <Box textAlign="center">
            <SkipLine paddingTop="80" />
            <DefaultTextField label="Informe seu Email" variant="outlined" type="email" placeholder="name@example.com"
              width="600px" onChange={(value)=> this.setState({ emailRequest: value.target.value })} />
          </Box>
          <Box textAlign="center">
            <SkipLine paddingTop="100" />
            <DefaultButton onClick={SendResetPasswordCodeEmail} backgroundColor="#0E6BA8" title="Enviar Código" />
          </Box>
        </DefaultBox>
      </Grid>
    );
  } 
}