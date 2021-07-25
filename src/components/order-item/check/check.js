import React from "react";
import "./check.css";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import visa from "../../../assets/img/mastercard.png";

function check() {
  return (
    <>
      <div className="cart">
        <div className="line">
          <svg className="circle circle1">
            <circle cx="20" cy="20" r="15" />
          </svg>
          <svg className="circle circle1">
            <circle cx="20" cy="20" r="15" />
          </svg>
          <svg className="circle">
            <circle cx="20" cy="20" r="15" />
          </svg>
        </div>
        <div className="process">
          <div className="item">訂單確定</div>
          <div className="item">付款確定</div>
          <div className="item">付款完成</div>
        </div>
        <div className="ckeckForm">
          <Form>
            <Row style={{ margin: "10px auto" }}>
              <Form.Label
                style={{ fontSize: "20px", color: "var(--fontWhite)" }}
              >
                付款方式
              </Form.Label>
              <Form.Group className="">
                <Form.Check type="checkbox" className="">
                  <Form.Check
                    inline
                    name="pay"
                    type="radio"
                    label="虛擬ATM"
                    id="虛擬ATM"
                    style={{
                      color: "var(--fontWhite)",
                      fontSize: "16px",
                      marginLeft: "30px",
                    }}
                  />
                  <Form.Check
                    inline
                    name="pay"
                    type="radio"
                    label="信用卡"
                    id="信用卡"
                    style={{
                      color: "var(--fontWhite)",
                      fontSize: "16px",
                      paddingLeft: "20px",
                    }}
                  />
                  <Form.Check
                    inline
                    name="pay"
                    type="radio"
                    label="Line pay"
                    id="Line pay"
                    style={{
                      color: "var(--fontWhite)",
                      fontSize: "16px",
                      paddingLeft: "20px",
                    }}
                  />
                  <Form.Check
                    inline
                    name="pay"
                    type="radio"
                    label="google pay"
                    id="google pay"
                    style={{
                      color: "var(--fontWhite)",
                      fontSize: "16px",
                      paddingLeft: "20px",
                    }}
                  />
                </Form.Check>
              </Form.Group>
            </Row>
            <Row style={{ margin: "10px auto" }}>
              <Form.Label
                style={{ fontSize: "20px", color: "var(--fontWhite)" }}
              >
                運送方式
              </Form.Label>
              <Form.Group className="">
                <Form.Check type="checkbox" className="">
                  <Form.Check
                    inline
                    name="transport"
                    type="radio"
                    label="黑貓宅急便"
                    id="黑貓宅急便"
                    style={{
                      color: "var(--fontWhite)",
                      fontSize: "16px",
                      marginLeft: "30px",
                    }}
                  />
                  <Form.Check
                    inline
                    name="transport"
                    type="radio"
                    label="超商取貨"
                    id="超商取貨"
                    style={{
                      color: "var(--fontWhite)",
                      fontSize: "16px",
                      paddingLeft: "20px",
                    }}
                  />
                  <Form.Check
                    inline
                    name="transport"
                    type="radio"
                    label="貨到付款"
                    id="貨到付款"
                    style={{
                      color: "var(--fontWhite)",
                      fontSize: "16px",
                      paddingLeft: "20px",
                    }}
                  />
                </Form.Check>
              </Form.Group>
            </Row>
            <Row className="personal">
              <Row className="left">
                <Row className="perType">
                  <Form.Label className="formLabel">收件人</Form.Label>
                  <Form.Control
                    className=""
                    type="text"
                    name="username"
                    placeholder="請輸入姓名"
                  />
                </Row>
                <Row className="perType">
                  <Form.Label className="formLabel">地址</Form.Label>
                  <Form.Control
                    className=""
                    type="text"
                    name="username"
                    placeholder="請輸入地址"
                  />
                </Row>
                <Row className="perType">
                  <Form.Label className="formLabel">郵遞區號</Form.Label>
                  <Form.Control
                    className="inputNum"
                    type="text"
                    name="username"
                  />
                </Row>
                <Row className="perType">
                  <Form.Label className="formLabel">縣市</Form.Label>
                  <Form.Control
                    className="inputNum"
                    type="text"
                    name="username"
                  />
                </Row>
              </Row>
              <Row className="right">
                <Row className="perType RperType">
                  <Form.Label className="formLabel">信用卡號</Form.Label>
                  <Form.Text className="visaCard">
                    <Form.Control className="visaInput" type="text" />
                    <img className="visa" src={visa} />
                  </Form.Text>
                </Row>
                <Row className="perType RperType">
                  <Form.Label className="formLabel">持有人名字</Form.Label>
                  <Form.Control className="input" type="text" />
                </Row>
                <Row className="perType RperType">
                  <Form.Label className="formLabel">到期日</Form.Label>
                  <Form.Control className="" type="month" />
                </Row>
                <Row className="perType RperType">
                  <Form.Label className="formLabel">CVV</Form.Label>
                  <Form.Control className="inputNum" type="text" />
                </Row>
              </Row>
            </Row>
            <Row className="checkTotal">
              <Row className="checkTotalPri">總計 $80</Row>
            </Row>

            <div className="btnStep2">
              <Button className="cbtn">訂單確定</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default check;
