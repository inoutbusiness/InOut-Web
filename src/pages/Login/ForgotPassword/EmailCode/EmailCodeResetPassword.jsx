import React from 'react';

import { Box } from "@mui/material";
import { Navigate } from 'react-router-dom'; 
import { Grid } from "../../../../components/Grid/DefaultGrid"
import { DefaultBox } from "../../../../components/Box/DefaultBox"
import { DefaultTypography } from "../../../../components/Labels/Typography"
import { DefaultTextField } from "../../../../components/TextField/TextField"
import { SkipLine } from "../../../../components/SkipLine/styles"
import { DefaultButton } from "../../../../components/Button/Default/DefaultButton"
import { handleEmailCodeChecker } from "../../../../services/Login/coderesetpasswordcard"

export default class CodeResetPasswordCard extends React.PureComponent {

  constructor(props) {
    super(props);

    this.accountId = window.location.pathname.substring(24); // Melhorar

    this.state = {
      codeN1: "",
      codeN2: "",
      codeN3: "",
      codeN4: "",
      codeN5: "",
      codeN6: "",
      goToResetPassword: false
    }
  }

  render() {

    const joinCodeNums = () => {
      return this.state.codeN1 + this.state.codeN2 + this.state.codeN3 + this.state.codeN4 + this.state.codeN5 + this.state.codeN6;
    };

    if (this.state.goToResetPassword){
      var urlWithAccountId = "/resetPassword/" + this.accountId;
      return <Navigate to={urlWithAccountId} />
    };

    const EmailCodeChecker = () => {

      handleEmailCodeChecker(JSON.stringify(joinCodeNums()))
      .then
      (
        res => res.data.success ? this.setState({ goToResetPassword: true }) : console.log(res.data.message)
      )
      .catch(err => console.log(err))
    }
    
    return (
      <Grid>
        <DefaultBox width="1000" height="500" >
          <Box>
            <SkipLine paddingTop="40" />
            <DefaultTypography variant="h3" color="#0E6BA8" textAlign="center" paddingTop="35" text="Código enviado!" />
          </Box>
          <Box>
            <SkipLine paddingTop="20" />
            <DefaultTypography variant="h6" color="#0E6BA8" textAlign="center" paddingTop="35" 
                               text="Enviamos um código no Email informado anteriormente, este código tem validade de X minutos 
                                     e deve ser colocado nos campos abaixo para que você possa refazer sua senha." />
          </Box>
          <Box textAlign="center" >
            <SkipLine paddingTop="50" />
            <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }} width="60px" height="50px" 
                              onChange={(value) => this.setState({ codeN1: value.target.value }) }/>

            <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }} width="60px" height="50px" 
                              onChange={(value) => this.setState({ codeN2: value.target.value })} />

            <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }} width="60px" height="50px" 
                              onChange={(value) => this.setState({ codeN3: value.target.value })} />

            <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }} width="60px" height="50px" 
                              onChange={(value) => this.setState({ codeN4: value.target.value })} />

            <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }} width="60px" height="50px" 
                              onChange={(value) => this.setState({ codeN5: value.target.value })} />
                              
            <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }} width="60px" height="50px" 
                              onChange={(value) => this.setState({ codeN6: value.target.value })} />
          </Box>
          <Box textAlign="center">
            <SkipLine paddingTop="80" />
            <DefaultButton onClick={EmailCodeChecker} backgroundColor="#0E6BA8" title="Confirmar" />
          </Box>
        </DefaultBox>
      </Grid>
    );
  }
}