import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

import vacation from "../../../../assets/img/member/memberVacation/vacation.jpg";

function JoinActivity() {
  const [data, setData] = useState({});
  const token = localStorage.getItem("token");
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile/activity", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((serverResponse) => {
        const myActivity = serverResponse.data;
        console.log(myActivity);
        setData(myActivity);
        // return myActivity;
      });
  }, []);
  return (
    <>
      <div className="MVcommodityVacation">
        {/* {data.map((toActivity, i) => {
          return (
            <>
              <div className="MVcommodityVacationList" key={i}>
                <img className="MVvacationPicture" src={vacation} alt="" />
                <div className="MVinformation">
                  <div className="MVlistMargin MVlocation">
                    {data[i].activity_info_model.place}(
                    {data[i].activity_info_model.activity_name})
                  </div>
                  <div className="MVlistMargin MVvacationDate">
                    <div className="MVvacationTitle">日期:</div>
                    <div className="MVvacationTime">{data[i].start_time}</div>
                  </div>
                  <div className="MVlistMargin MVvacationJoin">
                    <div className="MVjoinPeople">成人X2</div>
                    <div className="MVjoinPay">共$3000元</div>
                  </div>
                </div>
              </div>
              <hr />
            </>
          );
        })} */}

        <div className="MVcommodityVacationList">
          <img className="MVvacationPicture" src={vacation} alt="" />
          <div className="MVinformation">
            <div className="MVlistMargin MVlocation">
              {/* {data[0].activity_info_model.place}(
              {data[0].activity_info_model.activity_name}) */}
            </div>
            <div className="MVlistMargin MVvacationDate">
              <div className="MVvacationTitle">日期:</div>
              <div className="MVvacationTime">
                {/* {data[0].activity_info_model.start_time} */}
              </div>
            </div>
            <div className="MVlistMargin MVvacationJoin">
              <div className="MVjoinPeople">成人X{data.length}</div>
              <div className="MVjoinPay">
                {/* 共${data[0].activity_info_model.cost_adult * data.length}元 */}
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default JoinActivity;
