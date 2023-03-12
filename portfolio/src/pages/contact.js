import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers'

export default function Contact() {
    
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [errorMessage, setErrorMessage] =useState('');

        const handleInputChange = (e) => {
            if(e.target.id==='name'){
                setName(e.target.value)
            } else if(e.target.id==='email'){
                setEmail(e.target.value)
            } else if(e.target.id==='message'){
                setMessage(e.target.value)
            }
    
        const handleMessage = (e) => {
            e.preventDefault();
    
            if (!validateEmail(email)) {
                setErrorMessage("Email is invalid.");
                return;
            } else {
                setErrorMessage("");
            }
    
            setEmail("");
            setName("");
            setMessage("");
        };
    
        return (
            <main>
                <form onSubmit={handleMessage}>
                    <input type="text" name="name" value={name} onChange={handleInputChange} placeholder="Name" />
                    <input type="text" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <textarea name="message" value={message} onChange={handleInputChange} placeholder="Please enter your message here" />
                    <button type="submit">Send</button>
                </form>
            </main>
        );
    }
}
