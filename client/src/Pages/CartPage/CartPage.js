import React from "react";
import "./cart-page.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();

  return (
    <section className="pb-5">
      <Container>
        <h1 className="page-title">Cart</h1>
        {/* Cart list */}
        <div className="cart-list-container">
          <Row>
            <Col md={1}></Col>
            <Col md={1}></Col>
            <Col md={4}>
              <span className="cart-detail-header">Name</span>
            </Col>
            <Col md={2}>
              <span className="cart-detail-header">Price</span>
            </Col>
            <Col md={2}>
              <span className="cart-detail-header">Quantity</span>
            </Col>
            <Col md={2}>
              <span className="cart-detail-header">Sub total</span>
            </Col>
          </Row>
          {/* product details row */}
          <div className="cart-products-list">
            <div style={{ borderBottom: "1px solid black", padding: "20px" }}>
              <Row>
                <Col md={1}>
                  <div className="cart-delete-item">
                    <span>
                      <FontAwesomeIcon icon={solid("star")} />
                    </span>
                  </div>
                </Col>
                <Col md={1}>
                  <div>
                    <img
                      src="http://pneupress.aislinthemes.com/app/uploads/2016/07/07B-300x300.jpg"
                      width={70}
                      alt=""
                    />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="cart-list-p-name">
                    <a href="/">Cooper ZEON RS3-G1 215/45R17 91W Tire</a>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="cart-list-p-price">
                    <span>£110.00</span>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="cart-list-counter">
                    <input type="number" value={1} min="1" max="5" />
                  </div>
                </Col>
                <Col md={2}>
                  <div className="cart-list-p-price">
                    <span>£110.00</span>
                  </div>{" "}
                </Col>
              </Row>
            </div>

            {/* cart buttons */}
            <div className="coupon-wrapper">
              <div className="coupon-input-wrapper">
                <input name="c" placeholder="add coupon" />
                <Button className="c-btn">Apply Coupon</Button>
              </div>
              <div>
                <Button
                  className="c-btn"
                  onClick={() => navigate("/checkout-page")}
                >
                  Processd to checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* cart checkout button container */}
      </Container>
    </section>
  );
}

export default CartPage;
