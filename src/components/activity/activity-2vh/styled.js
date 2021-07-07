import styled from "@emotion/styled";

export const InfoDetail = styled.div`
  max-width: 50%;
  border-radius: 50px;
  background: rgb(115, 165, 186, 0.7);
  font-size: 24px;
  padding: 25px;
`;
export const LeftLoc = styled.div`
  max-width: 40%;
  overflow: hidden;
  border-radius: 20px;
  img {
    clip-path: ellipse(35% 80% at 5% 5%);
  }
`;
export const LocationInfo = styled.div`
  margin-top: 90px;
  border-radius: 20px;
  height: 85vh;
`;

export const InfoContent = styled.div`
  max-width: 60%;
  flex-direction: column;
  position: relative;
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
  padding-top: 25px;
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
    border-radius: 100% 0 20% 0;
    max-width: 450px;
  }
`;
export const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
