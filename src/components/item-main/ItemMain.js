import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Carousel,
  Card,
  Form,
  Dropdown,
} from "react-bootstrap";
import {
  Banner,
  Logo,
  Tank,
  SeafoodCatalog,
  AsideNav,
  MainItemList,
  ItemCard,
} from "./style";

import ItemCardt from "./ItemCard/ItemCard";

import grandma from "../../assets/img/Item/grandma.jpg";
import fish from "../../assets/img/Item/fish.jpeg";
import shell from "../../assets/img/Item/shell.jpeg";
import squid from "../../assets/img/Item/squid.jpeg";
import shrimp from "../../assets/img/Item/shrimp.jpeg";
function ItemMain() {
  const [product, setProduct] = useState([{"test":"test"},{"test":"test"}]);
  // componentDidMount
  useEffect(() => {
    fetch("./test.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  }, []);
  return (
    <>
      <Banner>
        <Logo></Logo>
        <Tank></Tank>
        <SeafoodCatalog>
          <img src={fish}></img>
          <img src={shell}></img>
          <img src={squid}></img>
          <img src={shrimp}></img>
        </SeafoodCatalog>
      </Banner>

      <Container fluid>
        <Row>
          <Col sm={3}>
            <AsideNav>
              <div>當月超值優惠</div>
              <div>任選兩樣八折</div>
              <div>產地新鮮直送</div>
              <div>魚類</div>
              <div>蝦類</div>
              <div>貝類</div>
              <div>軟足類</div>
            </AsideNav>
          </Col>
          <Col sm={9}>
            <MainItemList>
              <h1 style={{ textAlign: "center", lineHeight: "80px" }}>蝦類</h1>
              <Row>
                <Col sm={9}></Col>
                <Col sm={3}>
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      選擇分類
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
              <Row>
                {product.map((p, i) => {
                  return (
                    
                      <Col sm={3}>
                      <ItemCardt></ItemCardt>
                      </Col>
                    
                  )
                })}
                <Col sm={3}>
                  <ItemCard></ItemCard>
                </Col>
                <Col sm={3}>
                  <ItemCardt></ItemCardt>
                </Col>
              </Row>
            </MainItemList>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ItemMain;
