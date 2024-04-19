// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div>
          <h3>Address</h3>
          <p>Страна: Кыргызстан, Город: Бишкек</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>chingiz.ytkelbaev123@mail.ru</p>
        </div>
        <div>
          <h3>Phone</h3>
          <p>+996 709 999 379</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
