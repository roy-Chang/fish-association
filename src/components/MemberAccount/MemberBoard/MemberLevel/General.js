import React, { useState, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";


//導入圖片
import HeadPic from "../../../../assets/useimage/people-1627149411393.jpg";
import GoldenMember from "../../../../assets/img/member/memberAccount/goldenMember.png";

function General() {
  // const [formShow, setFormShow] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({});
  // const [updateInfo, setUpdateInfo] = useState(fields);

  const [fields, setFields] = useState({
    password: data.password,
    username: data.name,
    gender: data.gender,
    email: data.email,
    phone: data.phone,
    birthday: data.birthday,
    address: data.address,
  });

  //

  //抓取後端來的API
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile", {
        // headers: {
        //   // Authorization:
        //   //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJJZCI6NCwiaWF0IjoxNjI3MDI2NzA5LCJleHAiOjE2MjcwMzAzMDl9.Jn8yY1QTfae6aPoOzD7fzhL1sXY3W6btMhc4KYo_VeA",
        //   Authorization: window.localStorage.getItem("token"),
        // },
      })
      .then((serverResponse) => {
        const member = serverResponse.data.member;
        setData(member);
        setFields(member);
      });
  }, []);

  useCallback(() => {
    updateFile();
  }, []);

  const updateFile = (e) => {
    e.preventDefault();
    console.log(fields);
    if (fields.email === data.email) {
      delete fields.email;
    }
    if (fields.password === data.password) {
      delete fields.password;
    }
    if (fields.phone === data.phone) {
      delete fields.phone;
    }
    axios
      .put("http://localhost:3000/api/profile/update", {
        member: fields,
      })
      .then((serverResponse) => {
        console.log(serverResponse);
      })
      .catch((error) => {
        if (error.response) {
        }
      });
  };

  function changePhoto(e) {
    const photo = new FormData();
    // console.log(e.target.files[0]);
    photo.append("photo", e.target.files[0]);
    axios.post("http://localhost:3000/api/profile/image", photo, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

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
          <Form onSubmit={updateFile}>
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
                    placeholder="請輸入要變更的密碼"
                    onChange={(e) => {
                      setFields({ ...fields, password: e.target.value });
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
                    value={fields.name}
                    name="username"
                    // value={data.name}
                    placeholder="請輸入姓名"
                    onChange={(e) => {
                      setFields({ ...fields, name: e.target.value });
                    }}
                  />
                </Form.Text>
              </Row>
              <Row style={{ margin: "10px auto" }}>
                <Form.Label style={{ fontSize: "24px", width: "100px" }}>
                  性別
                </Form.Label>
                <Form.Group className="ML2itemContent">
                  <Form.Check
                    type="checkbox"
                    className=""
                    onChange={(e) => {
                      setFields({ ...fields, gender: e.target.value });
                    }}
                  >
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
                      setFields({ ...fields, email: e.target.value });
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
                      setFields({ ...fields, phone: e.target.value });
                    }}
                  />
                </Form.Text>
              </Row>
              <Row style={{ fontSize: "24px", margin: "10px auto" }}>
                <Form.Label style={{ fontSize: "24px", width: "100px" }}>
                  出生日期
                </Form.Label>
                {/* <Form.Group> */}
                <Form.Control
                  className="MLitemInput"
                  type="date"
                  name="birthday"
                  value={fields.birthday}
                  placeholder="Date of Birth"
                  onChange={(e) => {
                    setFields({ ...fields, birthday: e.target.value });
                  }}
                />
                {/* </Form.Group> */}
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
                      setFields({ ...fields, address: e.target.value });
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
            onClick={updateFile}
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
              <div className="MAcontent">{data.account}</div>
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
              <div className="MAcontent">{data.name}</div>
            </Form.Group>
            <Form.Group className="MAaccount">
              <div className="MAlistTitle">性別</div>
              <div className="MAcontent">{data.gender === 1 ? "男" : "女"}</div>
            </Form.Group>
            <Form.Group className="MAaccount">
              <div className="MAlistTitle">信箱</div>
              <div className="MAcontent">{data.email}</div>
            </Form.Group>
            <Form.Group className="MAaccount">
              <div className="MAlistTitle">聯絡電話</div>
              <div className="MAcontent">{data.phone}</div>
            </Form.Group>
            <Form.Group className="MAaccount">
              <div className="MAlistTitle">出生日期</div>
              <div className="MAcontent">{data.birthday}</div>
            </Form.Group>
            <Form.Group className="MAaccount">
              <div className="MAlistTitle">地址</div>
              <div className="MAcontent">{data.address}</div>
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
                <img
                  className="MApictureGo"
                  src={HeadPic}
                  alt=""
                />
              </div>
              <form
                method="POST"
                action="http://localhost:3000/api/profile/image"
                enctype="multipart/form-data"
              >
                <label htmlFor="name">
                  <input
                    type="file"
                    id="name"
                    name="photo"
                    onChange={changePhoto}
                  />
                  選擇照片
                </label>
              </form>
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
