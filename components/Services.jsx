import { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('training');

  const services = {
    training: [
      { title: "Personal Training", description: "Work one-on-one with certified trainers to reach your full potential." },
      { title: "Group Classes", description: "Join group fitness classes like Yoga, Zumba, and HIIT for a fun and motivating experience." },
      { title: "Strength Training", description: "Build muscle and increase strength with our comprehensive strength training programs." }
    ],
    nutrition: [
      { title: "Nutrition Coaching", description: "Our experts help you with meal planning, supplements, and more to fuel your body properly." },
      { title: "Diet Planning", description: "Get a customized diet plan based on your calorie needs and activity level." },
      { title: "Supplement Guidance", description: "Expert advice on choosing the right supplements for your fitness goals." }
    ],
    facilities: [
      { title: "Modern Equipment", description: "State-of-the-art fitness equipment for all your workout needs." },
      { title: "Cardio Zone", description: "Dedicated area with latest cardio machines." },
      { title: "Recovery Area", description: "Specialized space for post-workout recovery and stretching." }
    ]
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="headingz">Our Services</h2>
        <div className="services-tabs">
          <button 
            className={`tab-btn ${activeTab === 'training' ? 'active' : ''}`}
            onClick={() => setActiveTab('training')}
          >
            Training
          </button>
          <button 
            className={`tab-btn ${activeTab === 'nutrition' ? 'active' : ''}`}
            onClick={() => setActiveTab('nutrition')}
          >
            Nutrition
          </button>
          <button 
            className={`tab-btn ${activeTab === 'facilities' ? 'active' : ''}`}
            onClick={() => setActiveTab('facilities')}
          >
            Facilities
          </button>
        </div>
        
        <div className="services-grid">
          {services[activeTab].map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="learn-more">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;