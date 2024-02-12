import React, {useState} from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function HomePage() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const links = document.querySelectorAll('a');
      links.forEach(link => {
        link.style.color = isDarkMode ? '#1f1f1f' : '#f8f8f8';
      });

    return (
        <section className='homePage-section'>
            <div className='picture-div'>
                <img className='photo' src={require('../../assets/image.webp')} alt="cliché de manuel faure"/>
            </div>
            <div className='text-div'>
                <h1>Hello, je suis <span className='h1-first-name'>Manuel</span><span className="home-hand">🤚</span></h1>
                <h2>développeur Front-end</h2>
                <ul className="text-ul">
                    <li className="text-li"><span className="text-li-icon" aria-label="cheese" role="img">☕</span> Carburant : le café</li>
                    <li className="text-li"><span className="text-li-icon" aria-label="cheese" role="img">🌎</span> Réside dans la Drôme (fr)</li>
                    <li className="text-li"><span className="text-li-icon" aria-label="cheese" role="img">💼</span> Formé chez OpenClassrooms</li>
                    <a href="mailto:manuelfaure26190@gmail.com" ><li className="text-li"><span className="text-li-icon" aria-label="cheese" role="img">📧</span> manuelfaure26190@gmail.com</li></a>
                    </ul>
                <div className='social-icons'>
                    <a href="https://github.com/Manuel26190" target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/manuel-faure-6a7a96218/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://twitter.com/Manuel26Faure" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
