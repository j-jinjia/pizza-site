import React from "react";
import "./About.scss";
import StepOne from "../StepOne/StepOne";
import StepTwo from "../StepTwo/StepTwo";
import StepThree from "../StepThree/StepThree";

const About = () => {
  return (
    <>
      <div className="about">
        <h2 className="about-title">Our Story</h2>
        <p className="about-content">
          {" "}
          An Italian pizza restaurant, that started selling "make your own" kits
          during covid. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Odio soluta magni sunt voluptatem molestiae autem dolorem
          eveniet ducimus quasi excepturi? Natus aperiam quisquam autem! Quaerat
          ipsa explicabo placeat minus reiciendis.
        </p>
      </div>
      <StepOne />
      <StepTwo />
      <StepThree />
    </>
  );
};

export default About;
