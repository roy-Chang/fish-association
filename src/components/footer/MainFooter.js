import React, { Component } from "react";
import { Container,Col,Row } from 'react-bootstrap';


/* icon import */
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

/* css import */
import "./styles.css";

/* img import */
import memberPic from "../../assets/img/footer/01.jpg";


function MainFooter(props) {
    return (
        <>
            <footer className="footer py-3">
                <Container fluid="md">
                    <Row>
                        <Col className="footer-left">
                            <div className="contact">
                                <div className="contact-title">
                                    <h3>聯絡我們</h3>
                                    <hr />
                                </div>
                                <div className="contact-content">
                                    <p>營業時間: 上午八點至下午五點</p>
                                    <p>營業地點:  新北勢三重區力行路一段6號</p>
                                    <p>聯絡方式: 0955123123</p>
                                    <hr style={{opacity:"0.6"}} />
                                </div>
                                <div className="contact-link">
                                    <FaFacebook className="link-icon" />
                                    <FaGooglePlus className="link-icon" />
                                    <FaInstagram className="link-icon" />
                                </div>
                            </div>
                        </Col>
                        <Col className="footer-right">
                            <div className="members-title">
                                <h3>漁會負責人</h3>
                                <hr />
                            </div>
                            <div className="members-list d-flex justify-content-around mt-5">
                                <div className="members-card">
                                    <img className="members-pic" src={memberPic} alt=""  />
                                    <p>組長</p>
                                    <p>草尼馬</p>
                                </div>
                                <div className="members-card">
                                    <img className="members-pic" src={memberPic} alt=""  />
                                    <p>組長</p>
                                    <p>草尼馬</p>
                                </div>
                                <div className="members-card">
                                    <img className="members-pic" src={memberPic} alt=""  />
                                    <p>組長</p>
                                    <p>草尼馬</p>
                                </div>
                                <div className="members-card">
                                    <img className="members-pic" src={memberPic} alt=""  />
                                    <p>組長</p>
                                    <p>草尼馬</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default MainFooter
