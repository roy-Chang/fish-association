import React from "react";

// authNAV 吃到MemberJoin.css
// CSS style
import "../components/MemberAccount/MemberAccount.css";
//元件
import MemberAside from "../components/MemberAccount/MemberAside";
import RWDTitle from "../components/MemberAccount/RWDTitle";

function Member(props) {
  return (
    <>
      {/* <nav className="authNAV" /> */}
      <div className="MAactivity-wrapper">
        <nav></nav>
        {/* <RWDTitle /> */}
        <MemberAside />
        {/* <footer></footer> */}
      </div>
    </>
  );
}

export default Member;
