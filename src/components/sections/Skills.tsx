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
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { SKILLS, SkillCategory } from "@/data/skills";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/motion";

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

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  ml: "Predictive modeling, supervised/unsupervised algorithms, ensemble techniques & feature engineering.",
  dl: "Neural network architectures, PyTorch, CNN image recognition, optimization & transfer learning.",
  nlp: "Text classification, TF-IDF vectorization, semantic similarity & language model prompts.",
  data: "Exploratory Data Analysis (EDA), statistical mining, RFM segmentation & PCA dimensionality reduction.",
  cv: "OpenCV computer vision pipelines, image processing, MediaPipe & scene classification.",
  expert: "Rule-based expert engines (Experta), Mamdani fuzzy logic, game trees & CSP solvers.",
  programming: "Core programming languages for data science, software engineering & backend systems.",
  deploy: "Model hosting, cloud deployment, Git version control, and development environments.",
};

const CATEGORY_COLORS: Record<string, { accent: string; bg: string; border: string; glow: string }> = {
  ml: { accent: "#D4AF37", bg: "rgba(212, 175, 55, 0.08)", border: "rgba(212, 175, 55, 0.25)", glow: "rgba(212, 175, 55, 0.15)" },
  dl: { accent: "#4A7FA5", bg: "rgba(74, 127, 165, 0.08)", border: "rgba(74, 127, 165, 0.25)", glow: "rgba(74, 127, 165, 0.15)" },
  nlp: { accent: "#7C6A9E", bg: "rgba(124, 106, 158, 0.08)", border: "rgba(124, 106, 158, 0.25)", glow: "rgba(124, 106, 158, 0.15)" },
  data: { accent: "#4A9B7F", bg: "rgba(74, 155, 127, 0.08)", border: "rgba(74, 155, 127, 0.25)", glow: "rgba(74, 155, 127, 0.15)" },
  cv: { accent: "#C0504D", bg: "rgba(192, 80, 77, 0.08)", border: "rgba(192, 80, 77, 0.25)", glow: "rgba(192, 80, 77, 0.15)" },
  expert: { accent: "#E09F3E", bg: "rgba(224, 159, 62, 0.08)", border: "rgba(224, 159, 62, 0.25)", glow: "rgba(224, 159, 62, 0.15)" },
  programming: { accent: "#E5C158", bg: "rgba(229, 193, 88, 0.08)", border: "rgba(229, 193, 88, 0.25)", glow: "rgba(229, 193, 88, 0.15)" },
  deploy: { accent: "#00A896", bg: "rgba(0, 168, 150, 0.08)", border: "rgba(0, 168, 150, 0.25)", glow: "rgba(0, 168, 150, 0.15)" },
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding"
      style={{
        background: "transparent",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial atmosphere */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70vw",
          height: "40vh",
          background: "radial-gradient(ellipse, rgba(212, 175, 55, 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ marginBottom: 52, textAlign: "center" }}
        >
          <motion.div
            variants={fadeUp}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
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
            <Sparkles size={13} /> Technical Competencies
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
            Skills &amp; <span className="gradient-text">Core Specializations</span>
          </motion.h2>
          
          <motion.p
            variants={fadeUp}
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              maxWidth: 580,
              margin: "0 auto 20px",
              lineHeight: 1.6,
            }}
          >
            Expertise structured across key artificial intelligence, data engineering, and machine learning domains.
          </motion.p>
          
          <motion.div variants={fadeUp} className="ink-divider" style={{ margin: "0 auto" }} />
        </motion.div>

        {/* High-Impact Category Grid (2 columns on desktop, 1 on mobile) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
          className="skills-category-grid"
        >
          {SKILLS.map((category, index) => {
            const isExpanded = expandedId === category.id;
            return (
              <SkillCategoryCard
                key={category.id}
                category={category}
                index={index}
                isExpanded={isExpanded}
                onToggle={() => toggleExpand(category.id)}
              />
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-category-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function SkillCategoryCard({
  category,
  index,
  isExpanded,
  onToggle,
}: {
  category: SkillCategory;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const Icon = ICON_MAP[category.icon] || Code2;
  const theme = CATEGORY_COLORS[category.id] || CATEGORY_COLORS.ml;
  const description = CATEGORY_DESCRIPTIONS[category.id] || "";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={scaleIn}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
      style={{
        background: "var(--card)",
        border: `1px solid ${isHovered || isExpanded ? theme.border : "var(--border)"}`,
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        position: "relative",
        boxShadow: isHovered || isExpanded
          ? `0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px ${theme.glow}`
          : "none",
        transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        transform: isHovered ? "translateY(-5px)" : "none",
        cursor: "pointer",
      }}
    >
      {/* Accent top gradient stripe */}
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent}30, transparent)`,
        }}
      />

      <div style={{ padding: "28px 28px 24px" }}>
        {/* Category Header Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: 14,
              background: theme.bg,
              border: `1px solid ${theme.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme.accent,
              boxShadow: `0 8px 20px ${theme.glow}`,
            }}
          >
            <Icon size={24} />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 12px",
              borderRadius: 999,
              background: theme.bg,
              border: `1px solid ${theme.border}`,
              color: theme.accent,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            <span>{category.skills.length} MODULES</span>
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown size={14} />
            </motion.div>
          </div>
        </div>

        {/* Title */}
        <h3
          className="font-heading"
          style={{
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "var(--text-primary)",
            margin: "0 0 8px",
            lineHeight: 1.25,
          }}
        >
          {category.label}
        </h3>

        {/* Short Domain Summary */}
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.85rem",
            lineHeight: 1.6,
            margin: "0 0 16px",
          }}
        >
          {description}
        </p>

        {/* Action prompt */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: "0.76rem",
            fontWeight: 600,
            color: theme.accent,
            letterSpacing: "0.03em",
          }}
        >
          <span>{isExpanded ? "Hide Technologies" : "View Technologies"}</span>
          <ArrowUpRight size={13} style={{ transform: isExpanded ? "rotate(90deg)" : "none", transition: "transform 0.2s" }} />
        </div>

        {/* Expandable Technologies Drawer */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 18 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ paddingTop: 16, borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", gap: 6 }}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "4px 10px",
                      background: theme.bg,
                      border: `1px solid ${theme.border}`,
                      borderRadius: 999,
                      fontSize: "0.74rem",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                    }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: theme.accent }} />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
