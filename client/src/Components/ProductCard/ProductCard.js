import React from "react";
import "./productCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import TyreImg from "../../Assets/Images/tyre-img.png";
import TyreLogo from "../../Assets/Images/tyre-logo.png";

function ProductCard(props) {
  return (
    <Card className="border-0">
      <div className="text-center">
        <Card.Img
          variant="top"
          className={props.size === "sm" ? "p-card-img-sm" : "p-card-img"}
          src={TyreImg}
          alt="tyre.png"
        />
      </div>
      <Card.Body>
        <Card.Title className="text-center font-size-sm">
          <img className={props.size === "sm" ? "tyre-logo-sm" : "tyre-logo"}  src={TyreLogo} alt="tyrelogo.png" />
        </Card.Title>
        <h5 className="text-center">Tyre Size 235/55 R17</h5>
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
