import styled from '@emotion/styled';

export const Container = styled.div`
   position: absolute;
   width: 25vw;
   bottom: 0;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   font-family: sans-serif;
`;
export const TestRed = styled.div`
   background-color: red;
`;
export const CardBody = styled.div`
  margin:10px;
  background-color: var(--forth-color);
  border-radius: 10px;
  
  width:100%;
  height:200px;

  position:relative;
  img{
      width:100%;
      height:100px;
  }
`;
export const CardText = styled.div`
 color: black;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
export const CardLabel = styled.div`
  padding:5px;
  background: var(--fifth-color);
  position: absolute;
  bottom: 50px;
  right: 10px;
`;
export const CardIcon = styled.div`
  
  
  position: absolute;
  bottom: -20px;
  right: 10px;
`;

