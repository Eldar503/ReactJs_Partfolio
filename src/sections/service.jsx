import React from "react";
import Shape1 from "../assets/shape.png";
import Shape2 from "../assets/shape1.png";
import Shape3 from "../assets/shape2.png";

function Service() {
  return (
    <section className="service">
      <div className="container">
        <div className="service__header">
          <h3 className="service__title">
            MY <span className="orange">SERVICES</span>
          </h3>
          <p className="service__text">
            I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
          </p>
        </div>
        <div className="row">
          <div className="col-4 service__item">
              <img src={Shape1} alt="" />
            <h6 className="item__title">DESIGN PRINCIPALES</h6>
            <p className="item__text">
              Need A Project Completed By An Expert? Let’s go! Access A Human
              Recources Consultant To Answer Questions
            </p>
          </div>
          <div className="col-4 service__item">
              <img src={Shape2} alt="" />
            <h6 className="item__title">UNIQUE VALUES</h6>
            <p className="item__text">
              Need A Project Completed By An Expert? Let’s go! Access A Human
              Recources Consultant To Answer Questions
            </p>
          </div>
          <div className="col-4 service__item">
              <img src={Shape3} alt="" />
            <h6 className="item__title">STYLE COMPONENTS</h6>
            <p className="item__text">
              Need A Project Completed By An Expert? Let’s go! Access A Human
              Recources Consultant To Answer Questions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Service;
