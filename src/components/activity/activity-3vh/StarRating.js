import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

//當星星被點擊時，在黃色和灰色做切換
const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "yellow" : "grey"} onClick={onSelect} />
);
//定義星星數量
const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => {
        return (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        );
      })}
      <p style={{ color: " #1d3557", margin: "0px", fontSize: "15px" }}>
        250位參加過的人給出{selectedStars}的評價
      </p>
    </>
  );
}
