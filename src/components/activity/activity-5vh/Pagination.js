import React, { Component } from "react";
import { Pagination } from "react-bootstrap";

export default function App() {
  return (
    <Pagination className="justify-content-center mt-5">
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Next />
    </Pagination>
  );
}
