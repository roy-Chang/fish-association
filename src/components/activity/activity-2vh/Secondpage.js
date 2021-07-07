import React, { Component } from "react";
import "../../../assets/css/styled.css";
//import LocationInfo from "./LocationInfo";
import {
  InfoSchedule,
  InfoDetail,
  LocationInfo,
  LeftLoc,
  InfoContent,
  RightLoc,
  Wrapper,
} from "./styled";
import "react-bootstrap"; //Toast
import "bootstrap/dist/css/bootstrap.min.css";
import ChenPin from "../../../assets/img/Chen-Pin2.jpg";
import ChenPin2 from "../../../assets/img/Chen-Pin.jpg";

class Secondpage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Wrapper>
          <LocationInfo className="wrapper bg-blue d-flex">
            <LeftLoc>
              <img src={ChenPin} alt="Chen-Pin-Port" />
            </LeftLoc>
            <InfoContent className="d-flex">
              <h2>
                正濱漁港 <span>台灣版的彩虹島</span>
              </h2>
              <div className="d-flex">
                <InfoDetail>
                  <p>
                    嚴選豐富經驗船長+全套釣魚用具+尚青海鮮漁人料理，讓你釣好釣滿，吃飽心滿意足，然後滿載而歸！
                    有小管、白帶魚、透抽、鰹魚、竹筴魚等各種豐富漁獲，品味現撈海鮮料理。
                  </p>
                </InfoDetail>
                <InfoSchedule>
                  <ul>
                    <li>09:00從火車站出發</li>
                    <li>09:30 抵達目的地</li>
                    <li>12:00完成海釣</li>
                    <li>12:30回到溫暖的家</li>
                  </ul>
                </InfoSchedule>
              </div>
              <RightLoc>
                <img src={ChenPin2} alt="Chen-Pin-Port" />
              </RightLoc>
            </InfoContent>
          </LocationInfo>
        </Wrapper>
      </>
    );
  }
}

export default Secondpage;
