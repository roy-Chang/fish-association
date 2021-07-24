import React, { Component } from "react";
import SignUp from "./SignUp";
import { SignUpHead, BgBlue, Wrapper } from "./styled";
import Seagull from "../../../assets/img/Activity/seagull.png";

class Threepage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Wrapper>
          <SignUpHead>
            <BgBlue>
              <h2>活動報名</h2>
              <img src={Seagull} className="seagull" alt="seagull" />
              <SignUp></SignUp>
            </BgBlue>
          </SignUpHead>
        </Wrapper>
      </>
    );
  }
}

export default Threepage;
