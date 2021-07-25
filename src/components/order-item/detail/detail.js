import "./cart.css";
import { Button } from "react-bootstrap";
import React, { useState } from "react";

function detail(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [step, setStep] = useState(1);

  return (
    <>
      <div className="cart">
        <div className="line">
          <svg className="circle circle1">
            <circle cx="20" cy="20" r="15" />
          </svg>
          <svg className="circle">
            <circle cx="20" cy="20" r="15" />
          </svg>
          <svg className="circle">
            <circle cx="20" cy="20" r="15" />
          </svg>
        </div>
        <div className="process">
          <div className="item">訂單確定</div>
          <div className="item">付款確定</div>
          <div className="item">付款完成</div>
        </div>
        <div className="products">
          <div className="product">
            <img className="pimg" src="./images/shrimp.jpg" alt="" />
            <div className="pitem">
              <div className="spitem">
                <div className="spitemProduct">草蝦X1</div>
                <div className="spitemPrice">定價$100</div>
              </div>
              <div className="itemPrice">$90</div>
            </div>
          </div>
          <hr />
          <div className="product">
            <img className="pimg" src="./images/shrimp.jpg" alt="" />
            <div className="pitem">
              <div className="spitem">
                <div className="spitemProduct">草蝦X1</div>
                <div className="spitemPrice">定價$100</div>
              </div>
              <div className="itemPrice">$90</div>
            </div>
          </div>
          <hr />
        </div>
        <div className="coupon">
          <div className="addCoupon">
            <div>新增優惠券</div>
            <svg className="svg">
              <line className="couBtn" x1="10" y1="10" x2="20" y2="20" />
              <line className="couBtn" x1="20" y1="20" x2="30" y2="10" />
            </svg>
          </div>
          <hr />
        </div>
        <div className="pay">
          <div className="payItem all">
            <div className="allCode">原金額</div>
            <div className="allPay">$180</div>
          </div>
          <div className="payItem useCoupon">
            <div className="useCouponWord">優惠券</div>
            <div className="useCouponPay">$100</div>
          </div>
          <div className="payItem total">
            <div className="totalCode">總計</div>
            <div className="totalpay">$80</div>
          </div>
        </div>
        <div className="btnStep">
          <Button
            className="cbtn"
            onClick={() => {
              props.setChange(1);
            }}
          >
            下一步
          </Button>
        </div>
      </div>
    </>
  );
}

export default detail;
