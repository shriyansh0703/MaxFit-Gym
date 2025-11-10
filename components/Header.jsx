const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="branding">
          <img src="Gym's Logo.jpg" alt="MaxFit Gym" id="logo" />
          <h1>MaxFit Gym</h1>
        </div>
        <nav>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;