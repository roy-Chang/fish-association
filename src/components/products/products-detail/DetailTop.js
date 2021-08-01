import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
//json
import productsAll from '../../../utils/products.json';
//react redux
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../redux/constant'



function DetailTop() {
  const { type, name, id } = useParams();
  const str = type;
  const newType = str.replace(/Products/, "");
  const itemFilter = productsAll[`${type}`];
  const findItem = itemFilter.find((item) => { if(item.id == Number.parseInt(id)) return true })
  //dispatch
  const dispatch = useDispatch()

  const addItemsToCart = () => {
    dispatch({
      type: actionTypes.ADD_ITEMS_TO_SHOPPING_CART,
      data: {
        product_id: findItem.id,
        buy_num: 1
      }
    })
  }


  return (
    <>
      <Row className="P-deatil-top">
        <Col sm={4} className="P-detail-pic">
          <div className="P-detail-main-img">
            <img src={require(`../../../assets/img/products/${newType}/${findItem.image}.jpg`).default} alt=""></img>
          </div> 
        </Col>
        <Col sm={8} className="P-detail-des">
          <h1>{name}</h1>
          <p>
            {findItem.description}
          </p>
          <hr></hr>
          <p>售價 : {findItem.price} 元</p>
          <hr></hr>
          <div className="d-flex justify-content-around mt-2">
            <button
              className="cur-buy-btn"
              
            >
              立即購買
            </button>
            <button
              className="add-buy-btn"
              onClick={() => (addItemsToCart())}
            >
              加入購物車
            </button>
            <button
              className="like-btn-btn"
            >
              加入收藏
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default DetailTop;
