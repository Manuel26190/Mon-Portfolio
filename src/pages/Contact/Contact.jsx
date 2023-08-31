import React from 'react';
import '../../styles/Contact/Contact.css';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mvojrgbk");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
    return (
        <div className='form-div'>            
            <form className='contact-form' onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input className='form-input' placeholder="Entrez votre nom"                 
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
                <input className='form-input' placeholder="Entrez votre email"
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea className='form-textarea' placeholder="Entrez votre message"
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
            
            // <form className='contact-form'>
            //     <label htmlFor="name"></label>
            //     <input type="text" id="name" name="name" className='form-input' placeholder="Entrez votre nom" />

            //     <label htmlFor="email"></label>
            //     <input type="email" id="email" name="email" className='form-input' placeholder="Entrez votre email" />

            //     <label htmlFor="message"></label>
            //     <textarea id="message" name="message" className='form-textarea' placeholder="Entrez votre message"></textarea>

            //     <button type="submit" className='form-button'>Envoyer</button>
            // </form>
        
    );
}

export default Contact;


