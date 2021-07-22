import React from "react";
import Banner from "./Banner";
import { BgGreen } from "./styled";

function Firstpage() {
  return (
    <>
      <BgGreen>
      <nav style={{ height: "65px"}}></nav>
        <header className="banner d-flex">
          <Banner />
        </header>
      </BgGreen>
    </>
  );
}

export default Firstpage;
