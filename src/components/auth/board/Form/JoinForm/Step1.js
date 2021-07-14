// import React from "react";
import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function Step1(props) {
  const inputAccountElement = useRef();

  //表單內的每個欄位
  // const [account, setAccount] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [repassword, setRepassword] = useState();
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

  //處理每個表單的變動
  const handleFieldChange = (e) => {
    const updateFields = {
      ...fields,
      [e.target.name]: e.target.value,
    };
    setFields(updateFields);
  };

  //表單有變動(ex.欄位輸入)
  const handleFormChange = (e) => {
    console.log("更動的欄位", e.target.name);

    //欄位的錯誤訊息清空
    const updateFieldErrors = {
      ...fieldsErrors,
      [e.target.name]: "",
    };

    setFieldsErrors(updateFieldErrors);
  };

  //表單內有不合法的輸入
  const handleFormInvalid = (e) => {
    //擋住跳出的訊息提示框
    e.preventDefault();

    //validationMessage屬性 是最新的HTML錯誤提示訊息API
    const updateFieldErrors = {
      ...fieldsErrors,
      [e.target.name]: e.target.validationMessage,
    };

    setFieldsErrors(updateFieldErrors);

    //當帳號不符合規定使用ref聚焦focus
    if (e.target.name === "account") inputAccountElement.current.focus();

    //當信箱不符合規定使用ref聚焦focus
    //當密碼不符合規定使用ref聚焦focus
    //當確認密碼不符合規定使用ref聚焦focus
  };

  return (
    <>
      <Form.Text className="AmemberEnter">
        <Form.Text className="Aitem">
          <Form.Label className="AitemLabel">會員帳號</Form.Label>
          <Form.Text className="AitemContent">
            <Form.Control
              className="AitemInput"
              name="account"
              type="text"
              value={(fields.account, props.getState("account", ""))}
              onChange={(handleFieldChange, props.handleChange)}
              required
              ref={inputAccountElement}
            />
            {fieldsErrors.account !== "" && (
              <Form.Text className="Acheck AcheckAccount">
                該帳號已創建
              </Form.Text>
            )}
          </Form.Text>
        </Form.Text>
        <Form.Text className="Aitem">
          <Form.Label className="AitemLabel">信箱</Form.Label>
          <Form.Text className="AitemContent">
            <Form.Control
              className="AitemInput"
              name="email"
              type="email"
              value={(fields.email, props.getState("email", ""))}
              onChange={(handleFieldChange, props.handleChange)}
              required
            />
            {fieldsErrors.email !== "" && (
              <Form.Text className="Acheck AcheckAccount">
                該信箱已創建
              </Form.Text>
            )}
          </Form.Text>
        </Form.Text>
        <Form.Text className="Aitem">
          <Form.Label className="AitemLabel">密碼</Form.Label>
          <Form.Text className="AitemContent">
            <Form.Control
              className="AitemInput"
              name="password"
              type="password"
              value={(fields.password, props.getState("password", ""))}
              onChange={(handleFieldChange, props.handleChange)}
              required
              minLength="3"
            />
            {fieldsErrors.password !== "" && (
              <Form.Text className="Acheck AcheckAccount">
                該密碼不符合長度限制
              </Form.Text>
            )}
          </Form.Text>
        </Form.Text>
        <Form.Text className="Aitem">
          <Form.Label className="AitemLabel">確認密碼</Form.Label>
          <Form.Text className="AitemContent">
            <Form.Control
              className="AitemInput"
              name="repassword"
              type="password"
              value={(fields.repassword, props.getState("repassword", ""))}
              onChange={(handleFieldChange, props.handleChange)}
              required
              title="OOOXXX"
            />
            {fields.repassword !== fields.password && (
              <Form.Text className="Acheck AcheckAccount">
                與密碼不相符
              </Form.Text>
            )}
          </Form.Text>
        </Form.Text>
        <button className="Abtn" type="submit" onClick={props.next}>
          下一步
        </button>
      </Form.Text>
    </>
  );
}

export default Step1;
