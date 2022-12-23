import React from "react"
import Sidebar from "../../../components/Structured/Sidebar/Sidebar"

import { useState } from "react";
import { Footer } from "../../../components/Structured/Footer/Footer"
import { BACKGROUNDS } from "../../../config/defaultColors"
import { DefaultMultistep } from "../../../components/Structured/Multistep/MultistepForm"
import { Box } from "@material-ui/core";

import TestStep from "./TestStep"
import RegisterDetails from "./RegisterDetails"

export default function ProductRegistrationCard() {

  const [formData, setFormData] = useState({
    fieldTestOne: "",
    fieldTestTwo: "",
    fieldTestThree: ""
  });

  const steps = [
    { component: <TestStep formData={formData} setFormData={setFormData}></TestStep>, title: "Informe o produto" },
    { component: <RegisterDetails formData={formData} setFormData={setFormData}></RegisterDetails>, title: "Detalhes" },
    { component: <></>, title: "Confirmação" }
  ]

  return (
    <div>
      <div style={{ backgroundColor: BACKGROUNDS.WhiteTheme }}>
        <Sidebar content={ 
          <div>
            <div style={{ marginLeft: "3%" }}>
              <Box p={3} px={10} mt="35px" style={{ border: "6px solid #e7ecf1", backgroundColor: "#ffff" }}>
                <DefaultMultistep steps={steps} />
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