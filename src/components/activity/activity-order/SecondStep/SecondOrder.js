import React, { useState, useEffect, initialFormData } from "react";
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
  const [totalNum, setTotalNum] = useState([]);
  const [formData, updateFormData] = useState(initialFormData);
  const [paymentWay, setpPaymentWay] = useState(0);
  const nextPage = {
    pathname: `/order/activity/${name}/third`,
    state: {
      data: formData,
      payment: paymentWay,
      normalNum: location.state.normalNum,
      childlNum: location.state.childlNum,
    },
  };
  let history = useHistory();
  let array = [];

  //將前一頁取到的人數轉換成陣列並map在頁面上
  useEffect(() => {
    for (let i = 0; i < location.state.id; i++) {
      array.push(i);
    }
    setTotalNum(array);
  }, []);

  //提交表單value
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(nextPage);
    console.log("2page-handleSubmit", formData);
    console.log("2page-paymentWay", paymentWay);
  };

  //讀取動態表單value
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.ClassName]: e.target.value.trim(),
    });
    console.log("handleChange", formData);
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
            {totalNum.map((value, index) => {
              return (
                <div className="">
                  <Row className="mb-10" noValidate>
                    <Form.Group
                      as={Col}
                      md="10"
                      controlId={`validationCustom `}
                    >
                      <Form.Label>姓名</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="請輸入姓名"
                        defaultValue=""
                        key={`${index}name`}
                        name={`${index}name`}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="10" controlId="validationCustom02">
                      <Form.Label>電話</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="請輸入電話"
                        defaultValue=""
                        key={`${index}phone`}
                        name={`${index}phone`}
                        onChange={handleChange}
                        minLength="9"
                        maxLength="14"
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="10"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label>信箱</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="email"
                          placeholder="請輸入信箱"
                          aria-describedby="email"
                          key={`${index}email`}
                          name={`${index}email`}
                          onChange={handleChange}
                          required
                        />
                      </InputGroup>
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
