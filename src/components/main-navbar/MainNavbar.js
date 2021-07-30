import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import IndexPage from "../../pages/IndexPage";
import ActivityPage from "../../pages/ActivityPage";
import TravelNotesPage from "../../pages/TravelNotesPage";
import AuthPage from "../../pages/AuthPage";
import MemberPage from "../../pages/MemberPage";
import ProductsListPage from "../../pages/ProductsListPage";
import ActivityOrder from "../../pages/ActivityOrder";
//import FirstOrder from "../activity/activity-order/FirstStep/FirstOrder";
//import ProductsDetailPage from "../../pages/ProductsDetailPage";
import { Component } from "react";
/* css import */
import "../../assets/css/styled.css";
import "./styles.css";
/* img import */
import logo from "../../assets/img/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
//import bootstrap
import { Button, Modal } from "react-bootstrap";
//login image
//import user from "../../assets/img/footer/user.jpg"
//../../assets/img/userimage/people-1627149411393.jpg
import { connect } from "react-redux";
import { changeLogoutState } from "../../redux/actions/memberLogin";
//axios
import axios from "axios";

class MainNavbar extends Component {
  // componentDidMount() {
  //   const token = localStorage.getItem('token')
  //   if(token) {
  //     //axios
  //     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //     axios.get('http://localhost:3000/api/profile').then((res) => {
  //       //isLogin = true
  //     })
  //   }
  // }
  //購物車所需要的彈跳視窗
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
    };
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Router>
          <Navbar
            collapseOnSelect
            expand="md"
            fixed="top"
            variant="dark"
            className="nav-bar"
          >
            <LinkContainer to="/">
              <Navbar.Brand className="font-weight-bold ml-5">
                <img
                  src={logo}
                  width="25"
                  height="25"
                  className="d-inline-block mr-2"
                  alt="React Bootstrap logo"
                />
                跳躍吧漁會
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse className="justify-content-end">
              {/* <Nav className="mr-5"> */}
              <Nav activeKey={window.location.pathname} className="mr-5">
                <LinkContainer to="/activity" className="mx-2">
                  <Nav.Link>地方活動</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/travelNotes" className="mx-2">
                  <Nav.Link>札記分享</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/products" className="mx-2">
                  <Nav.Link>生鮮水產</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/member" className="mx-2">
                  <Nav.Link>會員中心</Nav.Link>
                </LinkContainer>
                {/* <LinkContainer to="/auth" className="mx-2">
                                    <Nav.Link>會員註冊</Nav.Link>
                                </LinkContainer> */}
                <table className="mx-3">
                  <tr>
                    <td
                      style={{
                        borderRightWidth: 2,
                        borderRightColor: `var(--sixth-color)`,
                        borderRightStyle: "solid",
                      }}
                    ></td>
                  </tr>
                </table>
                {/*購物車 後面記得要加箭頭符號hover*/}
                <div
                  className="d-flex align-items-center mx-3"
                  onClick={this.handleShow}
                >
                  <FaShoppingCart style={{ width: "25px", height: "25px" }} />
                  <FaCircle
                    style={{ width: "20px", height: "20px" }}
                    className="ml-1"
                  />
                </div>
                {/*bootstrap彈跳視窗*/}
                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>購物車清單</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ul className="d-flex justify-content-between">
                      <li>圖片</li>
                      <li>鯖魚</li>
                      <li>1</li>
                      <li>$200</li>
                    </ul>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      繼續購物
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                      前往結帳
                    </Button>
                  </Modal.Footer>
                </Modal>
                {/*bootstrap彈跳視窗*/}
                {/*會員登入狀態判斷*/}
                {localStorage.getItem("token") === null ||
                this.props.isLogin === true ||
                this.props.isLogin === false ? (
                  <NavDropdown
                    title={
                      <FaUserTimes style={{ width: "30px", height: "30px" }} />
                    }
                    id="collasible-nav-down"
                  >
                    <NavDropdown.Item>
                      {/* 會員登錄 */}
                      <LinkContainer to="/auth">
                        <Nav.Link className="text-center">會員登入</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/auth">
                        <Nav.Link className="text-center">會員註冊</Nav.Link>
                      </LinkContainer>
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <NavDropdown
                    title={
                      <FaUserCheck
                        style={{
                          width: "30px",
                          height: "30px",
                          color: "#5CFC4B",
                        }}
                      />
                    }
                    id="collasible-nav-down"
                  >
                    <NavDropdown.Item>
                      <LinkContainer to="/auth" className="mr-0">
                        <Navbar.Brand>
                          <img
                            // src={
                            //   localStorage.getItem("image") === "null"
                            //     ? require(`../../assets/img/userimage/user.jpg`)
                            //         .default
                            //     : require(`../../assets/img/userimage/${localStorage.getItem(
                            //         "image"
                            //       )}`).default
                            // }
                            src={
                              require(`../../assets/img/userimage/user.jpg`)
                                .default
                            }
                            width="35"
                            height="35"
                            style={{ borderRadius: "50%" }}
                            className="d-inline-block mr-2"
                            alt="React Bootstrap logo"
                          />
                          <span style={{ fontSize: "16px" }}>
                            {localStorage.getItem("name")}
                          </span>
                        </Navbar.Brand>
                      </LinkContainer>
                      <LinkContainer to="/auth">
                        <Nav.Link
                          onClick={this.props.handleLogout}
                          className="text-center"
                        >
                          會員登出
                        </Nav.Link>
                      </LinkContainer>
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/activity" component={ActivityPage} />
            <Route
              path="/order/activity/:name/:step"
              component={ActivityOrder}
            />
            <Route path="/travelNotes" component={TravelNotesPage} />
            <Route path="/products" component={ProductsListPage} />
            <Route path="/member" />
            <Route path="/auth" component={AuthPage} />
            <Route
              path="/detail/:type/:name/:id"
              component={ProductsListPage}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.memberLogin.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout() {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("image");
      delete axios.defaults.headers.common["Authorization"];
      const action = changeLogoutState();
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);
