import React from 'react';
import './AboutMe.css';
import aboutMePhoto from '../../images/photo.jpg';

function AboutMe() {
    return (
        <section className="aboutMe">
            <div className="aboutMe__container">
                <div className="aboutMe__block">
                    <h1 className="aboutMe__title">FRONTEND DEVELOPER</h1>
                    {/* <h2 className="aboutMe__name">Anna Voronina</h2> */}
                    <div className="aboutMe__info">
                        <p id="me" className="aboutMe__info-text">I'm a Frontend developer with practical experience in creating adaptive and user-friendly interfaces using HTML, CSS, JavaScript, React and TypeScript.
                            Currently looking for a job or internship in frontend development.
                        </p>
                    </div>
                </div>
                <img src={aboutMePhoto} alt="Фото фронтенд-разработчика" className="aboutMe__info-photo" />
            </div>
            <h2 id="skills" className="aboutMe__subtitle">STACK</h2>
            <ul className="aboutMe__stack">
                <li className="aboutMe__stack-item">HTML5</li>
                <li className="aboutMe__stack-item">CSS3</li>
                <li className="aboutMe__stack-item">JS</li>
                <li className="aboutMe__stack-item">React</li>
                <li className="aboutMe__stack-item">Git</li>
                <li className="aboutMe__stack-item">Node.js</li>
                <li className="aboutMe__stack-item">Express.js</li>
            </ul>
        </section>
    );
}

export default AboutMe;