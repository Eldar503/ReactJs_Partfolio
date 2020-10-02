import React from "react";
import Images1 from "../assets/1.png";
import Images2 from "../assets/2.png";
import Images3 from "../assets/3.png";
import Images4 from "../assets/4.png";
import Images5 from "../assets/5.png";
import Images6 from "../assets/6.png";
import Images7 from "../assets/7.png";
import Images8 from "../assets/8.png";
import Images9 from "../assets/9.png";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__header">
          <h3 className="portfolio__title">
            MY <span className="orange">PORTFOLIO</span>
          </h3>
          <p className="portfolio__text">
            I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
          </p>
        </div>
        <div className="row portfolio__content">
            <div className="col-4 portfolio__item"><img src={Images1} alt=""/></div>
            <div className="col-4 portfolio__item"><img src={Images2} alt=""/></div>
            <div className="col-4 portfolio__item"><img src={Images3} alt=""/></div>
            <div className="col-4 portfolio__item"><img src={Images4} alt=""/></div>
            <div className="col-4 portfolio__item"><img src={Images5} alt=""/></div>
            <div className="col-4 portfolio__item"><img src={Images6} alt=""/></div>
            <div className="col-4 portfolio__item"><img src={Images7} alt=""/></div>
            <div className="col-4 portfolio__item"><img src={Images8} alt=""/></div>
            <div className="col-4 portfolio__item"><img src={Images9} alt=""/></div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
