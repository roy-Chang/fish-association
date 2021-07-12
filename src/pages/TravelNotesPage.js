import React from "react";

import FirstPage from "../components/travel-notes/travel-note-1vh/FirstPage";
import SecondPage from "../components/travel-notes/travel-note-2vh/SecondPage";

import "../assets/css/styled.css";
import "react-bootstrap"; //Toast
import "bootstrap/dist/css/bootstrap.min.css";

function TravelNotesPage() {
  return (
    <>
     <div className="activity-wrapper activity-bg-green">
        <FirstPage />
      </div>
    </>
  );
}

export default TravelNotesPage;
