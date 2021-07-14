import React from "react";

import TravelNotesList from "../components/travel-notes/travel-note-list/TravelNotesList";

import "../assets/css/styled.css";
import "react-bootstrap"; //Toast
import "bootstrap/dist/css/bootstrap.min.css";

function TravelNotesPage() {
  return (
    <>
     <div className="activity-wrapper activity-bg-green">
        <TravelNotesList />
      </div>
    </>
  );
}

export default TravelNotesPage;
