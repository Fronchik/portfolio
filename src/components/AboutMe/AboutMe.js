import React from 'react';
import './AboutMe.css';
import aboutMePhoto from '../../images/photo.jpg';

function AboutMe() {
    return (
        <section className="aboutMe">
            <h1 className="aboutMe__title">
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
                <h2 id="me" className="aboutMe__name">About me</h2>
                <div className="aboutMe__info">
                    <p className="aboutMe__info-text">I'm a Frontend developer with practical experience in creating adaptive and user-friendly interfaces using HTML, CSS, JavaScript, React and TypeScript.
                        Currently looking for a job or internship in frontend development.
                    </p>
                </div>
                <img src={aboutMePhoto} alt="Фото студента" className="aboutMe__info-photo" />
            </div>
        </section>
    );
}

export default AboutMe;