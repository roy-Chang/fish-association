import React from "react";
import { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./MemberJoin2.css";

function Forms(props) {
  const [checked, setCheck] = useState(1);
  const changeForm = (e) => {
    console.log(props);
    // return;
    setCheck(2);
  };

  return (
    <>{checked === 1 ? <Join1 go={changeForm} value={checked} /> : <Join2 />}</>
  );
}

const Join1 = (props) => {
  const inputAccountElement = useRef();

  //表單內的每個欄位
  const [fields, setFields] = useState({
    account: "",
    email: "",
    password: "",
    repassword: "",
  });

  //每個欄位的錯誤訊息
  const [fieldsErrors, setFieldsErrors] = useState({
    account: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleFieldChange = (e) => {
    const updateFields = {
      ...fields,
      [e.target.name]: e.target.value,
    };
    setFields(updateFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(data.get("account"));
    console.log(data.get("email"));
    console.log(data.get("password"));
    console.log(data.get("repassword"));
    console.log(fields.account);

    //送出資料寫這
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Text className="AmemberEnter">
          <Form.Text className="Aitem">
            <Form.Label className="AitemLabel">會員帳號</Form.Label>
            <Form.Text className="AitemContent">
              <Form.Control
                className="AitemInput"
                name="account"
                type="text"
                required
                value={fields.account}
                onChange={handleFieldChange}
              />
              <Form.Text className="Acheck AcheckAccount">
                {fieldsErrors.account !== "" && "該帳號已創建"}該帳號已創建
              </Form.Text>
            </Form.Text>
          </Form.Text>
          <Form.Text className="Aitem">
            <Form.Label className="AitemLabel">信箱</Form.Label>
            <Form.Text className="AitemContent">
              <Form.Control
                className="AitemInput"
                name="email"
                type="email"
                required
                value={fields.email}
                onChange={handleFieldChange}
              />
              <Form.Text className="Acheck AcheckAccount">
                {fieldsErrors.email !== "" && "該信箱已創建"}該信箱已創建
              </Form.Text>
            </Form.Text>
          </Form.Text>
          <Form.Text className="Aitem">
            <Form.Label className="AitemLabel">密碼</Form.Label>
            <Form.Text className="AitemContent">
              <Form.Control
                className="AitemInput"
                name="password"
                type="password"
                required
                value={fields.password}
                onChange={handleFieldChange}
              />
              <Form.Text className="Acheck AcheckAccount">
                {fieldsErrors.password !== "" && "該密碼不符合長度限制"}
                該密碼不符合長度限制
              </Form.Text>
            </Form.Text>
          </Form.Text>
          <Form.Text className="Aitem">
            <Form.Label className="AitemLabel">確認密碼</Form.Label>
            <Form.Text>
              <Form.Control
                className="AitemInput"
                name="repassword"
                type="password"
                required
                value={fields.repassword}
                onChange={handleFieldChange}
              />
              <Form.Text className="Acheck AcheckAccount">
                {fieldsErrors.repassword !== "" && "與密碼不相符"}與密碼不相符
              </Form.Text>
            </Form.Text>
          </Form.Text>
          <Button className="Abtn" type="submit" onClick={props.go}>
            下一步
          </Button>
        </Form.Text>
      </Form>
    </>
  );
};

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
          <Form.Group className="MJ2item">
            <Form.Text className="MJ2itemLabel" htmlFor="">
              出生日期
            </Form.Text>
            <Form.Group className="MJ2itemContent">
              <Form.Control
                as="select"
                size="sm"
                className="MJ2dateInput"
                name="year"
                value={fields.year}
                onChange={(e) => {
                  setFields(e.target.value);
                }}
              >
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
              </Form.Control>
              年
              <Form.Control
                as="select"
                size="sm"
                className="MJ2dateInput"
                name="month"
                value={fields.month}
                onChange={(e) => {
                  setFields(e.target.value);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Form.Control>
              月
              <Form.Control
                as="select"
                size="sm"
                className="MJ2dateInput"
                name="day"
                value={fields.day}
                onChange={(e) => {
                  setFields(e.target.value);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </Form.Control>
              日
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
};
export default Forms;
