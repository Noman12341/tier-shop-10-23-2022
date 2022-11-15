import React from "react";
import "./products-page.css";
import { Container, Row, Col } from "react-bootstrap";
import { ProductCard, SmallSearchBanner } from "../../Components";
import Pagination from 'react-bootstrap/Pagination';

function ProductsPage() {
  return (
    <section id="products-page-section">
      <SmallSearchBanner />
      <Container>
        <div className="py-5 d-flex align-items-center justify-content-between">
          <h2>Searched Results</h2>
          <h6>8 of 31</h6>
        </div>
        <Row className="g-4">
          <Col md="3">
            <ProductCard />
          </Col>
          <Col md="3">
            <ProductCard />
          </Col>
          <Col md="3">
            <ProductCard />
          </Col>
          <Col md="3">
            <ProductCard />
          </Col>
          <Col md="3">
            <ProductCard />
          </Col>
          <Col md="3">
            <ProductCard />
          </Col>
        </Row>
        <div className="mt-5 p-4 d-flex align-items-center justify-content-center">
        <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
        </div>
      </Container>
    </section>
  );
}

export default ProductsPage;
