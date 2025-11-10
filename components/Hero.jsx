const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h2 className="headingz animate-text">Get Fit, Stay Strong</h2>
          <p className="animate-text-delay">Join MaxFit Gym and take your fitness journey to the next level!</p>
          <a href="#signup" className="btn btn-primary pulse">Sign Up Now</a>
        </div>
        <div className="hero-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;