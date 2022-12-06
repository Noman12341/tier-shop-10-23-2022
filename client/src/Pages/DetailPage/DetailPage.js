import React, { useState, useEffect } from "react";
import "./detail-page.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SmallSearchBanner } from "../../Components";
import { useNavigate, useParams } from "react-router-dom";
import { Slider } from "../../Components";
import TyreImg from "../../Assets/Images/tyre-img.png";
import TyreLogo from "../../Assets/Images/tyre-logo.png";
import { useSelector } from "react-redux";

function DetailPage() {
  const params = useParams();
  const navigate = useNavigate();

  const productReducer = useSelector((state) => state.product);

  return productReducer.selectedProduct ? (
    <section id="detials-section">
      <SmallSearchBanner />
      <Container className="mt-5">
        <Row>
          <Col md={5}>
            <div className="text-center p-5 border">
              <img
              src={`http://localhost:4000/static/images/${productReducer.selectedProduct.imgUrl}`}
                alt=""
                style={{ maxHeight: "577px", maxWidth: "391px" }}
              />
            </div>
          </Col>
          <Col md={7}>
            <h2>{productReducer.selectedProduct.name}</h2>
            <p className="p-description">{productReducer.selectedProduct.description}</p>
            <div className="p-price">
              <h5>Tyre Size {productReducer.selectedProduct.size}</h5>
              <div className="my-5">
                <h5>Brand {productReducer.selectedProduct.brand}</h5>
                <h5>Pattern Susqua H/T </h5>
                <h5>Load Index: 112</h5>
                <h5>Speed Rating: H </h5>
                <h5>Tread Dept (mm): 8.5</h5>
              </div>
              <h5>Categories: BOTO, PCR, Tyres</h5>
            </div>
            <Button
              variant="primary"
              onClick={() => navigate("/cart-page")}
              size="lg"
              className="px-5 py-3 mt-5"
            >
              ADD TO CART
            </Button>
          </Col>
        </Row>

        <Container>
          <h4 style={{ marginTop: "131px" }}>Related Tyers</h4>
          <Slider />
        </Container>
      </Container>
    </section>
  ) : (
    <h1>Loading...</h1>
  );
}

export default DetailPage;
