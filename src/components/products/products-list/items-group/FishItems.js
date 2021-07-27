import React from "react";

// import ProductCard2 from "./ProductCard2";
import { Card } from "react-bootstrap";

//-------------------------------


/* img import */
import { FaShoppingCart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";

/*items json*/
import productsAll from '../../../../utils/products.json'


import { Link } from "react-router-dom";




function FishItems() {

  return (
    <>
    {console.log(productsAll)}
      {productsAll.fishProducts.map((item) => {
        return (
          <div key={item.id}>
            <Card className="P-product-card my-3" style={{marginRight: '20px'}}>
              <figure className="P-product-card-pic">
                <img src={require(`../../../../assets/img/products/fish/${item.image}.jpg`).default} alt="" />
              </figure>
              <div className="d-flex justify-content-end align-items-center mr-3">
                <BsHeartFill
                  style={{ width: "25px", height: "25px", color: "white" }}
                  className="mx-2"
                />
                <FaShoppingCart
                  style={{ width: "25px", height: "25px", color: "white" }}
                />
              </div>
              <Card.Body>
                <Card.Title>
                  <Link to="/detail">{item.name}</Link>
                </Card.Title>
                <Card.Text>定價 ${item.price}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      })}
      
        
      
    </>
  );
}

export default FishItems