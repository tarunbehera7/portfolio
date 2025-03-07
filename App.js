import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import MainContent from "./src/components/MainContent";
import Projects from "./src/components/Projects";
import video from "./src/logo/new3.mp4"; // import the video
import Contacts from "./src/components/Contacts";
import Services from "./src/components/Services";
import About from "./src/components/About";
import Skills from "./src/components/Skills";
import Footer from "./src/components/Footer";
import MouseTrail from "./src/components/MouseTrail";
import ScrollProgress from "./src/components/ScrollProgres";

const AppLayout = () => {

  // useEffect(() => {
  //   // Hide or remove the loader once the app is mounted
  //   const loader = document.getElementById("loader");
  //   if (loader) {
  //     loader.style.display = "none";
  //     // Alternatively, you can remove it completely:
  //     // loader.remove();
  //   }
  // }, []);

  return (
    <div className="app">
      <ScrollProgress/>
      {/* Video background */}
      <div className="video-bg">
        <video src= {video}
          autoPlay loop
          muted playsInline
        />
      </div>
      <MouseTrail/>
      <Header />
      <section id="main-content">
        <MainContent />
      </section>
      <section id="about">
        <About />
      </section>
      {/* <section id="projects">
        <Projects />
      </section> */}
      <section id="skills">
        <Skills />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);