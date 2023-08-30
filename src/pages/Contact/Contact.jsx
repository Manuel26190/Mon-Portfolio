import React from 'react';
import '../../styles/Contact/Contact.css';

function Contact() {
    return (
        <div className='form-div'>
            <h1>Contactez-moi</h1>
            <form>
                <label htmlFor="name"></label>
                <input type="text" id="name" name="name" placeholder="Entrez votre nom" />

                <label htmlFor="email"></label>
                <input type="email" id="email" name="email" placeholder="Entrez votre email" />

                <label htmlFor="message"></label>
                <textarea id="message" name="message" placeholder="Entrez votre message"></textarea>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default Contact;
