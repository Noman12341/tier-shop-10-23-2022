import React, { useState } from "react";
import "./detail-page.css";
import { Container, Row, Col, Tab, Tabs, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";
import {Slider} from '../../Components'
function DetailPage() {
  const [key, setKey] = useState("Detail");
  const navigate = useNavigate();

  return (
    <section id="detials-section">
      <Container fluid>
        <Row>
          <Col md={5}>
            <img
              src="http://pneupress.aislinthemes.com/app/uploads/2016/07/07B-300x300.jpg"
              alt=""
              height={500}
              width={500}
            />
          </Col>
          <Col md={7}>
            <h2>Perfect Titanium Tire Cover (18 inches)</h2>
            <p className="p-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              quis semper mauris. Pellentesque non sapien in nibh commodo
              lobortis nec molestie nisl. Maecenas fringilla laoreet nunc, et
              rutrum risus gravida non.
            </p>
            <div>
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
            <Button variant="primary" size="lg" className="p-detail-cart-btn mt-2">ADD TO CART</Button>

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
