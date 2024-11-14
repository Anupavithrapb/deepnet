import React from 'react';
import '../Css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="https://www.deepnetsoft.com/images/logo.png" alt="Deep Net Soft" />
          
        </div>
        
        <div className="footer-sections">
          <div className="contact-info">
            <h4>Connect with us</h4>
            <p>📞 +91 9561834340</p>
            <p>✉️ info@deepnetsoft.com</p>
          </div>

          <div className="address-info">
            <h4>Find Us</h4>
            <p>First floor, Geo Infopark, Infopark EXPY, Kakkanad</p>
          </div>

          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
          <div className="footer-links">
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
