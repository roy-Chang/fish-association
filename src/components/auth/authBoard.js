import React from "react";
import "./MemberJoin.css";
import Bubbles from "./bubbles/Bubbles";
import Board from "./board/Board";

function authBoard() {
  return (
    <>
      <div>
        <aside className="AmemberAside">
          <div className="AheaderTitle">
            <h1 className="AbigTitle">加入會員</h1>
          </div>
          <div className="AmemberPage">
            <Board />
            <Bubbles />
          </div>
        </aside>
      </div>
    </>
  );
}

export default authBoard;
