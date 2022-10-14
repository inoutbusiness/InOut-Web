import React from 'react';

import { Box } from "@mui/material";
import { useState } from "react";
import { Navigate, useParams  } from 'react-router-dom'; 
import { Grid } from "../../../../components/Grid/DefaultGrid"
import { DefaultBox } from "../../../../components/Box/DefaultBox"
import { DefaultTypography } from "../../../../components/Labels/Typography"
import { DefaultTextField } from "../../../../components/TextField/TextField"
import { SkipLine } from "../../../../components/SkipLine/styles"
import { DefaultButton } from "../../../../components/Button/Default/DefaultButton"
import { handleEmailCodeChecker } from "../../../../services/Login/coderesetpasswordcard"
import { Footer } from "../../../../components/Footer/Footer"

const CodeResetPasswordCard = () => {
    const [codeN1, setCodeN1] = useState("");
    const [codeN2, setCodeN2] = useState("");
    const [codeN3, setCodeN3] = useState("");
    const [codeN4, setCodeN4] = useState("");
    const [codeN5, setCodeN5] = useState("");
    const [codeN6, setCodeN6] = useState("");
    const [goToResetPassword, setGoToResetPassword] = useState(false);
    const params = useParams();

    const joinCodeNums = () => {
      return codeN1 + codeN2 + codeN3 + codeN4 + codeN5 + codeN6;
    };

    if (goToResetPassword){
      var urlWithAccountId = "/resetPassword/" + params.accountId;
      return <Navigate to={urlWithAccountId} />
    };

    const EmailCodeChecker = () => {

      handleEmailCodeChecker(JSON.stringify(joinCodeNums())).then(res => res.data.success ? setGoToResetPassword(true) : console.log(res.data.message))
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
                              onChange={(value) => setCodeN1(value.target.value)} />

            <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }} width="60px" height="50px" 
                              onChange={(value) => setCodeN2(value.target.value)} />

            <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }} width="60px" height="50px" 
                              onChange={(value) => setCodeN3(value.target.value)} />

            <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }} width="60px" height="50px" 
                              onChange={(value) => setCodeN4(value.target.value)} />

            <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }} width="60px" height="50px" 
                              onChange={(value) => setCodeN5(value.target.value)} />
                              
            <DefaultTextField variant="outlined" type="number" inputProps={{ inputProps: { max: 9, min: 0 } }} width="60px" height="50px" 
                              onChange={(value) => setCodeN6(value.target.value)} />
          </Box>
          <Box textAlign="center">
            <SkipLine paddingTop="80" />
            <DefaultButton onClick={EmailCodeChecker} backgroundColor="#0E6BA8" title="Confirmar" />
          </Box>
        </DefaultBox>
      </Grid>
    );
}

export default CodeResetPasswordCard;