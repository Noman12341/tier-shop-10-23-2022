import React from "react";
import "./header.css"

function Header() {
  return (
    <section id="header">
      <span>Logo</span>
      <ul>
        <li><a href="/home" className="active">Home</a></li>
        <li><a href="/About">services</a></li>
        <li><a href="/home">About</a></li>
        <li><a href="/home">Contect</a></li>
      </ul>
    </section>
  );
}

export default Header;
