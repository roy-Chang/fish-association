import React from "react";

// CSS style
import "../components/MemberAccount/MemberAccount.css";
// import "../../assets/css/normalize.css";

//
import MemberAside from "../components/MemberAccount/MemberAside";
import RWDTitle from "../components/MemberAccount/RWDTitle";

//List Icon
import accountIcon from "../assets/img/member/account.png";
import favoriteIcon from "../assets/img/member/favorite.png";
import noteIcon from "../assets/img/member/note.png";
import activeIcon from "../assets/img/member/active.png";
import clipboardIcon from "../assets/img/member/clipboard.png";
import dollarIcon from "../assets/img/member/dollar.png";

//導入圖片
import HeadPic from "../assets/img/member/memberAccount/handsome.jpg";
import GoldenMember from "../assets/img/member/memberAccount/goldenMember.png";

function Member(props) {
  return (
    <>
      <div className="MAactivity-wrapper">
        <nav></nav>
        <RWDTitle />
        <MemberAside />
        <footer></footer>
      </div>
    </>
  );
}

export default Member;
