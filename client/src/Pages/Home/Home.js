import React from "react";
import "./home.css";
import { Header, ProductCard } from "../../Components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <>
      <Header />
      <section id="products" className="p-section">
        <h1>Shop all Tires</h1>\{" "}
        <Container fluid>
          <Row>
            <Col md={"3"}>
              <ProductCard />
            </Col>
            <Col md={"3"}>
              <ProductCard />
            </Col>
            <Col md={"3"}>
              <ProductCard />
            </Col>
            <Col md={"3"}>
              <ProductCard />
            </Col>
            <Col md={"3"}>
              <ProductCard />
            </Col>{" "}
            <Col md={"3"}>
              <ProductCard />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
