import React, {useState} from "react";
import "./cart.css";
//react icons
import { BsTag } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
//react redux
import { useSelector } from 'react-redux';





function Detail() {
  const shoppingCartList = useSelector((state) => state.shoppingCartList);

  //original total
  let sum = 0
  shoppingCartList.forEach((item) => {
      sum += item.price
  })
  //change true/false
  const handleClickState = () => {
    settransRotate(prevCheck => !prevCheck)
  }
 //useState
  const [transRotate, settransRotate] = useState(false)


  return (
    <>
        <div className="process">
          <div className="item">訂單確定</div>
          <div className="item">付款確定</div>
          <div className="item">付款完成</div>
        </div>
        <div className="products">
          {
            shoppingCartList.map((item) => (
              <>
                <div className="product">
                  <img className="pimg" src={item.image} alt="" />
                  <div className="pitem">
                    <div className="spitem">
                      <p className="spitemProduct">{item.name} X {item.buy_num}</p>
                    </div>
                    <div className="itemPrice">定價 ${item.price}</div>
                  </div>
                </div>
                <hr />
              </>
            ))
          }
        </div>
        <div className="coupon">
          <div className="addCoupon">
            <p><BsTag style={{width: '30px', height: '30px', marginRight: '10px', color: 'var(--blueLine)'}}/>新增優惠券</p>
            <IoIosArrowForward 
              className="arrowStyle"
              style={
                {
                  width: '25px', 
                  height: '25px', 
                  transform: `${transRotate === false ? 'rotate(0deg)': 'rotate(90deg)'}`,
                  cursor: 'pointer'
                }
              }
              onClick={handleClickState}
            />
          </div>
          <hr />
        </div>
        <div className="pay">
          <div className="payItem all">
            <p className="allCode">原金額</p>
            <p className="allPay">$ {sum}</p>
          </div>
          <div className="payItem useCoupon">
            <p className="useCouponWord">優惠券</p>
            <p className="useCouponPay">{transRotate === false ? '---------' : 'x 1'}</p>
          </div>
          <div className="payItem total">
            <p className="totalCode">總計</p>
            <p className="totalpay">{transRotate === false ? '$ ' + sum : '$ ' + (sum - 100) }</p>
          </div>
        </div>
        
      
    </>
  );
}

export default Detail;
