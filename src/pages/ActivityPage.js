import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Firstpage from "../components/activity/activity-1vh/Firstpage";
import Secondpage from "../components/activity/activity-2vh/Secondpage";
import Threepage from "../components/activity/activity-3vh/Threepage";
import Forthpage from "../components/activity/activity-4vh/Forthpage";
import Fifthpage from "../components/activity/activity-5vh/Fifthpage";
import MainFooter from "../components/footer/MainFooter";

import "../assets/css/styled.css";
import "react-bootstrap"; //Toast
import "bootstrap/dist/css/bootstrap.min.css";

import FirstOrder from "../components/activity/activity-order/FirstStep/FirstOrder";
import SecondOrder from "../components/activity/activity-order/SecondStep/SecondOrder";
import ThirdOrder from "../components/activity/activity-order/ThirdStep/ThirdOrder";

function ActivityPage() {
  return (
    <>
      <Router>
        <div className="activity-wrapper activity-bg-green">
          <Firstpage />
          <Secondpage />
          <Threepage />
          <Forthpage />
          <Fifthpage />
          <MainFooter />
          <Route path="/signupFirst" component={FirstOrder} />
          <Route path="/signupSecond" component={SecondOrder} />
          <Route path="/signupThird" component={ThirdOrder} />
        </div>
      </Router>
    </>
  );
}

export default ActivityPage;
