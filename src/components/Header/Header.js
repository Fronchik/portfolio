import React from 'react';
import './Header.css';

function Header() {

    return (

        <header className="header">
            <div className="header__logo">
                <a href="#me">
                    <p className="header__name">Назарьева Анна</p>
                </a>
            </div>
            <div className="header__nav">
                <a href="https://github.com/Fronchik/" target="_blank" rel="noopener noreferrer">
                    <div className="header__link">
                        <p className="header__title">GitHub</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/anna-nazareva/" target="_blank" rel="noopener noreferrer">
                    <div className="header__link">
                        <p className="header__title">Linkedin</p>
                    </div>
                </a>
                <a href="mailto:annanazarieva@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className="header__link">
                        <p className="header__title">Gmail</p>
                    </div>
                </a>
                <a href="https://t.me/Anna_Nazareva" target="_blank" rel="noopener noreferrer">
                    <div className="header__link">
                        <p className="header__title">Telegram</p>
                    </div>
                </a>
            </div>
        </header>
    );
}

export default Header;