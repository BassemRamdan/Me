"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Code2 } from "lucide-react";
import { staggerContainer, fadeUp, slideInLeft } from "@/lib/motion";

const DENTAL_FEATURES = [
  "Patient management & medical records",
  "Appointment scheduling system",
  "Billing & payment tracking",
  "Database integration (JDBC + MySQL)",
  "User-friendly Swing/JavaFX interface",
  "Role-based access control",
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      {/* Faint glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: "-15%",
          top: "50%",
          transform: "translateY(-50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
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
            Work Experience
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              margin: "0 0 16px",
            }}
          >
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="ink-divider" />
        </motion.div>

        {/* Timeline */}
        <div style={{ display: "flex", gap: 40 }} className="exp-layout">
          {/* Left — timeline line */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 6 }} className="hide-mobile">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: "#0a0a0a",
              }}
            >
              <Briefcase size={20} />
            </motion.div>
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "calc(100% - 44px)" } : {}}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
              style={{
                width: 2,
                background: "linear-gradient(to bottom, var(--accent), transparent)",
                marginTop: 8,
                borderRadius: 2,
              }}
            />
          </div>

          {/* Right — content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ flex: 1, minWidth: 0 }}
          >
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.3)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Card top accent */}
              <div style={{ height: 3, background: "linear-gradient(90deg, var(--accent), transparent)" }} />

              <div style={{ padding: "36px 40px" }}>
                {/* Role + date */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 16,
                    marginBottom: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h3
                      className="font-heading"
                      style={{
                        fontWeight: 700,
                        fontSize: "1.3rem",
                        color: "var(--text-primary)",
                        margin: "0 0 4px",
                      }}
                    >
                      Freelance Java Software Developer
                    </h3>
                    <p style={{ color: "var(--accent)", fontWeight: 500, fontSize: "0.9rem", margin: 0 }}>
                      Self-employed · Remote
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 14px",
                      borderRadius: 999,
                      background: "rgba(212,175,55,0.08)",
                      border: "1px solid rgba(212,175,55,0.2)",
                      fontSize: "0.8rem",
                      color: "var(--accent)",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    <Calendar size={12} />
                    2024 – Present
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "var(--border)", margin: "24px 0" }} />

                {/* Description */}
                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                    marginBottom: 28,
                  }}
                >
                  Developed robust desktop software solutions for small businesses using Java, delivering reliable, client-tailored applications from requirements analysis through deployment and support.
                </p>

                {/* Featured project */}
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "24px 28px",
                    marginBottom: 28,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <Code2 size={16} style={{ color: "var(--accent)" }} />
                    <h4
                      className="font-heading"
                      style={{ fontWeight: 600, fontSize: "1rem", color: "var(--text-primary)", margin: 0 }}
                    >
                      Dental Clinic Management System
                    </h4>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>
                    A complete, production-ready clinic management platform featuring full CRUD operations for patient data, scheduling, medical records, and billing — all integrated with a relational database.
                  </p>
                </div>

                {/* Feature list */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: 12,
                  }}
                >
                  {DENTAL_FEATURES.map((feature) => (
                    <div
                      key={feature}
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <CheckCircle2 size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                      <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 24 }}>
                  {["Java", "Swing / JavaFX", "JDBC", "MySQL", "OOP Design Patterns"].map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-layout { flex-direction: column !important; }
          .exp-layout > div:first-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
