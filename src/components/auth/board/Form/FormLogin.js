import React from "react";
import "./MemberLogin.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function FormLogin(props) {
  return (
    <>
      <Form>
        <Form.Text className="MLmemberEnter">
          <Form.Text className="MLitem">
            <Form.Label className="MLitemLabel" htmlFor="">
              會員帳號
            </Form.Label>
            <Form.Text className="MLitemContent">
              <Form.Control className="MLitemInput" type="text" />
              <Form.Text className="MLcheck MLcheckAccount">
                查無此帳號
              </Form.Text>
            </Form.Text>
          </Form.Text>
          <Form.Text className="MLitem">
            <Form.Label className="MLitemLabel" htmlFor="">
              密碼
            </Form.Label>
            <Form.Text className="MLtemContent">
              <Form.Control className="MLitemInput" type=" " />
              <Form.Text className="MLcheck MLcheckAccount">
                密碼輸入錯誤
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
          <button className="MLbtn">登入</button>
        </Form.Text>
      </Form>
    </>
  );
}
export default FormLogin;
