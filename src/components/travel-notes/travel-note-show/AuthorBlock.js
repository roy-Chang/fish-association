import React from "react";

import { Col, Row } from "react-bootstrap";

import { BsHeartFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";


import arupaka from "../../../assets/img/footer/01.jpg"

import "./styles.css"


function AuthorBlock() {
  return (
    <>
        <div className="TN-author-block">
            <Row>
                <Col sm={3} className="TN-author-pic d-flex align-items-center">
                    <img src={arupaka} alt=""></img>
                </Col>
                <Col sm={5} className="d-flex flex-column justify-content-center">
                    <p style={{fontSize:"28px"}}>作者 : Arupaka</p>
                    <p>上傳時間 : 2020-01-01</p>
                </Col>
                <Col sm={4} className="d-flex align-items-center justify-content-end">
                    <div className="mr-4"><BsHeartFill className="mr-2" style={{width:"25px",height:"25px"}} />喜歡</div>
                    <div className="mr-4"><BsBookmark className="mr-1" style={{width:"27px",height:"27px"}}/>收藏</div>
                    <div className="mr-4"><BiShareAlt className="mr-1" style={{width:"25px",height:"25px"}}/>分享</div>
                </Col>
            </Row>
        </div>
    </>

  );
}

export default AuthorBlock;