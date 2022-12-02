import React from "react"
import Sidebar from "../../components/Structured/Sidebar/Sidebar"

import { Footer } from "../../components/Structured/Footer/Footer"
import { BACKGROUNDS } from "../../config/defaultColors"

export default function HomeCard() {
  return (
    <div>
      <div style={{ backgroundColor: BACKGROUNDS.WhiteTheme }}>
        <Sidebar content={ 
          <div>
            <div>
              
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