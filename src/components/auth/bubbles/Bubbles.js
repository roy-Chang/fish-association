import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Bubbles() {
  useEffect(() => {
    setInterval(() => {}, 1000);
  }, []);
  return (
    <>
      <div className="Aanimation">
        <div className="bubbles" num="50" duration="5">
          <div className="bubble bubble1"></div>
          <div className="bubble bubble2"></div>
        </div>
      </div>
    </>
  );
}

export default Bubbles;
