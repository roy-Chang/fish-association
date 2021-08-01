import React from "react";
import "./cart.css";
//react icons
import { BsTag } from "react-icons/bs";






function Detail() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <>
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
                <p className="spitemProduct">草蝦X1</p>
                <p className="spitemPrice">定價$100</p>
              </div>
              <div className="itemPrice">$90</div>
            </div>
          </div>
          <hr />
          <div className="product">
            <img className="pimg" src="./images/shrimp.jpg" alt="" />
            <div className="pitem">
              <div className="spitem">
                <p className="spitemProduct">草蝦X1</p>
                <p className="spitemPrice">定價$100</p>
              </div>
              <div className="itemPrice">$90</div>
            </div>
          </div>
          <hr />
        </div>
        <div className="coupon">
          <div className="addCoupon">
            <p><BsTag style={{width: '30px', height: '30px', marginRight: '10px', color: '#AB20FD'}}/>新增優惠券</p>
            <svg className="svg">
              <line className="couBtn" x1="10" y1="10" x2="20" y2="20" />
              <line className="couBtn" x1="20" y1="20" x2="30" y2="10" />
            </svg>
          </div>
          <hr />
        </div>
        <div className="pay">
          <div className="payItem all">
            <p className="allCode">原金額</p>
            <p className="allPay">$180</p>
          </div>
          <div className="payItem useCoupon">
            <p className="useCouponWord">優惠券</p>
            <p className="useCouponPay">$100</p>
          </div>
          <div className="payItem total">
            <p className="totalCode">總計</p>
            <p className="totalpay">$80</p>
          </div>
        </div>
        
      
    </>
  );
}

export default Detail;
