import styled from '@emotion/styled';

export const Wrapper = styled.div`
 height: 25vh;
 display: flex;
 background-color: white;
 border-radius: 20px;
 overflow: hidden;
 margin: 10px 20px 0 20px;
 position: relative;
 figure {
    width: 50%;
    overflow: hidden;
    margin: 0;
 }
 img {
     width: 100%;
     object-fit: cover;
 }
`

export const Card = styled.div`
  width: 50%;
  padding: 10px;
  position: relative;
  h2 {
      margin: 0;
      font-size: 1.3vw;
  }
  p {
    font-size: 1vw;
    color: #8A8A8A;
    margin: 0;
  }
`;

export const Money = styled.div`
  margin-top: 2vh;
  margin-bottom: 0.5vh;
  span {
    color: #457B9D;
    font-weight: 900;
  }
`
export const BtnInfo = styled.button`
  background-color: #457B9D;
  font-size: 0.9vw;
  color: white;
  border: none;
  padding: 0.8vh 1vw 0.8vh 1vw;
  border-radius: 8px;
  cursor: pointer;
`