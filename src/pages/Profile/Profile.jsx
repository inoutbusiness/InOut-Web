import React, { useState } from "react"
import Sidebar from "../../components/Structured/Sidebar/Sidebar"
import avatar from "../../assets/avatar.png"

import { Footer } from "../../components/Structured/Footer/Footer"
import { DefaultTextField } from "../../components/Basic/TextField/TextField";
import { DefaultButton } from "../../components/Basic/Button/Default/DefaultButton";
import { Box } from "@mui/system";
import { SkipLine } from "../../components/Basic/SkipLine/styles";
import { getUserId, setUserInfo } from "../../services/Getters/lsUserInfoService"
import { handleUpdateUserAccountInfo } from "../../services/UserAccount/profileCallAPI"
import { COLORS, BACKGROUNDS } from "../../config/defaultColors"

import "./styles.css"

export default function ProfileCard() {

  const userInfo = JSON.parse(localStorage.getItem('accessUserInfo'))

  const [userInfoFirstName, setUserInfoFirstName] = useState(userInfo.firstName)
  const [userInfoLastName, setUserInfoLastName] = useState(userInfo.lastName)
  const [userInfoCpfCnpj, setUserInfoCpfCnpj] = useState(userInfo.cpfCnpj)
  const [userInfoPhone, setUserInfoPhone] = useState(userInfo.phone)
  const [userInfoBirthDate, setUserInfoBirthDate] = useState(userInfo.birthDate)
  const [userInfoEmail, setUserInfoEmail] = useState(userInfo.email)

  const UpdateUserAccountInfo = () => {

    // useState({ FirstName: "", LastName: "" })

    var dataRequest = {
      FirstName: userInfoFirstName,
      LastName: userInfoLastName,
      CpfCnpj: userInfoCpfCnpj,
      Phone: userInfoPhone,
      BirthDate: userInfoBirthDate,
      Email: userInfoEmail
    };

    handleUpdateUserAccountInfo(getUserId(), dataRequest)
    .then(function(res){
      setUserInfo({
        birthDate: res.data.birthDate,
        cpfCnpj: res.data.cpfCnpj,
        email: res.data.email,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        phone: res.data.phone
      })
    })
    .catch(err => alert(err.response.data));
  }

  return (
    <div>
      <div style={{ backgroundColor: BACKGROUNDS.WhiteTheme }}>
        <Sidebar content={ 
          <div>
            <div style={{ marginLeft: "3%" }}>
              <Box p={10} px={2} mt="35px" style={{ border: "6px solid #e7ecf1", backgroundColor: "#ffff", height: "500px" }}>
                <div className="container">
                  <div style={{ display: "inline", float: "left", position: "absolute" }}>
                    <DefaultTextField label="E-mail" variant="standard" type="email" value={ userInfoEmail } onChange={(e)=> setUserInfoEmail(e.target.value) } />
                    <SkipLine paddingTop="50" />
                    <DefaultTextField label="FirstName" variant="standard" type="text" value={ userInfoFirstName } onChange={(e)=> setUserInfoFirstName(e.target.value) } />
                    <SkipLine paddingTop="50" />
                    <DefaultTextField label="LastName" variant="standard" type="text" value={ userInfoLastName } onChange={(e)=> setUserInfoLastName(e.target.value) } />
                    <SkipLine paddingTop="50" />
                  </div>
                  <div style={{ marginLeft: "25%", position: "absolute" }}>
                    <DefaultTextField label="CpfCnpj" variant="standard" type="text" value={ userInfoCpfCnpj } onChange={(e)=> setUserInfoCpfCnpj(e.target.value) } />
                    <SkipLine paddingTop="50" />
                    <DefaultTextField label="Phone" variant="standard" type="text" value={ userInfoPhone } onChange={(e)=> setUserInfoPhone(e.target.value) } />
                    <SkipLine paddingTop="50" />
                    <DefaultTextField label="BirthDate" variant="standard" type="text" value={ userInfoBirthDate } onChange={(e)=> setUserInfoBirthDate(e.target.value) } />
                    <SkipLine paddingTop="50" />
                  </div>
                  <div style={{ marginLeft: "70%" }}>
                    <img class="image" src={avatar} alt="testee" 
                         style={{ height: 150,
                                  width: 150,
                                  maxHeight: { xs: 310, md: 250 },
                                  maxWidth: { xs: 250, md: 250 },
                                  border: "solid 1px",
                                  borderRadius: "10%" }} 
                    />
                  </div>
                  <div style={{ marginTop: "10%" }}>
                    <DefaultButton backgroundColor={COLORS.PrimaryColor} title="Atualizar" 
                                   onClick={UpdateUserAccountInfo} width="300px" height="50px" />
                </div>
                </div>
              </Box>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        }/>
      </div>
    </div>
  );
}