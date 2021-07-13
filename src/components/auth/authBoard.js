import React from "react";
import background from "../../assets/img/AuthBG/login-bg.png";
import "./MemberJoin.css";
import Board from "./board/Board";

function authBoard(props) {
  return (
    <>
      <div>
        <aside
          className="AmemberAside"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="AheaderTitle">
            <h1 className="AbigTitle">加入會員</h1>
          </div>
          <div className="AmemberPage">
            <Board />
            <div className="Aanimation">
              <div className="bubbles" num="50" duration="5"></div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default authBoard;
