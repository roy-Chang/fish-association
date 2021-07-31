import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./MemberCSS/MemberNotes.css";

const moment = require("moment");
function MemberNotes() {
  // const [state, setState] = useState();
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("token");
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile/note", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((serverResponse) => {
        const myNotes = serverResponse.data;
        console.log(myNotes);
        setNotes(myNotes);
      });
  }, []);
  return (
    <>
      <div className="MNmemberBoard">
        <div>
          <div className="MNmemberAcount">
            <h2 className="MNnotesTitle">我的札記</h2>
          </div>
          <hr />
        </div>
        <div className="MNnotesAll">
          {notes.map((note) => {
            if (note.state === 1) {
              return (
                <div className="MNListHr">
                  <div className="MNnotesList">
                    <div className="MNarticle-block">
                      <div className="MNarticle-content">
                        <a href="">{note.note_name}</a>
                        <p style={{ opacity: "0.5" }}>
                          發表日期:
                          {moment(note.note_update_time).format(
                            "YYYY-MM-DD HH:mm:ss"
                          )}
                        </p>
                      </div>
                    </div>
                    <Button
                      className="MNbtn"
                      onClick={() => {
                        const article = notes.filter((v, i) => {
                          return v.id !== note.id;
                        });
                        let header = {
                          Authorization: `Bearer ${token}`,
                          "Content-Type": "application/json",
                          Accept: "application/json",
                        };

                        axios
                          .patch(
                            "http://localhost:3000/api/profile/note/delete",
                            { note: notes },
                            {
                              headers: header,
                            }
                          )
                          .then((response) => {
                            console.log(response);
                            setNotes(article);
                          });
                      }}
                      onChange={(e) => {}}
                    >
                      刪除
                    </Button>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
          {/* <div className="MNListHr">
            <div className="MNnotesList">
              <div className="MNarticle-block">
                <div className="MNarticle-content">
                  <a href="">
                    GO！化身美人魚的台灣秘境GO！化身美人魚的台灣秘境
                    GO！化身美人魚的台
                  </a>
                  <p style={{ opacity: "0.5" }}>發表日期:2021/05/20 20:00:25</p>
                </div>
              </div>
              <Button className="MNbtnUpdate">修改</Button>
              <Button className="MNbtn">刪除</Button>
            </div>
            <hr />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default MemberNotes;
