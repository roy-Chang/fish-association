import React, { useState, useEffect } from "react";
import "./detail/cart.css";
import Detail from "./detail/detail";
import Check from "./check/check";
import OverCheck from "./overCheck/overCheck";
import './detail/cart.css'
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

function Cart(props) {
  
  const [change, setChange] = useState(0);

  
  //history
  const history = useHistory()
  return (
    <>
      {console.log(change)}
      <div className="cart-wrapper">
        <div className="cart">
          {/*progress bar step*/}
          <div className="line">
            <svg 
              className="circle circle1" 
              style={{ 
                background: 'var(--blueLine)',
                boxShadow: '0 0 20px var(--blueLine)'}}>

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
                  background: 'var(--blueLine)',
                  boxShadow: '0 0 20px var(--blueLine)'
                }
              }>
              <circle cx="20" cy="20" r="15" />
            </svg>
            <svg className="circle" style={{background: '#1D3557'}}>
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
