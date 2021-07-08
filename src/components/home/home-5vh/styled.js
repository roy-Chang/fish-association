import styled from '@emotion/styled';
import fifthBg from '../../../assets/img/5vh-bg.png';

//title part css
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: #F1FAEE;
`

export const FifthBackground = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: url(${fifthBg}) no-repeat;
  background-size: cover;
  font-family: sans-serif;
  position: absolute;
`

export const Navigation = styled.div`
  width: 100%;
  height: 65px;
  background: #1D3557;
  position: absolute;
`

export const LoginCard = styled.div`
  width: 68vw;
  height: 65vh;
  background: #1D3557;
  border-radius: 50% 50% 0 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15vh;
  h1 {
    font-weight: 900;
    font-size: 2vw;
  }
  p {
    font-weight: 900;
  }
`

export const RegisterBtn = styled.button`
  padding: 15px 60px 15px;
  border: none;
  border-radius: 8px;
  background: #9ED0E6;
  font-weight: 900;
  font-size: x-large;
 
`