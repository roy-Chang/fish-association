import React from "react";

import TNBoardSingle from "./TNBoardSingle"

import "./styles.css"

function BoardBlock() {
  return (
    <>
        <div className="TN-board-block">
            <div className="TN-board-wrapper">
                <h3 style={{fontSize:"20px"}}>留言板</h3>
                <div>
                    <TNBoardSingle />
                    <TNBoardSingle />
                    <TNBoardSingle />
                </div>
            </div>
        </div>
    </>

  );
}

export default BoardBlock;