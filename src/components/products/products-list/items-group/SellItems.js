import React, { useState, useEffect, useReducer } from "react";

// import ProductCard2 from "./ProductCard2";
import { Card } from "react-bootstrap";

//-------------------------------

/* img import */
import { FaShoppingCart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";

/*items json*/
import productsAll from "../../../../utils/products.json";

import { Link } from "react-router-dom";
//history
import { useHistory } from "react-router-dom";

function SellItems() {
  const history = useHistory();
  //點擊拿過來的商品資訊
  const [itemId, setItemId] = useState([]);
  //購物車詳情
  const [cart, setCart] = useState([]);
  const itemIdList = [];
  const newitemIdList = [];
  //addToCart功能應該會放在MainBlock頁面，然後四個子頁用props傳值
  const addToCart = (item) => {
    //若購物車裏面有沒有這個id則建立新的，反之則count+1
    if (itemIdList.indexOf(item.id) === -1) {
      itemIdList.push(item.id);
      newitemIdList.push({ id: item.id, count: 0 });
    } else {
      const index = itemIdList.indexOf(item.id);
      newitemIdList[index].count = newitemIdList[index].count + 1;
    }
    console.log(itemIdList);
    console.log(newitemIdList);
  };
  return (
    <>
      {console.log(productsAll)}
      {productsAll.shellProducts.map((item) => {
        return (
          <div key={item.id}>
            <Card
              className="P-product-card my-3"
              style={{ marginRight: "20px" }}
            >
              <figure className="P-product-card-pic">
                <img
                  src={
                    require(`../../../../assets/img/products/shell/${item.image}.jpg`)
                      .default
                  }
                  alt=""
                />
              </figure>
              <div className="d-flex justify-content-end align-items-center mr-3">
                <BsHeartFill
                  style={{ width: "25px", height: "25px" }}
                  className="mx-2 heart"
                />
                <FaShoppingCart
                  style={{ width: "25px", height: "25px" }}
                  className="shopping-cart"
                  onClick={() => {
                    addToCart(item);
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title>
                  <Link
                    onClick={() =>
                      history.push(
                        `/detail/shellProducts/${item.name}/${item.id}`
                      )
                    }
                  >
                    {item.name}
                  </Link>
                </Card.Title>
                <Card.Text>定價 ${item.price}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default SellItems;
