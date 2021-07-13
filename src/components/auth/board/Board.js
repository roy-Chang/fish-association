import React, { useState } from "react";

// import JoinAndLogin from "./JoinAndLogin/JoinAndLogin";
import Forms from "./Form/Forms";
import FormLogin from "./Form/FormLogin";

function Board(props) {
  const [change, setChange] = useState(true);

  return (
    <>
      <div className="AmemberContent">
        <div className="AloginItem">
          <ul className="AitemUl">
            <li className={`AjoinMember ${change ? "Aactive" : ""}`}>
              <a
                onClick={() => {
                  setChange(true);
                }}
              >
                加入會員
              </a>
            </li>
            <li className={`AloginMember ${change ? "" : "Aactive"}`}>
              <a
                onClick={() => {
                  setChange(false);
                }}
              >
                會員登入
              </a>
            </li>
          </ul>
          {change ? <Forms /> : <FormLogin />}
        </div>
      </div>
    </>
  );
}

export default Board;
