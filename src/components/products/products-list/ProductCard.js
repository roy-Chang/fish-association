import React from "react";
import {Card} from 'react-bootstrap';


/* img import */
import { FaShoppingCart } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import saira01 from "../../../assets/img/products/fish/saira01.jpg"

export default function RankTable() {
  return (
    <>
      <Card className="P-product-card my-3" >
          <div  className="P-product-card-pic" >
            <img src={saira01} alt="" />
          </div>
          <div className="d-flex justify-content-end align-items-center mr-3">
              <BsHeartFill style={{width:"25px",height:"25px"}} className="mx-2"/>
              <FaShoppingCart style={{width:"25px",height:"25px"}} />
          </div>
          <Card.Body>
              <Card.Title>沙丁魚</Card.Title>
              <Card.Text>
                  定價 $1000
              </Card.Text>
          </Card.Body>
      </Card>

    </>
  );
}