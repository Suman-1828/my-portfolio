import React from 'react';
import './Home.css';
import profileImage from '../assets/profile-image.jpg'; // Import the image

function Home() {
  return (
    <div id="home" className="home">
      <div className="home-content">
        <img src={profileImage} alt="Suman Kumar" className="profile-image" />
        <h1>Suman Kumar</h1>
        <p>A Software Engineer</p>
        <div className="contact-info">
          <p>Experienced Software Engineer with 3 years in React.js, Java, and
          Spring Boot. Skilled in building scalable front-end applications, developing
          robust APIs, and optimizing performance. Google Cloud Certified with expertise
          in Redux, WebSockets, WebRTC, and microservices. Passionate about delivering
          high-quality, efficient solutions.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;