import React from "react";
import { Container } from "react-bootstrap";
import LeftNav from "../components/products/products-list/LeftNav";
import RankTable from "../components/products/products-list/RankTable";
import DetailBlock from "../components/products/products-detail/DetailBlock"


import MainFooter from '../components/footer/MainFooter'

/* img import */
import { FaFireAlt } from "react-icons/fa";

import "../assets/css/styled.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductsDetailPage() {
  return (
      <>
        <div className="activity-wrapper  P-background">
        <nav style={{ height: "65px"}}></nav>
            <Container className="mt-5 d-flex justify-content-between">
                <div className="d-flex flex-column align-items-center">
                    <LeftNav />
                    <RankTable />
                </div>
                <div>
                    <DetailBlock />
                </div>
            </Container>
            <MainFooter />
        </div>
      </>
  );
}

export default ProductsDetailPage;