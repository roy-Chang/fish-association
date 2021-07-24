import React from "react";

import ProductsList from "../components/products/products-list/ProductsList";
import MainFooter from '../components/footer/MainFooter'

import "../assets/css/styled.css";
import "react-bootstrap"; //Toast
import "bootstrap/dist/css/bootstrap.min.css";

function ProductsPage() {
  return (
      <div className="activity-wrapper">
          <ProductsList />
          <MainFooter />
      </div>
  );
}

export default ProductsPage;
