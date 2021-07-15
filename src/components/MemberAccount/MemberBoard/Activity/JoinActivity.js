import React from "react";
import vacation from "../../../../assets/img/member/memberVacation/vacation.jpg";

function JoinActivity() {
  return (
    <>
      <div className="MVcommodityVacation">
        <div className="MVcommodityVacationList">
          <img className="MVvacationPicture" src={vacation} alt="" />
          <div className="MVinformation">
            <div className="MVlistMargin MVlocation">正濱漁港(海釣活動)</div>
            <div className="MVlistMargin MVvacationDate">
              <div className="MVvacationTitle">日期:</div>
              <div className="MVvacationTime">2021/06/15 06:00:00</div>
            </div>
            <div className="MVlistMargin MVvacationJoin">
              <div className="MVjoinPeople">成人X2</div>
              <div className="MVjoinPay">共$3000元</div>
            </div>
            <button className="MVbtn">刪除</button>
          </div>
        </div>
        <hr />
        <div className="MVcommodityVacationList">
          <img className="MVvacationPicture" src={vacation} alt="" />
          <div className="MVinformation">
            <div className="MVlistMargin MVlocation">正濱漁港(海釣活動)</div>
            <div className="MVlistMargin MVvacationDate">
              <div className="MVvacationTitle">日期:</div>
              <div className="MVvacationTime">2021/06/15 06:00:00</div>
            </div>
            <div className="MVlistMargin MVvacationJoin">
              <div className="MVjoinPeople">成人X2</div>
              <div className="MVjoinPay">共$3000元</div>
            </div>
            <button className="MVbtn">刪除</button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default JoinActivity;
