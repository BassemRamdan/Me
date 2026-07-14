"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Code2,
  Brain,
  Layers,
  BarChart3,
  Eye,
  Cpu,
  Rocket,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { SKILLS, SkillCategory } from "@/data/skills";
import { staggerContainer, fadeUp } from "@/lib/motion";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  Code2,
  Brain,
  Layers,
  BarChart3,
  Eye,
  Cpu,
  Rocket,
  MessageSquare,
};

const CATEGORY_COLORS: Record<string, { accent: string; bg: string; border: string }> = {
  programming: { accent: "#D4AF37", bg: "rgba(212, 175, 55, 0.08)", border: "rgba(212, 175, 55, 0.25)" },
  ml: { accent: "#E5C158", bg: "rgba(229, 193, 88, 0.08)", border: "rgba(229, 193, 88, 0.25)" },
  dl: { accent: "#4A7FA5", bg: "rgba(74, 127, 165, 0.08)", border: "rgba(74, 127, 165, 0.25)" },
  nlp: { accent: "#7C6A9E", bg: "rgba(124, 106, 158, 0.08)", border: "rgba(124, 106, 158, 0.25)" },
  data: { accent: "#4A9B7F", bg: "rgba(74, 155, 127, 0.08)", border: "rgba(74, 155, 127, 0.25)" },
  cv: { accent: "#C0504D", bg: "rgba(192, 80, 77, 0.08)", border: "rgba(192, 80, 77, 0.25)" },
  expert: { accent: "#E09F3E", bg: "rgba(224, 159, 62, 0.08)", border: "rgba(224, 159, 62, 0.25)" },
  deploy: { accent: "#00A896", bg: "rgba(0, 168, 150, 0.08)", border: "rgba(0, 168, 150, 0.25)" },
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((cat) => cat.id === activeCategory);

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding"
      style={{
        background: "var(--surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background atmosphere glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "40vh",
          background: "radial-gradient(ellipse, rgba(212, 175, 55, 0.035) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ marginBottom: 40, textAlign: "center" }}
        >
          <motion.div
            variants={fadeUp}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              borderRadius: 999,
              background: "rgba(212,175,55,0.08)",
              border: "1px solid rgba(212,175,55,0.2)",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "var(--accent)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            <Sparkles size={13} /> Technical Matrix
          </motion.div>
          
          <motion.h2
            variants={fadeUp}
            className="font-heading"
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              margin: "0 0 12px",
            }}
          >
            Capabilities &amp; <span className="gradient-text">Skills</span>
          </motion.h2>
          
          <motion.p
            variants={fadeUp}
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              maxWidth: 560,
              margin: "0 auto 20px",
              lineHeight: 1.55,
            }}
          >
            Core machine learning algorithms, deep learning architectures, data pipelines, and software tools.
          </motion.p>
          
          <motion.div variants={fadeUp} className="ink-divider" style={{ margin: "0 auto" }} />
        </motion.div>

        {/* Interactive Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            marginBottom: 36,
          }}
        >
          <button
            onClick={() => setActiveCategory("all")}
            style={{
              padding: "7px 16px",
              borderRadius: 999,
              fontSize: "0.82rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              border: activeCategory === "all" ? "1px solid var(--accent)" : "1px solid var(--border)",
              background: activeCategory === "all" ? "var(--accent)" : "rgba(255,255,255,0.03)",
              color: activeCategory === "all" ? "#0a0a0a" : "var(--text-secondary)",
            }}
          >
            All Stack
          </button>
          
          {SKILLS.map((cat) => {
            const isActive = activeCategory === cat.id;
            const theme = CATEGORY_COLORS[cat.id] || CATEGORY_COLORS.programming;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "7px 15px",
                  borderRadius: 999,
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  border: isActive ? `1px solid ${theme.accent}` : "1px solid var(--border)",
                  background: isActive ? theme.accent : "rgba(255,255,255,0.03)",
                  color: isActive ? "#0a0a0a" : "var(--text-secondary)",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Compact Skill Category Cards Grid (alignItems: start prevents empty vertical stretch) */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
          className="skills-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => (
              <SkillCardCategory key={category.id} category={category} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function SkillCardCategory({ category, index }: { category: SkillCategory; index: number }) {
  const Icon = ICON_MAP[category.icon] || Code2;
  const theme = CATEGORY_COLORS[category.id] || CATEGORY_COLORS.programming;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 16 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: "var(--card)",
        border: `1px solid ${isHovered ? theme.border : "var(--border)"}`,
        borderRadius: "var(--radius-lg)",
        padding: "24px 24px 20px",
        position: "relative",
        overflow: "hidden",
        boxShadow: isHovered
          ? `0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px ${theme.accent}20`
          : "none",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
        transform: isHovered ? "translateY(-4px)" : "none",
      }}
    >
      {/* Accent top stripe */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${theme.accent}, transparent)`,
        }}
      />

      {/* Compact Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: theme.bg,
              border: `1px solid ${theme.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme.accent,
              flexShrink: 0,
            }}
          >
            <Icon size={18} />
          </div>
          <div>
            <h3
              className="font-heading"
              style={{
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "var(--text-primary)",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {category.label}
            </h3>
            <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)", fontWeight: 500 }}>
              {category.skills.length} skills
            </span>
          </div>
        </div>
      </div>

      <div style={{ height: 1, background: "var(--border)", marginBottom: 16 }} />

      {/* Horizontal Wrap Skill Chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {category.skills.map((skill) => (
          <span
            key={skill}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              padding: "4px 11px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--border)",
              borderRadius: 999,
              fontSize: "0.78rem",
              fontWeight: 500,
              color: "var(--text-primary)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = theme.bg;
              el.style.borderColor = theme.border;
              el.style.color = theme.accent;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(255,255,255,0.03)";
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--text-primary)";
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: theme.accent,
                opacity: 0.7,
              }}
            />
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
