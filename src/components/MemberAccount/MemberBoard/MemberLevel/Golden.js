import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

import "./Golden.css";

//導入圖片
import HeadPic from "../../../../assets/img/member/memberAccount/handsome.jpg";
import GoldenFeame from "../../../../assets/img/member/memberAccount/goldenFrame.png";
import GoldenMember from "../../../../assets/img/member/memberAccount/goldenMember.png";

function General() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal size={"lg"} show={show} onHide={handleClose}>
        {console.log(show)}
        <Modal.Header style={{ background: "var(--forth-color)" }} closeButton>
          <Modal.Title
            style={{
              fontSize: "32px",
              color: "var(--main-color)",
              fontWeight: "bold",
            }}
          >
            變更您需要的項目
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "var(--forth-color)" }}>
          <Form.Text>
            <Container>
              <Row>
                <Form.Label
                  style={{ fontSize: "24px", width: "100px" }}
                  className=""
                  htmlFor=""
                >
                  密碼
                </Form.Label>
                <Form.Text className="MLtemContent">
                  <Form.Control
                    className="MLitemInput"
                    type="text"
                    name="password"
                    required
                    placeholder="請輸入密碼"
                  />
                </Form.Text>
              </Row>
              <Row>
                <Form.Label
                  style={{ fontSize: "24px", width: "100px" }}
                  className=""
                  htmlFor=""
                >
                  姓名
                </Form.Label>
                <Form.Text className="MLtemContent">
                  <Form.Control
                    className="MLitemInput"
                    type="text"
                    name="name"
                    required
                    placeholder="請輸入姓名"
                  />
                </Form.Text>
              </Row>
              <Row>
                <Form.Label style={{ fontSize: "24px", width: "100px" }}>
                  性別
                </Form.Label>
                <Form.Group className="ML2itemContent">
                  <Form.Check type="checkbox" className="ML2gender">
                    <Form.Check
                      inline
                      name="gender"
                      type="radio"
                      label="男"
                      id="男"
                      style={{ color: "var(--main-color)", fontSize: "20px" }}
                    ></Form.Check>
                    <Form.Check
                      inline
                      name="gender"
                      type="radio"
                      label="女"
                      id="女"
                      style={{
                        color: "var(--main-color)",
                        fontSize: "20px",
                        paddingLeft: "20px",
                      }}
                    ></Form.Check>
                  </Form.Check>
                </Form.Group>
              </Row>
              <Row>
                <Form.Label
                  style={{ fontSize: "24px", width: "100px" }}
                  className=""
                  htmlFor=""
                >
                  信箱
                </Form.Label>
                <Form.Text className="MLtemContent">
                  <Form.Control
                    className="MLitemInput"
                    type="email"
                    name="name"
                    required
                    placeholder="請輸入信箱"
                  />
                </Form.Text>
              </Row>
              <Row>
                <Form.Label
                  style={{ fontSize: "24px", width: "100px" }}
                  className=""
                  htmlFor=""
                >
                  聯絡電話
                </Form.Label>
                <Form.Text className="MLtemContent">
                  <Form.Control
                    className="MLitemInput"
                    type="text"
                    name="name"
                    required
                    placeholder="請輸入電話"
                  />
                </Form.Text>
              </Row>
              <Row style={{ fontSize: "24px" }}>
                <Form.Label
                  style={{ fontSize: "24px", width: "100px" }}
                  className=""
                  htmlFor=""
                >
                  出生日期
                </Form.Label>
                <Form.Control
                  as="select"
                  style={{
                    fontSize: "16px",
                    width: "100px",
                    background: "#DCDCDC",
                  }}
                >
                  <option>1990</option>
                  <option>1991</option>
                  <option>1992</option>
                  <option>1993</option>
                  <option>1994</option>
                  <option>1995</option>
                  <option>1996</option>
                  <option>1997</option>
                  <option>1998</option>
                  <option>1999</option>
                  <option>2000</option>
                </Form.Control>
                年
                <Form.Control
                  as="select"
                  style={{
                    fontSize: "16px",
                    width: "70px",
                    background: "#DCDCDC",
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Form.Control>
                月
                <Form.Control
                  as="select"
                  style={{
                    fontSize: "16px",
                    width: "70px",
                    background: "#DCDCDC",
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                </Form.Control>
                日
              </Row>
              <Row>
                <Form.Label
                  style={{ fontSize: "24px", width: "100px" }}
                  className=""
                  htmlFor=""
                >
                  地址
                </Form.Label>
                <Form.Text className="MLtemContent">
                  <Form.Control
                    className="MLitemInput"
                    type="text"
                    name="address"
                    required
                    placeholder="請輸入地址"
                  />
                </Form.Text>
              </Row>
            </Container>
          </Form.Text>
        </Modal.Body>
        <Modal.Footer style={{ background: "var(--forth-color)" }}>
          <Button
            variant="secondary"
            style={{ background: "var(--fifth-color)", border: "none" }}
            onClick={handleClose}
          >
            關閉
          </Button>
          <Button
            variant="primary"
            style={{ background: "var(--second-color)", border: "none" }}
            onClick={handleClose}
          >
            變更
          </Button>
        </Modal.Footer>
      </Modal>
      {/* -------------------------以上為會員編輯彈出視窗---------------------------------------- */}
      <div className="MAmemberBoard">
        {/* <div class="headPicture headPicture1240">
          <div class="pictureCard">
            <div class="picture">
              <img class="pictureGo" src={HeadPic} alt="" />
              <img src={GoldenFeame} alt="" />
            </div>
            <label htmlFor="name">
              <input type="file" id="name" name="photo" />
              選擇照片
            </label>
            <div></div>
          </div>
        </div> */}
        <div>
          <div className="MAmemberAcount">
            <h2 className="MAacountTitle">我的檔案</h2>
            <p className="MAacountSubhead">管理你的檔案以保護你的帳戶</p>
          </div>
          <hr />
        </div>
        {/* <BoardForm /> */}
        <div className="MAmemberAccountInformation">
          <Container className="MAaccountInformation">
            <Form.Group className="MAaccount">
              <div className="MAlistTitle">使用者帳號</div>
              <div className="MAcontent">alexXXXX</div>
              <div className="MAmember" style={{ color: "#fff579" }}>
                白金會員
              </div>
            </Form.Group>
            <Form.Group className="MAaccount">
              <div className="MAlistTitle">密碼</div>
              <div className="MAcontent">************</div>
            </Form.Group>
            <Form.Group className="MAaccount">
              <div className="MAlistTitle">姓名</div>
              <div className="MAcontent">郭帥</div>
            </Form.Group>
            <Form.Group className="MAaccount">
              <div className="MAlistTitle">性別</div>
              <div className="MAcontent">男</div>
            </Form.Group>
            <Form.Group className="MAaccount">
              <div className="MAlistTitle">信箱</div>
              <div className="MAcontent">alexXXXX@il.com</div>
            </Form.Group>
            <Form.Group className="MAaccount">
              <div className="MAlistTitle">聯絡電話</div>
              <div className="MAcontent">0912345678</div>
            </Form.Group>
            <Form.Group className="MAaccount">
              <div className="MAlistTitle">出生日期</div>
              <div className="MAcontent">1990-02-05</div>
            </Form.Group>
            <Form.Group className="MAaccount">
              <div className="MAlistTitle">地址</div>
              <div className="MAcontent">桃園縣中壢區中央大學資策會中心</div>
            </Form.Group>
            <Form.Group className="MAbtnW">
              <Button className="MAbtn" onClick={handleShow}>
                編輯
              </Button>
            </Form.Group>
          </Container>
          <div class="headPicture headPicture720">
            <div class="pictureCard">
              <div class="picture">
                <img class="pictureGo" src={HeadPic} alt="" />
                <img src={GoldenFeame} alt="" />
              </div>
              <label htmlFor="name">
                <input type="file" id="name" name="photo" />
                選擇照片
              </label>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default General;
