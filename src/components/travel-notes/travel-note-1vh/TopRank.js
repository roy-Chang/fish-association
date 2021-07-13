import React from "react";
import { TopRankBlock } from "./styled";

import "./styles.css";

export default function TopRank() {
  return (
    <>
        <TopRankBlock className="TopRankBlock">
        <h1>推薦札記 Top 5</h1>
        <ul>
            <li>
                <a href="">1. GO！化身美人魚的台灣秘境–龍洞浮潛＆絕美小峽谷攀岩</a>
            </li>
            <hr></hr>
            <li>
                <a href="">2. 東北角潛水浮潛玩水吃吃喝喝一日遊</a>
            </li>
            <hr></hr>
            <li>
                <a href="">3. 新北市貢寮-龍洞灣海洋公園浮潛，划獨木舟找海星 </a>
            </li>
            <hr></hr>
            <li>
                <a href="">4. 出門走走‧看台灣 龍洞岬懶人浮潛初體驗</a>
            </li>
            <hr></hr>
            <li>
                <a href="">5. 龍洞灣海洋公園-天然的海泳池</a>
            </li>
        </ul>
            
        </TopRankBlock>
    </>
  );
}
