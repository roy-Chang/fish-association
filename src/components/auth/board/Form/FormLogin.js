import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./MemberLogin.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

//action creator
import { handleAxiosLogin } from "../../../../redux/actions/memberLogin";

class FormLogin extends PureComponent {
  render() {
    return (
      <>
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
                  type="text"
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
            <Form.Text className="MLitem MLitemVerification">
              <Form.Text className="MLitemContent">
                <Form.Text className="MLverification"></Form.Text>
                <Form.Text className="MLcheck MLcheckAccount">
                  圖形驗證錯誤
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
          </Form.Text>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.memberLogin.errorMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormClick(account, password) {
      const action = handleAxiosLogin(account.value, password.value);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
