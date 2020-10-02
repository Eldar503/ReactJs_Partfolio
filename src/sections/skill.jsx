import React from "react";
import round1 from "../assets/round-1.svg";
import round2 from "../assets/round-2.svg";
import round3 from "../assets/round-3.svg";
import round4 from "../assets/round-4.svg";

function Skill() {
  return (
    <section className="skill">
      <div className="container">
        <div className="skill__header">
          <h3 className="skill__title">
            EXPERIENCE <span className="orange">SKILL</span>
          </h3>
          <p className="skill__description">
            I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO
          </p>
        </div>
        <div className="row">
          <div className="col-3 skill__column">
            <div className="skill__item">
              <span className="orange item__date">2011 - 2014 (UI DESIGNER)</span>
              <h5 className="item__title">GOOGLE CORPORATION.</h5>
              <p className="item__description">
                All You Need To Do Your Best Work Together In One Package Works
                Seamlessly Computer
              </p>
            </div>
          </div>
          <div className="col-3 skill__column">
            <div className="skill__item">
              <span className="orange item__date">2011 - 2014 (UI DESIGNER)</span>
              <h5 className="item__title">GOOGLE CORPORATION.</h5>
              <p className="item__description">
                All You Need To Do Your Best Work Together In One Package Works
                Seamlessly Computer
              </p>
            </div>
          </div>
          <div className="col-3 skill__column">
            <div className="skill__item">
              <span className="orange item__date">2011 - 2014 (UI DESIGNER)</span>
              <h5 className="item__title">GOOGLE CORPORATION.</h5>
              <p className="item__description">
                All You Need To Do Your Best Work Together In One Package Works
                Seamlessly Computer
              </p>
            </div>
          </div>
          <div className="col-3 skill__column">
            <div className="skill__item">
              <span className="orange item__date">2011 - 2014 (UI DESIGNER)</span>
              <h5 className="item__title">GOOGLE CORPORATION.</h5>
              <p className="item__description">
                All You Need To Do Your Best Work Together In One Package Works
                Seamlessly Computer
              </p>
            </div>
          </div>
        </div>
      <div className="row text-center">
        <div className="col-3">
          <div className="round__item">
            <img src={round1} alt="" className="round__shape"/>
            <h6 className="round__percent">60%</h6>
            <h3 className="round__title">BRANDING DESIGN</h3>
          </div>
        </div>
        <div className="col-3">
          <div className="round__item">
            <img src={round2} alt="" className="round__shape"/>
            <h6 className="round__percent">70%</h6>
            <h3 className="round__title">UI & UX DESIGN</h3>
          </div>
        </div>
        <div className="col-3">
          <div className="round__item">
            <img src={round3} alt="" className="round__shape"/>
            <h6 className="round__percent">30%</h6>
            <h3 className="round__title">WEB  DESIGN</h3>
          </div>
        </div>
        <div className="col-3">
          <div className="round__item">
            <img src={round4} alt="" className="round__shape"/>
            <h6 className="round__percent">90%</h6>
            <h3 className="round__title">ILLUSTRATION</h3>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
export default Skill;
