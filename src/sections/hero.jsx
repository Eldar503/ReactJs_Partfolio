import React from 'react';
import eldar from '../assets/user.png'
function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <span className="white">Hi There!</span>
                    <h1 className="hero__title">I AM <span className="orange">A FREELANCER</span></h1>
                    <p className="hero__description">I'm a Freelance UI/UX Designer and Developer based in London, England.
                         I strives to build immersive and beautiful web applications through
                         carefully crafted code and user-centric design.
                    </p>
                    <a href="about" className="hero__btn btn">
                        <img src={eldar} alt=""/>
                        MORE ABOUT ME</a>
                </div>
            </div>
        </section>
    )
}
export default Hero