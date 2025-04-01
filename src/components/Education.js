import React from 'react';
import './Education.css';

const educations = [
  {
    school: "St. Thomas College of Engineering and Technology(ECE) - Kolkata",
    date: "July 2017 - July 2021",
  },
  {
      school: "P.N.R H/S, Hajipur",
      date: "July 2014 - July 2016",
  },
  {
      school: "Surajdeo Memorial School",
      date: "July 2014",
  }
];

function Education() {
  return (
    <div id="education" className="education">
      <h2>Education</h2>
      {educations.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.school}</h3>
          <p className="education-date">{edu.date}</p>
          <p>{edu.cgpa}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;