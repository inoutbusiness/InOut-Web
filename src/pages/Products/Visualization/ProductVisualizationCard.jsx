import React from "react"
import Sidebar from "../../../components/Sidebar/Sidebar"
import PaginatedItems from "../../../components/Pagination/Paginate"

import { Footer } from "../../../components/Footer/Footer"
import { BACKGROUNDS } from "../../../config/defaultColors"

export default function ProductVisualizationCard() {
  return (
    <div>
      <div style={{ backgroundColor: BACKGROUNDS.WhiteTheme }}>
        <Sidebar content={ 
          <div>
            <div>
              <PaginatedItems itemsPerPage={10} />
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