import React from "react"
import Sidebar from "../../../components/Sidebar/Sidebar"

import { useState } from "react";
import { Footer } from "../../../components/Footer/Footer"
import { BACKGROUNDS } from "../../../config/defaultColors"
import { DefaultBox } from "../../../components/Box/DefaultBox"
import { DefaultMultistep } from "../../../components/Multistep/MultistepForm"

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
            <div style={{ marginLeft: "10%" }}>
              <DefaultBox width="1200" height="700">
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