import styled from 'styled-components';

//mudar nome da box abaixo

export const DefaultBox = styled.div`
background-color: #FFFFFF;
border-radius: 15px;
width: ${props => props.width}px;
height: ${props => props.height}px;
align-items: center;
justify-content: center;
border: groove;
border-color: #0E6BA8;
box-shadow: 0 0 50px rgb(14, 107, 168);
display: ${props => props.display};
`;