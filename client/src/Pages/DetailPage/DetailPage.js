import React, { useState } from "react";
import "./detail-page.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import {SmallSearchBanner} from "../../Components";
import { useNavigate } from "react-router-dom";
import {Slider} from '../../Components'
import TyreImg from '../../Assets/Images/tyre-img.png';
import TyreLogo from '../../Assets/Images/tyre-logo.png';

function DetailPage() {

  const navigate = useNavigate();

  return (
    <section id="detials-section">
      <SmallSearchBanner />
      <Container className="mt-5" fluid>
        <Row>
          <Col md={5}>
          <div className="text-center p-5 border">
            <img
              src={TyreImg}
              alt=""
              style={{maxHeight: "391px", maxWidth: "577px"}}
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
              <h6>Tyre Size 235/223/R35</h6>
              <div className="my-4">
                <h6>Brand Boto</h6>
                <h6>Tyre Size 235/223/R35</h6>
                <h6>Height 55</h6>
                <h6>Speed Rating 77</h6>
                <h6>Index</h6>
              </div>
              <h6>Catagory: Brand Boto</h6>
            </div>
            <Button variant="primary" onClick={() => navigate("/cart-page")} size="lg" className="p-detail-cart-btn mt-2">ADD TO CART</Button>

          </Col>
        </Row>
        
        <Container >
          <h4>Related Tyers</h4>
          <Slider />
        </Container>
      </Container>
    </section>
  );
}

export default DetailPage;
