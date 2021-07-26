import React from "react";
import { Container } from "react-bootstrap";
import LastestPage from "../components/products/products-pages/LastestPage";
import Banner from "../components/products/products-list/Banner";
import LeftNav from "../components/products/products-list/LeftNav";
import RankTable from "../components/products/products-list/RankTable";
import MainBlock from "../components/products/products-list/MainBlock";

import MainFooter from '../components/footer/MainFooter'

/* img import */
import { FaFireAlt } from "react-icons/fa";

import "../assets/css/styled.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductsListPage() {
  return (
      <>
        <div className="activity-wrapper  P-background">
          <nav style={{ height: "65px"}}></nav>
          <Banner />
          <Container className="mt-3 d-flex justify-content-between">
            <div className="d-flex flex-column align-items-center">
              <LeftNav />
              <RankTable />
            </div>
            <div>
              <MainBlock />
            </div>
          </Container>
          <MainFooter />
        </div>
      </>
  );
}

export default ProductsListPage;
