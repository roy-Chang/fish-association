import React from "react";
import Form from "react-bootstrap/Form";

// memberLevel : General & Golden
import General from "./MemberLevel/General";
import Golden from "./MemberLevel/Golden";

//導入圖片
import HeadPic from "../../../assets/img/member/memberAccount/handsome.jpg";
import GoldenMember from "../../../assets/img/member/memberAccount/goldenMember.png";

function MemberBoard() {
  return (
    <>
      <General />
      {/* <Golden /> */}
    </>
  );
}
export default MemberBoard;
