import styled from "@emotion/styled";
import SeaGirl from "../../../assets/img/Activity/bg-sea.jpg";
export const BgSea = styled.div`
  background-image: url(${SeaGirl});
  margin: 0 auto;
  background-size: 100%;
  background-position: top;
  width: 1024px;
  height: 300px;
  margin: 0 auto;
  position: relative;
`;
export const DivingPic = styled.img`
  width: 360px;
  display: block;
  clip-path: circle(70% at 50% 0);
  position: absolute;
  left: 33%;
  top: 15%;
`;

export const BlogList = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
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
export const BlogUserPic = styled.img`
  max-width: 90%;
  background-color: orange;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
