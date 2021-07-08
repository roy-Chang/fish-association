import styled from "@emotion/styled";
import SeaGirl from "../../../assets/img/Activity/bg-sea.jpg";
export const BgSea = styled.div`
  background-image: url(${SeaGirl});
  background-size: 100%;
  background-position: top;
  width: 1280px;
  height: 360px;
  margin: 0 auto;
  position: relative;
`;
export const DivingPic = styled.img`
  width: 360px;
  display: block;
  clip-path: circle(70% at 50% 0);
  position: absolute;
  left: 36%;
  top: 60%;
`;

export const BlogList = styled.div`
  padding: 50px;
  text-align: center;
  h2 {
    font-size: 70px;
    border-bottom: 3px solid #fff579;
    display: inline-block;
    margin: 60px 0;
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
