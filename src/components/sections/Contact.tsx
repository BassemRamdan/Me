"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowRight, Copy, CheckCheck, Send } from "lucide-react";
import { useState } from "react";
import { META } from "@/data/meta";
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from "@/lib/motion";

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(META.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      id="contact-copy-email"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 16px",
        borderRadius: 8,
        background: "var(--accent-muted)",
        border: "1px solid rgba(212,175,55,0.2)",
        color: "var(--accent)",
        cursor: "pointer",
        fontSize: "0.83rem",
        fontWeight: 500,
        transition: "all 0.2s",
        fontFamily: "Inter, sans-serif",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--accent-muted)";
      }}
      aria-label="Copy email address"
    >
      {copied ? <CheckCheck size={13} /> : <Copy size={13} />}
      {copied ? "Copied!" : "Copy Email"}
    </button>
  );
}

const CONTACT_INFO = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: META.email,
    href: `mailto:${META.email}`,
    color: "#D4AF37",
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: "github.com/BassemRamdan",
    href: META.githubUser,
    color: "#A1A1AA",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/bassem-ramadan-",
    href: META.linkedin,
    color: "#0A66C2",
  },
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    value: META.location,
    href: "https://maps.google.com/?q=Alexandria,Egypt",
    color: "#4A9B7F",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle large radial behind */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "60vh",
          background: "radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 70%)",
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
            Get in Touch
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: "0 0 16px" }}>
            Let&apos;s <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: 480, margin: "0 auto 20px" }}>
            Open to AI/ML roles, freelance projects, research collaborations, and interesting conversations about data.
          </motion.p>
          <motion.div variants={fadeUp} className="ink-divider" style={{ margin: "0 auto" }} />
        </motion.div>

        {/* Two columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="contact-grid">
          {/* Left — contact info cards */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {CONTACT_INFO.map(({ id, icon: Icon, label, value, href, color }, i) => (
              <motion.a
                key={id}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                id={`contact-${id}`}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "20px 24px",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  textDecoration: "none",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${color}40`;
                  el.style.transform = "translateX(6px)";
                  el.style.background = `var(--surface)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "none";
                  el.style.background = "var(--card)";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${color}12`,
                    border: `1px solid ${color}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: color,
                    flexShrink: 0,
                  }}
                >
                  {Icon ? <Icon size={18} /> : null}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>
                    {label}
                  </p>
                  <p style={{ color: "var(--text-primary)", fontSize: "0.9rem", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {value}
                  </p>
                </div>
                <ArrowRight size={14} style={{ color: "var(--text-secondary)", flexShrink: 0 }} />
              </motion.a>
            ))}
          </motion.div>

          {/* Right — CTA card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div style={{ height: 3, background: "linear-gradient(90deg, var(--accent), transparent)" }} />

              {/* Glow */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ padding: "40px 40px 36px" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "var(--accent-muted)",
                    border: "1px solid rgba(212,175,55,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    marginBottom: 24,
                    fontSize: "1.6rem",
                  }}
                >
                  <Send size={24} />
                </div>

                <h3 className="font-heading" style={{ fontWeight: 700, fontSize: "1.4rem", color: "var(--text-primary)", margin: "0 0 12px", lineHeight: 1.3 }}>
                  Have a project in mind?
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: 28 }}>
                  Whether you're building an AI product, need data insights, or want to explore a collaboration — I'd love to hear from you. Drop me an email and I'll get back to you promptly.
                </p>

                <div style={{ marginBottom: 20 }}>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>
                    Direct Email
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 16px",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      gap: 12,
                    }}
                  >
                    <span style={{ color: "var(--text-primary)", fontSize: "0.9rem", fontFamily: "'Courier New', monospace" }}>
                      {META.email}
                    </span>
                    <CopyEmail />
                  </div>
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                  <a
                    href={`mailto:${META.email}`}
                    id="contact-email-cta"
                    className="btn btn-primary"
                    style={{ flex: 1, justifyContent: "center", padding: "13px 20px" }}
                  >
                    <Mail size={15} />
                    Send Email
                  </a>
                  <a
                    href={META.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    id="contact-linkedin-cta"
                    className="btn btn-outline"
                    style={{ flex: 1, justifyContent: "center", padding: "13px 20px" }}
                  >
                    <Linkedin size={15} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 20px",
                background: "rgba(74,155,127,0.08)",
                border: "1px solid rgba(74,155,127,0.2)",
                borderRadius: "var(--radius-md)",
                marginTop: 16,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#4A9B7F",
                  animation: "pulse-glow 2s ease-in-out infinite",
                }}
              />
              <span style={{ color: "#4A9B7F", fontWeight: 600, fontSize: "0.85rem" }}>
                Currently available
              </span>
              <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                · Open to internships, part-time, freelance & full-time AI/ML roles
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
