"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Create 45 subtle gold ink particles
    const particleCount = Math.min(Math.floor(width / 30), 50);
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      alpha: number;
      vx: number;
      vy: number;
      pulseSpeed: number;
    }> = [];

    const colors = [
      "rgba(212, 175, 55, ",  // Main Gold Accent
      "rgba(232, 196, 58, ",  // Warm Gold
      "rgba(184, 150, 12, ",  // Deep Gold
      "rgba(245, 245, 245, ", // Subtle White/Silver
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.1,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.4 - 0.1, // Floating gently upwards
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting grid lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Render & update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Pulse alpha gently
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.003;
        const clampedAlpha = Math.max(0.08, Math.min(0.5, p.alpha));

        // Wrap around screen edges smoothly
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${clampedAlpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(212, 175, 55, 0.4)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {/* Orb 1: Gold Primary Glow (Top Right) */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "45vw",
          height: "45vw",
          maxWidth: 650,
          maxHeight: 650,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.07) 0%, rgba(212, 175, 55, 0.01) 60%, transparent 80%)",
          filter: "blur(60px)",
          willChange: "transform",
        }}
      />

      {/* Orb 2: Deep Slate Amber Glow (Center Left) */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.12, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          position: "absolute",
          top: "40%",
          left: "-8%",
          width: "50vw",
          height: "50vw",
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(229, 193, 88, 0.05) 0%, rgba(74, 127, 165, 0.03) 60%, transparent 80%)",
          filter: "blur(70px)",
          willChange: "transform",
        }}
      />

      {/* Orb 3: Soft Emerald Gold Glow (Bottom Right) */}
      <motion.div
        animate={{
          x: [0, 35, -45, 0],
          y: [0, -35, 50, 0],
          scale: [1, 1.1, 0.92, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "15%",
          width: "40vw",
          height: "40vw",
          maxWidth: 600,
          maxHeight: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, rgba(74, 155, 127, 0.02) 60%, transparent 80%)",
          filter: "blur(65px)",
          willChange: "transform",
        }}
      />

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.85,
        }}
      />
    </div>
  );
}
