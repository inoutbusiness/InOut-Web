import styled from 'styled-components';

export const Box = styled.div`
background: #0E6BA8;
position: absolute;
padding-top: 10px;
bottom: 0;
left: 0;
rigth: 0;
width: 100vw;
height: auto;
@media (max-width: 1000px) {
  padding: 70px 30px;
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`