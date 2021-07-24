import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import IndexPage from "../../pages/IndexPage";
import ActivityPage from "../../pages/ActivityPage";
import TravelNotesPage from "../../pages/TravelNotesPage";
import AuthPage from "../../pages/AuthPage";
import MemberPage from "../../pages/MemberPage";
// import ItemMain from "../../pages/ItemMainPage";
import ProductsPage from '../../pages/ProductsPage';
import { Component } from 'react';
/* css import */
import "../../assets/css/styled.css"
import "./styles.css";
/* img import */
import logo from "../../assets/img/logo.png"
import { FaShoppingCart } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaUserTimes } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
//login image
import user from "../../assets/img/footer/user.jpg"
//
import { connect } from 'react-redux';
import { changeLogoutState } from '../../redux/actions/memberLogin';
//axios
import axios from 'axios';

class MainNavbar extends Component {
    render() {
        return (
            
                <>
                    <Router>
                        <Navbar collapseOnSelect expand="md" fixed="top" variant="dark" className="nav-bar">
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
                                        <td style={{borderRightWidth:2,
                                                    borderRightColor:`var(--sixth-color)`,
                                                    borderRightStyle:"solid"}}></td>
                                    </tr>
                                </table>
                                <div className="d-flex align-items-center mx-3">
                                    <FaShoppingCart style={{width:"25px",height:"25px"}}/>
                                    <FaCircle style={{width:"20px",height:"20px"}} className="ml-1"/>         
                                </div>
                                
                                {this.props.isLogin === true ? 
                                <NavDropdown title={<FaUserCheck style={{width:"30px",height:"30px", color:'#5CFC4B'}} />} id="collasible-nav-down">
                                <NavDropdown.Item>
                                        <LinkContainer to="/auth" className="mr-0">
                                            <Navbar.Brand>
                                                <img
                                                    src={user}
                                                    width="35"
                                                    height="35"
                                                    style={{borderRadius: '50%'}}
                                                    className="d-inline-block mr-2"
                                                    alt="React Bootstrap logo"
                                                />
                                                <span style={{fontSize: '16px'}}>{this.props.name}</span>
                                            </Navbar.Brand>
                                        </LinkContainer>
                                        <LinkContainer to="/auth">
                                            <Nav.Link onClick={this.props.handleLogout} className="text-center">會員登出</Nav.Link>
                                        </LinkContainer>
                                    </NavDropdown.Item>  
                                </NavDropdown>  : 
                                <NavDropdown title={<FaUserTimes style={{width:"30px",height:"30px"}} />} id="collasible-nav-down">
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
                                }    
                                
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Route path="/" exact component={IndexPage} />
                        <Route path="/activity" component={ActivityPage} />
                        <Route path="/travelNotes" component={TravelNotesPage} />
                        <Route path="/products" component={ProductsPage} />
                        <Route path="/member" render={() => <MemberPage something={'123456789'} />}/>
                        <Route path="/auth" component={AuthPage} />
                    </Router>
                
                </>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
      isLogin: state.memberLogin.isLogin,
      name: state.memberLogin.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogout() {
            delete axios.defaults.headers.common['Authorization'];
            const action = changeLogoutState();
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar)
