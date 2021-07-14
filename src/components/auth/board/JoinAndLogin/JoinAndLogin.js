import React from "react";
import { useState } from "react";

function JoinAndLogin() {
  return (
    <>
      <ul className="AitemUl">
        <li className="Aactive AjoinMember">
          <a activeClassName="Aactive">加入會員</a>
        </li>
        <li className="AloginMember">
          <a>會員登入</a>
        </li>
      </ul>
    </>
  );
}

export default JoinAndLogin;
