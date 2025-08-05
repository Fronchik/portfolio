import React from 'react';
import './Main.css';
import Particles from '../Particles/Particles';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {

    return (
        <>
            <Particles />
            <Header />
            <main>
                <AboutMe />
                <Skills />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
}

export default Main;