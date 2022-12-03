import React from "react"
import Sidebar from "../../../components/Structured/Sidebar/Sidebar"

import { useState } from "react";
import { Footer } from "../../../components/Structured/Footer/Footer"
import { BACKGROUNDS } from "../../../config/defaultColors"
import { DefaultBox } from "../../../components/Basic/Box/DefaultBox"
import { DefaultMultistep } from "../../../components/Structured/Multistep/MultistepForm"

import TestStep from "./TestStep"

export default function ProductRegistrationCard() {

  const [formData, setFormData] = useState({
    fieldTestOne: "",
    fieldTestTwo: "",
    fieldTestThree: ""
  });

  const steps = [
    { component: <TestStep formData={formData} setFormData={setFormData}></TestStep>, title: "Cadastro 1" },
    { component: <></>, title: "Cadastro 2" },
    { component: <></>, title: "Cadastro 3" }
  ]

  return (
    <div>
      <div style={{ backgroundColor: BACKGROUNDS.WhiteTheme }}>
        <Sidebar content={ 
          <div>
            <div style={{ marginLeft: "5%" }}>
              <DefaultBox width="1200px" height="700px">
                <DefaultMultistep steps={steps} />
              </DefaultBox>
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