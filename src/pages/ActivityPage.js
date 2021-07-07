import React from "react";
import Firstpage from "../components/activity/activity-1vh/Firstpage";
import Secondpage from "../components/activity/activity-2vh/Secondpage";
import '../assets/css/styled.css';
// import '../test.css';


function ActivityPage() {
  return (
    <>
      <div className="activity-wrapper" style={{height: '1000px'}}>
        <Firstpage/>
        <Secondpage/>
      </div>
    </>
  );
}

export default ActivityPage;
