import React, { useState, useEffect, useCallback } from "react";
import "./MemberLogin.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
//axios
import axios from 'axios';

function FormLogin() {
  
  const inputValue = {
    account: "",
    password: ""
  }
  const [errMsg, setErrorMsg] = useState('')
  const [inputClient, setInputClient] = useState(inputValue)
  
  useCallback(() => {
    handleAxiosLogin()
  }, [])
  const handleAxiosLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let memberAccount = data.get("account");
    let memberPassword = data.get("password");
    axios.post('http://localhost:3000/api/member/login', {
      member: {
        account: memberAccount,
        password: memberPassword
      }
      
    })
    .then((serverResponse) => {
      const token = serverResponse.data.member.token
      if(token) {
        // set header
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}` ;
      } else {
        delete axios.defaults.headers.common['Authorization'];
      }
    })
    .catch((error) => {
      if( error.response ){
        setErrorMsg(error.response.data.errors[0].msg)// => the response payload 
      }
    })
    //get input value
    
    //axioshttp://localhost:3000/api/member/login
    
  }

  const handleChange = (e) => {
    const updateFields = {
      ...inputClient,
      [e.target.name]: e.target.value,
    };
    setInputClient(updateFields);
  }

 

  
 
  return (
    <>
      <Form onSubmit={handleAxiosLogin}>
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
                required
                placeholder="請輸入帳號"
                onChange={handleChange}
                value={inputClient.account}
              />

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
                required
                placeholder="請輸入密碼"
                onChange={handleChange}
                value={inputClient.password}
              />

              <Form.Text className="MLcheck MLcheckAccount">
              {errMsg}
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
