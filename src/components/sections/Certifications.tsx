"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Star, X, Eye, GraduationCap, Cpu, FileCheck, ShieldCheck, CheckCircle2 } from "lucide-react";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/motion";

export type CertItem = {
  id: string;
  issuer: string;
  title: string;
  subtitle?: string;
  date?: string;
  description: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  color: string;
  imageSrc: string;
  skills: string[];
};

const CERTS: CertItem[] = [
  {
    id: "nti-ml",
    issuer: "NTI – National Telecommunication Institute",
    title: "Machine Learning Program",
    subtitle: "Summer Training Course · 120 Hours (Score: 96%)",
    date: "Aug – Sep 2025",
    description:
      "Official 120-hour intensive summer training diploma awarded by ITIDA and NTI covering Machine Learning algorithms, feature engineering, statistical modeling, and hands-on freelancing with a 96% distinction score.",
    icon: GraduationCap,
    color: "#D4AF37",
    imageSrc: "/certs/nti-ml.jpeg",
    skills: ["Machine Learning", "Python", "Technical 90hrs", "Score: 96%", "ITIDA & NTI"],
  },
  {
    id: "gen-ai",
    issuer: "Microsoft & Ministry of Youth and Sports",
    title: "Generative AI Tools CSW",
    subtitle: "Care Egypt · Tawar w Ghayar Initiative",
    date: "Dec 2025",
    description:
      "Certificate of completion from Microsoft Egypt and Care Egypt for mastering Generative AI tools, prompt engineering workflows, and practical enterprise AI applications.",
    icon: Cpu,
    color: "#0078D4",
    imageSrc: "/certs/gen-ai.jpeg",
    skills: ["Generative AI", "Microsoft Egypt", "Care Egypt", "Prompt Engineering"],
  },
  {
    id: "system-analysis",
    issuer: "Microsoft & Ministry of Youth and Sports",
    title: "System Analysis Using AI CSW",
    subtitle: "Care Egypt · Tawar w Ghayar Initiative",
    date: "Dec 2025",
    description:
      "Certificate of completion from Microsoft Egypt and Care Egypt focusing on integrating AI capabilities into system analysis, software design modeling, and enterprise workflow optimization.",
    icon: FileCheck,
    color: "#4A9B7F",
    imageSrc: "/certs/system-analysis.jpeg",
    skills: ["System Analysis", "AI System Design", "Microsoft Egypt", "Care Egypt"],
  },
  {
    id: "nvidia",
    issuer: "NVIDIA Deep Learning Institute",
    title: "Deep Learning Certificate of Competency",
    subtitle: "Getting Started with Deep Learning · Official DLI Certification",
    date: "Sep 2025",
    description:
      "NVIDIA Deep Learning Institute (DLI) official Certificate of Competency for demonstrating hands-on mastery in building, training, and optimizing deep neural networks and GPU-accelerated workflows.",
    icon: ShieldCheck,
    color: "#76B900",
    imageSrc: "/certs/deep-learning.jpeg",
    skills: ["Deep Learning", "CNNs", "PyTorch", "GPU Acceleration", "NVIDIA DLI"],
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);

  return (
    <section
      id="certifications"
      ref={ref}
      className="section-padding"
      style={{ background: "transparent", position: "relative", overflow: "hidden" }}
    >
      {/* Background Atmosphere */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(212,175,55,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <motion.p variants={fadeUp} style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
            Verified Industry Credentials
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: "0 0 16px" }}>
            Professional <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="ink-divider" style={{ margin: "0 auto" }} />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 28,
          }}
          className="cert-grid"
        >
          {CERTS.map((cert, i) => (
            <CertCard
              key={cert.id}
              cert={cert}
              index={i}
              inView={inView}
              onOpen={() => setSelectedCert(cert)}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal for inspecting official certificate document */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 10000,
              background: "rgba(0, 0, 0, 0.9)",
              backdropFilter: "blur(16px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: 920,
                width: "100%",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                boxShadow: "0 24px 90px rgba(0, 0, 0, 0.9)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  zIndex: 10,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(0, 0, 0, 0.75)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                <X size={20} />
              </button>

              {/* High Resolution Image View */}
              <div style={{ background: "#050505", padding: "20px 20px 10px", textAlign: "center" }}>
                <img
                  src={selectedCert.imageSrc}
                  alt={selectedCert.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "68vh",
                    objectFit: "contain",
                    borderRadius: 8,
                    display: "block",
                    margin: "0 auto",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
                  }}
                />
              </div>

              {/* Details bar */}
              <div style={{ padding: "24px 32px", borderTop: "1px solid var(--border)", background: "var(--card)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 8 }}>
                  <div>
                    <span style={{ color: selectedCert.color, fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                      {selectedCert.issuer}
                    </span>
                    <h3 className="font-heading" style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", margin: "4px 0 0" }}>
                      {selectedCert.title}
                    </h3>
                  </div>
                  {selectedCert.date && (
                    <span className="skill-pill" style={{ height: "fit-content", borderColor: `${selectedCert.color}40`, color: selectedCert.color }}>
                      {selectedCert.date}
                    </span>
                  )}
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                  {selectedCert.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function CertCard({
  cert,
  index,
  inView,
  onOpen,
}: {
  cert: CertItem;
  index: number;
  inView: boolean;
  onOpen: () => void;
}) {
  const IconComponent = cert.icon;

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
      onClick={onOpen}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        position: "relative",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
      className="cert-card-item"
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${cert.color}50`;
        el.style.transform = "translateY(-8px)";
        el.style.boxShadow = `0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px ${cert.color}20`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.transform = "none";
        el.style.boxShadow = "none";
      }}
    >
      {/* Top Accent Stripe */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${cert.color}, ${cert.color}30, transparent)` }} />

      {/* Official Certificate Image Banner */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 165,
          overflow: "hidden",
          background: "#080808",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <img
          src={cert.imageSrc}
          alt={cert.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            opacity: 0.85,
            transition: "transform 0.4s ease, opacity 0.4s ease",
          }}
          className="cert-img-preview"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 40%, rgba(23,23,23,0.95) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 10px",
            borderRadius: 999,
            background: "rgba(10,10,10,0.85)",
            border: `1px solid ${cert.color}40`,
            color: cert.color,
            fontSize: "0.72rem",
            fontWeight: 600,
          }}
        >
          <Eye size={12} />
          View Certificate
        </div>
      </div>

      <div style={{ padding: "24px 28px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Card Header with Professional Vector Icon */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: `${cert.color}15`,
              border: `1px solid ${cert.color}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: cert.color,
            }}
          >
            <IconComponent size={20} />
          </div>
          
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              padding: "4px 10px",
              borderRadius: 999,
              background: `${cert.color}12`,
              border: `1px solid ${cert.color}25`,
            }}
          >
            <Award size={12} style={{ color: cert.color }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: cert.color, letterSpacing: "0.05em" }}>
              VERIFIED
            </span>
          </div>
        </div>

        {/* Certificate Titles */}
        <div>
          <p style={{ color: cert.color, fontSize: "0.78rem", fontWeight: 600, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.03em" }}>
            {cert.issuer}
          </p>
          <h3
            className="font-heading"
            style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", margin: "0 0 6px", lineHeight: 1.3 }}
          >
            {cert.title}
          </h3>
          {cert.subtitle && (
            <p style={{ color: "var(--text-secondary)", fontSize: "0.78rem", fontWeight: 500, margin: "0 0 8px" }}>
              {cert.subtitle}
            </p>
          )}
          <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>
            {cert.description}
          </p>
        </div>

        {/* Skill Chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: "auto" }}>
          {cert.skills.map((s) => (
            <span
              key={s}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "2px 8px",
                background: `${cert.color}10`,
                border: `1px solid ${cert.color}20`,
                borderRadius: 999,
                fontSize: "0.68rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
