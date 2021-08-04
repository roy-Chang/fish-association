import styled from "@emotion/styled";

export const SignUpHead = styled.div`
  margin-top: 200px;
  border-radius: 20px 20px 0 0;
  text-align: center;
  position: relative;
  z-index: 1000;
  h2 {
    font-size: 48px;
    border-bottom: 3px solid #fff579;
    display: inline-block;
    margin: 48px 0px;
  }
  .seagull {
    max-width: 400px;
    height: 500px;
    object-fit: contain;
    position: absolute;
    right: 125px;
    top: -300px;
  }
`;
export const SignUpArea = styled.div`
  max-width: 80%;
  margin: auto;
  margin-top: 10px;
  ul {
    justify-content: center;
    border-radius: 10px;
    margin: 0;
  }
  ul li {
    border-left: #1d3557 1px solid;
  }
  a {
    color: white;
    font-size: 24px;
    padding: 10px 20px;
    background: rgb(185, 185, 185, 0.3);
    line-height: 1.5;
    display: block;
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
  padding: 50px 65px;
  width: 50%;
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
    font-size: 18px;
  }
  ul {
    padding-inline-start: 0;
  }
  li {
    justify-content: space-between;
    font-size: 18px;
  }
`;
export const SignUpBtn = styled.div`
  margin-left: 70px;
  font-size: 20px;
  border-left: solid 3px #abdadc;
  li {
    margin: 10px;
  }
`;
export const BgBlue = styled.div`
  max-width: 80%;
  background: #1d3557;
  height: 70vh;
  border-radius: 20px 20px 0 0;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
