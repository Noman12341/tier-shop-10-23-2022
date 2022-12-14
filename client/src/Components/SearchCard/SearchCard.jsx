import React, {useEffect} from "react";
import "./search-card.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch } from 'react-redux';
import { productsThunk } from '../../Store/Actions/product';

function SearchCard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productReducer = useSelector(state => state.product);

    const handleonSubmit = () => {
      dispatch(productsThunk())
    }

    useEffect(() => {
      if(!productReducer.isLoading && productReducer.isSuccess && productReducer.products){
        navigate("/products-page");
      }
    },[productReducer.isLoading]);


  return (
    <div id="home-search-card">
      <h1 className="text-center my-3">Tyre Search</h1>
      <Form>
        <Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Width</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>356</option>
              <option>256</option>
              <option>156</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Height</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>55</option>
              <option>65</option>
              <option>75</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Diameter</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>R7</option>
              <option>R8</option>
              <option>R9</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Form.Group className="my-3">
          <Form.Select defaultValue="Choose...">
            <option>Winter tyers...</option>
            <option>Tyre A</option>
            <option>Tyre B</option>
            <option>Tyre C</option>
          </Form.Select>
        </Form.Group>
        <div className="d-flex justify-content-end">
          <span>
            <Link to="/" style={{fontSize: "16px"}}>More Options</Link>
          </span>
        </div>
        <div className="d-grid mt-4">
          <Button variant="primary" onClick={handleonSubmit}>Search For Tyre</Button>
        </div>
      </Form>
    </div>
  );
}

export default SearchCard;
