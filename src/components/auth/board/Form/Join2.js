import React from "react";
import { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./MemberJoin2.css";

const Join2 = (props) => {
    const [fields, setFields] = useState({
      username: "",
      gender: "",
      year: "",
      month: "",
      day: "",
      phone: "",
      address: "",
    });
  
    //每個欄位的錯誤訊息
    const [fieldsErrors, setFieldsErrors] = useState({
      username: "",
      gender: "",
      year: "",
      month: "",
      day: "",
      phone: "",
      address: "",
    });
    return (
      <>
        <Form>
          <Form.Group className="MJ2memberEnter">
            <Form.Group className="MJ2item">
              <Form.Text className="MJ2itemLabel" htmlFor="">
                姓名
              </Form.Text>
              <Form.Control
                className="MJ2itemInput"
                type="text"
                name="name"
                onChange={(e) => {
                  setFields(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="MJ2item">
              <Form.Text className="MJ2itemLabel" htmlFor="">
                性別
              </Form.Text>
              <Form.Group className="MJ2itemContent">
                <Form.Check type="checkbox" className="MJ2gender">
                  <Form.Check
                    inline
                    name="gender"
                    type="radio"
                    label="男"
                    id="男"
                    style={{ fontSize: "20px" }}
                  ></Form.Check>
                  <Form.Check
                    inline
                    name="gender"
                    type="radio"
                    label="女"
                    id="女"
                    style={{ fontSize: "20px", paddingLeft: "20px" }}
                  ></Form.Check>
                </Form.Check>
              </Form.Group>
            </Form.Group>
            <Form.Group className="MJ2item" controlId="dob">
              <Form.Label className="MJ2itemLabel">出生日期</Form.Label>
              <Form.Group className="MJ2itemContent">
                  <Form.Control type="date" name="dob" placeholder="Date of Birth" />
              </Form.Group>
            </Form.Group>
            <Form.Group className="MJ2item">
              <Form.Text className="MJ2itemLabel" htmlFor="">
                連絡電話
              </Form.Text>
              <Form.Control
                className="MJ2itemInput"
                type="text"
                name="phone"
                onChange={(e) => {
                  setFields(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="MJ2item">
              <Form.Text className="MJ2itemLabel" htmlFor="">
                地址
              </Form.Text>
              <Form.Control
                className="MJ2itemInput"
                type="text"
                name="address"
                onChange={(e) => {
                  setFields(e.target.value);
                }}
              />
            </Form.Group>
            <Button className="MJ2btn" type="submit">
              送出
            </Button>
          </Form.Group>
        </Form>
      </>
    );
  }

  export default Join2;