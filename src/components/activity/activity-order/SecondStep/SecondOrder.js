import React, { useState } from "react";
import { Wrapper, Bg_blue, ProgressBar } from "./styled";
import {
  DropdownButton,
  Dropdown,
  Form,
  Button,
  Col,
  Row,
  InputGroup,
  handleSubmit,
} from "react-bootstrap";
function SecondOrder() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
        <div className="d-flex mt-5">
          <div style={{ width: "50%" }} className="justify-content-around">
            <h4>主報名者</h4>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="validationCustom01">
                  <Form.Label>姓名</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="請輸入姓名"
                    defaultValue="First name"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="10" controlId="validationCustom02">
                  <Form.Label>電話</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="請輸入電話"
                    defaultValue="phone number"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Form.Group className="mb-10">
                <Form.Label as="legend" column sm={10}>
                  請選擇付款方式
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="信用卡"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="電匯"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="現場付款"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </Form>
          </div>
          <div style={{ width: "50%" }}>
            <h4>同行者</h4>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="validationCustom01">
                  <Form.Label>姓名</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="請輸入姓名"
                    defaultValue="First name"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="10" controlId="validationCustom02">
                  <Form.Label>電話</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="請輸入電話"
                    defaultValue="phone number"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Form.Group className="mb-10">
                <Form.Label as="legend" column sm={10}>
                  請選擇付款方式
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="信用卡"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="電匯"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="現場付款"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className="text-center mt-3">
          <Button type="submit">資料確認</Button>
        </div>
      </Bg_blue>
    </Wrapper>
  );
}
export default SecondOrder;
