import React, { useState } from "react";

import "./MemberActivity.css";
import JoinActivity from "./Activity/JoinActivity";
import HistoryActivity from "./Activity/HistoryActivity";

function MemberActivity() {
  const [change, setChange] = useState(true);

  return (
    <>
      <div className="MVmemberBoard">
        <ul className="MVitemUl">
          <li className={`MVleftBoardTitle ${change ? "MVactive" : ""}`}>
            <a
              onClick={() => {
                setChange(true);
              }}
            >
              活動報名
            </a>
          </li>
          <li className={`MVrightBoardTitle ${change ? "" : "MVactive"}`}>
            <a
              onClick={() => {
                setChange(false);
              }}
            >
              歷史報名
            </a>
          </li>
        </ul>
        {change ? <JoinActivity /> : <HistoryActivity />}
      </div>
    </>
  );
}

export default MemberActivity;
