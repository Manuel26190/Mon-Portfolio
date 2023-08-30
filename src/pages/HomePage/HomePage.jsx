import React from 'react';
import '../../styles/HomePage/HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function HomePage() {
    return (
        <section className='homePage-section'>
            <div className='picture-div'>
                <img className='photo' src={require('../../assets/image.webp')} alt="cliché de moi" />
            </div>
            <div className='text-div'>
                <h1>Bonjour, je suis <span className='h1-first-name'>Manuel</span><span className="home-hand">🤚</span></h1>
                <h2>Je suis développeur Front-end.</h2>
                <div className='social-icons'>
                    <a href="lien_vers_github"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="lien_vers_linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="lien_vers_twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
