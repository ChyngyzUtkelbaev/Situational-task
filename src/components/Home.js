import React from 'react';
import bannerImage from '../assets/banner.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="PixelPerfect Solutions Banner" />
      <div className="banner-text">
        <h1>Welcome to PixelPerfect Solutions</h1>
        <p>We provide creative solutions for your digital needs.</p>
      </div>
      <div className="benefits">
        <h2>Why Choose Us?</h2>
        <div className="benefits-list">
          <div className="benefit">
            <h3>Quality Work</h3>
            <p>We deliver pixel-perfect designs with attention to detail.</p>
          </div>
          <div className="benefit">
            <h3>Customer Satisfaction</h3>
            <p>Our priority is to ensure our clients are happy with our services.</p>
          </div>
          <div className="benefit">
            <h3>Experienced Team</h3>
            <p>Our team consists of skilled professionals with years of experience.</p>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <h2>Client Testimonials</h2>
        <div className="testimonial">
          <p>"PixelPerfect Solutions exceeded our expectations. They were easy to work with and delivered results quickly."</p>
          <p>- Chyngyz Utkelbaev, Com20</p>
        </div>
        <div className="testimonial">
          <p>"We're thrilled with the new website PixelPerfect Solutions created for us. It perfectly represents our brand."</p>
          <p>- Samat Baigeldiev</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
