import React from "react";
import Sixthpage from "../components/activity/activity-order/FirstStep/FirstOrder";
import Seventhpage from "../components/activity/activity-order/SecondStep/TestSecondOrder";
import Eighthpage from "../components/activity/activity-order/ThirdStep/ThirdOrder";
import {
  Wrapper,
  Bg_blue,
} from "../components/activity/activity-order/FirstStep/styled";
import "../assets/css/styled.css";
import "bootstrap/dist/css/bootstrap.min.css";
function ActivityPage() {
  return (
    <>
      <div className="activity-wrapper activity-bg-green">
        <Wrapper className="justify-content-center mt-5">
          <Bg_blue>
            <Seventhpage />
          </Bg_blue>
        </Wrapper>
      </div>
    </>
  );
}

export default ActivityPage;
