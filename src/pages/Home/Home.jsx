import Sidebar from "../../components/Sidebar/Sidebar"

import { Footer } from "../../components/Footer/Footer"

export default function Home(){
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