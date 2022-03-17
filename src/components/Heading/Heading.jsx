import React from "react";
import "./Heading.scss";
import pizza from "../../assets/images/pizza-icon.png";

const Heading = () => {
  return (
    <>
      <div className="navbar">
        <h1 className="navbar__title">Pocco Fuocco</h1>
        <ul className="links">
          <li>Our Story</li>
          <li>Order</li>
          <li>Get in touch</li>
        </ul>
      </div>
      <img className="navbar__icon" src={pizza} alt="pizza-icon" />
    </>
  );
};

export default Heading;
