

import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-list">
        <div className="portfolio-item">
          <h3>Website Redesign</h3>
          <p>Check out our recent website redesign project for XYZ company.</p>
        </div>
        <div className="portfolio-item">
          <h3>Logo Design</h3>
          <p>View our creative logo design work for ABC company.</p>
        </div>
        <div className="portfolio-item">
          <h3>Digital Campaign</h3>
          <p>Explore the successful digital marketing campaign we ran for DEF company.</p>
        </div>
        <div className="portfolio-item">
          <h3>Social Media Management</h3>
          <p>See how we increased engagement and followers for GHI company through social media management.</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
