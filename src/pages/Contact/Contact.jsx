import React from 'react';
import '../../styles/Contact/Contact.css';

function Contact() {
    return (
        <div className='form-div'>
            <h1 className='contact-title'>Contactez-moi</h1>
            <form className='contact-form'>
                <label htmlFor="name"></label>
                <input type="text" id="name" name="name" className='form-input' placeholder="Entrez votre nom" />

                <label htmlFor="email"></label>
                <input type="email" id="email" name="email" className='form-input' placeholder="Entrez votre email" />

                <label htmlFor="message"></label>
                <textarea id="message" name="message" className='form-textarea' placeholder="Entrez votre message"></textarea>

                <button type="submit" className='form-button'>Envoyer</button>
            </form>
        </div>
    );
}

export default Contact;
