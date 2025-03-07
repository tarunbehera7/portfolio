import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AnimatedLine.css"; // Import the CSS for styling

gsap.registerPlugin(ScrollTrigger);


const AnimatedLine = () => {

    const pathRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        const pathLength = path.getTotalLength();
        console.log("Path length:", pathLength);

        // Set initial stroke dash array and offset
        gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

        // Animate the line as the user scrolls
        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 10,
            ease: "none",
            scrollTrigger: {
                trigger: "#main-content", // Start from MainContent
                start: "top top",
                end: "#contacts", // End at Contacts
                scrub: 1,
                markers: false, // Optional: Remove markers in production
            },
        });

        // Cleanup on unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="svg-container">
            <svg
                width="100%"
                height="3002"
                viewBox="0 0 655 3002"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    ref={pathRef}
                    d="M328.877 1C273.868 225.685 435.359 276.015 415.164 434.194C394.969 592.372 134.726 718.196 178.95 808.07C223.174 897.944 470.174 1048.93 470.174 1178.35C470.174 1307.77 -33.4646 2114.84 3.13868 1449.77C39.742 784.703 512.091 2999.2 635.2 2285.6C758.31 1572 244.745 2512.08 225.331 2682.85C205.917 2853.61 283.576 3001 283.576 3001"
                    stroke="#2f73b9"
                    stroke-width="10"
                />
            </svg>
        </div>
    );
};

export default AnimatedLine;