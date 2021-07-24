import styled from "@emotion/styled";
export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
export const Bg_blue = styled.div`
  max-width: 70%;
  margin: 0 auto;
  background: #1d3557;

  border-radius: 20px;
  padding: 50px;
`;
export const ProgressBar = styled.div`
  margin: 0 auto;
  ul {
    display: flex;
    justify-content: space-around;
    padding-right: 40px;
  }
  li {
    font-size: 24px;
  }
`;

export const OrderSchedule = styled.div`
  font-size: 20px;
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    width: 100px;
  }
`;
export const Notice = styled.div`
  padding: 30px;
  border: solid white 1px;
  border-radius: 10px;
  h3 {
    font-size: 18px;
  }
  p {
    font-size: 16px;
  }
`;
