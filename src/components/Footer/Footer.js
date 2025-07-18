import React from 'react';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__title">Portfolio Voronina Anna</div>
            <nav className="footer__items">
                <div className="footer__copyright">
                    &copy; {currentYear}
                </div>
                <ul className="footer__links">
                    <li>
                        <a href="https://github.com/Fronchik/" className="footer__link" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
