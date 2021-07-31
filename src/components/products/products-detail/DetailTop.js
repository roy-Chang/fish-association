import React from "react";
import { useParams } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";

/* img import */
import scallops01 from "../../../assets/img/products/shell/scallops01.jpeg";
//json
import productsAll from '../../../utils/products.json';


function DetailTop() {
  
  const { type, name, id } = useParams();
  const str = type;
  const newType = str.replace(/Products/, "");
  const itemFilter = productsAll[`${type}`];
  const findItem = itemFilter.find((item) => { if(item.id == Number.parseInt(id)) return true })
  
  return (
    <>
      <Row className="P-deatil-top">
        <Col sm={4} className="P-detail-pic">
          <div className="P-detail-main-img">
            <img src={require(`../../../assets/img/products/${newType}/${findItem.image}.jpg`).default} alt=""></img>
          </div> 
        </Col>
        <Col sm={8} className="P-detail-des">
          <h1>{name}</h1>
          <p>
            {findItem.description}
          </p>
          <hr></hr>
          <p>售價 : {findItem.price} 元</p>
          <hr></hr>
          <div>
            <label htmlFor="pet-select">數量 :</label>
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
