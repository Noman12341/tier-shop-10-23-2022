import React from "react";
import "./productCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import TyreImg from '../../Assets/Images/tyre-img.png';
import TyreLogo from '../../Assets/Images/tyre-logo.png';

function ProductCard() {
  return (
    <Card className="border-0">
    <div className="text-center">
      <Card.Img
        variant="top"
        className="p-card-img"
        src={TyreImg}
        alt="tyre.png"
      />
      </div>
      <Card.Body>
        <Card.Title className="text-center font-size-sm"><img className="tyre-logo" src={TyreLogo} alt="tyrelogo.png" /></Card.Title>
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
