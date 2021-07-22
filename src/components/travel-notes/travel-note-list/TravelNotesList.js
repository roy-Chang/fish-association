import React from "react";
import {Container} from "react-bootstrap";
import Slide from "./Slide";
import TopRank from "./TopRank";
import TNSearch from "./TNSearch";
import TNWriteBtn from "./TNWriteBtn";
import TNBlock from "./TNBlock";
import { WebPageTop,WebPageCenter,TravelNotesList} from "./styled";


function ListPage() {
  return (
    <>
      <nav style={{ height: "65px"}}></nav>
      
      
        <WebPageTop className="d-flex justify-content-between">
        <Slide />
        <TopRank />
        </WebPageTop>

        {/* <WebPageCenter> */}
          <Container className="list-container">
            <div className="list-top d-flex justify-content-between align-items-center mx-5">
              <TNSearch />
              <TNWriteBtn />
            </div>
            <TravelNotesList className="pb-5">
              <TNBlock />
              <TNBlock />
              <TNBlock />
              <TNBlock />
              <TNBlock />
              <TNBlock />
              <TNBlock />
              <TNBlock />
            </TravelNotesList>
          </Container>
        {/* </WebPageCenter> */}
      
      
      
    </>
  );
}

export default ListPage;