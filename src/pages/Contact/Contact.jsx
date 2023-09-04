import React from 'react';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mvojrgbk");
  if (state.succeeded) {
      return <p>Merci pour l'envoi !</p>;
  }
    return (
        <div className='form-div'>
            <h2>Pour me contacter</h2>            
            <form className='contact-form' onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input className='form-input' placeholder="nom"                 
                    id="name"
                    type="text" 
                    name="name"
                />
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
                <label htmlFor="email"></label>
                <input className='form-input' placeholder="email"
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea className='form-textarea' placeholder="votre message"
                    id="message"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button className='form-button' type="submit" disabled={state.submitting}>Envoyer</button>
            </form>
        </div>        
    );
}

export default Contact;


