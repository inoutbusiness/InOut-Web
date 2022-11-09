import Sidebar from "../../components/Sidebar/Sidebar"
import React from "react"

import { Footer } from "../../components/Footer/Footer"
import { BACKGROUNDS } from "../../config/defaultColors"

export default function HomeCard() {
  return (
    <div>
      <div style={{ backgroundColor: BACKGROUNDS.WhiteTheme }}>
        <Sidebar content={ 
          <div>

          </div>
        }/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}