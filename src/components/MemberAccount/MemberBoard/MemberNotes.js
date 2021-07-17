import React from "react";
import { Button } from "react-bootstrap";
import "./MemberCSS/MemberNotes.css";
function MemberNotes() {
  return (
    <>
      <div className="MNmemberBoard">
        <div>
          <div className="MNmemberAcount">
            <h2 className="MNnotesTitle">我的札記</h2>
          </div>
          <hr />
        </div>
        <div className="MNnotesAll">
          <div className="MNListHr">
            <div className="MNnotesList">
              <div className="MNarticle-block">
                <div className="MNarticle-content">
                  <a href="">
                    GO！化身美人魚的台灣秘境GO！化身美人魚的台灣秘境
                    GO！化身美人魚的台
                  </a>
                  <p style={{ opacity: "0.5" }}>發表日期:2021/05/20 20:00:25</p>
                </div>
              </div>
              <Button className="MNbtnUpdate">修改</Button>
              <Button className="MNbtn">刪除</Button>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberNotes;
