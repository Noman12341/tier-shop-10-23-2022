import React from "react";
import "./checkout-page.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import TyreImg from "../../Assets/Images/tyre-img.png";

function CheckoutPage() {
  return (
    <section>
      <Container>
        <h1 className="my-4">Checkout</h1>

        <Form>
          <Row>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>
                      First Name <span>*</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>
                      Last Name <span>*</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Last name" />
                  </Form.Group>
                </Col>
              </Row>
              {/* company name */}
              <Row>
                <Form.Group as={Col} className="mt-3">
                  <Form.Label>
                    Email Address <span>*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Email Address" />
                </Form.Group>

                {/* Country / Region */}
                <Form.Group as={Col} className="mt-3">
                  <Form.Label>
                    Phone No <span>*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Phone No" />
                </Form.Group>
              </Row>
              <Row>
                {/* Street Address */}
                <Form.Group as={Col} className="mt-3">
                  <Form.Label>
                    Street Address <span>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Street Address"
                  />
                </Form.Group>

                {/* Town Address */}
                <Form.Group as={Col} className="mt-3">
                  <Form.Label>
                    State / Province <span>*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Town" />
                </Form.Group>
              </Row>
              <Row>
                {/* State Address */}
                <Form.Group as={Col} className="mt-3">
                  <Form.Label>
                    City <span>*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter State " />
                </Form.Group>

                {/* Zip Address */}
                <Form.Group as={Col} className="mt-3">
                  <Form.Label>
                    Zip Code <span>*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Zip Code" />
                </Form.Group>
              </Row>

              <Row>
                {/* Email Address */}
                <Form.Group as={Col} className="mt-3">
                  <Form.Label>
                    Email Address <span>*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Email Address" />
                </Form.Group>
                <Form.Group as={Col}></Form.Group>
              </Row>
              {/* Order Summary */}
            </Col>
            <Col md={6}></Col>
          </Row>
          <div>
            <table className="checkout-items-list">
              <tr>
                <td>
                  <img src={TyreImg} alt="TyreImg" />
                </td>
                <td>
                  <p>Lorem ipsum dolor sit amet consectetur. Sit integer.</p>
                </td>
                <td>
                  <div>
                    <span className="bold-text"> £875 </span>
                  </div>
                </td>
                <td>
                  <div style={{ textAlign: "right" }}>
                    <span className="bold-text">£875</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between" style={{columnGap: "20px"}}>
                    <span>Deliver Charges</span>
                    <p className="bold-text mb-0">£39.00</p>
                  </div>
                </td>
                <td>
                  <div style={{ textAlign: "right" }}>
                    <span className="d-block mr-4">Total Pay </span>{" "}
                    <span className="bold-text">£914.00</span>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="check-place-order-wrapper">
            <Button>Place Order</Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}

export default CheckoutPage;
