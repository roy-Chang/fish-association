import React from "react";
import { useSelector } from 'react-redux';
import "./overCheck.css";



function OverCheck() {
  const orderDetailCustom = useSelector((state) =>  state.orderDetail )
  const name = useSelector((state) =>  state.shoppingOrderDetail )
  const itemsArr = useSelector((state) =>  state.shoppingCartList )
  
  

  return (
    <>
        <div className="overDeyail">
          <h4 style={{ textDecoration: 'underline'}}> 您的訂單編號 {orderDetailCustom.order_serial_number} </h4>
          <div>(*已發送至您的Email)</div>
          <div> 訂單內容</div>
          {
            itemsArr.map((item) => (
              <>
                <div key={item.id}>{item.name} * {item.buy_num} $ {item.price}</div>
              </>
            ))
          }
          <div> 優惠券 {orderDetailCustom.discount_count === 0 ? '無' : '*1 -$ 100'}</div>
          <div> 總金額： $ {orderDetailCustom.pay_total}</div>
          <div> 付款方式： { 
            orderDetailCustom.pay_way === 1 ?  '虛擬ATM' : 
            orderDetailCustom.pay_way === 2 ? '信用卡' :
            orderDetailCustom.pay_way === 3 ? 'Line' :
            'google pay' 
          }</div>
          <div> 運送方式： 
            {
              orderDetailCustom.deliver_way === 1 ? '黑貓宅急便' :
              orderDetailCustom.deliver_way === 2 ? '超商取貨' : '貨到付款'
            }
          </div>
          <div> 訂購人姓名： {name.name}</div>
          <div> 收件人地址： {`${orderDetailCustom.postal}${orderDetailCustom.city}${orderDetailCustom.address}`}</div>
        </div>
      
    </>
  );
}

export default OverCheck;
