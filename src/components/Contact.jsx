import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>CONTACT US</h1>
            <p>We'd love to hear from you! Please fill out the form below, or reach out to us using the provided contact details.</p>
            
            <div className="contact-details">
                <p><strong>Email:</strong> contact@hkdevelopers.com</p>
                <p><strong>Phone:</strong> +1 (234) 567-8901</p>
                <p><strong>Address:</strong> 123 Developer Lane, Tech City, TC 56789</p>
            </div>
            
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
