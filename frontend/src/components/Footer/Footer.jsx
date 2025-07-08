import React from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import "./footer.css";
import logo from "../../assets/images/logo1.png";

const Footer = () => {
  const navigate = useNavigate(); // Add this hook

  const handleLinkClick = (e, section) => {
    e.preventDefault();
    
    // Define the routes for each section
    const routes = {
      'Home': '/',
      'About': '/about',
      'Tours': '/tours',
      'Destinations': '/destinations',
      'Gallery': '/gallery',
      'Login': '/login',
      'Register': '/register',
      'Contact': '/contact'
    };
    
    // Navigate to the corresponding route
    if (routes[section]) {
      navigate(routes[section]);
    } else {
      // Fallback for routes not defined
      navigate(`/${section.toLowerCase()}`);
    }
  };

  const handleSocialClick = (platform) => {
    // Add your social media links here
    const socialLinks = {
      instagram: "https://instagram.com/omsingh031",
      youtube: "https://youtube.com", 
      github: "https://github.com/omsingh031",
      linkedin: "https://linkedin.com/in/omsingh031"
      
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
              className="social-btn github"
              onClick={() => handleSocialClick('github')}
              aria-label="View our GitHub"
            >
              <i className="fab fa-github"></i>
            </button>
            <button 
              className="social-btn linkedin"
              onClick={() => handleSocialClick('linkedin')}
              aria-label="Connect with us on LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </button>
             <button 
              className="social-btn nstagram"
              onClick={() => handleSocialClick('instagram')}
              aria-label="Follow us on instagram"
            >
              <i className="fab fa-instagram"></i>
            </button>
            <button 
              className="social-btn outube"
              onClick={() => handleSocialClick('youtube')}
              aria-label="Subscribe to our YouTube channel"
            >
              <i className="fab fa-youtube"></i>
            </button>
            
          </div>
        </div>

        <div className="footer-section">
          <h4>Discover</h4>
          <ul className="footer-links">
            <li><button onClick={(e) => handleLinkClick(e, 'Home')} className="footer-link">Home</button></li>
            <li><button onClick={(e) => handleLinkClick(e, 'About')} className="footer-link">About</button></li>
            <li><button onClick={(e) => handleLinkClick(e, 'Tours')} className="footer-link">Tours</button></li>
            <li><button onClick={(e) => handleLinkClick(e, 'Tours')} className="footer-link">Destinations</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><button onClick={(e) => handleLinkClick(e, 'tours')} className="footer-link">Gallery</button></li>
            <li><button onClick={(e) => handleLinkClick(e, 'Login')} className="footer-link">Login</button></li>
            <li><button onClick={(e) => handleLinkClick(e, 'Register')} className="footer-link">Register</button></li>
            <li><button onClick={(e) => handleLinkClick(e, 'About')} className="footer-link">Contact</button></li>
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
                <span>Jamshedpur, India</span>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <span className="contact-label">Email</span>
                <a href="mailto:as120171.omkumar@gmail.com" className="contact-link">as120171.omkumar@gmail.com</a>
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
            Made with ❤️ driven by ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;