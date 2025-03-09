import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="social-media">
        <a href="#" className="social-icon"><i class='bx bxl-github' ></i></a>
        <a href="" className="social-icon"><i class='bx bxl-linkedin' ></i></a>
        <a href="#" className="social-icon"><i class='bx bxl-instagram'></i></a>
        <a href="#" className="social-icon"><i class='bx bxl-twitter' ></i></a>
      </div>

      <p className="copyright">
        &copy; Copyright <strong>TARUN</strong>.  All Rights Reserved
      </p>
      <p className="designed-by">
        Designed by <a href="https://tb7dev.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
      </p>

      <a href="#" className="scroll-up">
        <i className="bx bx-up-arrow-alt"></i>
      </a>
    </footer>
  );
};

export default Footer;
