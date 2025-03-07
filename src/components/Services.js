// // import React from "react";
// // import "./Services.css";
// // //---Icons---
// // import video from "../logo/video.png";
// // import web from "../logo/web.png";
// // import monitor from "../logo/monitor.png";
// // import photo from "../logo/photo1.png"

// // const Services = () => {
// //   return (
// //     <div className="services-section" id="services">
// //       {/* Section Headings */}
// //       <h2 className="section-subtitle">Services</h2>

// //       {/* Cards Container */}
// //       <div className="services-container">
// //         <div className="service-card">
// //           <img src={monitor} alt="E-Commerce Icon" className="service-icon" />
// //           <h3>E-Commerce Website</h3>
// //           <p>
// //             Transform your business with a fully customized e-commerce website. From seamless user experiences to secure payment gateways, we create platforms that drive sales and grow your brand. Ready to go global? Let’s build your dream store today!
// //           </p>
// //         </div>
// //         <div className="service-card">
// //           <img src={web} alt="Web Design Icon" className="service-icon" />
// //           <h3>Web Designing</h3>
// //           <p>
// //             Your website is your digital storefront. Our web designing services combine stunning visuals, intuitive navigation, and responsive layouts to ensure your site stands out. Whether it’s a portfolio, blog, or online shop, we make it unforgettable.
// //           </p>
// //         </div>
// //         <div className="service-card">
// //           <img src={video} alt="Video Editing Icon" className="service-icon" />
// //           <h3>Video Editing</h3>
// //           <p>
// //             Engage your audience with professionally edited videos. From product demos to brand stories, our video editing services bring your vision to life. Perfect for e-commerce websites, social media, and marketing campaigns. Let’s make your content shine!
// //           </p>
// //         </div>
// //         <div className="service-card">
// //           <img src={photo} alt="Video Editing Icon" className="service-icon" />
// //           <h3>Creative Photo Enhancements</h3>
// //           <p>
// //             Enhance your images with expert photo editing services. Whether it's for e-commerce,
// //             social media, or branding, we deliver high-quality retouching, background removal,
// //             and color corrections to make your visuals stand out.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Services;


















// import React from "react";
// import "./Services.css";
// //---Icons---
// import video from "../logo/video.png";
// import web from "../logo/web.png";
// import monitor from "../logo/monitor.png";
// import photo from "../logo/photo1.png";

// const Services = () => {
//   return (
//     <div className="services-section" id="services">
//       {/* Section Headings */}
//       <h2 className="section-subtitle">Services</h2>
//       {/* Thread Wrapper */}
//       <div className="thread-wrapper">
//         {/* <div className="thread"></div> */}
//         {/* Cards Container */}
//         <div className="services-container">
//           <div className="service-card">
//             <img src={monitor} alt="E-Commerce Icon" className="service-icon" />
//             <h3>E-Commerce Website</h3>
//             <p>
//               Transform your business with a fully customized e-commerce website. From seamless user experiences to secure payment gateways, we create platforms that drive sales and grow your brand. Ready to go global? Let’s build your dream store today!
//             </p>
//           </div>
//           <div className="service-card">
//             <img src={web} alt="Web Design Icon" className="service-icon" />
//             <h3>Web Designing</h3>
//             <p>
//               Your website is your digital storefront. Our web designing services combine stunning visuals, intuitive navigation, and responsive layouts to ensure your site stands out. Whether it’s a portfolio, blog, or online shop, we make it unforgettable.
//             </p>
//           </div>
//           <div className="service-card">
//             <img src={video} alt="Video Editing Icon" className="service-icon" />
//             <h3>Video Editing</h3>
//             <p>
//               Engage your audience with professionally edited videos. From product demos to brand stories, our video editing services bring your vision to life. Perfect for e-commerce websites, social media, and marketing campaigns. Let’s make your content shine!
//             </p>
//           </div>
//           <div className="service-card">
//             <img src={photo} alt="Video Editing Icon" className="service-icon" />
//             <h3>Creative Photo Enhancements</h3>
//             <p>
//               Enhance your images with expert photo editing services. Whether it's for e-commerce, social media, or branding, we deliver high-quality retouching, background removal, and color corrections to make your visuals stand out.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;











import React from "react";
import "./Services.css";
//---Icons---
import video from "../logo/video.png";
import web from "../logo/web.png";
import monitor from "../logo/monitor.png";
import photo from "../logo/photo1.png";

const Services = () => {
  return (
    <div className="services-section" id="services">
      <div className="title-wrapper">
        <h2 className="section-subtitle">Services</h2>
        <div className="galaxy-line"></div>
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
      {/* Cards Container */}
      <div className="services-container">
        <div className="service-card">
          {/* <div className="galaxy-line vertical-line"></div>
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div> */}
          <img src={monitor} alt="E-Commerce Icon" className="service-icon" />
          <h3>E-Commerce Website</h3>
          <p>
            Transform your business with a fully customized e-commerce website. From seamless user experiences to secure payment gateways, we create platforms that drive sales and grow your brand. Ready to go global? Let’s build your dream store today!
          </p>
        </div>
        <div className="service-card">
          {/* <div className="galaxy-line vertical-line"></div>
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div> */}
          <img src={web} alt="Web Design Icon" className="service-icon" />
          <h3>Web Designing</h3>
          <p>
            Your website is your digital storefront. Our web designing services combine stunning visuals, intuitive navigation, and responsive layouts to ensure your site stands out. Whether it’s a portfolio, blog, or online shop, we make it unforgettable.
          </p>
        </div>
        <div className="service-card">
          {/* <div className="galaxy-line vertical-line"></div>
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div> */}
          <img src={video} alt="Video Editing Icon" className="service-icon" />
          <h3>Video Editing</h3>
          <p>
            Engage your audience with professionally edited videos. From product demos to brand stories, our video editing services bring your vision to life. Perfect for e-commerce websites, social media, and marketing campaigns. Let’s make your content shine!
          </p>
        </div>
        <div className="service-card">
          {/* <div className="galaxy-line vertical-line"></div>
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div> */}
          <img src={photo} alt="Photo Editing Icon" className="service-icon" />
          <h3>Creative Photo Enhancements</h3>
          <p>
            Enhance your images with expert photo editing services. Whether it's for e-commerce, social media, or branding, we deliver high-quality retouching, background removal, and color corrections to make your visuals stand out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;