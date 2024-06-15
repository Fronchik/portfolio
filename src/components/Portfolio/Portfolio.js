import React from 'react';
import './Portfolio.css';
import portfolioFilm from '../../images/films.jpg';
import portfolioMesto from '../../images/mesto.jpg';
import portfolioTravel from '../../images/travel.jpg';
import portfolioCyprus from '../../images/cyprus.jpg';

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__container">
                <div className="portfolio__number">01</div>
                <div className="portfolio__info">
                    <p className="portfolio__title">ФИЛЬМЫ</p>
                    <p className="portfolio__text">HTML, CSS, JS, React. Место - это проект, где любой может загрузить на сайт фото, где он путешествовал.</p>
                    <a href="https://github.com/Fronchik/" target="_blank" rel="noopener noreferrer">
                        <p className="portfolio__link">GitHub</p>
                    </a>
                    <img src={portfolioFilm} alt="Стрелка" className="portfolio__img" />
                </div>
            </div>
            <div className="portfolio__container">
                <div className="portfolio__number">02</div>
                <div className="portfolio__info">
                    <p className="portfolio__title">МЕСТО</p>
                    <p className="portfolio__text">HTML, CSS, JS, React. Место - это проект, где любой может загрузить на сайт фото, где он путешествовал.</p>
                    <a href="https://github.com/Fronchik/" target="_blank" rel="noopener noreferrer">
                        <p className="portfolio__link">GitHub</p>
                    </a>
                    <img src={portfolioMesto} alt="Стрелка" className="portfolio__img" />
                </div>
            </div>
            <div className="portfolio__container">
                <div className="portfolio__number">03</div>
                <div className="portfolio__info">
                    <p className="portfolio__title">ПУТЕШЕСТВИЯ</p>
                    <p className="portfolio__text">HTML, CSS, JS, React. Место - это проект, где любой может загрузить на сайт фото, где он путешествовал.</p>
                    <a href="https://github.com/Fronchik/" target="_blank" rel="noopener noreferrer">
                        <p className="portfolio__link">GitHub</p>
                    </a>
                    <img src={portfolioTravel} alt="Стрелка" className="portfolio__img" />
                </div>
            </div>
            <div className="portfolio__container">
                <div className="portfolio__number">04</div>
                <div className="portfolio__info">
                    <p className="portfolio__title">КИПР</p>
                    <p className="portfolio__text">HTML, CSS, JS, React. Место - это проект, где любой может загрузить на сайт фото, где он путешествовал.</p>
                    <a href="https://github.com/Fronchik/" target="_blank" rel="noopener noreferrer">
                        <p className="portfolio__link">GitHub</p>
                    </a>
                    <img src={portfolioCyprus} alt="Стрелка" className="portfolio__img" />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;