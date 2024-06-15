import React from 'react';
import './AboutMe.css';
import aboutMePhoto from '../../images/photo.jpg';

function AboutMe() {
    return (
        <section id="student" className="aboutMe">
            <h1 className="aboutMe__title">
                <span>JUNIOR</span>
                <span>FRONTEND</span>
                <span>DEVELOPER</span>
            </h1>
            <h2 className="aboutMe__subtitle">STACK</h2>
            <ul className="aboutMe__stack">
                <li className="aboutMe__stack-item">HTML5</li>
                <li className="aboutMe__stack-item">CSS3</li>
                <li className="aboutMe__stack-item">JS</li>
                <li className="aboutMe__stack-item">React</li>
                <li className="aboutMe__stack-item">Git</li>
                <li className="aboutMe__stack-item">Node.js</li>
                <li className="aboutMe__stack-item">Express.js</li>
            </ul>
            <div className="aboutMe__container">
                <h2 className="aboutMe__name">Обо мне</h2>
                <div className="aboutMe__info">
                    <p className="aboutMe__info-text">Я начинающий фронтенд-разработчик. Недавно я закончила курсы в Яндекс Практикуме, где получила знания и навыки в области веб-разработки.
                        Сейчас я участвую в проекте от Яндекс Мастерской, что позволяет мне применять свои знания на практике и развиваться в команде профессионалов.
                    </p>
                    <p className="aboutMe__info-text">До того, как я решила сменить карьеру и стать разработчиком, я работала менеджером по аренде. Мой предыдущий опыт помог мне развить навыки управления проектами, общения с клиентами и работы в команде.
                        Я окончила Российский экономический университет им. Г.В. Плеханова, по специальности "экономист-менеджер".
                        Помимо работы и учебы, я увлекаюсь путешествиями и фотографией. Мне нравится открывать для себя новые места и запечатлевать яркие моменты жизни через объектив камеры.
                    </p>
                    <p className="aboutMe__info-text">Мой следующий шаг - стать опытным разработчиком, который создаёт качественные и удобные для пользователей интерфейсы.
                        Буду рада новым возможностям и вызовам, которые помогут мне расти и развиваться в этой увлекательной сфере.
                    </p>
                </div>
                <img src={aboutMePhoto} alt="Фото студента" className="aboutMe__info-photo" />
            </div>
        </section>
    );
}

export default AboutMe;