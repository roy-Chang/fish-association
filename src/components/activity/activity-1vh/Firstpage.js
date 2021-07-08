import React from "react";
import Banner from "./Banner";
import { BgGreen } from "./styled";

function Firstpage() {
  return (
    <>
      <nav style={{ height: "65px", background: "darkblue" }}></nav>
      <BgGreen>
        <header className="banner d-flex">
          <Banner />
        </header>
      </BgGreen>
    </>
  );
}

export default Firstpage;
