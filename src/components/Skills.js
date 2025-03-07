// import React from "react";
// import "./Skills.css"; // Import CSS for styling

// const skillsData = [
//   { name: "HTML", percentage: 90 },
//   { name: "CSS", percentage: 90 },
//   { name: "Bootstrap", percentage: 70 },
//   { name: "JavaScript", percentage: 85 },
//   { name: "React", percentage: 75 },
//   { name: "Java", percentage: 60 },
//   { name: "SQL", percentage: 70 },
//   { name: "Spring Boot", percentage: 60 }
// ];

// const Skills = () => {
//   return (
//     <div className="skills-section" id="skills">
//       <div className="title-wrapper">
//         <h2 className="section-title">Skills</h2>
//         <div className="galaxy-line"></div>
//         <div className="particle particle-1"></div>
//         <div className="particle particle-2"></div>
//         <div className="particle particle-3"></div>
//         <div className="particle particle-4"></div>
//       </div>
      
//       <div className="skills-container">
//         {skillsData.map((skill, index) => (
//           <div key={index} className="skill">
//             <div className="skill-info">
//               <span>{skill.name}</span>
//               <span>{skill.percentage}%</span>
//             </div>
//             <div className="progress-bar">
//               <div
//                 className="progress-fill"
//                 style={{ width: `${skill.percentage}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;









import React from "react";
import "./Skills.css";
import javaIcon from "../assets/java2.webp";

// Skills data with icons from Simple Icons
const skillsData = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css3/2965F1" },
  { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Java", icon: javaIcon }, 
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" }, /* ✅ Fixed */
  { name: "Spring Boot", icon: "https://cdn.simpleicons.org/spring/6DB33F" },
];

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <div className="title-wrapper">
        <h2 className="section-title">Skills</h2>
        <div className="galaxy-line"></div>
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.icon}  className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;




