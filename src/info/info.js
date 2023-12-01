import projet2 from "../assets/homep2.png";
import projet3 from "../assets/homep3.png";
import projet5 from "../assets/homep5.png";
import projet6 from "../assets/homep6.png";
import projet7 from "../assets/homep7.png";
import imageP3 from "../assets/homep3.png";
import imageP6 from "../assets/homep6.png";
import imageP7 from "../assets/homep7.png";
import image8 from "../assets/homeBlogVoyage.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Manuel",
    lastName: "Faure",

    initials: "mf", 
    position: "développeur Front-end junior",    
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
   
    bio: "Avec plus de 20 ans d'expérience dans des domaines professionnels diversifiés, j'ai acquis une vaste gamme de connaissances et de compétences qui sont applicables à de nombreux métiers. Mon parcours professionnel a mis en lumière des qualités essentielles telles que l'autonomie, l'organisation et la capacité à travailler en équipe. Ma transition vers le développement web s'est déroulée de manière naturelle, alimentée par une passion profonde pour le monde du numérique. En tant que personne créative, je suis constamment prêt à relever les défis liés à la programmation et à la conception de fonctionnalités innovantes. Je trouve particulièrement gratifiant de contribuer au développement d'interfaces web, où chaque détail compte. Ma détermination, ma perspicacité et ma fiabilité sont des traits de caractère qui guident mon travail au quotidien. Ma curiosité insatiable et ma volonté constante de progresser sont des atouts essentiels. Je suis prêt à m'adapter aux processus et aux outils spécifiques utilisés pour mener à bien les projets de l'entreprise.",
    skills:
        {
            competentEn: ['javaScript', 'HTML5', 'CSS3', 'React', 'GitHub', 'Sass', 'Figma', 'jQuery'],
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
            title: "Page d'accueil d'une agence de voyage",
            live: "https://manuel26190.github.io/Creer-la-page-d-accueil-d-une-agence-de-voyage-avec-HTML-et-CSS/", 
            source: "https://github.com/Manuel26190/Creer-la-page-d-accueil-d-une-agence-de-voyage-avec-HTML-et-CSS", 
            image: projet2,
            description: "Intégration de l'interface d'un site de recherche d'hébergement par ville, avec HTML et CSS. A partir d'une maquette Figma, en collaboration avec la CTO et l’UI designer. La page est responsive, elle s'adapte à toutes tailles d'écrans"
        },
        {
            title: "Page web dynamique avec JavaScript",
            live: imageP3, 
            source: "https://github.com/Manuel26190/Creer-une-page-web-dynamique-avec-javaScript",
            image: projet3,
            description: "Projet de gestion de la partie front-end au sein d’une équipe, qui développe un site portfolio d’une architecte d’intérieur. La page est dynamique grâce à la manipulation du DOM avec java script, des requêtes API sont effectuées pour importer et mettre à jour les données"
        },
        {
            title: "Debug et optimisation d'un site portfolio",
            live: "https://manuel26190.github.io/Debugger-et-optimiser-un-site-de-photographe/",
            source: "https://github.com/Manuel26190/Debugger-et-optimiser-un-site-de-photographe",
            image: projet5,
            description:"Projet de debug du code, amélioration du référencement SEO, de la performance et de l'accessibilité du site web, grâce à l'utilisation de différents outils (navigateur, wave, Google Analytics / Search Console,...)" 
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
            description:"Toujours avec React, à partir du code front-end, j'ai développé la partie back-end d'un site de référencement et de notation de livres, avec Node.js et Express.js"
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