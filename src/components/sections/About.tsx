"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Code2, Database, Rocket, BookOpen, Award } from "lucide-react";
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from "@/lib/motion";

const STATS = [
  { label: "AI & ML Projects", value: "16+", icon: Brain },
  { label: "Certifications", value: "4", icon: Award },
  { label: "Technologies", value: "25+", icon: Code2 },
  { label: "Live Deployments", value: "7", icon: Rocket },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding"
      style={{ background: "transparent", position: "relative", overflow: "hidden" }}
    >
      {/* Faint background accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          right: "-10%",
          transform: "translateY(-50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ marginBottom: 64 }}
        >
          <motion.p
            variants={fadeUp}
            style={{
              color: "var(--accent)",
              fontWeight: 600,
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            About Me
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                margin: 0,
              }}
            >
              Turning Data into{" "}
              <span className="gradient-text">Intelligence</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="ink-divider" style={{ marginTop: 20 }} />
        </motion.div>

        {/* Content grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left — text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                padding: 40,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Gold accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 3,
                  background: "linear-gradient(90deg, var(--accent), transparent)",
                  borderRadius: "20px 20px 0 0",
                }}
              />

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "var(--accent-muted)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                  }}
                >
                  <BookOpen size={18} />
                </div>
                <h3
                  className="font-heading"
                  style={{ fontWeight: 600, fontSize: "1.1rem", color: "var(--text-primary)", margin: 0 }}
                >
                  My Journey
                </h3>
              </div>

              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 20, fontSize: "0.95rem" }}>
                I'm a <strong style={{ color: "var(--text-primary)" }}>Computer Science student</strong> at Alexandria National University, specialising in <strong style={{ color: "var(--accent)" }}>Intelligent Systems</strong> — the intersection of AI, data, and software engineering.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 20, fontSize: "0.95rem" }}>
                My passion lies in building <strong style={{ color: "var(--text-primary)" }}>end-to-end AI pipelines</strong>: from raw data wrangling and feature engineering all the way to production-ready deployments. I've shipped multiple real-world projects to Streamlit Cloud, solving genuine problems in healthcare, education, and entertainment.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                Alongside my academic work, I've taken on <strong style={{ color: "var(--text-primary)" }}>freelance software development</strong> projects — building complete desktop management systems for local businesses — proving I can translate client requirements into reliable, polished software.
              </p>
            </div>
          </motion.div>

          {/* Right — highlights */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {[
              {
                icon: Brain,
                title: "Machine & Deep Learning",
                body: "Proficient in Scikit-learn, XGBoost, LightGBM, CatBoost, and PyTorch. I build, tune, and evaluate production-grade models for classification, regression, and clustering.",
              },
              {
                icon: Database,
                title: "Data Science & Analysis",
                body: "From EDA to advanced feature engineering, dimensionality reduction (PCA), and statistical modelling. I transform messy datasets into clean, actionable insights.",
              },
              {
                icon: Code2,
                title: "Computer Vision & Expert Systems",
                body: "OpenCV, MediaPipe, CNN architectures, and Experta rule-based systems combined with fuzzy logic and genetic algorithms for intelligent decision-making.",
              },
              {
                icon: Rocket,
                title: "Deployment & Freelancing",
                body: "All my AI projects are deployed on Streamlit Cloud. I also freelance as a Java developer, shipping complete business software systems for SMEs.",
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "20px 24px",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  transition: "all 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.3)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: "var(--accent-muted)",
                    border: "1px solid rgba(212,175,55,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <Icon size={16} />
                </div>
                <div>
                  <h4
                    className="font-heading"
                    style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: 4 }}
                  >
                    {title}
                  </h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            marginTop: 64,
          }}
          className="stats-grid"
        >
          {STATS.map(({ label, value, icon: Icon }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              style={{
                padding: "28px 24px",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                textAlign: "center",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.3)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "var(--accent-muted)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  margin: "0 auto 16px",
                }}
              >
                <Icon size={20} />
              </div>
              <p
                className="font-heading"
                style={{ fontSize: "2rem", fontWeight: 700, color: "var(--accent)", margin: 0, lineHeight: 1 }}
              >
                {value}
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", marginTop: 6 }}>
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
