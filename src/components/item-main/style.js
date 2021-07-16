import styled from "@emotion/styled";

import grandma from "../../assets/img/Item/grandma.jpg";
import fresh from "../../assets/img/Item/fresh.png";
import tank from "../../assets/img/Item/tank.png";
//title part css
export const OutsideWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 100px;
`;
export const Banner = styled.div`
  height: 75vh;
  position: relative;
  background:  
      /*多重背景寫法用逗號隔開*/ /* url("圖") 橫向位置 直向位置 / 寬度 高度*/ url(${grandma});
  background-size: cover;
  background-color: rgba(168, 119, 119, 0.5);
`;
export const Tank = styled.div`
  position: absolute;
  right: 5%;
  top: 20%;
  height: 30vh;
  width: 160vh;
  background: url(${tank});
  background-size: auto;
`;
export const Logo = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background: black;
  position: absolute;
  left: 10%;
  top: 20%;
  background: url(${fresh});
`;
export const SeafoodCatalog = styled.div`
  position: absolute;
  height: 25vh;
  width: 160vh;
  bottom: 5%;
  right: 5%;
  background-color: yellow;
  img {
    width: 25%;
    height:100%
  }
`;
export const AsideNav = styled.div`
text-align:center;
  margin:30px;
  padding:10px;
  background-color: var(--main-color);
  border-radius: 10px;
  font-size: 20px;
  line-height:200%;
`;
export const MainItemList = styled.div`
  margin:30px auto;
  background-color: var(--second-color);
  border-radius: 10px;
  
  width:100%;
  height:100vh;
`;
export const ItemCard = styled.div`
  margin:10px;
  background-color: var(--forth-color);
  border-radius: 10px;
  
  width:100%;
  height:200px;
`;
