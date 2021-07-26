import React from "react";
import DetailTop from "./DetailTop";
import DetailContent from "./DetailContent";
import Recommend from "./Recommend";


import "./styles.css"

function DetailBlock() {
  return (
    <>
       <div className="P-detail-blocK d-flex flex-column align-items-center">
            <DetailTop />
            <DetailContent />
            <Recommend />
       </div>
    </>
  );
}

export default DetailBlock;