"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/motion";

const COURSES = [
  "Machine Learning",
  "Deep Learning",
  "Data Mining",
  "Computer Vision",
  "Expert Systems",
  "Artificial Intelligence",
  "Algorithms & Data Structures",
  "Database Systems",
  "Software Engineering",
  "Operating Systems",
];

const NTI_MODULES = [
  "Supervised & Unsupervised Learning",
  "Feature Engineering & Data Preprocessing",
  "Model Optimization & Evaluation Metrics",
  "Interactive Streamlit Application Deployment",
  "30 Hours Freelancing & Career Readiness",
];

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const progress = 66; // University Degree progress

  return (
    <section
      id="education"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle grid pattern background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 80%)",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ marginBottom: 56, textAlign: "center" }}
        >
          <motion.p variants={fadeUp} style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
            Academic &amp; Specialized Training
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: "0 0 16px" }}>
            Education &amp; <span className="gradient-text">Summer Training</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="ink-divider" style={{ margin: "0 auto" }} />
        </motion.div>

        {/* Dual Cards Grid: University + NTI Training */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 32, alignItems: "stretch" }} className="edu-grid">
          {/* Card 1: Alexandria National University */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            <div
              style={{
                height: "100%",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                transition: "all 0.3s",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.35)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{ height: 3, background: "linear-gradient(90deg, var(--accent), transparent)" }} />

              <div style={{ padding: "36px 36px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 24 }}>
                  <div
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: 14,
                      background: "var(--accent-muted)",
                      border: "1px solid rgba(212,175,55,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <h3 className="font-heading" style={{ fontWeight: 700, fontSize: "1.2rem", color: "var(--text-primary)", margin: "0 0 4px", lineHeight: 1.3 }}>
                      Alexandria National University
                    </h3>
                    <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.85rem", margin: "0 0 6px" }}>
                      Faculty of Computer and Information Sciences
                    </p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", margin: 0, display: "flex", flexDirection: "column", gap: 6, flexWrap: "wrap" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <BookOpen size={13} /> Intelligent Systems Program
                      </span>
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24, padding: "12px 16px", background: "rgba(255,255,255,0.02)", borderRadius: 10, border: "1px solid var(--border)" }}>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: 5 }}>
                    <MapPin size={13} style={{ color: "var(--accent)" }} /> Alexandria, Egypt
                  </span>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: 5 }}>
                    <Calendar size={13} style={{ color: "var(--accent)" }} /> Graduation: 2028
                  </span>
                </div>

                {/* Progress bar */}
                <div style={{ marginBottom: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.78rem" }}>Degree Completion</span>
                    <span style={{ color: "var(--accent)", fontSize: "0.78rem", fontWeight: 600 }}>{progress}% In Progress</span>
                  </div>
                  <div style={{ height: 6, background: "var(--surface)", borderRadius: 999, overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${progress}%` } : {}}
                      transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        height: "100%",
                        background: "linear-gradient(90deg, var(--accent), #e8c43a)",
                        borderRadius: 999,
                      }}
                    />
                  </div>
                </div>

                {/* Coursework */}
                <div style={{ marginTop: "auto" }}>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, marginBottom: 10 }}>
                    Relevant Coursework
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {COURSES.map((c) => (
                      <span key={c} className="skill-pill" style={{ fontSize: "0.75rem", padding: "4px 10px" }}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: NTI Summer Training (120 Hours Completed) */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <div
              style={{
                height: "100%",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                transition: "all 0.3s",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(74, 155, 127, 0.4)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{ height: 3, background: "linear-gradient(90deg, #4A9B7F, transparent)" }} />

              <div style={{ padding: "36px 36px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 24 }}>
                  <div
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: 14,
                      background: "rgba(74, 155, 127, 0.12)",
                      border: "1px solid rgba(74, 155, 127, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#4A9B7F",
                      flexShrink: 0,
                    }}
                  >
                    <ShieldCheck size={26} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                      <h3 className="font-heading" style={{ fontWeight: 700, fontSize: "1.2rem", color: "var(--text-primary)", margin: 0, lineHeight: 1.3 }}>
                        NTI – ITIDA Summer Training
                      </h3>
                    </div>
                    <p style={{ color: "#4A9B7F", fontWeight: 600, fontSize: "0.85rem", margin: "0 0 6px" }}>
                      National Telecommunication Institute &amp; ITIDA
                    </p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", margin: 0 }}>
                      Machine Learning Program Diploma · 120 Hours Total
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24, padding: "12px 16px", background: "rgba(74, 155, 127, 0.06)", borderRadius: 10, border: "1px solid rgba(74, 155, 127, 0.2)" }}>
                  <span style={{ color: "#4A9B7F", fontSize: "0.8rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 5 }}>
                    <Award size={14} /> Score: 96% Distinction
                  </span>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: 5 }}>
                    <Clock size={13} style={{ color: "#4A9B7F" }} /> 120 Total Hours (90 Tech / 30 Soft)
                  </span>
                </div>

                {/* 100% Completed Progress Bar */}
                <div style={{ marginBottom: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.78rem" }}>Program Status</span>
                    <span style={{ color: "#4A9B7F", fontSize: "0.78rem", fontWeight: 700 }}>100% Completed ✅</span>
                  </div>
                  <div style={{ height: 6, background: "var(--surface)", borderRadius: 999, overflow: "hidden" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: "100%" } : {}}
                      transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        height: "100%",
                        background: "linear-gradient(90deg, #4A9B7F, #68d3a7)",
                        borderRadius: 999,
                      }}
                    />
                  </div>
                </div>

                {/* Training Modules */}
                <div style={{ marginTop: "auto" }}>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, marginBottom: 10 }}>
                    Training Modules Covered
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {NTI_MODULES.map((m) => (
                      <div key={m} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <CheckCircle2 size={13} style={{ color: "#4A9B7F", flexShrink: 0 }} />
                        <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
