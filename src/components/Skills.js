import React from 'react';
import './Skills.css';

const skills = {
  "Languages": ["Java", "JavaScript", "HTML/CSS"],
  "Frameworks/Libraries": ["Spring-boot", "ReactJs"],
  "Databases": ["MySql", "Fire-store"],
  "Tools": ["Git", "Gradle", "Tekton", "SonarQube", "Fossa", "42Crunch"],
  "Cloud": ["GCP"],
  "Other": ["RestAPIs", "Terraform"]
};

function Skills() {
  return (
    <div id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category}</h3>
            <ul>
              {skills[category].map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;