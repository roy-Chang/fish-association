import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

import "./MemberFavoriteNotes.css";

function FavoriteNotes() {
  const [favoriteN, setFavoriteN] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/profile/noteLike")
      .then((serverResponse) => {
        const noteLike = serverResponse.data;
        console.log(noteLike);
        setFavoriteN(noteLike);
      });
  }, []);

  return (
    <>
      <div className="MFNcommodityFavorites">
        <div>
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
        </div>
      </div>
    </>
  );
}

export default FavoriteNotes;
