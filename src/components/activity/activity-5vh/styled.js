import styled from "@emotion/styled";
import SeaGirl from "../../../assets/img/Activity/bg-sea.jpg";
export const BgSea = styled.div`
  background-image: url(${SeaGirl});
  margin: 0 auto;
  background-size: 100%;
  background-position: top;
  width: 45.5%;
  height: 350px;
  margin: 0 auto;
  position: relative;
`;
export const DivingPic = styled.img`
  width: 360px;
  display: block;
  clip-path: circle(70% at 50% 0);
  position: absolute;
  left: 33%;
  top: 40%;
`;

export const BlogList = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
  h2 {
    font-size: 56px;
    border-bottom: 3px solid #fff579;
    display: inline-block;
    margin: 40px 0;
  }
`;
export const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
export const BlogUserPic = styled.img`
  background-color: orange;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
