import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../MemberJoin.css";

function Bubbles() {
  useEffect(() => {
    (function (w, d) {
      let bubbles = d.querySelector(".bubbles");
      let bubblesWidth = bubbles.clientWidth;
      let num = bubbles.getAttribute("num");
      let duration = bubbles.getAttribute("duration");

      bubbleUp();
      setInterval(bubbleUp, duration * 1000);

      function bubbleUp() {
        bubbles.innerHTML = "";
        for (let i = 0; i < num; i++) {
          let bubbleDiv = d.createElement("div");
          bubbleDiv.classList.add("bubble");
          bubbleDiv.style.cssText = `
                  transform: translate(${
                    bubblesWidth * Math.random()
                  }px, 0) scale(${5 * Math.random()});
                  animation: up ${duration * Math.random() + 1}s ease-in-out;
              `;
          bubbles.appendChild(bubbleDiv);
        }
      }
    })(window, document);
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
