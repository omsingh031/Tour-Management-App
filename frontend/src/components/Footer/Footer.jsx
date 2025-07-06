import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo1.png";

const Footer = () => {
  const handleLinkClick = (e, section) => {
    e.preventDefault();
    // Add your navigation logic here
    console.log(`Navigate to ${section}`);
    // Example: navigate(`/${section.toLowerCase()}`);
  };

  const handleSocialClick = (platform) => {
    // Add your social media links here
    const socialLinks = {
      instagram: "https://instagram.com/yourpage",
      youtube: "https://youtube.com/yourchannel", 
      facebook: "https://facebook.com/yourpage",
      pinterest: "https://pinterest.com/yourpage"
    };
    
    if (socialLinks[platform]) {
      window.open(socialLinks[platform], '_blank');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <div className="brand-container">
            <img src={logo} alt="Travel World Logo" className="footer-logo" />
            <div className="brand-text">
              <h3>TravelWorld</h3>
              <p>Discover amazing places and create unforgettable memories with our expertly curated travel experiences.</p>
            </div>
          </div>
          
          <div className="social-links">
            <button 
              className="social-btn instagram"
              onClick={() => handleSocialClick('instagram')}
              aria-label="Follow us on Instagram"
            >
              <i className="fab fa-instagram"></i>
            </button>
            <button 
              className="social-btn youtube"
              onClick={() => handleSocialClick('youtube')}
              aria-label="Subscribe to our YouTube channel"
            >
              <i className="fab fa-youtube"></i>
            </button>
            <button 
              className="social-btn facebook"
              onClick={() => handleSocialClick('facebook')}
              aria-label="Like us on Facebook"
            >
              <i className="fab fa-facebook"></i>
            </button>
            <button 
              className="social-btn pinterest"
              onClick={() => handleSocialClick('pinterest')}
              aria-label="Follow us on Pinterest"
            >
              <i className="fab fa-pinterest"></i>
            </button>
          </div>
        </div>

        <div className="footer-section">
          <h4>Discover</h4>
          <ul className="footer-links">
            <li><button onClick={(e) => handleLinkClick(e, 'Home')} className="footer-link">Home</button></li>
            <li><button onClick={(e) => handleLinkClick(e, 'About')} className="footer-link">About</button></li>
            <li><button onClick={(e) => handleLinkClick(e, 'Tours')} className="footer-link">Tours</button></li>
            <li><button onClick={(e) => handleLinkClick(e, 'Destinations')} className="footer-link">Destinations</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><button onClick={(e) => handleLinkClick(e, 'Gallery')} className="footer-link">Gallery</button></li>
            <li><button onClick={(e) => handleLinkClick(e, 'Login')} className="footer-link">Login</button></li>
            <li><button onClick={(e) => handleLinkClick(e, 'Register')} className="footer-link">Register</button></li>
            <li><button onClick={(e) => handleLinkClick(e, 'Contact')} className="footer-link">Contact</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
                <span className="contact-label">Address</span>
                <span>ABC Sector 12, India</span>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <span className="contact-label">Email</span>
                <a href="mailto:travelWorld@gmail.com" className="contact-link">travelWorld@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-text">
                <span className="contact-label">Phone</span>
                <a href="tel:+917004918026" className="contact-link">+91 7004918026</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} TravelWorld. All rights reserved.</p>
          <p className="made-with-love">
            Made with <span className="heart">❤️</span> by <span className="author">Om Kumar Singh</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;