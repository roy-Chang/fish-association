import React, { Component } from "react";
import { connect } from "react-redux";
import "./MemberLogin.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
//action creator
import { handleAxiosLogin, changeLoginState, handleGoogleLogin } from "../../../../redux/actions/memberLogin";
import { Redirect } from "react-router";
//google 
import GoogleLogin from "react-google-login";
import axios from 'axios';



class FormLogin extends Component {
  
  render() {
    let goto = null;
    if (this.props.isLogin) {
      //to do ..................
      goto = <Redirect to="/" />;
    }
    return (
      <>
        {goto}
        <div>
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
                  ref={(input) => (this.account = input)}
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
                  type="password"
                  name="password"
                  required
                  placeholder="請輸入密碼"
                  ref={(input) => (this.password = input)}
                />

                <Form.Text className="MLcheck MLcheckAccount">
                  {this.props.error}
                </Form.Text>
              </Form.Text>
            </Form.Text>
            <Button
              onClick={() => {
                this.props.handleFormClick(this.account, this.password);
              }}
              className="MLbtn"
              type="button"
            >
              登入
            </Button>
            <Form.Text className="text-center" style={{color: 'white', fontSize: '16px'}}>
              - 或者使用 - 
            </Form.Text>
            <div className="google">
              <GoogleLogin 
                theme="dark"
                clientId="1090154977683-pd1o3bu6t2tjculo1jn1uqjootumkagc.apps.googleusercontent.com"
                onSuccess={this.props.successGoogle}
                onFailure={this.props.failureGoogle}
                cookiePolicy={'single_host_origin'}
                className="google-btn"
                buttonText="使用GOOGLE登入"
              />
            </div> 
            {/* <div><button onClick={this.props.tryGoogle}>try google</button></div> */}
          </Form.Text>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
    isLogin: state.memberLogin.isLogin,
    error: state.memberLogin.errorMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormClick(account, password) {
      const action = handleAxiosLogin(account.value, password.value);
      dispatch(action)
    },
    successGoogle(response) {
      // const name = response.profileObj.name;
      // const image = response.profileObj.imageUrl;
      //const token = response.tokenId;
      const tokenBlob = new Blob(
        [JSON.stringify({ access_token: response.accessToken }, null, 2)],
        { type: 'application/json' }
      )

      const action = handleGoogleLogin(tokenBlob)
      dispatch(action)
      //console.log(token)
      //handleGoogleLogin(token)
      // try {
      //   const data = {
      //     name,
      //     image,
      //     token,
      //     isLogin: true
      //   }
      //   const action = handleGoogleLogin(token, data)
      //   dispatch(action)
      // } catch(error) {
      //   console.log(error)
      // }
    },
    failureGoogle(response) {
      console.log(response)
    },
    // tryGoogle() {
    //   axios.get('http://localhost:3000/api/member/login/google/test').then((res) => {
    //     console.log(res)
    //   })
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
