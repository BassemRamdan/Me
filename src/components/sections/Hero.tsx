"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Layers,
  Sparkles,
  Award,
  Brain,
} from "lucide-react";
import { META } from "@/data/meta";
import { fadeUp, fadeIn, scaleIn, staggerContainer } from "@/lib/motion";

const TITLES = [
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Developer",
  "Intelligent Systems Specialist",
];

function TypewriterTitle() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === TITLES[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2200);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % TITLES.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  const currentText = TITLES[index];
  const displayed = currentText.substring(0, subIndex);

  return (
    <span style={{ color: "var(--accent)" }}>
      {displayed}
      <span
        aria-hidden
        style={{
          display: "inline-block",
          width: 3,
          height: "0.85em",
          background: "var(--accent)",
          marginLeft: 3,
          verticalAlign: "middle",
          borderRadius: 2,
          animation: "cursor-blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

function InkBrushBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "55vw",
          height: "55vw",
          maxWidth: 750,
          maxHeight: 750,
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.02) 50%, transparent 75%)",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "45vw",
          height: "45vw",
          maxWidth: 600,
          maxHeight: 600,
          background:
            "radial-gradient(circle, rgba(74,155,127,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(212,175,55,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
    </div>
  );
}

function FloatingParticle({
  x,
  y,
  size,
  delay,
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
}) {
  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
      transition={{
        duration: 4 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "var(--accent)",
        pointerEvents: "none",
      }}
    />
  );
}

