import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";

/* img import */

import barLogo from "../../../assets/img/products/products-list/fresh.png";
import aquarium from "../../../assets/img/products/products-list/tank.png";
import fishCategory from "../../../assets/img/products/products-list/fish.jpeg";
import shrimpCategory from "../../../assets/img/products/products-list/shrimp.jpeg";
import squidCategory from "../../../assets/img/products/products-list/squid.jpeg";
import shellCategory from "../../../assets/img/products/products-list/shell.jpeg";

export default function ProductsBanner() {
  return (
    <>
      <Container style={{ paddingTop: "60px" }}>
        <Row>
          <Col sm={2}>
            <img style={{ height: "200px" }} src={barLogo} alt="freshLogo" />
          </Col>
          <Col sm={1}></Col>
          <Col sm={9}>
            <div className="d-flex flex-column align-items-center">
              <img style={{ width: "800px" }} src={aquarium} alt="aquarium" />
              <div className="d-flex  mt-1">
                <div className="P-categoryImg">
                  <Link to="/fish">
                    <img src={fishCategory} alt="fishCategory" />
                    <span>魚類</span>
                  </Link>
                </div>
                <div className="P-categoryImg">
                  <Link to="/shrimp">
                    <img src={shrimpCategory} alt="shrimpCategory" />
                    <span>蝦類</span>
                  </Link>
                </div>
                <div className="P-categoryImg">
                  <Link to="/squid">
                    <img src={squidCategory} alt="squidCategory" />
                    <span>軟足類</span>
                  </Link>
                </div>
                <div className="P-categoryImg">
                  <Link to="/shell">
                    <img src={shellCategory} alt="shellCategory" />
                    <span>貝類</span>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
