import React from "react";
import "./Projects.css";
//---Icons---
import iconSahay from "../logo/l3.png";
import iconWeather from "../logo/l1.png";
import iconNike from "../logo/l2.png";


const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      {/* Section Headings */}
      <h5 className="section-subtitle">Projects</h5>
      {/* <h2 className="section-title">MADE FOR USERS</h2> */}

      {/* Cards Container */}
      <div className="projects-container">
        <div className="project-card">
          <img src={iconNike} alt="Nike Clone Icon" className="project-icon" />
          <h3>Nike Clone</h3>
          <p>
            A responsive clone of the Nike website using HTML, CSS, and
            JavaScript. Features a dynamic product section, shopping cart
            system, and video background.
          </p>
        </div>
        <div className="project-card">
          <img src={iconWeather} alt="Weather App Icon" className="project-icon" />
          <h3>Weather App</h3>
          <p>
            A web-based weather application built using HTML, CSS, and JavaScript.
            Displays current weather and forecasts for specific cities.
          </p>
        </div>
        <div className="project-card">
          <img src={iconSahay} alt="Sahay Icon" className="project-icon" />
          <h3>Sahay</h3>
          <p>
            A digital admission platform built using MySQL &amp; PHP for data
            collection. Helps store student information for future references.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Projects;
