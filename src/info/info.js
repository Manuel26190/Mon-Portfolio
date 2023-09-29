import projet2 from "../assets/homep2.png";
import projet3 from "../assets/homep3.png";
import projet5 from "../assets/homep5.png";
import projet6 from "../assets/homep6.png";
import projet7 from "../assets/homep7.png";
import imageP3 from "../assets/homep3.png";
import imageP6 from "../assets/homep6.png";
import imageP7 from "../assets/homep7.png";
import image8 from "../assets/homep2.png";

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
   
    bio: "Bonjour! Je suis Manuel. Je suis développeur Front-end. J'ai étudié chez OpenClassrooms, j'aime les sports en montagne et je crois que le métier de développeur a de belles années devant lui notamment avec l'arrivée de l'intélligence artificielle ",
    skills:
        {
            competentEn: ['javascript', 'html5', 'css3', 'react', 'github', 'sass', 'figma'],
            familiariseAvec: ['node.js', 'express.js', 'PHP', 'mongoDB']
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
            live: "https://manuel26190.github.io/Creer-la-page-d-accueil-d-une-agence-de-voyage-avec-HTML-et-CSS/", 
            source: "https://github.com/Manuel26190/Creer-la-page-d-accueil-d-une-agence-de-voyage-avec-HTML-et-CSS", 
            image: projet2,
            description: "Projet qui consiste a intégrer l'interface d'un site de recherche d'hébergement par ville, avec HTML et CSS. A partir d'une maquette Figma, en collaboration avec la CTO et l’UI designer. La page est responsive, elle s'adapte a toutes tailles d'écrans"
        },
        {
            title: "Page web dynamique avec JavaScript",
            live: imageP3, 
            source: "https://github.com/Manuel26190/Creer-une-page-web-dynamique-avec-javaScript",
            image: projet3,
            description: "Projet de gestion de la partie front-end au sein d’une équipe, qui travaille sur la conception du site portfolio d’une architecte d’intérieur. La page est dynamique grâce à la manipulation du DOM avec java script, des requêtes API get / post /delette sont égalements effectuées pour permettre la connection et la mise a jour des données"
        },
        {
            title: "Debug et optimisation d'un site portfolio",
            live: "https://manuel26190.github.io/Debugger-et-optimiser-un-site-de-photographe/",
            source: "https://github.com/Manuel26190/Debugger-et-optimiser-un-site-de-photographe",
            image: projet5,
            description:"Le travail ici fut de debugger, d'améliorer le référencement SEO, la performance et l'accessibilité d'un site web, grâce à l'utilisation de différents outils (navigateur, wave, Google Analytics / Search Console,...)" 
        },
        {
            title: "Application web de location immobilière avec React",
            live: imageP6,
            source: "https://github.com/Manuel26190/Creer-une-application-web-de-location-immobiliere-avec-React",
            image: projet6,
            description: "Création d'une application immobilère avec React, gestion des différentes routes avec react router et création d'animation CSS avec Sass"
        },
        {
            title: "Développer le back-end d'un site de notation de livres",
            live: imageP7,
            source: "https://github.com/Manuel26190/Developper-le-back-end-d-un-site-de-notation-de-livres",
            image: projet7,
            description:"Toujours avec React, à partir du code front-end, j'ai développé la partie back-end d'un site de référencement et de notation de livres, avec à Node.js et Express.js"
        },
        {
            title: "Blog de carnet de voyage",
            live: "https://manuel26190.github.io/Blog-de-voyage/",
            source: "https://github.com/Manuel26190/Blog-de-voyage/settings/pages",
            image: image8,
            description:"Projet de création d'un blog de récit de voyage avec du code HTML et CSS"
        }
    ]
}