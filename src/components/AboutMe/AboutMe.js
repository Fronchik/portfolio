import React from 'react';
import './AboutMe.css';
import aboutMePhoto from '../../images/photo.jpg';

function AboutMe() {
    return (
        <section className="aboutMe">
            <div className="aboutMe__container">
                <div className="aboutMe__block">
                    <h1 className="aboutMe__title">FRONTEND DEVELOPER</h1>
                    <div className="aboutMe__info">
                        <p id="me" className="aboutMe__info-text">I'm a Frontend developer with practical experience in creating adaptive and user-friendly interfaces using HTML, CSS, JavaScript, React and TypeScript.
                            Currently looking for a job or internship in frontend development.
                        </p>
                    </div>
                </div>
                <div className="aboutMe__photo">
                    <img src={aboutMePhoto} alt="Фото фронтенд-разработчика" className="aboutMe__photo-img" />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;