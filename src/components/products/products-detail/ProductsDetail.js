import React from "react";
import {Container} from "react-bootstrap";
import LeftNav from "../products-list/LeftNav";
import RankTable from "../products-list/RankCard";

/* img import */
import { FaFireAlt } from "react-icons/fa";


function ProductsDetail() {
  return (
    <>
        <nav style={{ height: "65px"}}></nav>
        <div className=" P-sigle-background">
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
                    
                </div>
            </Container>
        </div>
    </>
  );
}

export default ProductsDetail;