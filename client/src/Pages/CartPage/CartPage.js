import React from "react";
import "./cart-page.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";
import Tyre from "../../Assets/Images/tyre-img.png";

function CartPage() {
  const navigate = useNavigate();

  return (
    <main className="p-5">
      <h2>Shopping Cart</h2>
      <table className="cart-table">
        <tr className="table-header-border">
          <th>Product</th>
          <th>Unit Price</th>
          <th>Qunaitity</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>
            <img src={Tyre} alt="Tyre" height={183} width={123} />
          </td>
          <td>
          <span className="cart-list-price">£875</span>
            <p className="cart-description">
              Lorem ipsum dolor sit amet consectetur. Vitae at pharetra varius
              iaculis. Augue turpis habitant.
            </p>
            <span>Remove</span>
          </td>
          <td>
            <div className="d-flex align-item-center justity-content-center" style={{columnGap: "16px"}}>
              <span>1</span>
              <button className="cart-counter-button">-</button>
              <button className="cart-counter-button">+</button>
            </div>
          </td>
          <td>
            <span className="cart-list-price">£875</span>
          </td>
        </tr>
      </table>
      
      {/* div */}
      <div className="p-4">
        <div className="d-flex align-item-center justify-content-between p-5" style={{borderTop: "2px solid #E6E6E6"}}>
          <Button variant="outline-primary">
            back to shopping
          </Button>
          <Button variant="primary">
            Go To Checkout
          </Button>
        </div>
      </div>
    </main>
  );
}

export default CartPage;
