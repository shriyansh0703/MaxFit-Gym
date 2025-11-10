const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="headingz">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Welcome to MaxFit Gym</h3>
            <p>At MaxFit Gym, we offer state-of-the-art fitness equipment, certified trainers,
               and a supportive community to help you achieve your fitness goals. Whether you're a beginner or a
               seasoned athlete, we have everything you need to succeed!</p>
            
            <div className="features-grid">
              <div className="feature">
                <i className="fas fa-dumbbell"></i>
                <h4>Modern Equipment</h4>
                <p>Latest fitness machines and free weights</p>
              </div>
              <div className="feature">
                <i className="fas fa-user-friends"></i>
                <h4>Expert Trainers</h4>
                <p>Certified professionals to guide you</p>
              </div>
              <div className="feature">
                <i className="fas fa-clock"></i>
                <h4>Flexible Hours</h4>
                <p>Open 7 days a week</p>
              </div>
              <div className="feature">
                <i className="fas fa-heart"></i>
                <h4>Supportive Community</h4>
                <p>Friendly and motivating environment</p>
              </div>
            </div>
          </div>
          
          <div className="stats-container">
            <div className="stat">
              <h3>1000+</h3>
              <p>Happy Members</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Expert Trainers</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Weekly Classes</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;