import React from "react";
import Slide from "./Slide";
import TopRank from "./TopRank";
import { WebPageTop } from "./styled";

function FirstPage() {
  return (
    <>
      <nav style={{ height: "65px", background: "#1d3557" }}></nav>
      
      <WebPageTop className="d-flex">
        <Slide />
      </WebPageTop>
    </>
  );
}

export default FirstPage;