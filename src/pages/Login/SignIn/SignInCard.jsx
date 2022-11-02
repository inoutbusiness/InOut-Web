import { useState } from "react"
import logo from "../../../assets/InOutLogo-withoutBackground.png"

import { Box, Link } from "@mui/material"
import { Navigate } from "react-router-dom"
import { Grid } from "../../../components/Grid/DefaultGrid"
import { DefaultBox } from "../../../components/Box/DefaultBox"
import { DefaultButton } from "../../../components/Button/Default/DefaultButton"
import { SkipLine } from "../../../components/SkipLine/styles"
import { DefaultTextField, PasswordTextField } from "../../../components/TextField/TextField"
import { DefaultTypography } from "../../../components/Labels/Typography"
import { handleSignIn } from "../../../services/Login/signin"
import { setUserInfo } from "../../../services/Getters/lsUserInfoService"
import { setToken } from "../../../services/Getters/lsTokenService"

import "../../../styles/LoginCard.css"
import "../../../services/apiMap"

export default function SignInCard() {

  const [emailRequest, setEmailRequest] = useState("");
  const [passwordRequest, setpasswordRequest] = useState("");
  const [goToHomePage, setgoToHomePage] = useState(false);

  if (goToHomePage){
    return <Navigate to="/Home" />
  }

  const SignIn = () => {

    var data = {
      email: emailRequest,
      password: passwordRequest,
    }

    handleSignIn(data)
    .then(function(res){

      setToken(res.data.data.tokenData.token);
      setUserInfo(res.data.data.userAccountModel);
      setgoToHomePage(true);
    })
    .catch(function(err)
    {
      alert(err);
    })
  }

  return (
    <Grid style={{ backgroundColor: "#03112C" }}>
      <DefaultBox width="400" height="600">
        <div id="content">
          <Box sx={{ marginLeft: "-15px" }}>
            <img src={logo} alt="InOut" width="150" height="150" loading="lazy" style={{ marginLeft: "27%" }} />
            <DefaultTextField label="E-mail" variant="outlined" type="email" onChange={(value) => setEmailRequest(value.target.value) } />
          </Box>
          <Box sx={{ marginLeft: "-15px" }}>
            <SkipLine paddingTop="40" />
            <PasswordTextField label="Senha" variant="outlined" type="password" onChange={(value) => setpasswordRequest(value.target.value) } />
          </Box>
          <Box>
            <Link href="/forgotmypassword" underline="none"
              style={{ color: "#0E6BA8", float: "right", marginBottom: 30, marginTop: 10 }}>
            Esqueci minha senha
            </Link>
          </Box>
          <Box textAlign="center">
            <DefaultButton onClick={SignIn} backgroundColor="#0E6BA8" title="Login" width="250px" height="50px" />
          </Box>
          <DefaultTypography variant="h6" color="#0E6BA8" textAlign="center" text="OU" paddingTop="15px"
            paddingBottom="15px" />
          <Box textAlign="center">
            <DefaultButton href="/signup" backgroundColor="#0E6BA8" title="Registrar" width="250px" height="50px" />
          </Box>
        </div>
      </DefaultBox>
    </Grid>
  );
}