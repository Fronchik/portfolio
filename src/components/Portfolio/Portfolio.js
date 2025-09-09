import React from 'react';
import './Portfolio.css';
import portfolioFilm from '../../images/films.jpg';
import portfolioMesto from '../../images/mesto.jpg';
import portfolioKosmos from '../../images/kosmos.jpg';
import portfolioCyprus from '../../images/cyprus.jpg';

function Portfolio() {
    return (
        <section id="projects" className="portfolio">
            <div className="portfolio__container">
                <p className="portfolio__number">01</p>
                <div className="portfolio__info">
                    <p className="portfolio__title">Movies Project</p>
                    <p className="portfolio__text">HTML, CSS, JavaScript, React, API.
                        This project is my graduation work from Yandex.Practicum. It starts with a landing page that introduces me and showcases my portfolio.
                        After user registration, the site offers a movie search system with the ability to filter by duration (short films) and save favorites.
                        The project demonstrates my ability to work with React, user authentication, API integration, and responsive design.
                    </p>
                    <div className="portfolio__pages">
                        <a href="https://github.com/Fronchik/movies-explorer-frontend/" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">GitHub Frontend</p>
                        </a>
                        <a href="https://github.com/Fronchik/movies-explorer-api/" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">GitHub Backend</p>
                        </a>
                        <a href="https://movies.fronchik.com/" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">Website</p>
                        </a>
                    </div>
                    <div className="portfolio__box">
                        <img src={portfolioFilm} alt="Кинопоиск" className="portfolio__box-img" />
                    </div>
                </div>
            </div>
            <div className="portfolio__container">
                <div className="portfolio__number">02</div>
                <div className="portfolio__info">
                    <p className="portfolio__title">Mesto Project</p>
                    <p className="portfolio__text">HTML, CSS, JS, React. Mesto is a web platform where authorized users can share their travel experiences by uploading photos.
                        Users can like other posts and delete their own. The project demonstrates skills in user authentication, working with dynamic content, and building interactive UI components using React.
                    </p>
                    <div className="portfolio__pages">
                        <a href="https://github.com/Fronchik/react-mesto-api-full-gha" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">GitHub</p>
                        </a>
                        <a href="https://mesto.fronchik.com/sign-in" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">Website</p>
                        </a>
                    </div>
                    <div className="portfolio__box">
                        <img src={portfolioMesto} alt="Место" className="portfolio__box-img" />
                    </div>
                </div>
            </div>
            <div className="portfolio__container">
                <div className="portfolio__number">03</div>
                <div className="portfolio__info">
                    <p className="portfolio__title">The Immense Universe Project</p>
                    <p className="portfolio__text">HTML, CSS, БЭМ, Grid, Flex. This project is a fully responsive website built using CSS Grid and Flexbox for optimal layout on different screen sizes.
                        The site features various planets, interesting facts about space.
                    </p>
                    <div className="portfolio__pages">
                        <a href="https://github.com/Fronchik/kosmos" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">GitHub</p>
                        </a>
                        <a href="https://fronchik.github.io/kosmos/" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">GitHub Pages</p>
                        </a>
                    </div>
                    <div className="portfolio__box">
                        <img src={portfolioKosmos} alt="Путешествия" className="portfolio__box-img" />
                    </div>
                </div>
            </div>
            <div className="portfolio__container">
                <div className="portfolio__number">04</div>
                <div className="portfolio__info">
                    <p className="portfolio__title">Cyprus Project</p>
                    <p className="portfolio__text">HTML, CSS, Bootstrap 4.6.1, JavaScript. The Cyprus Project is a landing page designed for travelers planning a trip to the island of Cyprus.
                        It offers helpful information, tips, and inspiration to make their journey smoother and more enjoyable.
                    </p>
                    <div className="portfolio__pages">
                        <a href="https://github.com/Fronchik/cyprus" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">GitHub</p>
                        </a>
                        <a href="https://fronchik.github.io/cyprus/" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">GitHub Pages</p>
                        </a>
                    </div>
                    <div className="portfolio__box">
                        <img src={portfolioCyprus} alt="Кипр" className="portfolio__box-img" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;