import projet2 from "../assets/homep2.png";
import projet3 from "../assets/homep3.png";
import projet8 from "../assets/homep8.png";
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*https://gradientgenerator.paytonpierce.dev/ */

export const info = {
    firstName: "Manuel",
    lastName: "Faure",

    initials: "mf", 
    position: "développeur Front-end",    
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'carburant : le café'
        },
        {
            emoji: '🌎',
            text: 'Réside dans la Drôme (Fr)'
        },
        {
            emoji: "💼",
            text: "Formé chez OpenClassrooms"
        },
        {
            emoji: "📧",
            text: "manuelfaure26190@gmail.com"
        }
    ],
    // socials: [               
    //     {
    //         link: "https://github.com",
    //         icon: "fa fa-github",
    //         label: 'github'
    //     },
    //     {
    //         link: "https://linkedin.com",
    //         icon: "fa fa-linkedin",
    //         label: 'linkedin'
    //     },
    //     {
    //         link: "https://twitter.com",
    //         icon: "fa fa-twitter",
    //         label: 'twitter'
    //     }
    // ],
    bio: "Bonjour! Je suis Manuel. Je suis développeur Front-end. J'ai étudié chez OpenClassrooms, j'aime me promener en montagne et je crois que le métier de développeur a de belles années devant lui notamment avec l'arrivée de l'intéligence artificielle ",
    skills:
        {
            competentEn: ['javascript', 'react', 'git', 'github', 'html5', 'css3', 'sass', 'figma'],
            familiariseAvec: ['nodejs', 'express', 'mongoDB']
        }
    ,
    hobbies: [
        {
            label: 'le trail',
            emoji: '🌄🏃‍♂‍'
        },
        {
            label: "l'astronomie",
            emoji: '🪐🌌'
        },
        {
            label: 'le cinéma',
            emoji: '🎥'
        },
        {
            label: 'la cuisine',
            emoji: '🌶🍰'
        },
        {
            label: 'la musique',
            emoji: '🎸🎹'
        }
    ],
    portfolio: [ 
        {
            title: "Page d'accueil d'une agence de voyage",
            live: "#", 
            source: "https://github.com/Manuel26190/Creer-la-page-d-accueil-d-une-agence-de-voyage-avec-HTML-et-CSS", 
            image: projet2
        },
        {
            title: "Page web dynamique avec JavaScript",
            live: "#",
            source: "https://github.com/Manuel26190/Creer-une-page-web-dynamique-avec-javaScript",
            image: projet3
        },
        {
            title: "Debug et optimisation d'un site portfolio",
            live: "https://manuel26190.github.io/Debugger-et-optimiser-un-site-de-photographe/",
            source: "https://github.com/Manuel26190/Debugger-et-optimiser-un-site-de-photographe",
            // image: mock3
        },
        {
            title: "Application web de location immobilière avec React",
            live: "#",
            source: "https://github.com/Manuel26190/Creer-une-application-web-de-location-immobiliere-avec-React",
            // image: mock4
        },
        {
            title: "Développer le back-end d'un site de notation de livres",
            live: "#",
            source: "https://github.com/Manuel26190/Developper-le-back-end-d-un-site-de-notation-de-livres",
            image: projet8
        },
        {
            title: "Blog carnet de voyage",
            live: "#",
            source: "#",
            // image: mock5
        }
    ]
}