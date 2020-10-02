import React from "react";
import man from "../assets/avatar.png";
import girl from "../assets/avatar-girl.png";
import up from "../assets/up.png";

function Client() {
  return (
    <section className="client">
      <div className="container">
        <div className="client__header">
          <h3 className="client__title">
            MY <span className="orange">CLIENTS</span>{" "}
          </h3>
          <p className="client__text">
            I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
          </p>
        </div>
        <div className="row client__row">
          <div className="col-6 client__item">
            <img className="client__avatar" src={man} alt="" />
            <img src={up} alt=""/>
            <p className="client__description">
              In a professional context it often happens that private or
              corporate clients corder a publication to be made. In a
              professional context it often happens thatprivate or corporate
              clients corder a publication to be made.
            </p>
            <div className="client__bio">
              <span className="client__name">Amar Smith</span>
              <span className="client__job">Product Manager</span>
            </div>
          </div>
          <div className="col-6 client__item">
            <img className="client__avatar" src={girl} alt="" />
            <img src={up} alt=""/>
            <p className="client__description">
              In a professional context it often happens that private or
              corporate clients corder a publication to be made. In a
              professional context it often happens thatprivate or corporate
              clients corder a publication to be made.
            </p>
            <div className="client__bio">
              <span className="client__name">Amar Smith</span>
              <span className="client__job">Product Manager</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
