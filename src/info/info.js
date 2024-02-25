import projet2 from "../assets/homep2.png";
import projet3 from "../assets/homep3.png";
import projet5 from "../assets/homep5.png";
import projet6 from "../assets/homep6.png";
import projet7 from "../assets/homep7.png";
import image8 from "../assets/homeBlogVoyage.png";
import image9 from "../assets/image-api-star-wars.png";
import mvg1 from "../assets/homep7.png"; 
import mvg2 from "../assets/mon-vieux-grimoire-fiche-livre.png";
import mvg3 from "../assets/mon-vieux-grimoire-ajouter-un-livre.png"; 
import mvg4 from "../assets/mon-vieux-grimoire-login.png"; 
import dogProject from '../assets/dog-walk.png'


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];



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
   
    bio: "En reconversion professionnelle, ma transition vers le développement web s'est déroulée de manière naturelle. En tant que personne créative, je suis constamment prêt à relever les défis liés à la programmation et à la conception de fonctionnalités innovantes. Je trouve particulièrement gratifiant de contribuer au développement d'interfaces web, où chaque détail compte. Je suis prêt à m'adapter aux processus et aux outils spécifiques utilisés pour mener à bien les projets de l'entreprise.",
    skills:
        {
            competentEn: ['javaScript', 'HTML5', 'CSS3', 'React', 'Angular', 'GitHub', 'Sass', 'Figma', 'jQuery', 'Linux', 'TypeScript', 'Bootstrap', 'Materialise', 'Tailwind', 'API REST'],
            familiariseAvec: ['Node.js', 'Express.js', 'PHP', 'MongoDB']
        }
    ,
    hobbies: [
        {
            label: 'le Trail',
            emoji: '🏃‍♂‍'
        },
        {
            label: "l'Astronomie",
            emoji: '🪐'
        },
        {
            label: 'le Cinéma',
            emoji: '🎥'
        },
        {
            label: 'la Cuisine',
            emoji: '🍰'
        },
        {
            label: 'Le Piano',
            emoji: '🎹'
        }
    ],
    portfolio: [ 
        {
            title: "Application web React de location immobilière",
            live: "https://manuel26190.github.io/home-react/",
            source: "https://github.com/Manuel26190/Creer-une-application-web-de-location-immobiliere-avec-React",
            image: projet6,
            description: "Création d'une application immobilère avec React, gestion des différentes routes avec react router et création d'animation CSS avec Sass"
        }, 
        {
            title: "Page d'accueil d'une agence de voyage",
            live: "https://manuel26190.github.io/Creer-la-page-d-accueil-d-une-agence-de-voyage-avec-HTML-et-CSS/", 
            source: "https://github.com/Manuel26190/Creer-la-page-d-accueil-d-une-agence-de-voyage-avec-HTML-et-CSS", 
            image: projet2,
            description: "Intégration de l'interface d'un site de recherche d'hébergement par ville, avec HTML et CSS. A partir d'une maquette Figma, en collaboration avec la CTO et l’UI designer. La page est responsive, elle s'adapte à toutes tailles d'écrans"
        },
        {
            title: "Application web portfolio d'une architecte d'intérieur avec JavaScript",
            live: "https://manuel26190.github.io/Site-web-dynamique/FrontEnd/", 
            source: "https://github.com/Manuel26190/Creer-une-page-web-dynamique-avec-javaScript",
            image: projet3,
            description: "Gestion du front-end au sein d’une équipe qui développe le site portfolio d’une architecte d’intérieur. La page est dynamique grâce à la manipulation du DOM avec javaScript, des requêtes API sont effectuées pour importer et mettre à jour les données"
        }, 
                             
        {
            title: "Application web Angular d'organisation familiale pour une répartition des tâches",
            live: "https://manuel26190.github.io/home-dog-walk/", 
            source: "https://github.com/Manuel26190/home-dog-walk", 
            image: dogProject,
            description: "Application Angular, qui permet aux différents membres de la famille une gestion des sorties de leur animal de compagnie "
        },                     
        {
            title: "Application web React d'informations importées de l'API Star Wars (SWAPI)",
            live: "https://manuel26190.github.io/home-starwars/",
            source: "https://github.com/Manuel26190/home-starwars",
            image: image9,
            description: "Developpement d'une interface avec React qui propose des informations sur les personnages de la saga Star Wars. Cette Data est importée de SWAPI qui est une API Star Wars"
        },
        {
            title: "Application web React qui gère le back-end d'une librairie en ligne",
            live: [mvg1, mvg2, mvg3, mvg4],
            source: "https://github.com/Manuel26190/Developper-le-back-end-d-un-site-de-notation-de-livres",
            image: projet7,
            description:"Avec React, à partir du code front-end, j'ai développé la partie back-end d'un site de référencement et de notation de livres, avec Node.js et Express.js"
        },
        // {
        //     title: "Debug, optimisation des performances et amélioration de l'accéssibilité d'un site portfolio",
        //     live: "https://manuel26190.github.io/Debugger-et-optimiser-un-site-de-photographe/",
        //     source: "https://github.com/Manuel26190/Debugger-et-optimiser-un-site-de-photographe",
        //     image: projet5,
        //     description:"Projet de debug du code, amélioration du référencement SEO, de la performance et de l'accessibilité du site web, grâce à l'utilisation de différents outils (navigateur, wave, Google Analytics / Search Console,...)" 
        // },
        {
            title: (
                <>
                    Blog de carnet de voyage <br /> en HTML et CSS
                </>
            ),
            live: "https://manuel26190.github.io/Blog-de-voyage/",
            source: "https://github.com/Manuel26190/Blog-de-voyage/settings/pages",
            image: image8,
            description: "Projet de création d'un blog de récit de voyage avec du code HTML et CSS"
        }
        
        
    ]
}