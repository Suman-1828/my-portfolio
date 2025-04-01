import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: "Software Engineer",
    company: "Tech Mahindra, Bengaluru",
    date: "May 2024 - PRESENT",
    details: [
      "Managing Java applications, Jbbos server, Linux environment.",
      "Improved user experience and interface functionality by integrating React.js components.",
      "Oversaw SQL database operations, ensuring optimal performance and reliability.",
      "Developed a comprehensive deployment plan and documentation."
    ]
  },
  {
    title: "Software Engineer",
    company: "Tech Mahindra, Kolkata",
    date: "Jan 2023 - April 2024",
    details: [
      "Managed the development of Java solutions for the Ford Credit Project, utilizing Java, Spring Boot, and Restful services to drive efficient and robust solution delivery.",
      "Integrated React.js components to improve user experience and enhance interface functionality, thereby optimise platform usability.",
      "Managed the complete delivery of features from start to finish, ensuring smooth integration and optimal functionality across the platform.",
      "Created detailed project documentation to maintain comprehensive records, provide valuable insights and ensure project transparency.",
      "Achieved a significant 30% increase in user retention rates and a notable 20% boost in overall customer satisfaction scores through strategic initiatives and enhancements."
    ]
  },
  {
    title: "Associate Software Engineer",
    company: "Tech Mahindra, Chennai (WFH)",
    date: "Aug 2021 - Dec 2022",
    details: [
      "Enhanced project functionality and efficiency with Java, Spring Boot, and Restful services.",
      "Developed intuitive and visually appealing user interfaces using React.js, HTML, and CSS, improving user experience by 20% and increasing user engagement by 15%.",
      "Managed MySQL database operations to optimize data storage and retrieval."
    ]
  },
  {
     title: "Intern",
     company: "Tech Mahindra, Chennai (WFH)",
     date: "March 2021 - July 2021",
     details: [
        "Completed an intensive training program covering Java, MySQL, and J2EE technologies, enhancing proficiency in software development.",
        "Demonstrated adeptness in project completion and assignment delivery, applying academic concepts to real-world scenarios with precision.",
        "Acquired valuable software development expertise through rigorous training and practical application, primed for future industry endeavors."
     ]
  }
];

function Experience() {
  return (
    <div id="experience" className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
          <p className="experience-date">{exp.date}</p>
          <ul>
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;