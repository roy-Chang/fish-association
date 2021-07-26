import React from "react";
import {Card} from 'react-bootstrap';

/* img import */
import { FaShoppingCart } from "react-icons/fa";
import saira01 from "../../../assets/img/products/fish/saira01.jpg"

export default function RankTable() {
    return (
      <>
        <Card className="P-rank-card my-2" >
            <Card.Img variant="top" src={saira01}  className="P-rank-card-img"/>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title>沙丁魚</Card.Title>
                    <FaShoppingCart style={{width:"25px",height:"25px"}} />
                </div>
                <Card.Text>
                    定價 $ 1000
                </Card.Text>
            </Card.Body>
        </Card>

      </>
    );
  }
  