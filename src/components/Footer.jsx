import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='footer' className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h4>Learnstitution</h4>
          <p>
            Learnstitution is dedicated to providing accessible education and awareness. Our team is committed to creating impactful solutions for better learning experiences.
          </p>
        </div>

        {/* Team Section */}
        <div className="footer-section team">
          <h4>Meet the Team</h4>
          <div className="team-details">
            <ul className="team-names">
              <li>Vansh (23BCE10046)</li>
              <li>Yash Sushil (23BCE10538)</li>
              <li>Anuruddh Pratap (23BCE10609)</li>
              <li>Sambit Mahapatra (23BCE10621)</li>
              <li>Abhay Kumar (23BCE10795)</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>
            Have questions? Feel free to reach out at:
            <br /><br />
            <a href="mailto:singhrishi814@gmail.com">singhrishi814@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Learnstitution {new Date().getFullYear()} | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
