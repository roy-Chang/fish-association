import styled from '@emotion/styled';

export const Container = styled.div`
  color: black;
  box-sizing: border-box;
  width: 50%;
  background: white;
  border-radius: 20px;
  text-align: center;
  margin-top: 1.5vh;
  padding: 2vh 1.5vw 2vh 1.5vw;
  h1 {
      color: #000000;
      margin-bottom: 1.2vh;
  }
  ul {
    margin: 0;
    padding: 0;
    margin-bottom: 1.8vh;
  }
  li {
      font-size: 0.9vw;
      list-style-type: none;
      margin: 0;
      border-top: 1px solid #B8B8B8;
      border-buttom: 1px solid #B8B8B8;
  }
  button {
      background: #6D695F;
      border-radius: 8px;
      border: none;
      padding: 8px 30px 8px 30px;
      color: white;
      cursor: pointer;
      float: left;
  }
`