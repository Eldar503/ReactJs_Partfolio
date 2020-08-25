import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <nav className="header__nav nav">
                       <ul className="nav__menu menu">
                           <li className="menu__item">
                               <a href="index.html" className="menu__link">home</a></li>
                           <li className="menu__item">
                               <a href="#about" className="menu__link">about</a></li>
                           <li className="menu__item">
                               <a href="#portfolio" className="menu__link">portfolio</a></li>
                           <li className="menu__item">
                               <a href="#contact" className="menu__link">contact</a></li>
                           <li className="menu__item">
                               <a href="#blog" className="menu__link">blog</a></li>
                       </ul>
                    </nav>
                    <ul className="social">
                        <li className="social__item"><a className="social__link" href=""><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                        <li className="social__item"><a className="social__link" href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li className="social__item"><a className="social__link" href=""><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                        <li className="social__item"><a className="social__link" href=""><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                        <li className="social__item"><a className="social__link" href=""><i class="fa fa-behance-square" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header