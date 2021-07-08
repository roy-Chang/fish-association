import styled from "@emotion/styled";

export const InfoDetail = styled.div`
  max-width: 50%;
  border-radius: 50px;
  background: rgb(115, 165, 186, 0.7);
  font-size: 24px;
  padding: 23px;
`;
export const LeftLoc = styled.div`
  max-width: 35%;
  overflow: hidden;
  object-fit: contain;
  border-radius: 20px;
  img {
    clip-path: ellipse(35% 80% at 5% 5%);
  }
`;
export const LocationInfo = styled.div`
  margin-top: 90px;
  border-radius: 20px;
`;

export const InfoContent = styled.div`
  max-width: 65%;
  flex-direction: column;
  position: relative;
  height: 600px;
  h2 {
    font-size: 70px;
    border-bottom: 3px solid #fff579;
    display: inline-block;
    margin: 60px 0;
  }
  h2 span {
    font-size: 32px;
    display: inline-block;
  }
`;
export const InfoSchedule = styled.div`
  margin-left: 70px;
  font-size: 24px;
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
    max-width: 370px;
  }
`;
export const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
