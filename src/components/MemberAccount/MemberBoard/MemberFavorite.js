import React, { useState } from "react";

//
import FavoriteProducts from "./Favorite/FavoriteProducts";
import FavoriteNotes from "./Favorite/FavoriteNotes";

import "./Favorite/MemberFavoritesProducts.css";

function MemberFavorite(props) {
  const [change, setChange] = useState(true);

  return (
    <>
      <div className="MFPmemberBoard">
        <ul className="MFPitemUl">
          <li className={`MFPleftBoardTitle ${change ? "MFPactive" : ""}`}>
            <a
              onClick={() => {
                setChange(true);
              }}
            >
              商品收藏
            </a>
          </li>
          <li className={`MFPrightBoardTitle ${change ? "" : "MFPactive"}`}>
            <a
              onClick={() => {
                setChange(false);
              }}
            >
              札記收藏
            </a>
          </li>
        </ul>
        {/* <FavoriteProducts /> */}
        {change ? <FavoriteProducts /> : <FavoriteNotes />}
      </div>
    </>
  );
}

export default MemberFavorite;
