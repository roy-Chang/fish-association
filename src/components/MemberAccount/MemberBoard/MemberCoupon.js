import React from "react";

import "./MemberCSS/MemberCoupon.css";

//引入折價券圖片
import coupon from "../../../assets/img/member/membercoupon/coupon.png";

function MemberCoupon() {
  return (
    <>
      <div className="MCmemberBoard">
        <div className="MCmemberBoardTitle">
          <div className="MCmemberAcount">
            <h2 className="MChistoryTitle">優惠券</h2>
          </div>
          <hr />
        </div>
        <div className="MCcoupon">
          <img className="MCcouponPicture" src={coupon} alt="" />
          <div className="MCcouponQuantity">X5</div>
        </div>
      </div>
    </>
  );
}

export default MemberCoupon;
