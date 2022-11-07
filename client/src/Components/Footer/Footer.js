import React from "react";
import "./footer.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
function Footer() {
  return (
    <div id="footer">
      <Container fluid>
        <Row>
          <Col lg={3}>
            <Image
              src={
                "http://pneupress.aislinthemes.com/app/uploads/2016/07/07B-300x300.jpg"
              }
              height="70"
            />
            <p>
              At vero eoset accusamus et iusto odio dignissimos ducimus qui
              blpraesentium voluptatum deleniti atque corrupti quos dolores et
              quas molestias excepturi
            </p>
            <div className="footer-social">
              <a href="#0">
                {" "}
                <FontAwesomeIcon icon={solid("star")} />
              </a>
              <a href="#0">
                {" "}
                <FontAwesomeIcon icon={solid("star")} />
              </a>
              <a href="#0">
                {" "}
                <FontAwesomeIcon icon={solid("star")} />
              </a>
              <a href="#0">
                {" "}
                <FontAwesomeIcon icon={solid("star")} />
              </a>
            </div>
          </Col>
          <Col lg={3}>
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-menu">
              <li>
                <a to="/">User Strategy</a>
              </li>
              <li>
                <a to="/">Product Designs</a>
              </li>
              <li>
                <a to="/">Marketing Strategy</a>
              </li>
              <li>
                <a to="/">IT Consultancy</a>
              </li>
              <li>
                <a to="/">Server Security</a>
              </li>
              <li>
                <a to="/">Product Marketing</a>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-menu">
              <li>
                <a to="/">About Us</a>
              </li>
              <li>
                <a to="/">Need a Consultant ?</a>
              </li>
              <li>
                <a to="/">Our Services</a>
              </li>
              <li>
                <a to="/">Have any Question ?</a>
              </li>
              <li>
                <a to="/">Meet Our Team</a>
              </li>
              <li>
                <a to="/">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h4 className="footer-title">Contact Us</h4>
            <div className="footer-contact">
              <p>Any thing we can write here !</p>
              <h4>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={solid("star")} />
                </span>{" "}
                +1234232223
              </h4>
              <h4>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={solid("star")} />
                </span>{" "}
                someOne@gmail.com
              </h4>
              <h4>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={solid("star")} />
                </span>{" "}
                House No: DG 1234, Street No: 97, rawalpindi , Islamabad
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
