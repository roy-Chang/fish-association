import styled from "@emotion/styled";

export const InfoDetail = styled.div`
  max-width: 50%;
  border-radius: 50px;
  background: rgb(115, 165, 186, 0.7);
  font-size: 20px;
  padding: 24px;
`;
export const LeftLoc = styled.div`
  max-width: 30%;
  overflow: hidden;
  object-fit: contain;
  border-radius: 20px;
  img {
    clip-path: ellipse(28% 70% at 5% 5%);
  }
`;
export const LocationInfo = styled.div`
  max-width: 90%;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 90px;
`;
//height: 500px;
//position: relative;
export const InfoContent = styled.div`
  margin-left: 50px;
  flex-direction: column;
  position: relative;
  h2 {
    font-size: 56px;
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
  font-size: 20px;
  border-left: solid 3px #abdadc;
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
    max-width: 300px;
  }
`;
export const ButtonLoc = styled.div`
  right: 600px;
  top: 350px;
  position: absolute;
  svg:hover,
  svg:focus {
    fill: red;
    cursor: pointer;
  }
`;
export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
