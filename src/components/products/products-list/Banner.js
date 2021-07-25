import React from "react";
import {Container,Row,Col} from "react-bootstrap";

import "./styles.css";


/* img import */

import barLogo from "../../../assets/img/products/products-list/fresh.png";
import aquarium from "../../../assets/img/products/products-list/tank.png";
import fishCategory from "../../../assets/img/products/products-list/fish.jpeg";
import shrimpCategory from "../../../assets/img/products/products-list/shrimp.jpeg";
import squidCategory from "../../../assets/img/products/products-list/squid.jpeg";
import shellCategory from "../../../assets/img/products/products-list/shell.jpeg"

export default function ProductsBanner() {
  return (
    <>
        <Container style={{paddingTop:"60px"}}>
            <Row>
                <Col sm={2}>
                    <img style={{height:"200px"}} src={barLogo} alt="freshLogo" />
                </Col>
                <Col sm={1}></Col>
                <Col sm={9}>
                    <div className="d-flex flex-column align-items-center">
                        <img style={{width:"800px"}}  src={aquarium} alt="aquarium" />
                        <div className="d-flex  mt-1">
                            <div className="P-categoryImg">
                                <img src={fishCategory} alt="fishCategory" />
                            </div>
                            <div className="P-categoryImg">
                                <img src={shrimpCategory} alt="shrimpCategory" />
                            </div>
                            <div className="P-categoryImg">
                                <img src={squidCategory} alt="squidCategory" />
                            </div>
                            <div className="P-categoryImg">
                                <img src={shellCategory} alt="shellCategory" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  );
}
