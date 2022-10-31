import React from "react"
import Sidebar from "../../components/Sidebar/Sidebar"
import avatar from "../../assets/avatar.png"

import { Footer } from "../../components/Footer/Footer"
import { DefaultBox } from "../../components/Box/DefaultBox";
import { DefaultTextField } from "../../components/TextField/TextField";
import { DefaultButton } from "../../components/Button/Default/DefaultButton";
import { Box } from "@mui/system";
import { SkipLine } from "../../components/SkipLine/styles";
import { getUserId, setUserInfo } from "../../services/Getters/lsUserInfoService"
import { handleUpdateUserAccountInfo } from "../../services/UserAccount/profileCallAPI"

import "./profile.css"

export default class ProfileCard extends React.PureComponent{
  
  constructor(props) {
    super(props);

    const userInfo = JSON.parse(localStorage.getItem('accessUserInfo'))

    this.state = {
      userInfoFirstName: userInfo.firstName,
      userInfoLastName: userInfo.lastName,
      userInfoCpfCnpj: userInfo.cpfCnpj,
      userInfoPhone: userInfo.phone,
      userInfoBirthDate: userInfo.birthDate,
      userInfoEmail: userInfo.email
    };
  }
  
  render() {

    const UpdateUserAccountInfo = () => {

      var dataRequest = {
        FirstName: this.state.userInfoFirstName,
        LastName: this.state.userInfoLastName,
        CpfCnpj: this.state.userInfoCpfCnpj,
        Phone: this.state.userInfoPhone,
        BirthDate: this.state.userInfoBirthDate,
        Email: this.state.userInfoEmail
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
      .catch(err => alert(err));
    }

    return (
      <div>
        <Sidebar content={
          <div>
            <div style={{ marginLeft: "10%" }}>
              <DefaultBox width="1200" height="600">
                <div style={{ marginLeft: "8%", marginTop: "5%", position: "relative" }}>
                  <Box sx={{ float: "left" }}>
                    <DefaultTextField label="E-mail" variant="standard" type="email" value={ this.state.userInfoEmail }
                                      onChange={(e) => this.setState({ userInfoEmail: e.target.value })} />
                    <SkipLine paddingTop="50" />
                    <DefaultTextField label="FirstName" variant="standard" type="text" value={ this.state.userInfoFirstName } 
                                      onChange={(e) => this.setState({ userInfoFirstName: e.target.value })} />
                    <SkipLine paddingTop="50" />
                    <DefaultTextField label="LastName" variant="standard" type="text" value={ this.state.userInfoLastName } 
                                      onChange={(e) => this.setState({ userInfoLastName: e.target.value })} />
                  </Box >
                  <Box sx={{ float: "left", marginLeft: "5%", position: "relative" }}>
                    <DefaultTextField label="CpfCnpj" variant="standard" type="text" value={ this.state.userInfoCpfCnpj } 
                                      onChange={(e) => this.setState({ userInfoCpfCnpj: e.target.value })} />
                    <SkipLine paddingTop="50" />
                    <DefaultTextField label="Phone" variant="standard" type="text" value={ this.state.userInfoPhone } 
                                      onChange={(e) => this.setState({ userInfoPhone: e.target.value })} />
                    <SkipLine paddingTop="50" />
                    <DefaultTextField label="BirthDate" variant="standard" type="text" value={ this.state.userInfoBirthDate } 
                                      onChange={(e) => this.setState({ userInfoBirthDate: e.target.value })} />
                  </Box>
                  <Box sx={{ float: "left", marginLeft: "12%", marginTop: "5.4%", position: "relative" }}>
                    <img class="image" src={avatar} alt="<3>" 
                         style={{ height: 150,
                                  width: 150,
                                  maxHeight: { xs: 310, md: 250 },
                                  maxWidth: { xs: 250, md: 250 },
                                  border: "solid 1px",
                                  borderRadius: "10%" }} 
                    />
                  </Box>
                 <Box sx={{ position: "absolute", marginTop: "40%" }}>
                   <DefaultButton backgroundColor="#0E6BA8" title="Atualizar" onClick={UpdateUserAccountInfo} 
                                  width="300px" height="50px" />
                 </Box>
               </div>
              </DefaultBox>
            </div>
            <div>
            <Footer />
            </div>
          </div>
        }/>
      </div>
    );
  }
}