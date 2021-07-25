import React, { useState } from "react";
import axios from "axios";
import "./MemberCSS/MemberCoupon.css";

//引入折價券圖片
import coupon from "../../../assets/img/member/membercoupon/coupon.png";

function MemberCoupon() {
  const [data, setData] = useState({});
  React.useEffect(() => {
    axios.get("http://localhost:5000/api/profile").then((serverResponse) => {
      const member = serverResponse.data.member;
      setData(member);
    });
  }, []);
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
          <div className="MCcouponQuantity">X{data.discount_count}</div>
        </div>
      </div>
    </>
  );
}

export default MemberCoupon;
