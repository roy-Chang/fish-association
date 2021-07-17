import styled from '@emotion/styled';

export const Shap = styled.div`
  max-width: 100%;
  display: flex;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 1.2vh;
  :hover {
    background: rgba(253, 227, 167, 1);
    cursor: pointer;
  }
  p {
      font-weight: 900;
      text-align: center;
      margin: 0;
      padding: 0.7vh 1vw 0.7vh 1vw;
      flex: 1;
      background: ${props => props.color || '#9ED0E6' || "#FFCC5B" || "#C9C4BB" || "#F18634"};
  }
  div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 9;
  }
`