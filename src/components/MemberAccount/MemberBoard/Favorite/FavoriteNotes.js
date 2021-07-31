import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import likeNote from "../../../../utils/likeNote";
import "./MemberFavoriteNotes.css";
const writers = likeNote.noteMember;

function FavoriteNotes() {
  const [favoriteN, setFavoriteN] = useState([]);
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile/noteLike", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((serverResponse) => {
        const noteLike = serverResponse.data;
        console.log(noteLike);
        setFavoriteN(noteLike);
      });
  }, []);

  return (
    <>
      <div className="MFNcommodityFavorites">
        {favoriteN.map((article) => {
          const noteWriter = writers.find((writer) => {
            return writer.id === article.note_model.member_id;
          });
          return (
            <>
              <div>
                <div className="MFNcommodityFavoritesList">
                  <div className="MFNarticle-block">
                    <div className="MFNarticle-content">
                      <a href="">{article.note_model.note_name}</a>
                      <p style={{ opacity: 0.5 }}>作者：{noteWriter.name}</p>
                    </div>
                  </div>
                  <Button
                    className="MFNbtn"
                    onClick={() => {
                      const newWriter = favoriteN.filter((v, i) => {
                        return v.note_id !== article.note_id;
                      });
                      setFavoriteN(newWriter);
                    }}
                  >
                    刪除
                  </Button>
                </div>
                <hr />
              </div>
            </>
          );
        })}
        {/* <div>
          <div className="MFNcommodityFavoritesList">
            <div className="MFNarticle-block">
              <div className="MFNarticle-content">
                <a href="">GO！化身美人魚的台灣秘境</a>
                <p style={{ opacity: 0.5 }}>作者：優尼 Mrs. Yuny</p>
              </div>
            </div>
            <Button className="MFNbtn">刪除</Button>
          </div>
          <hr />
        </div> */}
      </div>
    </>
  );
}

export default FavoriteNotes;
