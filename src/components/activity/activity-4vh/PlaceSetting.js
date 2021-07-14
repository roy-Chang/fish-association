import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
const locations = ["新北瑞芳區", "新北萬里區", "新北貢寮區", "基隆中正區"];

function PlaceSetting({ setLocationName }) {
  const handleChange = (e) => {
    setLocationName(e.target.id);
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={`請選擇地點`}
      className="d-inline-block  position-absolute"
      style={{ top: "250px", right: "50px" }}
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
