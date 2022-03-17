import React from "react";
import "./StepOne.scss";
import pizzaImage from "../../assets/images/pizza-image_1.png";

const StepOne = () => {
  return (
    <div className="step-one">
      <div>
        <h2 className="step-one__heading">
          {" "}
          01 Pick your toppings and select your delivery date
        </h2>
        <p className="step-one__content">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          temporibus architecto cumque nesciunt libero officia dolorum
          reprehenderit, amet omnis labore magnam recusandae suscipit
          consectetur tenetur, natus molestiae fugiat sint rerum!
        </p>
        <input className="step-one__input" type="date" />
      </div>
      <img className="step-one__image" src={pizzaImage} alt="pizza image" />
    </div>
  );
};

export default StepOne;
