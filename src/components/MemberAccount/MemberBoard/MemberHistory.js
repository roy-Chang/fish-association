import React, { useState } from "react";
import axios from "axios";
import "./MemberCSS/MemberHistory.css";
import productsAll from "../../../utils/likeProducts";
const moment = require("moment");

const products = productsAll.myProducts;

function MemberHistory() {
  const [orderList, setOrderList] = useState([]);
  const token = localStorage.getItem("token");
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile/order", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((serverResponse) => {
        const myOrder = serverResponse.data;
        myOrder.reverse();
        console.log(myOrder);
        setOrderList(myOrder);
      });
  }, []);
  return (
    <>
      {/* {console.log(productsAll.myProducts)} */}
      <div className="MHmemberBoard">
        <div>
          <div className="MHmemberAcount">
            <h2 className="MHhistoryTitle">購買紀錄</h2>
          </div>
          <hr />
        </div>
        <div className="MHhistoryAll">
          {/* --一組商品區塊頭-- */}
          {orderList.map((order) => {
            return (
              <div className="MHhistoryList">
                {order.order_items.map((item) => {
                  const findProduct = products.find((product) => {
                    return product.id === item.product_id;
                  });
                  return (
                    <>
                      <div className="MHitem">
                        <img src={findProduct.image} alt="" />
                        <div className="MHquantity">
                          <div className="MHlist">
                            {findProduct.name} ${findProduct.price}
                          </div>
                          <div className="MHnumber">X{item.buy_num}</div>
                        </div>
                        <div className="MHdollar">
                          ${item.buy_num * findProduct.price}
                        </div>
                      </div>
                      <hr />
                    </>
                  );
                })}
                <div className="MHtotal">
                  <div className="MHtotalPrice">${order.original_total}</div>
                  <div className="MHdiscount">${order.pay_total}</div>
                  <div className="MHdiscountDate">
                    {moment(order.created_at).format("YYYY-MM-DD HH:mm:ss")}
                  </div>
                </div>
              </div>
            );
          })}

          {/* --一組商品區塊尾-- */}

          {/* --一組商品區塊頭-- */}
          {/* <div className="MHhistoryList">
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
          </div> */}
          {/* --一組商品區塊尾-- */}
        </div>
      </div>
    </>
  );
}

export default MemberHistory;
