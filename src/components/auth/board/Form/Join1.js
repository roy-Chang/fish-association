import React from "react";
import { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./MemberJoin2.css";


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

  export default Join1;