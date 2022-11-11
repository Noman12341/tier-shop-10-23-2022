import React from "react";
import "./products-page.css";
import { Container, Row, Col } from "react-bootstrap";
import { ProductCard } from "../../Components";

function ProductsPage() {
  return (
    <section id="products-page-section">
      <Container>
        <h1 className="page-title">Shop</h1>
        <h2 className="search-key">215/45 R17</h2>
        <div className="result-count-sort mb-4">
            <p>Showing all 2 results</p>
            <select>
                <option>By Size</option>
                <option>By Size</option>
                <option>By Size</option>
                <option>By Size</option>
            </select>
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
      </Container>
    </section>
  );
}

export default ProductsPage;
