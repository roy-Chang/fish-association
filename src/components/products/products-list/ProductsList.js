import React from "react";
import {Container} from "react-bootstrap";
import Banner from "./Banner";
import LeftNav from "./LeftNav";
import RankTable from "./RankTable";
import MainBlock from "./MainBlock";




function ProductsListPage() {
  return (
    <>
        <nav style={{ height: "65px"}}></nav>
        <div className=" P-background">
          <Banner />
        </div>
        <Container className="mt-3 d-flex justify-content-between">
          <div>
            <LeftNav />
            <RankTable />
          </div>
          <MainBlock />
        </Container>
        
    </>
  );
}

export default ProductsListPage;