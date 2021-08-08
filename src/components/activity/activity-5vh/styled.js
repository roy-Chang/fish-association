import styled from "@emotion/styled";
import SeaGirl from "../../../assets/img/Activity/bg-sea.jpg";
export const BgSea = styled.div`
  background-image: url(${SeaGirl});
  margin: 0 auto;
  background-size: 100%;
  background-position: top;
  width: 1012px;
  height: 300px;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const DivingPic = styled.img`
  width: 360px;
  display: block;
  clip-path: circle(70% at 50% 0);
  position: absolute;
  left: 33%;
  top: 15%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BlogList = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 950px;
  }
  @media (max-width: 576px) {
    margin-top: 1100px;
  }
  h2 {
    font-size: 48px;
    border-bottom: 3px solid #fff579;
    display: inline-block;
    margin: 40px 0px 60px;
  }
`;
export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
