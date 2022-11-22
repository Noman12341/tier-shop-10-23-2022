import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about-us.css";
import AboutUsImg from "../../Assets/Images/about-us-pic2.png";

function AboutUs() {
  return (
    <main>
      <div className="about-sm-banner">
        <h5>About Us</h5>
      </div>
      <Container className="py-5">
        <Row>
          <Col md={6} className="mb-5">
            <h3 className="mb-5">About Company</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mauris odio pharetra massa
              nunc non nisl at. Tempor consectetur vitae enim mattis nulla
              consequat posuere sit. A vestibulum vulputate volutpat et pretium
              amet amet. Pellentesque nibh nullam morbi sem pellentesque
              vestibulum. Vitae est egestas lectus neque adipiscing egestas
              vehicula. Consectetur tincidunt pellentesque enim tincidunt
              maecenas sagittis. Malesuada laoreet feugiat at pharetra. Lobortis
              volutpat elementum convallis ac viverra sed. Dignissim eget ut
              consequat ipsum nisi semper vitae at. Congue mauris laoreet
              suspendisse enim nullam sed. Id aliquet ultrices viverra ornare.
              Id elit imperdiet bibendum posuere. Elit diam neque adipiscing id.
              Morbi massa semper pharetra senectus auctor feugiat nisi. A orci
              aliquet netus amet id at nisi ornare ipsum. In ut ut malesuada
              tellus morbi eleifend. Viverra egestas fusce lorem id congue
              molestie lectus. Est tincidunt feugiat arcu neque viverra nulla
              neque. Consequat mi egestas senectus fringilla purus. Felis a ac
              sollicitudin nulla est leo est. Quis est mi nec est rhoncus
              pretium fermentum. Adipiscing pretium tellus viverra.
            </p>
          </Col>
          <Col md={6}>
            <img className="about-pic" src={AboutUsImg} alt={AboutUsImg} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default AboutUs;
