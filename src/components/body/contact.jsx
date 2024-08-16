import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-upper-row">
        <h2 className='contactintro slideright'>/contact</h2>
        <h4 className='contactsubtitle slideleft'>Get in touch or shoot an email directly on jeanrecato25@gmail.com</h4>
      </div>
      <form
        className="contact-form slideup"
        action="https://formsubmit.co/170b574dfc2c1abd337bea8d24b1416c" 
        method="POST"
      >
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />
        <button type="submit" >Send</button>
      </form>
    </div>
  );
};

export default Contact;
