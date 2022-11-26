import React from "react";
import "./products-page.css";
import { Container, Row, Col } from "react-bootstrap";
import { ProductCard, SmallSearchBanner } from "../../Components";
import Pagination from "react-bootstrap/Pagination";

function ProductsPage() {
  return (
    <section id="products-page-section">
      <SmallSearchBanner />
      <Container>
        <div className="py-5 d-flex align-items-center justify-content-between">
          <h2 className="font-weight-bold">Searched Results</h2>
          <h6>8 out of 31</h6>
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
            <Pagination.Prev className="mr-3">Back</Pagination.Prev>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next className="ml-3">Next</Pagination.Next>
          </Pagination>
        </div>
      </Container>
    </section>
  );
}

export default ProductsPage;
