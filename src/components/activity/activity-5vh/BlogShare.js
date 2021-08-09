import React, { useState, useEffect } from "react";
import { CardDeck, Card } from "react-bootstrap";
import { AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


function BlogShare() {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/activity/note")
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        //console.log(response.notelist);
        setBlogData(response.notelist);
      });
  }, []);

  return (
    <CardDeck style={{ color: "#1d3557", textAlign: "left" }}>
      {blogData.map((item, index) => {
        return (
          <>
            <Card key={item.id}>
              <Card.Title className="d-flex justify-content-between">
                <div className="head-left d-flex">
                  <IoPersonCircleSharp
                    style={{ maxWidth: "90%", width: "50px", height: "50px" }}
                  />
                  <div className="head-left-user" style={{ marginLeft: "8px" }}>
                    <Link to={`/travelNotesShow/${item.id}`}>
                        <h5 className="card-title" style={{ marginTop: "10px" }}>{item.note_name}</h5>
                    </Link>
                    <p className="date">
                      {item.note_update_time
                        .slice(0, 10)
                        .replace("-", "/")
                        .replace("-", "/")}
                    </p>
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
                <Card.Text>{item.note_content}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">更新於三分鐘前</small>
              </Card.Footer>
            </Card>
          </>
        );
      })}
    </CardDeck>
  );
}

export default BlogShare;
