import React from "react";
import { Button } from "react-bootstrap";
import "./overCheck.css";

function overCheck() {
  return (
    <>
      <div className="cart">
        <div className="line">
          <svg className="circle circle1">
            <circle cx="20" cy="20" r="15" />
          </svg>
          <svg className="circle circle1">
            <circle cx="20" cy="20" r="15" />
          </svg>
          <svg className="circle circle1">
            <circle cx="20" cy="20" r="15" />
          </svg>
        </div>
        <div className="process">
          <div className="item">訂單確定</div>
          <div className="item">付款確定</div>
          <div className="item">付款完成</div>
        </div>
        <div className="overDeyail">
          <div className=""> 訂單編號 1</div>
          <div className=""> 訂單內容</div>
          <div className=""> 草蝦 *1 $100</div>
          <div className=""> 草蝦 *1 $100</div>
          <div className=""> 優惠券 *1 -$100</div>
          <div className=""> 總金額： $100</div>
          <div className=""> 運送方式： 宅急便</div>
          <div className=""> 付款方式： 信用卡</div>
          <div className=""> 訂購人姓名： 嗨嗨嗨</div>
          <div className=""> 收件人地址： 台北市中正區中正路中正1號5樓</div>
          <div className=""> 電話： 0911111111</div>
        </div>
        <div className="btnStep3">
          <Button className="btn3 backBtn">上一頁</Button>
          <Button className="btn3 overCheckBtn">訂單確定</Button>
        </div>
      </div>
    </>
  );
}

export default overCheck;
