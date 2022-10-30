import React from "react";
import "./home.css";
import { Header, ProductCard, Footer } from "../../Components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import bannerImg from '../../Assets/Images/banner-img.png';

function Home() {
  return (
    <>
      {/* <Header /> */}
      <section id="c-banner">
      <div className="banner-line">
            <h3>Best Offers For safe tyre service</h3>
          </div>
          <img src={bannerImg} alt="" />
        <div className="search-container">
          <h4>Search By Size</h4>
          <div className="search-fields-wraper">
            <select>
              <option>hello</option>
              <option>hello</option>
              <option>hello</option>
              <option>hello</option>
            </select>
            <select>
              <option>hello</option>
              <option>hello</option>
              <option>hello</option>
              <option>hello</option>
            </select>
            <select>
              <option>hello</option>
              <option>hello</option>
              <option>hello</option>
              <option>hello</option>
            </select>
          </div>
          <div>
            <Button>Search</Button>
          </div>
        </div>
      </section>
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
      {/* <Footer /> */}

    </>
  );
}

export default Home;
