import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./contact-us.css";
import EmailIcon from "../../Assets/Images/email.png";
import LocationIcon from "../../Assets/Images/locationIcon.png";
import PhoneIcon from "../../Assets/Images/phoneIcon.png";
import GoogleMapsImg from "../../Assets/Images/google-maps.png";

function ContactUs() {
  return (
    <main>
      <div className="about-sm-banner">
        <h5>Contact Us</h5>
      </div>
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <div className="contact-us-detail-wrapper">
              <img src={EmailIcon} alt="EmailIcon" />
              <div>
                <h6>Email Address</h6>
                <p>info@sofabespoke.co.uk</p>
              </div>
            </div>
            <div className="contact-us-detail-wrapper">
              <img src={PhoneIcon} alt="EmailIcon" />
              <div>
                <h6>Phone Number</h6>
                <p>+02087442000</p>
              </div>
            </div>
            <div className="contact-us-detail-wrapper">
              <img src={LocationIcon} alt="EmailIcon" />
              <div>
                <h6>Address</h6>
                <p>
                  Corner Building, Twickenham Trading Estate, Rugby Road,
                  Twickenham, TW1 1DQ.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="contact-us-card">
              <h1>Get In Touch</h1>
              <Form>
                <Row>
                  <Form.Group as={Col}>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" />
                  </Form.Group>
                </Row>
                <Form.Group as={Col} className="my-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type="text"
                    as={"textarea"}
                    placeholder="Enter Full Name"
                  />
                </Form.Group>
                <div className="d-flex justify-content-end">
                  <Button variant="primary" size={"lg"}>
                    Send
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
        <div>
          <img src={GoogleMapsImg} alt="GoogleMapsImg" width={"100%"} />
        </div>
      </Container>
    </main>
  );
}

export default ContactUs;
