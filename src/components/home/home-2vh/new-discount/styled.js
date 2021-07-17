import styled from '@emotion/styled';
// import imageOne from '../../../../images/discount-fish.png';

export const Container = styled.div`
  color: black;
  box-sizing: border-box;
  width: 50%;
  background: white;
  border-radius: 20px;
  text-align: center;
  margin-top: 1.5vh;
  margin-left: 15px;
  padding: 1.5vh 1.5vw 1.5vh 1.5vw;
  h1 {
      color: #000000;
      margin-bottom: 1.2vh;
  }
` 

export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  figure {
      margin: 0;
      width: 50%;
      border-radius: 20px 0 0 20px;
      overflow: hidden;
  }
 
  
`

export const ImageOne = styled.img`
  width: 100%;
  transition: all 0.5s;
  :hover {
    cursor: pointer;
  }
`
export const ImageTwo = styled.img`
  width: 100%;
  transition: all 0.5s;
  :hover {
    cursor: pointer;
  }
`

export const DiscoundCard = styled.div`
  background: #6D695F;
  color: white;
  font-weight: 900;

`



