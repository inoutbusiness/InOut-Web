import { useState } from 'react';

import { Box } from "@mui/material";
import { Navigate } from 'react-router-dom'; 
import { Grid } from "../../../../components/Grid/DefaultGrid"
import { DefaultBox } from "../../../../components/Box/DefaultBox"
import { DefaultTypography } from "../../../../components/Labels/Typography"
import { DefaultTextField } from "../../../../components/TextField/TextField"
import { SkipLine } from "../../../../components/SkipLine/styles"
import { DefaultButton } from "../../../../components/Button/Default/DefaultButton"
import { handleEmailCodeChecker } from "../../../../services/Login/coderesetpasswordcard"

export default function CodeResetPasswordCard() {

  const [codeN1, setcodeN1] = useState("");
  const [codeN2, setcodeN2] = useState("");
  const [codeN3, setcodeN3] = useState("");
  const [codeN4, setcodeN4] = useState("");
  const [codeN5, setcodeN5] = useState("");
  const [codeN6, setcodeN6] = useState("");
  const [goToResetPassword, setgoToResetPassword] = useState(false);
  
  const accountId = window.location.pathname.substring(24); // Melhorar

  if (goToResetPassword){
    var urlWithAccountId = "/resetPassword/" + accountId;
    return <Navigate to={urlWithAccountId} />
  };

  const EmailCodeChecker = () => {

    handleEmailCodeChecker(JSON.stringify(codeN1 + codeN2 + codeN3 + codeN4 + codeN5 + codeN6))
                          .then(res => res.data.success ? setgoToResetPassword(true) : console.log(res.data.message))
                          .catch(err => console.log(err));
  }
  
  return (
    <Grid>
      <DefaultBox width="1000" height="500">
        <Box>
          <SkipLine paddingTop="40" />
          <DefaultTypography variant="h3" color="#0E6BA8" textAlign="center" paddingTop="35" text="Código enviado!" />
        </Box>
        <Box>
          <SkipLine paddingTop="20" />
          <DefaultTypography variant="h6" color="#0E6BA8" textAlign="center" paddingTop="35" 
                             text="Enviamos um código no Email informado anteriormente, este código tem validade de X minutos 
                                   deve ser colocado nos campos abaixo para que você possa refazer sua senha." />
        </Box>
        <Box textAlign="center">
          <SkipLine paddingTop="50" />
          <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }}
                            width="60px" height="50px" onChange={(value) => setcodeN1() }/>

          <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }}
                            width="60px" height="50px" onChange={(value) => setcodeN2() } />

          <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }}
                            width="60px" height="50px" onChange={(value) => setcodeN3() } />

          <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }}
                            width="60px" height="50px" onChange={(value) => setcodeN4() } />

          <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }}
                            width="60px" height="50px" onChange={(value) => setcodeN5() } />

          <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }}
                            width="60px" height="50px" onChange={(value) => setcodeN6() } />
        </Box>
        <Box textAlign="center">
          <SkipLine paddingTop="80" />
          <DefaultButton onClick={EmailCodeChecker} backgroundColor="#0E6BA8" title="Confirmar" />
        </Box>
      </DefaultBox>
    </Grid>
  );
}