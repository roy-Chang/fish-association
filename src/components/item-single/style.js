import styled from "@emotion/styled";

//title part css
export const TestRed = styled.div`
  background: red;
`;
export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
`;
export const Space = styled.div`
  width: 100%;
  margin: 5px;
`;
export const AsideNav = styled.div`
  /* margin-top: -50px; */
  padding: 15px;
  color:white;
  line-height: 36px;
  background-color: var(--main-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  a {
    padding: 10px;
  }
  a:hover {
    color: black;
    background-color: var(--second-color);
  }
`;

export const RankList = styled.div`
    color: white;
  > :first-child {
    color: orange;
    text-align: center;
  }
`;
export const RankListItem = styled.div`
  margin: 10px 0px 10px 0px;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  background-color: var(--main-color);

  img {
    text-align: center;
    margin-bottom: 30px;
    width: 100%;
    height: 100px;
  }
`;
export const ItemInfo = styled.div`
  font-size: 18px;
  text-align: left;
  line-height: 25px;
  position: relative;
  i {
    position: absolute;
    right: 10px;
    bottom: 30px;
  }
`;

export const DarkBlueBack = styled.div`
  width: 100%;
  padding: 30px 60px 30px 60px;
  background-color: var(--second-color);
  border-radius: 10px;
`;

export const MainForm = styled.div`
    font-size: 14px; 
  color: black;
   width: 100%;
   
   padding: 30px 60px 30px 60px;
   background-color: var(--forth-color);
   border-radius: 10px;
 }
 `;

export const PicGroup = styled.div`
  /* width: 40%; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainPic = styled.div`
  overflow: hidden;
  img {
    width: 100%;
    height: 200px;
    background-size: cover;
  }
`;

export const InputNumber = styled.div`
  width: 80px;
  padding: 0 12px;
  vertical-align: top;
  text-align: center;
  outline: none;

  border: 1px solid #ccc;
  height: 40px;
  user-select: none;
`;

export const InputNumberIncrease = styled.div`
  display: inline-block;
  width: 30px;
  line-height: 38px;
  background: #f1f1f1;
  color: #444;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  border: 1px solid #ccc;
  height: 40px;
  user-select: none;

  border-left: none;
  border-radius: 0 4px 4px 0;
`;

export const InputNumberDecrease = styled.div`
  display: inline-block;
  width: 30px;
  line-height: 38px;
  background: #f1f1f1;
  color: #444;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  border: 1px solid #ccc;
  height: 40px;
  user-select: none;

  border-right: none;
  border-radius: 4px 0 0 4px;
`;

export const Box = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: fill;
    padding-left: 5px;
    padding-top: 5px;
    transform: scale(2);
  }
`;

export const ClickImg = styled.div`
  display: flex;
`;

export const Buy = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* margin-left: 15%; */
  /* width: 60%; */
  p {
    margin-top: 10px;
  }
`;

export const ButtonList = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0%;
  display: flex;
  justify-content: space-between;
`;

export const MainItemInfo = styled.div`
  color: black;
  margin-top: 20px;
  width: 100%;
  padding: 20px;
  background-color: var(--forth-color);
  border-radius: 10px;
  h3 {
    font-size: 24px;
    font-weight: bolder;
    text-align: center;
    margin-bottom: 20px;
  }
`;
export const MainItemInfoPicture = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  img {
    width: 45%;
  }
`;

export const RelateItem = styled.div`
  color: black;
  margin-top: 20px;
  width: 100%;
  padding: 20px;
  background-color: var(--forth-color);
  border-radius: 10px;
  h3 {
    font-size: 24px;
    font-weight: bolder;
    text-align: left;
    margin-bottom: 20px;
  }
`;

export const RelateItemCard = styled.div`
  img {
    width: 100%;
    height: 120px;
  }
`;

export const ItemName = styled.div`
  color: #000;
  text-align: center;
`;

export const Price = styled.div`
  font-weight: bolder;
  color: var(--fifth-color);
  text-align: center;
`;
