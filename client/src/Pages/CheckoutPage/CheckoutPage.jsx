import React from "react";
import "./checkout-page.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function CheckoutPage() {
  return (
    <section>
      <Container>
        <h1 className="page-title">Checkout</h1>

        <Form>
          <Row>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="custom-form-lable">
                      First Name <span>*</span>
                    </Form.Label>
                    <input
                      className="custom-form-control"
                      type="text"
                      placeholder="Enter first name"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="custom-form-lable">
                      Last Name <span>*</span>
                    </Form.Label>
                    <input
                      className="custom-form-control"
                      type="text"
                      placeholder="Enter Last name"
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* company name */}
              <Form.Group className="mt-3">
                <Form.Label className="custom-form-lable">
                  Company Name <span>*</span>
                </Form.Label>
                <input
                  className="custom-form-control"
                  type="text"
                  placeholder="Enter Company name"
                />
              </Form.Group>

              {/* Country / Region */}
              <Form.Group className="mt-3">
                <Form.Label className="custom-form-lable">
                  Country Name <span>*</span>
                </Form.Label>
                <input
                  className="custom-form-control"
                  type="text"
                  placeholder="Enter Country name"
                />
              </Form.Group>

              {/* Street Address */}
              <Form.Group className="mt-3">
                <Form.Label className="custom-form-lable">
                  Street Address <span>*</span>
                </Form.Label>
                <input
                  className="custom-form-control"
                  type="text"
                  placeholder="Enter Street Address"
                />
              </Form.Group>

              {/* Town Address */}
              <Form.Group className="mt-3">
                <Form.Label className="custom-form-lable">
                  Town Address <span>*</span>
                </Form.Label>
                <input
                  className="custom-form-control"
                  type="text"
                  placeholder="Enter Town"
                />
              </Form.Group>

              {/* State Address */}
              <Form.Group className="mt-3">
                <Form.Label className="custom-form-lable">
                  State <span>*</span>
                </Form.Label>
                <input
                  className="custom-form-control"
                  type="text"
                  placeholder="Enter State "
                />
              </Form.Group>

              {/* Zip Address */}
              <Form.Group className="mt-3">
                <Form.Label className="custom-form-lable">
                  Zip Code <span>*</span>
                </Form.Label>
                <input
                  className="custom-form-control"
                  type="text"
                  placeholder="Enter Zip Code"
                />
              </Form.Group>

              {/* Street Address */}
              <Form.Group className="mt-3">
                <Form.Label className="custom-form-lable">
                  Phone Number <span>*</span>
                </Form.Label>
                <input
                  className="custom-form-control"
                  type="text"
                  placeholder="Enter Phone Number"
                />
              </Form.Group>

              {/* Email Address */}
              <Form.Group className="mt-3">
                <Form.Label className="custom-form-lable">
                  Email Address <span>*</span>
                </Form.Label>
                <input
                  className="custom-form-control"
                  type="text"
                  placeholder="Enter Email Address"
                />
              </Form.Group>
            </Col>
            <Col md={6}></Col>
          </Row>
          <div className="check-place-order-wrapper">
            <Button>Place Order</Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}

export default CheckoutPage;
