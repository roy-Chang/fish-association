import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import IndexPage from "../../pages/IndexPage";
import ActivityPage from "../../pages/ActivityPage";
import ItemSingle from "../../pages/ItemSinglePage";
import TravelNotesPage from "../../pages/TravelNotesPage";
import AuthPage from "../../pages/AuthPage";
import MemberPage from "../../pages/MemberPage";

import ItemMain from "../../pages/ItemMainPage";

import "../../assets/css/styled.css"
import "./styles.css";
import logo from "../../assets/img/logo.png"


function MainNavbar(props) {
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
                <Nav activeKey={window.location.pathname} className="mr-5">
                    <LinkContainer to="/activity">
                        <Nav.Link>地方活動</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/travelNotes">
                        <Nav.Link>札記分享</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/item-single">
                        <Nav.Link>生鮮水產</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/item-main">
                        <Nav.Link>水產主頁</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/member">
                        <Nav.Link>會員中心</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/auth">
                        <Nav.Link>會員註冊</Nav.Link>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route path="/" exact component={IndexPage} />
            <Route path="/activity" component={ActivityPage} />
            <Route path="/travelNotes" component={TravelNotesPage} />
            <Route path="/item-single" component={ItemSingle} />
            <Route path="/item-main" component={ItemMain} />
            <Route path="/member" component={MemberPage} />
            <Route path="/auth" component={AuthPage} />
        </Router>
    </>
  )
}

export default MainNavbar
