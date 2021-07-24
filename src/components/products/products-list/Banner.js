import React from "react";
import {Row,Col} from "react-bootstrap";

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
        <div>
            <Row style={{marginTop:"60px"}}>
                <Col sm={2}>
                    <img style={{height:"150px"}} src={barLogo} alt="freshLogo" />
                </Col>
                <Col sm={10}>
                    <div className="d-flex flex-column">
                        <img style={{width:"1000px"}}  src={aquarium} alt="aquarium" />
                        <div className="P-category d-flex justify-content-around mt-1">
                            <img className="P-categoryImg" src={fishCategory} alt="fishCategory" />
                            <img className="P-categoryImg" src={shrimpCategory} alt="shrimpCategory" />
                            <img className="P-categoryImg" src={squidCategory} alt="squidCategory" />
                            <img className="P-categoryImg" src={shellCategory} alt="shellCategory" />
                        </div>
                    </div>
                    
                </Col>
            </Row>
        </div>
    </>
  );
}
