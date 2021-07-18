import styled from "@emotion/styled";

export const SignUpHead = styled.div`
  margin-top: 200px;
  border-radius: 20px 20px 0 0;
  text-align: center;
  position: relative;
  z-index: 1000;
  h2 {
    font-size: 56px;
    border-bottom: 3px solid #fff579;
    display: inline-block;
    margin: 60px 0;
  }
  .seagull {
    max-width: 450px;
    height: 500px;
    object-fit: contain;
    position: absolute;
    right: 58px;
    top: -300px;
  }
`;
export const SignUpArea = styled.div`
  max-width: 80%;
  margin: auto;
  margin-top: 40px;
  ul {
    justify-content: center;
    border-radius: 10px;
  }
  ul li {
    border-left: #1d3557 1px solid;
  }
  a {
    color: white;
    font-size: 32px;
    padding: 15px 30px;
    background: rgb(185, 185, 185, 0.3);
    line-height: 0;
  }
  a:hover,
  a:active {
    background: #457b9d;
    text-decoration: none;
  }
`;
export const SignUpDetail = styled.div`
  max-width: 90%;
  margin: auto;
`;

export const SignUpPrice = styled.div`
  padding: 70px;
  background: #92b7b0;
  border-radius: 0 20px 20px 0;
  position: relative;
  text-align: left;
  h3 {
    font-size: 24px;
    margin: 0;
  }
  .age {
    color: #efead2;
    font-size: 20px;
  }
  li {
    justify-content: space-between;
    font-size: 20px;
  }
`;
export const SignUpBtn = styled.div`
  margin-left: 70px;
  font-size: 24px;
  border-left: solid 3px #abdadc;
  li {
    margin: 10px;
  }
`;
export const BgBlue = styled.div`
  max-width: 90%;
  background: #1d3557;
  height: 70vh;
  border-radius: 20px 20px 0 0;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
