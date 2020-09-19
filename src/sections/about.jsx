import React from "react";
import girl from "../assets/dark-about.png";
import download from "../assets/download.png";
import USER from "../assets/USER-black.png";
import coffee from "../assets/coffee .png";
import smile from "../assets/smile.png";
import splotch from "../assets/splotch.png";
import award from "../assets/award.png";
import code from "../assets/code.png";
function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__header">
          <h2 className="about__title">
            ABOUT <span className="orange">ME</span>
          </h2>
          <p className="about__description">
            I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
          </p>
        </div>
        <div className="row">
          <div className="col-5">
            <div className="about__item about__item-before">
              <img src={girl} alt="" />
            </div>
          </div>
          <div className="col-7">
            <div className="about__item">
              <h5 className="item__title">Hello, I am Eldar Mokeshov</h5>
              <p className="item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                fringilla pretium lacus, eu luctus neque ultricies a. Phasellus
                faucibus orci a purus mattis tincidunt ut non nulla. Donec
                ullamcorper sapien eget neque facilisis euismod.
              </p>
              <div className="row">
                <div className="col-6">
                  <ul className="item__ul">
                    <li className="item__li">Name : Eldar Mokeshov</li>
                    <li className="item__li">Date of birth : 04-06-2007</li>
                    <li className="item__li">Nationality : Kyrgyz</li>
                    <li className="item__li">
                      Work Status: Front-End developer
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="item__ul">
                    <li className="item__li">Phone : +996 552-079-735</li>
                    <li className="item__li">Email : eldarmol587@gmail.com</li>
                    <li className="item__li">Address : 1000 Proctor St BD</li>
                    <li className="item__li">Freelancer: Available</li>
                  </ul>
                </div>
              </div>
              <button className="item__btn btn">
                <img src={download} alt="" />
                <span>Download My CV</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row achievements">
          <div className="col-2">
            <div className="achievements__item">
              <img src={USER} alt="" className="achievements__icon" />
              <span className="achievements__title">129 Project Complate</span>
            </div>
          </div>
          <div className="col-2">
            <div className="achievements__item">
              <img src={coffee} alt="" className="achievements__icon" />
              <span className="achievements__title">1000 Cup of coffee</span>
            </div>
          </div>
          <div className="col-2">
            <div className="achievements__item">
              <img src={smile} alt="" className="achievements__icon" />
              <span className="achievements__title">400 Satisfied Clients</span>
            </div>
          </div>
          <div className="col-2">
            <div className="achievements__item">
              <img src={splotch} alt="" className="achievements__icon" />
              <span className="achievements__title">
                8 Years job experience
              </span>
            </div>
          </div>
          <div className="col-2">
            <div className="achievements__item">
              <img src={award} alt="" className="achievements__icon" />
              <span className="achievements__title">+15 qwards won</span>
            </div>
          </div>
          <div className="col-2">
            <div className="achievements__item">
              <img src={code} alt="" className="achievements__icon" />
              <span className="achievements__title">2000 lines of code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
