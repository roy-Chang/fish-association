import styled from "@emotion/styled";

export const InfoDetail = styled.div`
  max-width: 50%;
  border-radius: 50px;
  background: rgb(115, 165, 186, 0.7);
  font-size: 18px;
  padding: 24px;
  &:hover {
    background: rgb(115, 165, 186, 0.9);
  }
  @media (max-width: 576px) {
    padding: 14px;
  }
`;
export const LeftLoc = styled.div`
  max-width: 30%;
  overflow: hidden;
  object-fit: contain;
  border-radius: 20px;
  img {
    clip-path: ellipse(23% 65% at 3% 5%);
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const LocationInfo = styled.div`
  max-width: 80%;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 90px;
  @media (max-width: 768px) {
    padding-bottom: 50px;
    max-width: 100%;
  }
  @media (max-width: 576px) {
    margin-top: 50px;
  }
`;
//height: 500px;
//position: relative;
export const InfoContent = styled.div`
  margin-left: 50px;
  flex-direction: column;
  position: relative;
  @media (max-width: 576px) {
    margin-left: 15px;
  }
  h2 {
    font-size: 48px;
    border-bottom: 3px solid #fff579;
    width: 550px;
    margin: 40px 0;
  }
  h2 span {
    font-size: 32px;
  }
`;
export const InfoSchedule = styled.div`
  margin-left: 50px;
  font-size: 18px;
  border-left: solid 3px #abdadc;
  @media (max-width: 576px) {
    margin-left: 0px;
    border-left: none;
  }
  li {
    margin: 10px;
  }
`;
export const RightLoc = styled.div`
  overflow: hidden;
  object-fit: contain;
  position: absolute;
  right: 0;
  bottom: 0;
  img {
    border-radius: 100% 0 20px 0;
    max-width: 350px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export const ButtonLoc = styled.div`
  right: 550px;
  top: 350px;
  position: absolute;
  svg:hover,
  svg:focus {
    fill: red;
    cursor: pointer;
  }
  img,
  svg,
  path {
    @media (max-width: 850px) {
      display: none;
    }
  }
`;
export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
