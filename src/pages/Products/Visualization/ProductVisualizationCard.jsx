import Sidebar from "../../../components/Structured/Sidebar/Sidebar"

import { useState, useEffect } from "react"
import { Footer } from "../../../components/Structured/Footer/Footer"
import { BACKGROUNDS } from "../../../config/defaultColors"
import { handleGetAllUsersInfo } from "../../../services/Getters/users"
import { ActionButtons } from "../../../components/Basic/Button/Default/DefaultButton"
import { HeaderTable } from "../../../components/Structured/Table/Headers/ProductsHeader/HeaderTable"
import { DefaultTable } from "../../../components/Structured/Table/DefaultTable"

export default function ProductVisualizationCard() {

  var [registros, setRegistros] = useState();
  const columns = [ // Achar uma forma de melhorar isso
    {
      Header: "First Name",
      accessor: "firstName",
      width: 200
    },
    {
      Header: "Last Name",
      accessor: "lastName",
      width: 200
    },
    {
      Header: "CpfCnpj",
      accessor: "cpfCnpj",
      width: 200
    },
    {
      Header: "Phone",
      accessor: "phone",
      width: 200
    },
    {
      Header: "BirthDate",
      accessor: "birthDate",
      width: 200
    },
    {
      Header: "Actions",
      accessor: "actions",
      width: 250,
      Cell: () => (
        <ActionButtons hrefSearch="/" hrefEdit="/" onClickRemove={() => { alert("removendo") }} />
      )
    }
  ];

  useEffect(() => { // call api only once || important to fetch data from api endpoints
    handleGetAllUsersInfo()
    .then(function(res){
      setRegistros(res.data);
    })
    .catch(function(err)
    {
      alert(err);
    });

  }, [/* qtd calls */]);
  
  return (
    <div>
      <div style={{ backgroundColor: BACKGROUNDS.WhiteTheme }}>
        <Sidebar content={ 
          <div>
            <div>
              <DefaultTable title="Produtos" data={registros} columns={columns} headerTable={ <HeaderTable title="Produtos" /> } />
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