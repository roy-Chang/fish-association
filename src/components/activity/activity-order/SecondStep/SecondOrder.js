import React, { useState, useEffect, initialFormData } from "react";
import { BrowserRouter as Router, useParams, Link } from "react-router-dom";
import { Wrapper, Bg_blue, ProgressBar } from "./styled";
import {
  Form,
  Button,
  Col,
  Row,
  InputGroup,
  handleSubmit,
} from "react-bootstrap";
function SecondOrder() {
  const { name } = useParams();
  const [totalNum, setTotalNum] = useState([]);
  let array = [];
  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      array.push(i);
    }
    setTotalNum(array);
  }, []);
  const [formData, updateFormData] = React.useState(initialFormData);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  // Object.filter = function (mainObject, filterFunction) {
  //   return Object.keys(mainObject)
  //     .filter(function (ObjectKey) {
  //       return filterFunction(mainObject[ObjectKey]);
  //     })
  //     .reduce(function (result, ObjectKey) {
  //       result[ObjectKey] = mainObject[ObjectKey];
  //       return result;
  //     }, {});
  // };
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
        <form className="d-flex justify-content-around">
          {totalNum.map((value, index) => {
            return (
              <div className="">
                <Row
                  className="mb-10"
                  noValidate
                  //validated={validated}
                  //onSubmit={profileState}
                >
                  <Form.Group as={Col} md="10" controlId={`validationCustom `}>
                    <Form.Label>姓名</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="請輸入姓名"
                      defaultValue=""
                      key={`name`}
                      name={`name`}
                      //ref={nameRef[index]}
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
                      key={`phone`}
                      name={`phone`}
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
                        key={`email`}
                        name={`email`}
                        onChange={handleChange}
                        required
                      />
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
                      name={`creditCard`}
                      key="creditCard"
                      id="formHorizontalRadios1"
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="radio"
                      label="電匯"
                      name={`wireTransfer`}
                      key="wireTransfer"
                      id="formHorizontalRadios2"
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="radio"
                      label="現場付款"
                      name={`cash`}
                      key="cash"
                      id="formHorizontalRadios3"
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
              </div>
            );
          })}
        </form>
        <div className="text-center mt-3">
          <Link to={`/order/activity/${name}/third`} style={{ color: "white" }}>
            <Button type="submit">資料確認</Button>
          </Link>
        </div>
      </Bg_blue>
    </Wrapper>
  );
}
export default SecondOrder;
