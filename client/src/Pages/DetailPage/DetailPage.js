import React, { useState } from "react";
import "./detail-page.css";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from 'react-router-dom';

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
            <h1 className="product-title">
              Perfect Titanium Tire Cover (18 inches)
            </h1>
            <div>
              <FontAwesomeIcon icon={solid("star")} />
              <FontAwesomeIcon icon={solid("star")} />
              <FontAwesomeIcon icon={solid("star")} />
              <FontAwesomeIcon icon={solid("star")} />
            </div>
            <div className="p-price">
              <span>£234.00</span>
            </div>
            <p className="p-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              quis semper mauris. Pellentesque non sapien in nibh commodo
              lobortis nec molestie nisl. Maecenas fringilla laoreet nunc, et
              rutrum risus gravida non.
            </p>
            <div>
              <button className="p-detail-cart-btn" onClick={() => navigate('/cart-page')}>Add To Cart</button>
            </div>
          </Col>
        </Row>
        <div className="p-5">
          <Tabs
            id="p-detail-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 p-detail-tabs"
          >
            <Tab eventKey="Detail" title="Detail">
              <div className="p-5 bg-c-gray">
                <h2 className="">Description</h2>
                <p style={{ width: "60%" }}>
                  Tires come in a variety of diameters, ranging from 13″ to 22″.
                  To find your vehicle’s wheel diameter or size, check the
                  vehicle’s tire information placard on the inside of the
                  driver’s side door. You can also find your tire size by
                  checking the sidewalls of your current tires, where you’ll see
                  a series of numbers and symbols similar to: P215/60 R17. The
                  wheel diameter will be the last number in the series. In this
                  example, the vehicle’s wheel diameter is 17″.
                </p>
              </div>
            </Tab>
            <Tab eventKey="reviows" title="Reviews">
              <div className="p-4 bg-c-gray">
                <h2>1 review for Perfect Titanium Tire Cover (18 inches)</h2>
                <p>There are no reviews yet.</p>
                <p>
                  Be the first to review “Perfect Titanium Tire Cover (18
                  inches)” Your email address will not be published. Required
                  fields are marked *
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </section>
  );
}

export default DetailPage;
