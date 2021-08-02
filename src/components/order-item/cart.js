import React, { useState } from "react";
import Detail from "./detail/detail";
import Check from "./check/check";
import OverCheck from "./overCheck/overCheck";
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
//css
import './detail/cart.css'
//action creator
import { clearShoppingCartItems } from '../../redux/actions/shoppingCart'
//react redux
import { useDispatch } from 'react-redux';


function Cart() {
  //set step
  const [change, setChange] = useState(0);
  //dispatch
  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearShoppingCartItems())
  }

  
  //history
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
            change === 1 ? (<Check />) :
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
              <div className="btnStep">
                <Button 
                  className="cbtn"
                  onClick={() => {
                    setChange(change -1)
                  }}
                >
                  上一步
                </Button>
                <Button
                  className="cbtn"
                  onClick={() => {
                    setChange(change + 1)
                  }}
                >
                  確認訂單
                </Button>
              </div>
            ) :
            (
              <div className="btnStep">
                <Button
                  className="cbtn"
                  onClick={() => {
                    setChange(0)
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
