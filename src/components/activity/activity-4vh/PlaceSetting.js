import React, { useState, useEffect } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
const locations = ["新北瑞芳區", "新北萬里區", "新北貢寮區", "基隆中正區"];

function PlaceSetting({ setLocationName }) {
  const [locationValue, setLocationValue] = useState("請選擇地點");
  const handleChange = (e) => {
    setLocationName(e.target.id);
    setLocationValue(e.target.id);
  };
  useEffect(() => {}, [locationValue]);
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={locationValue}
      className="d-inline-block  position-absolute"
      style={{ top: "150px", right: "50px" }}
    >
      {locations.map((location, index) => (
        <Dropdown.Item
          value={location}
          href="#"
          id={location}
          onClick={handleChange}
        >
          {location}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default PlaceSetting;
