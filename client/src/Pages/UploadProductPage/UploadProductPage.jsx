import React, { useState, useRef } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import axios from "axios";

function UploadProductPage() {
  const [productdata, setProductData] = useState({
    height: 0,
    width: 0,
    diameter: 0,
    name: "",
    type: "",
    brand: "",
    img: null,
    description: "",
  });

  const resetFileRef = useRef(null)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProductData({ ...productdata, [name]: value });
  };
  const handleFileChange = (event) => {
    setProductData({ ...productdata, img: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("width", productdata.width);
    formData.append("height", productdata.height);
    formData.append("diameter", productdata.diameter);
    formData.append("name", productdata.name);
    formData.append("type", productdata.type);
    formData.append("brand", productdata.brand);
    formData.append("photo", productdata.img);
    formData.append("description", productdata.description);
    console.log("Submit data", formData);

    try {
      const res = await axios.post("http://localhost:4000/products/", formData);

      if (res.status === 200) {
        setProductData({
          height: 0,
          width: 0,
          diameter: 0,
          name: "",
          type: "",
          brand: "",
          img: null,
          description: "",
        });
        resetFileRef.current.value = null;
      }
    } catch (error) {
      console.log("error :: ", error.response);
    }
  };

  return (
    <div>
      <Container className="py-5">
        <h1>Upload Product</h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Width</Form.Label>
              <Form.Control
                type="number"
                name="width"
                value={productdata.width}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Height</Form.Label>
              <Form.Control
                type="number"
                name="height"
                value={productdata.height}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Diameter</Form.Label>
              <Form.Control
                type="number"
                name="diameter"
                value={productdata.diameter}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="my-4">
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={productdata.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                name="type"
                value={productdata.type}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                value={productdata.brand}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                ref={resetFileRef}
                onChange={handleFileChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={productdata.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
          <div className="my-4 text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default UploadProductPage;
