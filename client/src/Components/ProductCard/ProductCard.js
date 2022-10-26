import React from "react";
import "./productCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function ProductCard() {
  return (
    <div id="c-card">
      <a href="/">
        <img
          src="http://pneupress.aislinthemes.com/app/uploads/2016/07/07B-300x300.jpg"
          alt=""
        />
      </a>
      <h2>{"Perfect Titanium Tire Cover (18 inches)"}</h2>
      <div className="c-star-rating px-3">
        <FontAwesomeIcon icon={solid("star")} />
        <FontAwesomeIcon icon={solid("star")} />
        <FontAwesomeIcon icon={solid("star")} />
        <FontAwesomeIcon icon={solid("star")} />
      </div>
      <div className="price px-3">
        <span className="c-c-price">$445</span>
        <spa className="c-cart-btn">
          <FontAwesomeIcon icon={solid("cart-shopping")} />
        </spa>
      </div>
      <div class="tyre-details">
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={solid("calendar-days")} /> 305-30-20{" "}
        </a>
        <a href="/">
          <FontAwesomeIcon icon={solid("car")} /> Toyo
        </a>
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={solid("snowflake")} /> Winter
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
