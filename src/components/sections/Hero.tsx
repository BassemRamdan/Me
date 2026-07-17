"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Layers } from "lucide-react";
import { META } from "@/data/meta";
import { staggerContainer, fadeUp, fadeIn } from "@/lib/motion";

const TITLE_WORDS = ["Data Scientist", "ML Engineer", "AI Developer"];

function TypewriterTitle() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TITLE_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % TITLE_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

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
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Large faint ink-wash circle behind name */}
      <svg
        style={{ position: "absolute", top: "10%", right: "-5%", opacity: 0.04, width: "60vw", maxWidth: 800, height: "auto" }}
        viewBox="0 0 800 800"
        fill="none"
      >
        <ellipse cx="400" cy="400" rx="380" ry="360" fill="#d4af37" />
      </svg>
      {/* Subtle ink brush strokes */}
      <svg
        style={{ position: "absolute", bottom: "8%", left: "-2%", opacity: 0.03, width: "40vw", maxWidth: 600, height: "auto" }}
        viewBox="0 0 600 300"
        fill="none"
      >
        <path
          d="M0 200 Q200 80 400 180 Q500 230 600 150"
          stroke="#d4af37"
          strokeWidth="80"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {/* Grid dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(212,175,55,0.12) 1px, transparent 1px)",
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

function FloatingParticle({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 4 + Math.random() * 3, delay, repeat: Infinity, ease: "easeInOut" }}
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

      {/* Glow behind heading */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "40vh",
          background: "radial-gradient(ellipse, rgba(212,175,55,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 24px 80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: 820 }}
        >
          {/* Label */}
          <motion.div variants={fadeUp} style={{ marginBottom: 28 }}>
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
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", animation: "pulse-glow 2s ease-in-out infinite" }} />
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
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              Bassem{" "}
              <span className="gradient-text">Ramadan</span>
            </h1>
          </motion.div>

          {/* Typewriter title */}
          <motion.div variants={fadeUp} style={{ marginBottom: 28 }}>
            <p
              className="font-heading"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.9rem)",
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
              fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
              lineHeight: 1.75,
              maxWidth: 620,
              marginBottom: 48,
            }}
          >
            {META.shortBio}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 64 }}
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
            <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
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
      `}</style>
    </section>
  );
}
