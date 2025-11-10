const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MaxFit Gym</h3>
            <p>Your journey to fitness starts here</p>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Email: rohit74@gmail.com</p>
            <p>Phone: +91 XXXXXXXXXX</p>
            <p>Location: Preet Vihar</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MaxFit Gym | All Rights Reserved</p>
          <p>Anmol Kathuria</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;