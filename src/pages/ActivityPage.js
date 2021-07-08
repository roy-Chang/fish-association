import React from "react";
import Firstpage from "../components/activity/activity-1vh/Firstpage";
import Secondpage from "../components/activity/activity-2vh/Secondpage";
import Threepage from "../components/activity/activity-3vh/Threepage";
import Forthpage from "../components/activity/activity-4vh/Forthpage";
import Fifthpage from "../components/activity/activity-5vh/Fifthpage";
import "../assets/css/styled.css";
import "react-bootstrap"; //Toast
import "bootstrap/dist/css/bootstrap.min.css";

function ActivityPage() {
  return (
    <>
      <div className="activity-wrapper activity-bg-green">
        <Firstpage />
        <Secondpage />
        <Threepage />
        <Forthpage />
        <Fifthpage />
      </div>
    </>
  );
}

export default ActivityPage;
