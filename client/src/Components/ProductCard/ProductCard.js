import React from "react";
import "./productCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <Card className="border-0">
      <Card.Img
        variant="top"
        src="http://pneupress.aislinthemes.com/app/uploads/2016/07/07B-300x300.jpg"
      />
      <Card.Body>
        <Card.Title className="text-center font-size-sm">Card title</Card.Title>
        <div className="text-center mt-3">
          <Link to="/details" className="view-detail-card-link">
            View Details
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
