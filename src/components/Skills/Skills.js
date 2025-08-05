import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <section className="skills">
            <h2 id="skills" className="skills__subtitle">STACK</h2>
            <ul className="skills__stack">
                <li className="skills__stack-item">HTML5</li>
                <li className="skills__stack-item">CSS3</li>
                <li className="skills__stack-item">JS</li>
                <li className="skills__stack-item">React</li>
                <li className="skills__stack-item">Git</li>
                <li className="skills__stack-item">Node.js</li>
                <li className="skills__stack-item">Express.js</li>
            </ul>
        </section>
    );
}

export default Skills;