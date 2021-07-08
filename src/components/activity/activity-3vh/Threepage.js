import React, { Component } from "react";
import Calendardate from "./Calendar";
import StarRating from "./StarRating";
import {
  SignUpHead,
  SignUpArea,
  SignUpDetail,
  SignUpPrice,
  BgBlue,
  Wrapper,
} from "./styled";
import Seagull from "../../../assets/img/Activity/seagull.png";
import { Button } from "react-bootstrap";

class Threepage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Wrapper>
          <SignUpHead className="wrapper">
            <BgBlue>
              <h2>活動報名</h2>
              <img src={Seagull} className="seagull" alt="seagull" />
              <SignUpArea className="sign-up-area">
                <ul className="d-flex">
                  <li>
                    <a href="#" style={{ borderRadius: "20px 0 0 0" }}>
                      正濱漁港
                    </a>
                  </li>
                  <li>
                    <a href="#">龜吼漁港</a>
                  </li>
                  <li>
                    <a href="#">深澳漁港</a>
                  </li>
                  <li>
                    <a href="#">龍洞</a>
                  </li>
                  <li>
                    <a href="#" style={{ borderRadius: "0 20px 0 0" }}>
                      基隆
                    </a>
                  </li>
                </ul>
              </SignUpArea>
              <SignUpDetail className="d-flex">
                <Calendardate className="calendar" id="calendar"></Calendardate>
                <SignUpPrice>
                  <h3>海釣活動報名</h3> <StarRating />
                  <div className="d-flex">
                    <ul>
                      <li>
                        成人<span className="age">(18-64歲)</span>
                      </li>
                      <li>
                        兒童<span className="age">(04-11歲)</span>
                      </li>
                      <li>
                        學生<span className="age">(12歲以上)</span>
                      </li>
                    </ul>
                    <ul>
                      <li>TWD 1500/每人</li>
                      <li>TWD 1250/每人</li>
                      <li>TWD 1500/每人</li>
                    </ul>
                  </div>
                  <Button className="sign-up-btn" href="#">
                    立即報名
                  </Button>
                </SignUpPrice>
              </SignUpDetail>
            </BgBlue>
          </SignUpHead>
        </Wrapper>
      </>
    );
  }
}

export default Threepage;
