import React from "react";
import Slide from "./Slide";
import TopRank from "./TopRank";
import TNSearch from "./TNSearch";
import TNWriteBtn from "./TNWriteBtn";
import TNBlock from "./TNBlock";
import { WebPageTop,WebPageCenter,TravelNotesList} from "./styled";


function ListPage() {
  return (
    <>
      <nav style={{ height: "65px", background: "#1d3557" }}></nav>
      
      <WebPageTop className="d-flex justify-content-between">
        <Slide />
        <TopRank />
      </WebPageTop>

      <WebPageCenter>
        <div className="list-container">
          <div className="list-top d-flex justify-content-between align-items-center">
            <TNSearch />
            <TNWriteBtn />
          </div>
          <TravelNotesList className="pb-5">
            <TNBlock />
            <TNBlock />
            <TNBlock />
            <TNBlock />
          </TravelNotesList>
        </div>
      </WebPageCenter>
    </>
  );
}

export default ListPage;