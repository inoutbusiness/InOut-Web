// Single imports
import React from "react"
import cpfCnpjChange from "../../../commom/signinCommom"
import InputMask from "react-input-mask"

import { Box, TextField } from "@mui/material"
import { DefaultTextField, PasswordTextField } from "../../../components/TextField/TextField"
import { DefaultBox } from "../../../components/Box/DefaultBox"
import { Grid } from "../../../components/Grid/DefaultGrid"
import { SkipLine } from "../../../components/SkipLine/styles"
import { DefaultButton } from "../../../components/Button/Default/DefaultButton"
import { DefaultIconButton } from "../../../components/Icons/IconButton"
import { handleSignUp } from "../../../services/Login/signup"

export default class SignUpCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cpfCnpjRequest: "",
      emailRequest: "",
      firstNameRequest: "",
      lastNameRequest: "",
      phoneRequest: "",
      passwordRequest: "",
      showPassword: false
    }
  }

  render() {

    const handleClickShowPassword = () => { this.setState({ showPassword: !this.state.showPassword }); };

    const SignUp = () => {
      var data = {
        Email: this.state.emailRequest,
        Password: this.state.passwordRequest,
        FirstName: this.state.firstNameRequest,
        LastName: this.state.lastNameRequest,
        CpfCnpj: this.state.cpfCnpjRequest,
        Phone: this.state.phoneRequest.replace(/\D/g,''),
        BranchId: 1
      }

      handleSignUp(data)
    }

    return (
        <Grid>
          <DefaultBox width="500" height="800">
            <div id="content">
              <Box>
                <SkipLine paddingTop="40" />
                <DefaultTextField value={this.state.cpfCnpjRequest} variant="outlined" label="CPF/CNPJ" type="email"
                  onChange={(value)=> this.setState({cpfCnpjRequest: cpfCnpjChange(value)})} />
              </Box>
              <Box>
                <SkipLine paddingTop="40" />
                <DefaultTextField label="E-mail" variant="outlined" type="email" onChange={(value)=>
                  this.setState({emailRequest: value.target.value})} />
              </Box>
              <Box>
                <SkipLine paddingTop="40" />
                <PasswordTextField label="Senha" variant="outlined" type={this.state.showPassword ? "text" : "password"
                  } onChange={(value)=> this.setState({passwordRequest: value.target.value})} />
                  <DefaultIconButton onClick={handleClickShowPassword} showPassword={this.state.showPassword} />
              </Box>
              <Box>
                <PasswordTextField label="Senha Novamente" variant="outlined" type={this.state.showPassword ? "text"
                  : "password" } onChange={(value)=> this.setState({ passwordRequest: value.target.value })} />
              </Box>
              <Box>
                <SkipLine paddingTop="40" />
                <DefaultTextField label="Nome" variant="outlined" type="text" onChange={((value)=>
                  this.setState({firstNameRequest: value.target.value}))} />
              </Box>
              <Box>
                <SkipLine paddingTop="40" />
                <DefaultTextField label="Sobrenome" variant="outlined" type="text" onChange={(value)=>
                  this.setState({lastNameRequest: value.target.value})} />
              </Box>
              <Box>
                <SkipLine paddingTop="40" />
                <InputMask mask="+99 (99) 9 9999-9999" disabled={false} maskChar=" " onChange={(value)=>
                  this.setState({phoneRequest: value.target.value})}>
                  { () =>
                  <TextField label="Telefone" variant="outlined" type="text" /> }
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
}