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
                <p className="portfolio__number">01</p>
                <div className="portfolio__info">
                    <p className="portfolio__title">ФИЛЬМЫ</p>
                    <p className="portfolio__text">HTML, CSS, JavaScript, React, Api. Проект "Фильмы" является моей дипломной работой, выполненной в рамках обучения на Яндекс.Практикуме.
                        Сайт представляет собой веб-платформу, которая начинается с визитки обо мне и презентации моих проектов. Далее,
                        после регистрации пользователя, на сайте доступна поисковая система фильмов. Пользователи имеют возможность добавлять фильмы в избранное,
                        а также использовать фильтр "короткометражки" для поиска фильмов определенной длительности.
                    </p>
                    <div className="portfolio__pages">
                        <a href="https://github.com/Fronchik/movies-explorer-frontend/" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">GitHub</p>
                        </a>
                        <a href="https://movies.fronchik.com/" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">Сайт</p>
                        </a>
                    </div>
                    <img src={portfolioFilm} alt="Стрелка" className="portfolio__img" />
                </div>
            </div>
            <div className="portfolio__container">
                <div className="portfolio__number">02</div>
                <div className="portfolio__info">
                    <p className="portfolio__title">МЕСТО</p>
                    <p className="portfolio__text">HTML, CSS, JS, React. Проект "Место" представляет собой платформу, где пользователь, пройдя процесс авторизации,
                        получает возможность делиться своими путешествиями, загружая фотографии на сайт.
                        Кроме того, пользователь может оценить понравившиеся посты, поставив лайк, а также удалить собственные фотографии.
                    </p>
                    <div className="portfolio__pages">
                        <a href="https://github.com/Fronchik/react-mesto-api-full-gha" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">GitHub</p>
                        </a>
                        <a href="https://mesto.fronchik.com/sign-in" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">Сайт</p>
                        </a>
                    </div>
                    <img src={portfolioMesto} alt="Стрелка" className="portfolio__img" />
                </div>
            </div>
            <div className="portfolio__container">
                <div className="portfolio__number">03</div>
                <div className="portfolio__info">
                    <p className="portfolio__title">ПУТЕШЕСТВИЕ ПО РОССИИ</p>
                    <p className="portfolio__text">HTML, CSS, БЭМ, Grid, Flex. Проект представляет собой разработку адаптивного веб-сайта с использованием гридов для эффективного макетирования и организации контента на различных разрешениях экрана.
                        Верстка интерфейса выполнена с учетом макета из Figma, обеспечивая правильное отображение и функциональность всех элементов на различных устройствах и разрешениях экрана.
                        Сайт описывает интересные места, которые можно посетить во время путешествия по России.
                        Пользователи могут ознакомиться с различными достопримечательностями, информацией о городах, культуре и истории страны.
                    </p>
                    <div className="portfolio__pages">
                        <a href="https://github.com/Fronchik/russian-travel" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">GitHub</p>
                        </a>
                        <a href="https://fronchik.github.io/russian-travel/" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">GitHub Pages</p>
                        </a>
                    </div>
                    <img src={portfolioTravel} alt="Стрелка" className="portfolio__img" />
                </div>
            </div>
            <div className="portfolio__container">
                <div className="portfolio__number">04</div>
                <div className="portfolio__info">
                    <p className="portfolio__title">КИПР</p>
                    <p className="portfolio__text">HTML, CSS, Bootstrap 4.6.1, JavaScript. Проект "Кипр" — это создание сайта-визитки для путешественников по Кипру,
                        который предлагает информацию и советы для путешественников, планирующих поездку на остров Кипр.
                    </p>
                    <div className="portfolio__pages">
                        <a href="https://github.com/Fronchik/cyprus" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">GitHub</p>
                        </a>
                        <a href="https://github.com/Fronchik/cyprus" target="_blank" rel="noopener noreferrer">
                            <p className="portfolio__link">GitHub Pages</p>
                        </a>
                    </div>
                    <img src={portfolioCyprus} alt="Стрелка" className="portfolio__img" />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;