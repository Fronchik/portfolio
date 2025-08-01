import React from 'react';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div id="contact" className="footer__title">Portfolio Voronina Anna</div>
            <nav className="footer__items">
                <div className="footer__copyright">
                    &copy; {currentYear}
                </div>
                <ul className="footer__links">
                    <li>
                        <a href="https://github.com/Fronchik/" className="footer__link" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/voronina-anna/" className="footer__link" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </li>
                    <li>
                        <a href="mailto:voronina.annya@gmail.com" className="footer__link" target="_blank" rel="noopener noreferrer">Gmail</a>
                    </li>
                    <li>
                        <a href="https://t.me/Voron_in_A" className="footer__link" target="_blank" rel="noopener noreferrer">Telegram</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
