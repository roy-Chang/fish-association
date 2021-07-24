import { Component } from 'react';
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./MemberJoin2.css";


const Join1 = (props) => {

    return (
      <>
        <Form>
          <Form.Text className="AmemberEnter">
            <Form.Text className="Aitem mb-3">
              <Form.Label className="AitemLabel">會員帳號</Form.Label>
              <Form.Text className="AitemContent">
                <Form.Control
                  className="AitemInput"
                  name="account"
                  type="text"
                  required
                 
                />
                
              </Form.Text>
            </Form.Text>
            <Form.Text className="Aitem mb-3">
              <Form.Label className="AitemLabel">信箱</Form.Label>
              <Form.Text className="AitemContent">
                <Form.Control
                  className="AitemInput"
                  name="email"
                  type="email"
                  required
                
                />
                
              </Form.Text>
            </Form.Text>
            <Form.Text className="Aitem mb-3">
              <Form.Label className="AitemLabel">密碼</Form.Label>
              <Form.Text className="AitemContent">
                <Form.Control
                  className="AitemInput"
                  name="password"
                  type="password"
                  required
                 
                />
                
              </Form.Text>
            </Form.Text>
            <Form.Text className="Aitem mb-5">
              <Form.Label className="AitemLabel">確認密碼</Form.Label>
              <Form.Text>
                <Form.Control
                  className="AitemInput"
                  name="repassword"
                  type="password"
                  required
                
                />
                
              </Form.Text>
            </Form.Text>
            <Button className="Abtn mb-5" type="submit" onClick={props.go}>
              下一步
            </Button>
          </Form.Text>
        </Form>
      </>
    );
  };

  export default Join1;