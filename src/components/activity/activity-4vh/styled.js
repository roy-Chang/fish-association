import styled from "@emotion/styled";
import SeaGirl from "../../../assets/img/Activity/bg-sea.jpg";
export const BgSea = styled.div`
  background-image: url(${SeaGirl});
  max-width: 90%;
  margin: 0 auto;
  background-size: 60%;
  background-position: top;
  height: 1300px;
  position: relative;
`;
export const WeatherInfo = styled.div`
  max-width: 86%;
  top: 600px;
  left: 80px;
  text-align: center;
  position: absolute;
  border: #fff579 solid 1px;
  box-shadow: 0 0 0 81px #1d3557;
  z-index: 999;
  h2 {
    font-size: 56px;
    border-bottom: 3px solid #fff579;
    display: inline-block;
    margin: 40px 0;
  }
  h3 {
    font-size: 32px;
  }
  ul {
    padding: 50px;
    justify-content: space-around;
    font-size: 24px;
  }
  ul > li > div {
    padding: 20px;
  }
`;
// export const SignUpDetail = styled.div``;
// export const SignUpPrice = styled.div``;
// export const SignUpBtn = styled.div``;
// export const BgBlue = styled.div``;
export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
