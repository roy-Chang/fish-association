import React from "react";
import { BsHeartFill } from "react-icons/bs";
import "./styles.css";

// img import
import board from '../../../assets/img/travel-notes/board.png'

export default function TNBlock() {
  return (
    <>
        <div className="article-block p-3 mx-5">
          <div className="pic-block px-3">
              <img className="board-pic" src={board} alt="" />
              {/* <img class="article-pic" src="/public/images/05-1.png" alt=""></img> */}
          </div>
          <div className="article-content px-2">
              <div className="article-btn">
                  <BsHeartFill />
              </div>
              <h1>GO！化身美人魚的台灣秘境–龍洞浮潛＆絕美小峽谷攀岩</h1>
              <p>作者：優尼 Mrs. Yuny</p>
              <p>說到台灣的浮潛勝地，絕對不會錯過『台北
                  東北角的龍洞』。『龍洞灣』是斷層陷落所形成的天然海灣，海灣內擁有豐富的海洋資源，目前有高達 80 種魚類在此棲息。</p>
          </div>
        </div>
    </>
  );
}