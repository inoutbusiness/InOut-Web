import styled from 'styled-components';

export const Box = styled.div`
background: #0E6BA8;
position: fixed;
padding: 10px 10px 0px 10px;
bottom: 0;
width: 100%;
margin-top: 1rem;


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