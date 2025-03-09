// import React from "react";
// import "./About.css"; // Import the CSS file
// import img from "../logo/2-removebg-preview.png"

// const About = () => {
//   return (
//     <section id="about">
//       <div className="container">
//         <h2 className="section-title">ABOUT</h2>
//         <p className="description">
//         I am a passionate full-stack developer committed to building high-quality, efficient, 
//         and scalable web applications. With a strong problem-solving mindset, 
//         I thrive on tackling challenges that enhance my skills and drive innovation. 
//         Always eager to learn and grow, I aim to contribute to impactful projects that deliver real value.
//         </p>

//         <div className="about-content">
//           <div className="about-image">
//             <img src={img} alt="Your Name" />
//           </div>

//           <div className="about-details">
//             <h3 className="about-title">Full-Stack Developer</h3>
//             <p className="about-summary">
//               I specialize in creating elegant solutions in the least amount of time. I have developed 
//               e-commerce web apps, customer web portals, and donation platforms. I am passionate about 
//               software architecture, cloud computing, and modern web technologies.
//             </p>

//             <ul className="about-info">
//               <li><strong>💠Birthday:</strong>28th Jan 2000</li>
//               <li><strong>💠Age:</strong> 24</li>
//               <li><strong>💠Website:</strong> yourwebsite.com</li>
//               <li><strong>💠Degree:</strong> Bachelor of Computer Science</li>
//               <li><strong>💠Phone:</strong> +91 6281978047</li>
//               <li><strong>💠Email:</strong> yourname@example.com</li>
//               <li><strong>💠City:</strong> Hyderabad, India</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;






import React from "react";
import "./About.css"; // Import the CSS file
import img from "../logo/blob_final.png";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">ABOUT</h2>
          <div className="galaxy-line"></div>
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>

        <p className="description">
          I am a passionate full-stack developer committed to building high-quality, efficient, 
          and scalable web applications. With a strong problem-solving mindset, I thrive on 
          tackling challenges that enhance my skills and drive innovation. Always eager to 
          learn and grow, I aim to contribute to impactful projects that deliver real value.
        </p>

        <div className="about-content">
          <div className="about-image">
            {/* Update alt text to something more descriptive */}
            <img src={img} alt="Profile illustration" />
          </div>

          <div className="about-details">
            <h3 className="about-title">Full-Stack Developer</h3>
            <p className="about-summary">
              I specialize in creating elegant solutions in the least amount of time. 
              I have developed e-commerce web apps, customer web portals, and donation platforms. 
              I am passionate about software architecture, cloud computing, and modern web technologies.
            </p>

            <ul className="about-info">
              <li>
                <span className="label"><strong>💠Birthday:</strong></span> 
                <span className="value">28th Jan 2000</span>
              </li>
              <li>
                {/* Adjust age as appropriate */}
                <span className="label"><strong>💠Age:</strong></span> 
                <span className="value">24</span>
              </li>
              <li>
                <span className="label"><strong>💠Website:</strong></span> 
                <span className="value" style={{ color: "#2f73b9", cursor:"pointer"}}>tb7dev.vercel.app</span>
              </li>
              <li>
                <span className="label"><strong>💠Degree:</strong></span> 
                <span className="value">B.Tech in Computer Science Engineering</span>
              </li>
              <li>
                <span className="label"><strong>💠Phone:</strong></span> 
                <span className="value">+91 6281978047</span>
              </li>
              <li>
                <span className="label"><strong>💠Email:</strong></span> 
                <span className="value">yourname@example.com</span>
              </li>
              <li>
                <span className="label"><strong>💠City:</strong></span> 
                <span className="value">Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

