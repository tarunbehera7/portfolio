import React from "react";
import "./MainContent.css";
import { ReactTyped } from "react-typed";
import resumePdf from "../assets/TarunBehera_Resume.pdf";

const MainContent = () => {
  //
  // const handleResumeClick = () => {
  //   window.open(resumePdf, '_self');
  // };

  return (
    <div className="card-container">
      <div className="card greeting-card">
        <div className="greeting-content">
          <span className="wave">👋</span>
          <div className="text-right">
            <p className="hello-text">Hello, I'm</p>
            <h1 className="name">Tarun Ren Behera</h1>
          </div>
        </div>
      </div>
      <div className="card">
        <h2>I'm a {"  "} {" "}
          <ReactTyped style={{ color: "#2f73b9" }}
            strings={["Fresher", "Full Stack Developer", "Web Designer", "Computer Science Engineer"]}
            typeSpeed={50} backSpeed={50}
            loop
          />
        </h2>
        <h2></h2>
      </div>
      <div className="button">
        {/* <button onClick={handleResumeClick} className="resume-link">
          Resume
        </button> */}
        <a 
          href={resumePdf} 
          target="_self"
          rel="noopener noreferrer"
          className="resume-link"
          style={{ textDecoration: 'none' }}
        >
          Resume
        </a>
      </div>
      <div className="social-media">
        <a href="#" className="social-icon"><i className='bx bxl-github' ></i></a>
        <a href="#" className="social-icon"><i className='bx bxl-linkedin' ></i></a>
        <a href="#" className="social-icon"><i className='bx bxl-instagram'></i></a>
        <a href="#" className="social-icon"><i className='bx bxl-twitter' ></i></a>
      </div>
    </div>
  );
};

export default MainContent;