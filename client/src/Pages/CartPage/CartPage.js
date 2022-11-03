import React from "react";
import "./cart-page.css";
import { Container, Row, Col } from "react-bootstrap";

function CartPage() {
  return (
    <section>
      <Container>
        <h1 className="page-title">Cart</h1>

        <div className="cart-list-container">
          <Row>
            <Col md={1}></Col>
            <Col md={1}></Col>
            <Col md={4}><span className="cart-detail-header">Name</span></Col>
            <Col md={2}><span className="cart-detail-header">Price</span></Col>
            <Col md={2}><span className="cart-detail-header">Quantity</span></Col>
            <Col md={2}><span className="cart-detail-header">Sub total</span></Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default CartPage;
