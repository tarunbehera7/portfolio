import React, { useEffect, useRef } from "react";

const GalaxyLine = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 50;

        class Particle {
            constructor() {
                this.x = canvas.width / 2;
                this.y = canvas.height * Math.random();
                this.size = Math.random() * 3 + 1;
                this.speedY = Math.random() * 2 + 1;
                this.color = `hsla(${Math.random() * 360}, 70%, 50%, 0.8)`;
            }

            update() {
                this.y -= this.speedY;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        }

        animate();

        // Cleanup on unmount
        return () => {
            // No cleanup needed for this simple animation
        };
    }, []);

    return <canvas ref={canvasRef} className="galaxy-line-canvas" />;
};

export default GalaxyLine;