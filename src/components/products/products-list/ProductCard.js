import React from "react";
import {Card} from 'react-bootstrap';


/* img import */
import { FaShoppingCart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import saira01 from "../../../assets/img/products/fish/saira01.jpg"
import scallops01 from "../../../assets/img/products/shell/scallops01.jpeg"


import { Link } from "react-router-dom";

export default function RankTable() {
  return (
    <>
      <Card className="P-product-card my-3" >
          <div  className="P-product-card-pic" >
            <img src={scallops01} alt="" />
          </div>
          <div className="d-flex justify-content-end align-items-center mr-3">
              <BsHeartFill style={{width:"25px",height:"25px",color:"white"}} className="mx-2"/>
              <FaShoppingCart style={{width:"25px",height:"25px",color:"white"}} />
          </div>
          <Card.Body>
              <Card.Title><Link to="/detail">北海道帆立貝柱</Link></Card.Title>
              <Card.Text>
                  定價 $600
              </Card.Text>
          </Card.Body>
      </Card>

    </>
  );
}