import React from "react";
import {Card} from 'react-bootstrap';

/* img import */
import salmon02 from "../../../assets/img/products/fish/salmon02.jpg"
import saira01 from "../../../assets/img/products/fish/saira01.jpg"


function Recommend() {
    return (
        <>
            <Card className="P-recommend-card mt-3">
                <Card.Img variant="top" src={salmon02} className="P-recommend-img" />
                <Card.Body>
                    <Card.Title>鮭魚</Card.Title>
                    <Card.Text>NT $888</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
  }
  
  export default Recommend;