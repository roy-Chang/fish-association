import React from "react";
import Firstpage from "../components/activity/activity-1vh/Firstpage";
import Secondpage from "../components/activity/activity-2vh/Secondpage";

function ActivityPage() {
  return (
    <>
      <div style={{ height: "4000px" }}>
        <Firstpage />
        <Secondpage />
      </div>
    </>
  );
}

export default ActivityPage;
