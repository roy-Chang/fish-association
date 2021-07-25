import React from "react";
import RankCard from "./RankCard"
import { FaFireAlt } from "react-icons/fa";


export default function RankTable() {
    return (
      <>
        <div className="P-rank-title d-flex align-items-center mt-5 mb-1">
            <FaFireAlt className="mr-1" />
            <p style={{margin:0,fontWeight:"bold"}}>熱門排行</p>
        </div>
        <div className="d-flex flex-column">
          <RankCard />
          <RankCard />
          <RankCard />
        </div>
      </>
    );
  }
  
