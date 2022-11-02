import Sidebar from "../../components/Sidebar/Sidebar"
import React from "react"

import { Footer } from "../../components/Footer/Footer"


export default function HomeCard() {
  return (
    <div>
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
  );
}