import React from "react";
import {Container} from "react-bootstrap";
import AuthorBlock from "./AuthorBlock";
import TNContent from "./TNContent";
import TNBoard from "./TNBoard";
import MainFooter from "../../footer/MainFooter";

function NoteShow() {
  return (
    <>
      <div className="activity-wrapper">
        <nav style={{ height: "65px"}}></nav>
          <Container>
            <AuthorBlock />
            <TNContent />
            <TNBoard />
          </Container>
          <MainFooter />
      </div>
    </>
  );
}

export default NoteShow;