import styled from '@emotion/styled';
import secondBg from '../../../assets/img/2vh-bg.png';

//title part css
export const SecondBackground = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: url(${secondBg}) no-repeat;
  background-size: cover;
  font-family: sans-serif;
`

export const Navigation = styled.div`
  width: 100%;
  height: 65px;
  background: #1D3557;
  position: absolute;
`

export const Container = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 56vw;
  height: 85%;
  opacity: 88%;
  margin: 12vh 8vh 5vh 0;
  float: right;
  display: flex;
  flex-direction: column;
  background: #1D3557;
  border-radius: 20px;
  h1 {
    font-size: 1.8vw;
    margin: 0 auto;
  }
  hr {
    width: 7vw;
    margin: 0 0 0 20px;
    border: 2px solid #FFF579;
    border-radius: 5px;
    margin: 0 auto;
  }
`

export const WrapperInfo = styled.div`
 display: flex;
`