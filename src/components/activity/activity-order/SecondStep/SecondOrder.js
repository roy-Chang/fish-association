import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useParams,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import { Wrapper, Bg_blue, ProgressBar } from "./styled";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";

function SecondOrder(props) {
  //取得活動號碼->取得前一頁報名人數 ->總人數陣列->存取表單的值->存取付款方式
  const { name } = useParams();
  const location = useLocation();
  const history = useHistory();
  const [paymentWay, setpPaymentWay] = useState(0);
  const [inputFields, setInputField] = useState([
    { name: "", email: "", phone: "" },
  ]);
  const nextPage = {
    pathname: `/order/activity/${name}/third`,
    state: {
      data: inputFields,
      payment: paymentWay,
      normalNum: location.state.normalNum,
      childlNum: location.state.childlNum,
    },
  };

  //將前一頁取到的人數轉換成陣列並map在頁面上->location.state.id是前一頁來的人數
  useEffect(() => {
    const formNum = { name: "", email: "", phone: "" };
    const formTwo = { name: "", email: "", phone: "" };
    const formThree = { name: "", email: "", phone: "" };
    switch (location.state.id) {
      case 1:
        break;
      case 2:
        setInputField([...inputFields, formNum]);
        break;
      case 3:
        setInputField([...inputFields, formNum, formTwo]);
        break;
      case 4:
        setInputField([...inputFields, formNum, formTwo, formThree]);
        break;
    }
  }, [location.state.id]);

  //提交表單value
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(nextPage);
    console.log("2page-handleSubmit", inputFields);
    console.log("2page-paymentWay", paymentWay);
  };

  //讀取動態表單value
  const handleChange = (index, e) => {
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputField(values);
  };

  return (
    <Wrapper className=" mt-5">
      <Bg_blue>
        <ProgressBar>
          <ul>
            <li>活動確認</li>
            <li>資料填寫</li>
            <li>報名完成</li>
          </ul>
        </ProgressBar>
        <form className="mt-5 flex-wrap">
          <div className="d-flex justify-content-around ">
            {inputFields.map((value, index) => {
              return (
                <div key={index}>
                  <Row className="mb-10" noValidate>
                    <Form.Group as={Col} md="10">
                      <Form.Label>姓名</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="請輸入姓名"
                        value={inputFields[`${index}`].name}
                        name="name"
                        onChange={(e) => handleChange(index, e)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="10">
                      <Form.Label>電話</Form.Label>
                      <Form.Control
                        type="mail"
                        placeholder="請輸入信箱"
                        value={inputFields[`${index}`].email}
                        name="email"
                        onChange={(e) => handleChange(index, e)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="10">
                      <Form.Label>信箱</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="請輸入電話"
                        value={inputFields[`${index}`].phone}
                        name="phone"
                        onChange={(e) => handleChange(index, e)}
                      />
                    </Form.Group>
                  </Row>
                </div>
              );
            })}
          </div>
          <Form.Group className="mb-5 mt-5" style={{ marginLeft: "80px" }}>
            <Form.Label as="legend" column sm={5}>
              請選擇付款方式
            </Form.Label>
            <Col sm={6}>
              <Form.Check
                type="radio"
                label="信用卡"
                name={`payment`}
                key="1"
                id="formHorizontalRadios1"
                onChange={() => setpPaymentWay(1)}
              />
              <Form.Check
                type="radio"
                label="電匯"
                name={`payment`}
                key="2"
                id="formHorizontalRadios2"
                onChange={() => setpPaymentWay(2)}
              />
              <Form.Check
                type="radio"
                label="現場付款"
                name={`payment`}
                key="3"
                id="formHorizontalRadios3"
                onChange={() => setpPaymentWay(2)}
              />
            </Col>
          </Form.Group>
          <div className="text-center mt-3">
            <Button type="submit" onClick={handleSubmit}>
              資料確認
            </Button>
          </div>
        </form>
      </Bg_blue>
    </Wrapper>
  );
}
export default SecondOrder;
