// import self from "../img/self.png"
// import mock1 from "../img/mock1.png"
// import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

export const info = {
    firstName: "Manuel",
    lastName: "Faure",
    
    initials: "mf", // the example uses first and last, but feel free to use three or more if you like.
    position: "développeur Front-end",
    // selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
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
            maitriseDe: ['javascript', 'react', 'git', 'github', 'html5', 'css3', 'sass', 'figma'],
            utilisationDe: ['nodejs', 'express']
        }
    ,
    hobbies: [
        {
            label: 'le trail',
            emoji: '📖'
        },
        {
            label: 'le théatre',
            emoji: '🎭'
        },
        {
            label: 'le cinéma',
            emoji: '🎥'
        },
        {
            label: 'la cuisine',
            emoji: '🌶'
        }
    ],
    portfolio: [ 
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
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