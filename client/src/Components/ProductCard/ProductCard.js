import React from "react";
import "./productCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import TyreImg from "../../Assets/Images/tyre-img.png";
import TyreLogo from "../../Assets/Images/tyre-logo.png";
import { setSelectedProduct } from "../../Store/Reducers/product";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  console.log(props);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const { id, name, imgUrl } = props;

  return (
    <Card className="border-0">
      <div className="text-center">
        <Card.Img
          variant="top"
          className={props.size === "sm" ? "p-card-img-sm" : "p-card-img"}
          src={imgUrl ? `http://localhost:4000/static/images/${imgUrl}` : TyreImg}
          alt="tyre.png"
        />
      </div>
      <Card.Body>
        <Card.Title className="text-center font-size-sm">
          <img
            className={props.size === "sm" ? "tyre-logo-sm" : "tyre-logo"}
            src={TyreLogo}
            alt="tyrelogo.png"
          />
        </Card.Title>
        <h5 className="text-center">{name}</h5>
        <div className="text-center mt-3">
          <button
            onClick={() => {
              dispatch(setSelectedProduct(id));
              navigator(`/details`);
            }}
            className="view-detail-card-link"
          >
            View Details
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
