import styled from "@emotion/styled";

export const SignUpHead = styled.div`
  margin-top: 200px;
  border-radius: 20px 20px 0 0;
  text-align: center;
  position: relative;
  z-index: 1000;
  @media (max-width: 768px) {
    margin-top: 100px;
  }
  @media (max-width: 576px) {
    margin-top: 50px;
  }
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
    @media (max-width: 850px) {
      display: none;
    }
  }
`;
export const SignUpArea = styled.div`
  max-width: 80%;
  margin: auto;
  margin-top: 10px;
  @media (max-width: 576px) {
    margin-left: 8%;
  }
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
    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 576px) {
      padding: 5px 10px;
    }
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
  display: flex;
  flex-direction: row;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const SignUpPrice = styled.div`
  padding: 50px 65px;
  width: 50%;
  background: #92b7b0;
  border-radius: 0 20px 20px 0;
  position: relative;
  text-align: left;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    border-radius: 0px;
  }
  h3 {
    font-size: 24px;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  .age {
    color: #efead2;
    font-size: 18px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  ul {
    padding-inline-start: 0;
  }
  li {
    justify-content: space-between;
    font-size: 18px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
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
  @media (max-width: 768px) {
    max-width: 100%;
    height: 80vh;
  }
`;
export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
