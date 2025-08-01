import React from 'react';
import './Header.css';

class Header extends React.Component {
    componentDidMount() {
        this.initializeParticles();
        this.createShootingStars();
    }

    initializeParticles() {
        // Настройка анимации звезд
        window.particlesJS('particles__stars', {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "star",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.7,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 4,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 0.5,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    }
                }
            },
            retina_detect: true
        });

        // Настройка анимации кругов
        window.particlesJS('particles__circles', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ["#64FFDA", "#F584BA"]
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.7,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 4,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#64FFDA",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    createShootingStars() {
        setInterval(() => {
            const star = document.createElement('div');
            star.className = 'shooting-star';
            star.style.left = Math.random() * 100 + 'vw';
            star.style.top = Math.random() * 50 + 'vh';
            star.style.animationDuration = Math.random() * 2 + 1 + 's';
            document.body.appendChild(star);
            setTimeout(() => {
                star.remove();
            }, parseFloat(star.style.animationDuration) * 1000);
        }, 3000);
    }

    render() {
        return (
            <>
                <div className="particles">
                    <div id="particles__stars"></div>
                    <div id="particles__circles"></div>
                </div>
                <header className="header">
                    <div className="header__nav">
                        <a href="#me">
                            <div className="header__link">
                                <p className="header__title">about me</p>
                            </div>
                        </a>
                        <a href="#projects">
                            <div className="header__link">
                                <p className="header__title">projects</p>
                            </div>
                        </a>
                        <a href="#skills">
                            <div className="header__link">
                                <p className="header__title">skills</p>
                            </div>
                        </a>
                        <a href="#contact">
                            <div className="header__link">
                                <p className="header__title">contacts</p>
                            </div>
                        </a>
                    </div>

                </header>
            </>
        );
    }
}

// function Header() {

//     return (

//         <header className="header">
//             <div className="header__logo">
//                 <a href="#me">
//                     <p className="header__name">Voronina Anna</p>
//                 </a>
//             </div>
//             <div className="header__nav">
//                 <a href="https://github.com/Fronchik/" target="_blank" rel="noopener noreferrer">
//                     <div className="header__link">
//                         <p className="header__title">GitHub</p>
//                     </div>
//                 </a>
//                 <a href="https://www.linkedin.com/in/voronina-anna/" target="_blank" rel="noopener noreferrer">
//                     <div className="header__link">
//                         <p className="header__title">Linkedin</p>
//                     </div>
//                 </a>
//                 <a href="mailto:voronina.annya@gmail.com" target="_blank" rel="noopener noreferrer">
//                     <div className="header__link">
//                         <p className="header__title">Gmail</p>
//                     </div>
//                 </a>
//                 <a href="https://t.me/Voron_in_A" target="_blank" rel="noopener noreferrer">
//                     <div className="header__link">
//                         <p className="header__title">Telegram</p>
//                     </div>
//                 </a>
//             </div>
//         </header>
//     );
// }

export default Header;