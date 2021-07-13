import React from "react";
import "./MemberLogin.css";

function FormLogin(props) {
  return (
    <>
      <form>
        <div className="MLmemberEnter">
          <div className="MLitem">
            <label className="MLitemLabel" for="">
              會員帳號
            </label>
            <div className="MLitemContent">
              <input className="MLitemInput" type="text" />
              <div className="MLcheck MLcheckAccount">查無此帳號</div>
            </div>
          </div>
          <div className="MLitem">
            <label className="MLitemLabel" for="">
              密碼
            </label>
            <div className="MLtemContent">
              <input className="MLitemInput" type=" " />
              <div className="MLcheck MLcheckAccount">密碼輸入錯誤</div>
            </div>
          </div>
          <div className="MLitem MLitemVerification">
            <div className="MLitemContent">
              <div className="MLverification"></div>
              <div className="MLcheck MLcheckAccount">圖形驗證錯誤</div>
            </div>
          </div>
          <button className="MLbtn">登入</button>
        </div>
      </form>
    </>
  );
}
export default FormLogin;
