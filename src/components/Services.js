
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-info">
        <div className="service-card">
          <h3>Web Design</h3>
          <p>Beautiful and responsive websites tailored to your brand.</p>
        </div>
        <div className="service-card">
          <h3>Graphic Design</h3>
          <p>Creative designs for logos, branding, and marketing materials.</p>
        </div>
        <div className="service-card">
          <h3>Digital Marketing</h3>
          <p>Effective strategies to promote your brand and drive growth.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
