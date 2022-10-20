import Sidebar from "../../components/Sidebar/Sidebar"
import avatar from "../../assets/avatar.png"

import { Footer } from "../../components/Footer/Footer"
import { DefaultBox } from "../../components/Box/DefaultBox";
import { DefaultTextField } from "../../components/TextField/TextField";
import { DefaultButton } from "../../components/Button/Default/DefaultButton";
import { Box } from "@mui/system";
import { SkipLine } from "../../components/SkipLine/styles";

import "./profile.css"

export default function ProfileCard(){
  return (
    <div>
      <Sidebar content={
        <div>
          <div style={{ marginLeft: "10%" }}>
            <DefaultBox width="1200" height="600">
              <div style={{ marginLeft: "8%", marginTop: "5%", position: "relative" }}>
                <Box sx={{ float: "left" }}>
                  <DefaultTextField label="E-mail" variant="outlined" type="email" />
                  <SkipLine paddingTop="50" />
                  <DefaultTextField label="FirstName" variant="outlined" type="text" />
                  <SkipLine paddingTop="50" />
                  <DefaultTextField label="LastName" variant="outlined" type="text" />
                </Box >
                <Box sx={{ float: "left", marginLeft: "5%", position: "relative" }}>
                  <DefaultTextField label="CpfCnpj" variant="outlined" type="text" />
                  <SkipLine paddingTop="50" />
                  <DefaultTextField label="Phone" variant="outlined" type="text" />
                  <SkipLine paddingTop="50" />
                  <DefaultTextField label="BirthDate" variant="outlined" type="text" />
                </Box>
                <Box sx={{ float: "left", marginLeft: "12%", marginTop: "5.4%", position: "relative" }}>
                  <img class="image" src={avatar} style={{ height: 150,
                            width: 150,
                            maxHeight: { xs: 310, md: 250 },
                            maxWidth: { xs: 250, md: 250 },
                            border: "solid 1px",
                            borderRadius: "10%" }} />
                </Box>
               <Box sx={{ position: "absolute", marginTop: "40%" }}>
                 <DefaultButton backgroundColor="#0E6BA8" title="Registrar" width="300px" height="50px" />
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <DefaultButton backgroundColor="#0E6BA8" title="Limpar" width="300px" height="50px" />
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