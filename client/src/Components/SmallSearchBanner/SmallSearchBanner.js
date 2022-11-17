import React from "react";
import "./small-search-banner.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SmallSearchBanner() {
  const navigate = useNavigate();
  return (
    <section id="small-search-banner">
      <div className="s-search-banner">
        <h2 className="text-center my-3">Tyre Search</h2>
        <Form>
          <div className="small-banner-fields-wrapper">
            <Form.Group controlId="formGridCity">
              <Form.Label>Width</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>356</option>
                <option>256</option>
                <option>156</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formGridCity">
              <Form.Label>Height</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>55</option>
                <option>65</option>
                <option>75</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formGridCity">
              <Form.Label>Diameter</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>R7</option>
                <option>R8</option>
                <option>R9</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
            <Form.Label>Diameter</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Winter tyers...</option>
                <option>Tyre A</option>
                <option>Tyre B</option>
                <option>Tyre C</option>
              </Form.Select>
            </Form.Group>
              <Button style={{marginTop:"30px"}}
                variant="primary"
                onClick={() => navigate("/products-page")}
              >
                Search For Tyre
              </Button>
          </div>
        </Form>
      </div>
    </section>
  );
}

export default SmallSearchBanner;
