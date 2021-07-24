import { Component } from 'react';
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./MemberJoin2.css";
import { connect } from 'react-redux';
//action creator
import { saveInput } from '../../../../redux/actions/memberRegister'

class Join1 extends Component {
  render() {
    return (
      <>
        <Form>
          <Form.Text className="AmemberEnter">
            <Form.Text className="Aitem mb-3">
              <Form.Label className="AitemLabel">會員帳號</Form.Label>
              <Form.Text className="AitemContent">
                <Form.Control
                  className="AitemInput"
                  type="text"
                  required
                  ref={input => this.account = input}
                  value={this.props.accountRegister}
                />
                
              </Form.Text>
            </Form.Text>
            <Form.Text className="Aitem mb-3">
              <Form.Label className="AitemLabel">信箱</Form.Label>
              <Form.Text className="AitemContent">
                <Form.Control
                  className="AitemInput"
                  type="email"
                  required
                  ref={input => this.email = input}
                />
                
              </Form.Text>
            </Form.Text>
            <Form.Text className="Aitem mb-3">
              <Form.Label className="AitemLabel">密碼</Form.Label>
              <Form.Text className="AitemContent">
                <Form.Control
                  className="AitemInput"
                  type="password"
                  required
                  ref={input => this.password = input}
                />
                
              </Form.Text>
            </Form.Text>
            <Form.Text className="Aitem mb-4">
              <Form.Label className="AitemLabel">確認密碼</Form.Label>
              <Form.Text>
                <Form.Control
                  className="AitemInput"
                  type="password"
                  required
                  ref={input => this.repassword = input}
                />
                
              </Form.Text>
            </Form.Text>
            {/* <Form.Text className="MJ2itemLabel mb-3 mx-auto" htmlFor="" style={{color: '#fff579', fontSize: '16px'}}>
               
            </Form.Text> */}
            <Button 
              onClick={()=> {this.props.saveRegisterInput(this.account, this.email, this.password, this.repassword)}} 
              className="Abtn mb-5" 
              type="button">
              下一步
            </Button>
          </Form.Text>
        </Form>
      </>
    );
  }
}




const mapDispatchToProps = (dispatch) => {
  return {
    saveRegisterInput(account, email, password, repassword) {
      const registerValue = {
        account: account.value,
        email: email.value,
        password: password.value,
        repassword: repassword.value,
      }
      const action = saveInput(registerValue)
      dispatch(action);
    }
  }
}



export default connect(null, mapDispatchToProps)(Join1);