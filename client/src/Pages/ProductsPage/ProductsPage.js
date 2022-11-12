import React from "react";
import "./products-page.css";
import { Container, Row, Col } from "react-bootstrap";
import { ProductCard, SmallSearchBanner } from "../../Components";

function ProductsPage() {
  return (
    <section id="products-page-section">
      <SmallSearchBanner />
      <Container>
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
      </Container>
    </section>
  );
}

export default ProductsPage;
