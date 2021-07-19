import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//導入圖片
import HeadPic from "../../../../assets/img/member/memberAccount/handsome.jpg";
import GoldenMember from "../../../../assets/img/member/memberAccount/goldenMember.png";

function General() {
  // const [formShow, setFormShow] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fields, setFields] = useState({
    password: "",
    username: "",
    gender: "",
    email: "",
    phone: "",
    year: "",
    month: "",
    day: "",
    address: "",
  });

  return (
    <>
      {/* -------------------------以下為會員編輯彈出視窗---------------------------------------- */}
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
          <Form>
            <Container>
              <Row style={{ margin: "10px auto" }}>
                <Form.Label style={{ fontSize: "24px", width: "100px" }}>
                  密碼
                </Form.Label>
                <Form.Text className="MLtemContent">
                  <Form.Control
                    className="MLitemInput"
                    name="password"
                    type="password"
                    value={fields.password}
                    placeholder="請輸入密碼"
                    onChange={(e) => {
                      setFields(e.target.value);
                    }}
                  />
                </Form.Text>
              </Row>
              <Row style={{ margin: "10px auto" }}>
                <Form.Label style={{ fontSize: "24px", width: "100px" }}>
                  姓名
                </Form.Label>
                <Form.Text className="MLtemContent">
                  <Form.Control
                    className="MLitemInput"
                    type="text"
                    name="username"
                    value={fields.username}
                    placeholder="請輸入姓名"
                    onChange={(e) => {
                      setFields(e.target.value);
                    }}
                  />
                </Form.Text>
              </Row>
              <Row style={{ margin: "10px auto" }}>
                <Form.Label style={{ fontSize: "24px", width: "100px" }}>
                  性別
                </Form.Label>
                <Form.Group className="ML2itemContent">
                  <Form.Check type="checkbox" className="">
                    <Form.Check
                      inline
                      name="gender"
                      type="radio"
                      label="男"
                      id="男"
                      style={{
                        color: "var(--main-color)",
                        fontSize: "20px",
                      }}
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
              <Row style={{ margin: "10px auto" }}>
                <Form.Label style={{ fontSize: "24px", width: "100px" }}>
                  信箱
                </Form.Label>
                <Form.Text className="MLtemContent">
                  <Form.Control
                    className="MLitemInput"
                    type="email"
                    name="email"
                    value={fields.email}
                    placeholder="請輸入信箱"
                    onChange={(e) => {
                      setFields(e.target.value);
                    }}
                  />
                </Form.Text>
              </Row>
              <Row style={{ margin: "10px auto" }}>
                <Form.Label style={{ fontSize: "24px", width: "100px" }}>
                  聯絡電話
                </Form.Label>
                <Form.Text className="MLtemContent">
                  <Form.Control
                    className="MLitemInput"
                    type="text"
                    name="phone"
                    value={fields.phone}
                    placeholder="請輸入電話"
                    onChange={(e) => {
                      setFields(e.target.value);
                    }}
                  />
                </Form.Text>
              </Row>
              <Row style={{ fontSize: "24px", margin: "10px auto" }}>
                <Form.Label style={{ fontSize: "24px", width: "100px" }}>
                  出生日期
                </Form.Label>
                <Form.Control
                  as="select"
                  name="year"
                  style={{
                    fontSize: "16px",
                    width: "100px",
                    background: "#DCDCDC",
                    marginLeft: "20px",
                  }}
                  value={fields.year}
                  onChange={(e) => {
                    setFields(e.target.value);
                  }}
                >
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                </Form.Control>
                年
                <Form.Control
                  as="select"
                  name="month"
                  style={{
                    fontSize: "16px",
                    width: "70px",
                    background: "#DCDCDC",
                  }}
                  value={fields.month}
                  onChange={(e) => {
                    setFields(e.target.value);
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </Form.Control>
                月
                <Form.Control
                  as="select"
                  name="day"
                  style={{
                    fontSize: "16px",
                    width: "70px",
                    background: "#DCDCDC",
                  }}
                  value={fields.day}
                  onChange={(e) => {
                    setFields(e.target.value);
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </Form.Control>
                日
              </Row>
              <Row style={{ margin: "10px auto" }}>
                <Form.Label style={{ fontSize: "24px", width: "100px" }}>
                  地址
                </Form.Label>
                <Form.Text className="MLtemContent">
                  <Form.Control
                    className="MLitemInput"
                    type="text"
                    name="address"
                    value={fields.address}
                    placeholder="請輸入地址"
                    onChange={(e) => {
                      setFields(e.target.value);
                    }}
                  />
                </Form.Text>
              </Row>
            </Container>
          </Form>
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
            type="submit"
            style={{ background: "var(--second-color)", border: "none" }}
            // onClick={handleClose}
          >
            變更
          </Button>
        </Modal.Footer>
      </Modal>
      {/* -------------------------以上為會員編輯彈出視窗---------------------------------------- */}
      <div className="MAmemberBoard">
        {/* <div className="MAheadPicture MAheadPicture1240">
          <div className="MApictureCard">
            <div className="MApicture">
              <img className="MApictureGo" src={HeadPic} alt="" />
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
              <div className="MAmember">一般會員</div>
              <a className="MAchange MAsmallChange" href="/#">
                白金會員
                <img src={GoldenMember} alt="" />
              </a>
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
              <div className="MAcontent">alexXXXX@gmail.com</div>
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
          <div className="MAheadPicture MAheadPicture720">
            <div className="MApictureCard">
              <div className="MApicture">
                <img className="MApictureGo" src={HeadPic} alt="" />
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

// render(<General />);
export default General;
