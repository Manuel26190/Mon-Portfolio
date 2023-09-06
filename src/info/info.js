// import self from "../img/self.png"
// import mock1 from "../img/mock1.png"
// import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
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
            title: "Project 1",
            live: "https://paytonpierce.dev", 
            source: "https://github.com/paytonjewell", 
            // image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock5
        }
    ]
}