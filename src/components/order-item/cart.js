import React, { useState } from "react";
import Detail from "./detail/detail";
import Check from "./check/check";
import OverCheck from "./overCheck/overCheck";
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
//css
import './detail/cart.css'
//action creator
import { clearShoppingCartItems, cleartCartList, saveOrderDetailAll } from '../../redux/actions/shoppingCart'
//react redux
import { useDispatch, useSelector } from 'react-redux';


function Cart() {
  //set step
  const [change, setChange] = useState(0);
  //dispatch
  const dispatch = useDispatch();
  //clear cart list and content
  const clearCartItems = () => {
    dispatch(clearShoppingCartItems())
  }
  const handleClearCartList = () => {
    dispatch(cleartCartList())
  }
  //store state
  const shoppingCartList = useSelector((state) => state.shoppingCartList);
  const shoppingUseCoupon = useSelector((state) => state.shoppingOrderDetail);
  //original total
  let sum = 0
  shoppingCartList.forEach((item) => {
      sum += item.price
  })
  //原價
  let total = sum
  //總計
  sum = shoppingUseCoupon.discount_count === 1 ? sum - 100 : sum;
  //-----------------
  const prevBtn = () => {
    setChange(change -1)
  }
  const nextBtn = () => {
    setChange(change + 1)
  }

  //-----------history
  const history = useHistory()
  return (
    <>
      <div className="cart-wrapper">
        <div className="cart">
          {/*progress bar step*/}
          <div className="line">
            <svg 
              className="circle circle1" 
              style={{ 
                background: '#AB20FD',
                boxShadow: '0 0 20px #AB20FD'}}>

              <circle cx="20" cy="20" r="15" />
            </svg>
            <hr className="progress-line"/>
            <svg 
              className="circle" 
              style={
                change === 0 ?  
                {
                  background: '#1D3557'
                } 
                : 
                {
                  background: '#AB20FD',
                  boxShadow: '0 0 20px #AB20FD'
                }
              }>
              <circle cx="20" cy="20" r="15" />
            </svg>
            <svg 
              className="circle" 
              style={
                change === 0 || change === 1 ?  
                {
                  background: '#1D3557'
                } 
                : 
                {
                  background: '#AB20FD',
                  boxShadow: '0 0 20px #AB20FD'
                }
              }>
              <circle cx="20" cy="20" r="15" />
            </svg>
          </div>
          {/*元件轉換*/}
          {
            change === 0 ? (<Detail />) :
            change === 1 ? (<Check oringinSum={total} sum={sum} prevBtn={prevBtn} nextBtn={nextBtn}/>) :
            (<OverCheck />)
          }

          {/*btn轉換*/}
          {
            change === 0 ? (
              <div className="btnStep">
                <Button 
                  className="cbtn"
                  onClick={() => {
                    setChange(0)
                    clearCartItems()
                    handleClearCartList()
                    history.push('/products')
                  }}
                >
                  清空購物車
                </Button>
                <Button
                  className="cbtn"
                  onClick={() => {
                    setChange(1)
                  }}
                >
                  下一步
                </Button>
              </div>
            ) :
            change === 1 ? (
              <></>
              
            ) :
            (
              <div className="btnStep">
                <Button
                  className="cbtn"
                  onClick={() => {
                    setChange(0)
                    clearCartItems()
                    handleClearCartList()
                    history.push('/products')
                  }}
                >
                  完成
                </Button>
              </div>
            )
          }
          
        </div>
      </div>
      
    </>
  );
}

export default Cart;
