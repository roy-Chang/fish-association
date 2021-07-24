import React from "react";
import ProductCard from "./ProductCard";
// import ProductCard2 from "./ProductCard2";
import {Row,Col} from "react-bootstrap";


export default function MainBlock() {
    return (
      <>
        <div className="P-main-block ">
            <h1 className="P-main-title py-3">魚類</h1>
            
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
  