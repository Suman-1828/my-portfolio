import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div id="contact" className="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out to me!</p>
      <div className="contact-details">
        <p>Email: iamsuman.0699@gmail.com</p>
        <p>Phone: +91 9507036595</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/suman-kumar-techmahindra" target="_blank" rel="noopener noreferrer">Suman Kumar -Tech Mahindra LinkedIn</a></p>
      </div>
    </div>
  );
}

export default Contact;