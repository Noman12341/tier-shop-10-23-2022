import React, { useState } from "react";
import "./detail-page.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SmallSearchBanner } from "../../Components";
import { useNavigate } from "react-router-dom";
import { Slider } from "../../Components";
import TyreImg from "../../Assets/Images/tyre-img.png";
import TyreLogo from "../../Assets/Images/tyre-logo.png";

function DetailPage() {
  const navigate = useNavigate();

  return (
    <section id="detials-section">
      <SmallSearchBanner />
      <Container className="mt-5">
        <Row>
          <Col md={5}>
            <div className="text-center p-5 border">
              <img
                src={TyreImg}
                alt=""
                style={{ maxHeight: "577px", maxWidth: "391px" }}
              />
            </div>
          </Col>
          <Col md={7}>
            <h2>Perfect Titanium Tire Cover (18 inches)</h2>
            <p className="p-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              quis semper mauris. Pellentesque non sapien in nibh commodo
              lobortis nec molestie nisl. Maecenas fringilla laoreet nunc, et
              rutrum risus gravida non.
            </p>
            <div className="p-price">
              <h5>Tyre Size 235/223/R35</h5>
              <div className="my-5">
                <h5>Brand Boto</h5>
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
          <h4 style={{marginTop: "131px"}}>Related Tyers</h4>
          <Slider />
        </Container>
      </Container>
    </section>
  );
}

export default DetailPage;
