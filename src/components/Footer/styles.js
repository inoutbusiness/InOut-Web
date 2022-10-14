import styled from 'styled-components';

// Alterar nome da box de baixo

export const BoxDifus = styled.div` 
  background: #0E6BA8;
  position: absolute;
  display: block;
  padding-top: 10px;
  bottom: 0;
  left: 0;
  rigth: 0;
  width: 100vw;
  height: auto;
  @media (max-heigth: 1000px){
    padding: 70px 30px;
  };
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`