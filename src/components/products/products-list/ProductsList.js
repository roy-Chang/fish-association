import React from "react";
import {Container} from "react-bootstrap";
import Banner from "./Banner";
import LeftNav from "./LeftNav";
import RankTable from "./RankTable";
import MainBlock from "./MainBlock";


/* img import */
import { FaFireAlt } from "react-icons/fa";



function ProductsListPage() {
  return (
    <>
        <nav style={{ height: "65px"}}></nav>
        
        <div className=" P-background">
          <Banner />
        
        <Container className="mt-3 d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center">
            <LeftNav />
            <div style={{color:"var(--fifth-color)",fontSize:"24px"}} className="d-flex align-items-center mt-5 mb-1">
              <FaFireAlt className="mr-1" />
              <p style={{margin:0,fontWeight:"bold"}}>熱門排行</p>
            </div>
            <RankTable />
          </div>
          <div>
            <MainBlock />
          </div>
        </Container>
        </div>
    </>
  );
}

export default ProductsListPage;