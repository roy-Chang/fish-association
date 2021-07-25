import React from "react";
import ProductCard from "./ProductCard";
// import ProductCard2 from "./ProductCard2";
import {Row,Col} from "react-bootstrap";
import {ProductTitle} from "./styled";

export default function MainBlock() {
    return (
      <>
        <div className="P-main-block ">
            <ProductTitle className="py-3">最新上架</ProductTitle>
            <Row style={{margin:0,paddingTop:'20px'}}>
                <Col sm={3}><ProductCard /></Col>
                <Col sm={3}><ProductCard /></Col>
                <Col sm={3}><ProductCard /></Col>
                <Col sm={3}><ProductCard /></Col>
                <Col sm={3}><ProductCard /></Col>
                <Col sm={3}><ProductCard /></Col>
                <Col sm={3}><ProductCard /></Col>
                <Col sm={3}><ProductCard /></Col>
                <Col sm={3}><ProductCard /></Col>
                <Col sm={3}><ProductCard /></Col>
            </Row>
            
            
        </div>
      </>
    );
  }
  