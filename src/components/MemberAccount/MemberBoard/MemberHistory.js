import React from "react";

import "./MemberCSS/MemberHistory.css";

//產品圖片
import fish from "../../../assets/img/member/memberHistory/fish.jpeg";
import shrimp from "../../../assets/img/member/memberHistory/shrimp.jpeg";
import squid from "../../../assets/img/member/memberHistory/squid.jpeg";

function MemberHistory() {
  return (
    <>
      <div className="MHmemberBoard">
        <div>
          <div className="MHmemberAcount">
            <h2 className="MHhistoryTitle">歷史清單</h2>
          </div>
          <hr />
        </div>
        <div className="MHhistoryAll">
          {/* --一組商品區塊頭-- */}
          <div className="MHhistoryList">
            <div className="MHitem">
              <img src={fish} alt="" />
              <div className="MHquantity">
                <div className="MHlist">鯊魚</div>
                <div className="MHnumber">X1</div>
              </div>
              <div className="MHdollar">$300</div>
            </div>
            <hr />
            <div className="MHitem">
              <img src={shrimp} alt="" />
              <div className="MHquantity">
                <div className="MHlist">蝦子</div>
                <div className="MHnumber">X1</div>
              </div>
              <div className="MHdollar">$200</div>
            </div>
            <hr />
            <div className="MHitem">
              <img src={squid} alt="" />
              <div className="MHquantity">
                <div className="MHlist">小卷</div>
                <div className="MHnumber">X1</div>
              </div>
              <div className="MHdollar">$100</div>
            </div>
            <hr />
            <div className="MHtotal">
              <div className="MHtotalPrice">$600</div>
              <div className="MHdiscount">$420</div>
              <div className="MHdiscountDate">By 2021/06/09 08:20:15</div>
            </div>
          </div>
          {/* --一組商品區塊尾-- */}

          {/* --一組商品區塊頭-- */}
          <div className="MHhistoryList">
            <div className="MHitem">
              <img src={fish} alt="" />
              <div className="MHquantity">
                <div className="MHlist">鯊魚</div>
                <div className="MHnumber">X1</div>
              </div>
              <div className="MHdollar">$300</div>
            </div>
            <hr />
            <div className="MHitem">
              <img src={shrimp} alt="" />
              <div className="MHquantity">
                <div className="MHlist">蝦子</div>
                <div className="MHnumber">X1</div>
              </div>
              <div className="MHdollar">$200</div>
            </div>
            <hr />
            <div className="MHitem">
              <img src={squid} alt="" />
              <div className="MHquantity">
                <div className="MHlist">小卷</div>
                <div className="MHnumber">X1</div>
              </div>
              <div className="MHdollar">$100</div>
            </div>
            <hr />
            <div className="MHtotal">
              <div className="MHtotalPrice">$600</div>
              <div className="MHdiscount">$420</div>
              <div className="MHdiscountDate">By 2021/06/09 08:20:15</div>
            </div>
          </div>
          {/* --一組商品區塊尾-- */}
        </div>
      </div>
    </>
  );
}

export default MemberHistory;
