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
                </div>
            </div>
        </header>
    )
}
export default Header