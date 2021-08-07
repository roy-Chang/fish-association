import React from "react";
import { BsHeartFill } from "react-icons/bs";
import "./styles.css";

// img import
// import board from '../../../assets/img/travel-notes/board.png'
import { Link } from "react-router-dom";
const moment = require("moment")

export default function TNBlock(props) {

  const notesData = props.data;
  console.log(notesData);
  return (
    <>
      {notesData.map((notesListData) => {
        return(
        <div className="article-block p-3 mx-5">
          {/* <div className="pic-block px-3">
              <img className="board-pic" src={board} alt="" />
          </div> */}
          <div className="article-content px-2">
              <div>
                <h3 style={{textAlign:"end",fontSize:"16px",opacity:"0.6",margin:"0"}}>發表日期 : {moment(notesListData.note_update_time).format("YYYY-MM-DD")}</h3>
              </div>
              <h1 className="TN-block-link"><Link to={`/travelNotes/${notesListData.id}`}>{notesListData.note_name}</Link></h1>
              <p>作者：{notesListData.members_model.name}</p>
              <p className="TN-content-limit">{notesListData.note_content}</p>
          </div>
        </div>
        )
      })}
    </>
  );
}