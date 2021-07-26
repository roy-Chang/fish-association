import React from "react";

import { Button, Row, Col } from "react-bootstrap";

/* img import */
import scallops01 from "../../../assets/img/products/shell/scallops01.jpeg";

function DetailTop() {
  return (
    <>
      <Row className="P-deatil-top">
        <Col sm={4} className="P-detail-pic">
          <div className="P-detail-main-img">
            <img src={scallops01} alt=""></img>
          </div>
          <div className="P-detail-sub-img d-flex mt-3">
            <img src={scallops01} alt=""></img>
            <img src={scallops01} alt=""></img>
            <img src={scallops01} alt=""></img>
          </div>
        </Col>
        <Col sm={8} className="P-detail-des">
          <h1>北海道帆立貝柱 (300g)</h1>
          <p>
            來自日本北海道，海水潔淨天然無污染，地理位置優越，為寒暖流交會之海域的野生干貝，品質口感特
            優，產品以超低溫急速冷凍，保證新鮮，通過SGS的檢驗標準
            ，讓您吃的放心。
          </p>
          <hr></hr>
          <p>售價 : 600 元</p>
          <hr></hr>
          <div>
            <label for="pet-select">數量 :</label>
            <select id="pet-select" className="ml-2">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="6">7</option>
              <option value="6">8</option>
              <option value="6">9</option>
              <option value="6">10</option>
            </select>
          </div>
          <div className="d-flex justify-content-around mt-2">
            <Button
              style={{ background: "var(--fifth-color)", border: "none" }}
            >
              立即購買
            </Button>
            <Button
              style={{ background: "var(--second-color)", border: "none" }}
            >
              加入購物車
            </Button>
            <Button
              style={{ background: "var(--third-color)", border: "none" }}
            >
              加入收藏
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default DetailTop;
