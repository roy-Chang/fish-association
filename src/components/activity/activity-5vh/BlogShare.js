import React, { Component } from "react";
import { CardDeck, Card } from "react-bootstrap";
import { BlogUserPic } from "./styled";
import { AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
class BlogShare extends Component {
  constructor(props) {
    super(props);
    this.state = { value: new Date() };
  }
  render() {
    return (
      <>
        <CardDeck style={{ color: "#1d3557", textAlign: "left" }}>
          <Card>
            <Card.Title className="d-flex justify-content-between">
              <div className="head-left d-flex">
                <BlogUserPic src={{}} alt="pic" />
                <div className="head-left-user" style={{ marginLeft: "8px" }}>
                  <h5 className="card-title">花花</h5>
                  <p className="date">2021/04/05</p>
                </div>
              </div>
              <div className="head-right">
                <a href="">
                  <AiFillHeart
                    style={{
                      marginLeft: "8px",
                      fontSize: "24px",
                      color: "#1d3557",
                    }}
                  />
                </a>
                <a href="">
                  <AiOutlineShareAlt
                    style={{
                      marginLeft: "8px",
                      fontSize: "24px",
                      color: "#1d3557",
                    }}
                  />
                </a>
              </div>
            </Card.Title>
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/237/200/100"
            />
            <Card.Body>
              <Card.Text>
                這裡好棒喔喔喔喔喔，好贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">更新於三分鐘前</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Title className="d-flex justify-content-between">
              <div className="head-left d-flex">
                <BlogUserPic src={{}} alt="pic" />
                <div className="head-left-user" style={{ marginLeft: "8px" }}>
                  <h5 className="card-title">花花</h5>
                  <p className="date">2021/04/05</p>
                </div>
              </div>
              <div className="head-right">
                <a href="">
                  <AiFillHeart
                    style={{
                      marginLeft: "8px",
                      fontSize: "24px",
                      color: "#1d3557",
                    }}
                  />
                </a>
                <a href="">
                  <AiOutlineShareAlt
                    style={{
                      marginLeft: "8px",
                      fontSize: "24px",
                      color: "#1d3557",
                    }}
                  />
                </a>
              </div>
            </Card.Title>
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/237/200/100"
            />
            <Card.Body>
              <Card.Text>
                這裡好棒喔喔喔喔喔，好贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">更新於三分鐘前</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Title className="d-flex justify-content-between">
              <div className="head-left d-flex">
                <BlogUserPic src={{}} alt="pic" />
                <div className="head-left-user" style={{ marginLeft: "8px" }}>
                  <h5 className="card-title">花花</h5>
                  <p className="date">2021/04/05</p>
                </div>
              </div>
              <div className="head-right">
                <a href="">
                  <AiFillHeart
                    style={{
                      marginLeft: "8px",
                      fontSize: "24px",
                      color: "#1d3557",
                    }}
                  />
                </a>
                <a href="">
                  <AiOutlineShareAlt
                    style={{
                      marginLeft: "8px",
                      fontSize: "24px",
                      color: "#1d3557",
                    }}
                  />
                </a>
              </div>
            </Card.Title>
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/237/200/100"
            />
            <Card.Body>
              <Card.Text>
                這裡好棒喔喔喔喔喔，好贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊贊
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">更新於三分鐘前</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </>
    );
  }
}
export default BlogShare;
