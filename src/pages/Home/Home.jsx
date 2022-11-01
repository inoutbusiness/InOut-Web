import Sidebar from "../../components/Sidebar/Sidebar"
import React from "react"

import { Footer } from "../../components/Footer/Footer"


export default class HomeCard extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
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
}