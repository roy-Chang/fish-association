import styled from '@emotion/styled';

export const Container = styled.div`
  color: black;
  box-sizing: border-box;
  width: 50%;
  background: white;
  border-radius: 20px;
  text-align: center;
  margin-top: 15px;
  padding: 20px 20px 20px 20px;
  h1 {
      color: #000000;
      margin-bottom: 10px;
  }
  ul {
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
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