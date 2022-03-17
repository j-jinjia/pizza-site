import React from "react";
import "./StepTwo.scss";
import pizzaImage from "../../assets/images/pizza-image_2.png";

const StepTwo = () => {
  return (
    <div className="step-two">
      <img className="step-two__image" src={pizzaImage} alt="pizza image" />
      <div>
        <h2 className="step-two__heading"> 02 Delivery Information</h2>
        <p className="step-two__content">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          temporibus architecto cumque nesciunt libero officia dolorum
          reprehenderit, amet omnis labore magnam recusandae suscipit
          consectetur tenetur, natus molestiae fugiat sint rerum!
        </p>

        <textarea
          className="step-two__input"
          type="text"
          placeholder="Address"
          rows="4"
          cols="30"
        />
      </div>
    </div>
  );
};

export default StepTwo;