const PARTICLES = [
  { x: 12, y: 20, size: 3, delay: 0 },
  { x: 85, y: 15, size: 2, delay: 0.8 },
  { x: 70, y: 70, size: 4, delay: 1.4 },
  { x: 25, y: 75, size: 2, delay: 2.1 },
  { x: 90, y: 55, size: 3, delay: 0.4 },
  { x: 45, y: 10, size: 2, delay: 1.8 },
  { x: 5, y: 50, size: 2, delay: 0.9 },
  { x: 60, y: 85, size: 3, delay: 1.2 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse parallax on the hero name
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 2;
      const y = ((e.clientY - top) / height - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        minHeight: "100svh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      <InkBrushBackground />

      {/* Floating particles */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {PARTICLES.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      <div
        className="container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "130px 24px 80px",
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 48,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Name, Bio & CTAs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: 680 }}
          >
            {/* Label */}
            <motion.div variants={fadeUp} style={{ marginBottom: 24 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 16px",
                  borderRadius: 999,
                  background: "rgba(212,175,55,0.08)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "var(--accent)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    animation: "pulse-glow 2s ease-in-out infinite",
                  }}
                />
                Available for Opportunities
              </div>
            </motion.div>

            {/* Name with parallax */}
            <motion.div
              variants={fadeUp}
              style={{
                transform: `translate(${mouse.x * 6}px, ${mouse.y * 4}px)`,
                transition: "transform 0.3s ease-out",
                marginBottom: 12,
              }}
            >
              <h1
                className="font-heading"
                style={{
                  fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                Bassem <span className="gradient-text">Ramadan</span>
              </h1>
            </motion.div>

            {/* Typewriter title */}
            <motion.div variants={fadeUp} style={{ marginBottom: 24 }}>
              <p
                className="font-heading"
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.7rem)",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  margin: 0,
                  minHeight: "2.2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <TypewriterTitle />
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                lineHeight: 1.75,
                maxWidth: 600,
                marginBottom: 40,
              }}
            >
              {META.shortBio}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 52 }}
            >
              <a
                href="#projects"
                id="hero-view-projects"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{ fontSize: "0.925rem", padding: "13px 26px" }}
              >
                <Layers size={16} />
                View Projects
              </a>
              <a
                href="/cv/Bassem_Ramadan_Resume.docx"
                download
                id="hero-download-cv"
                className="btn btn-outline"
                style={{ fontSize: "0.925rem", padding: "13px 26px" }}
              >
                <Download size={16} />
                Download CV
              </a>
              <a
                href="#contact"
                id="hero-contact"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{ fontSize: "0.925rem", padding: "13px 26px" }}
              >
                <Mail size={16} />
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeIn}
              style={{ display: "flex", alignItems: "center", gap: 20 }}
            >
              <span
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Connect
              </span>
              <div style={{ width: 40, height: 1, background: "var(--border)" }} />
              {[
                { icon: Github, href: META.githubUser, label: "GitHub" },
                { icon: Linkedin, href: META.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${META.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  style={{
                    color: "var(--text-secondary)",
                    transition: "color 0.2s, transform 0.2s",
                    display: "inline-flex",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: High-End Circular Portrait Avatar Frame */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="hero-avatar-wrapper"
          >
            {/* Ambient Background Radial Glow behind Avatar */}
            <div
              style={{
                position: "absolute",
                width: 380,
                height: 380,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, rgba(212, 175, 55, 0.05) 55%, transparent 75%)",
                filter: "blur(30px)",
                pointerEvents: "none",
              }}
            />

            {/* Rotating Decorative Outer Gold Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                width: 350,
                height: 350,
                borderRadius: "50%",
                border: "1.5px dashed rgba(212, 175, 55, 0.35)",
                pointerEvents: "none",
              }}
            />

            {/* Secondary Glassmorphic Ring */}
            <div
              style={{
                position: "absolute",
                width: 326,
                height: 326,
                borderRadius: "50%",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                boxShadow: "0 0 40px rgba(212, 175, 55, 0.15)",
                pointerEvents: "none",
              }}
            />

            {/* Main Portrait Circle Container */}
            <div
              style={{
                position: "relative",
                width: 300,
                height: 300,
                borderRadius: "50%",
                padding: 6,
                background: "linear-gradient(135deg, rgba(212,175,55,0.8) 0%, rgba(17,17,17,0.8) 50%, rgba(212,175,55,0.4) 100%)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 50px rgba(212,175,55,0.25)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                  background: "#0a0a0a",
                  border: "2px solid rgba(10, 10, 10, 0.9)",
                }}
              >
                {/* User Photo */}
                <img
                  src="/me.jpeg"
                  alt="Bassem Ramadan"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 20%",
                    filter: "contrast(1.04) brightness(0.98) saturate(1.05)",
                    transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                />

                {/* Dark Ink Gradient Vignette Layer on Image Bottom */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at center, transparent 40%, rgba(10,10,10,0.4) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>

            {/* Floating Stats Badge 1: NTI 96% Distinction (Top Right) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: -10,
                right: -15,
                background: "rgba(17, 17, 17, 0.88)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                borderRadius: 999,
                padding: "8px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(212,175,55,0.15)",
                zIndex: 4,
              }}
            >
              <Award size={16} style={{ color: "#D4AF37" }} />
              <div style={{ lineHeight: 1.2 }}>
                <div style={{ color: "#D4AF37", fontSize: "0.78rem", fontWeight: 700 }}>NTI ML Diploma</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.68rem" }}>96% Distinction</div>
              </div>
            </motion.div>

            {/* Floating Stats Badge 2: Intelligent Systems (Bottom Left) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{
                position: "absolute",
                bottom: 10,
                left: -25,
                background: "rgba(17, 17, 17, 0.88)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(74, 155, 127, 0.35)",
                borderRadius: 999,
                padding: "8px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(74,155,127,0.15)",
                zIndex: 4,
              }}
            >
              <Brain size={16} style={{ color: "#4A9B7F" }} />
              <div style={{ lineHeight: 1.2 }}>
                <div style={{ color: "#4A9B7F", fontSize: "0.78rem", fontWeight: 700 }}>Intelligent Systems</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.68rem" }}>FCIS Computer Science</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "var(--text-secondary)",
          fontSize: "0.72rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <ArrowDown size={14} className="animate-scroll-bounce" />
      </motion.div>

      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            justify-items: center;
          }
          .hero-avatar-wrapper {
            margin-top: 32px;
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
