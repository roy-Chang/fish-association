import React, { useState } from "react";
import "./MemberLogin.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function FormLogin() {
  //定義欄位屬性
  const [fields, setFields] = useState({
    account: "",
    password: "",
  });

  const [fieldErrors, setFieldErrors] = useState({
    account: "",
    password: "",
  });

  const handleFieldChange = (e) => {
    // 更新輸入欄位的變動
    // 用新輸入的屬性值和原物件作合併
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
    };

    setFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    //看有沒有讀取到值(用name屬性抓取)
    console.log(data.get("account"));
    console.log(data.get("password"));

    //送到伺服器
  };

  //監聽輸入欄位
  const handleFormChange = (e) => {
    console.log("更新欄位: ", e.target.name);

    // 該欄位的錯誤訊息清空
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: "",
    };

    setFieldErrors(updatedFieldErrors);
  };

  // 表單有不合法的檢查出現時
  const handleFormInvalid = (e) => {
    // 擋住錯誤訊息預設呈現方式(跳出的訊息泡泡)
    e.preventDefault();

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    };

    setFieldErrors(updatedFieldErrors);
  };
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        onInvalid={handleFormInvalid}
      >
        <Form.Text className="MLmemberEnter">
          <Form.Text className="MLitem">
            <Form.Label className="MLitemLabel" htmlFor="">
              會員帳號
            </Form.Label>
            <Form.Text className="MLitemContent">
              <Form.Control
                className="MLitemInput"
                type="text"
                name="account"
                value={fields.account}
                onChange={handleFieldChange}
                required
                placeholder="請輸入帳號"
              />
              <Form.Text className="MLcheck MLcheckAccount">
                {fieldErrors.account !== "" && "查無此帳號"}查無此帳號
              </Form.Text>
            </Form.Text>
          </Form.Text>
          <Form.Text className="MLitem">
            <Form.Label className="MLitemLabel" htmlFor="">
              密碼
            </Form.Label>
            <Form.Text className="MLtemContent">
              <Form.Control
                className="MLitemInput"
                type="text"
                name="password"
                value={fields.password}
                onChange={handleFieldChange}
                required
                placeholder="請輸入密碼"
              />

              <Form.Text className="MLcheck MLcheckAccount">
                {fieldErrors.password !== "" && "密碼輸入錯誤"}密碼輸入錯誤
              </Form.Text>
            </Form.Text>
          </Form.Text>
          <Form.Text className="MLitem MLitemVerification">
            <Form.Text className="MLitemContent">
              <Form.Text className="MLverification"></Form.Text>
              <Form.Text className="MLcheck MLcheckAccount">
                圖形驗證錯誤
              </Form.Text>
            </Form.Text>
          </Form.Text>
          <Button className="MLbtn" type="submit">
            登入
          </Button>
        </Form.Text>
      </Form>
    </>
  );
}
export default FormLogin;
