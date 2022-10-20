import React from 'react';

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import "./styles.css"

export function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' />
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                InOut - Resumo
              </h6>
              <p>
                A proposta do InOut é facilitar ao maximo o trabalho das empresas em relação
                a estoque. *Continuar*
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contato</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Arthur - Guilherme - Matheus
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                  inOut.empresa@gmail.com
              </p>  
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Copyright - InOut
      </div>
    </MDBFooter>
  );
}