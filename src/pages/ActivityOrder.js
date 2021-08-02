import React from "react";
import FirstOrder from "../components/activity/activity-order/FirstStep/FirstOrder";
import SecondOrder from "../components/activity/activity-order/SecondStep/SecondOrder";
import Thirdpage from "../components/activity/activity-order/ThirdStep/ThirdOrder";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import "../assets/css/styled.css";
import "bootstrap/dist/css/bootstrap.min.css";
function ActivityOrder() {
  //判斷是到第幾個步驟，並顯示當頁畫面
  const { step } = useParams();
  return (
    <>
      <div className="activity-wrapper">
        {step === "first" && <FirstOrder />}
        {step === "second" && <SecondOrder />}
        {step === "third" && <Thirdpage />}
      </div>
    </>
  );
}

export default ActivityOrder;
