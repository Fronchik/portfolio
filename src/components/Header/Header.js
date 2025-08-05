import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h2 className="header__name">Anna Voronina</h2>
            <div className="header__nav">
                <a href="#me">
                    <div className="header__nav-box">
                        <p className="header__nav-title">about me</p>
                    </div>
                </a>
                <a href="#projects">
                    <div className="header__nav-box">
                        <p className="header__nav-title">projects</p>
                    </div>
                </a>
                <a href="#skills">
                    <div className="header__nav-box">
                        <p className="header__nav-title">skills</p>
                    </div>
                </a>
            </div>
            <div className="header__contacts">
                <a href="https://github.com/Fronchik/" target="_blank" rel="noopener noreferrer">
                    <div className="header__link">
                        <p className="header__link-contact">GitHub</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/voronina-anna/" target="_blank" rel="noopener noreferrer">
                    <div className="header__link">
                        <p className="header__link-contact">Linkedin</p>
                    </div>
                </a>
                <a href="mailto:voronina.annya@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className="header__link">
                        <p className="header__link-contact">Gmail</p>
                    </div>
                </a>
                <a href="https://t.me/Voron_in_A" target="_blank" rel="noopener noreferrer">
                    <div className="header__link">
                        <p className="header__link-contact">Telegram</p>
                    </div>
                </a>
            </div>
        </header>
    );
}

export default Header;