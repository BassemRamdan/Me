"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Play, CheckCircle2, ChevronRight, Video } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/motion";

function VideoPreview({ src, accent }: { src: string; accent: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setPlaying(true);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
    }
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        background: "var(--surface)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        src={encodeURI(src)}
        muted
        loop
        playsInline
        preload="none"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        aria-label="Project preview video"
      />
      {/* Overlay */}
      {!playing && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(10,10,10,0.65)",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: `${accent}22`,
              border: `1.5px solid ${accent}55`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: accent,
            }}
          >
            <Play size={18} fill="currentColor" />
          </div>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Hover to preview
          </span>
        </div>
      )}
    </div>
  );
}

function ProjectPlaceholder({ accent }: { accent: string }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/9",
        background: `linear-gradient(135deg, var(--surface) 0%, ${accent}10 100%)`,
        borderRadius: "var(--radius-md)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${accent}20`,
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: `${accent}60`,
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: `${accent}15`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 8px",
          }}
        >
          <Video size={24} style={{ color: accent }} />
        </div>
        <span style={{ fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          Add video preview
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--surface)", position: "relative", overflow: "hidden" }}
    >
      <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ marginBottom: 64 }}
        >
          <motion.p variants={fadeUp} style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
            Featured Work
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: "0 0 16px" }}>
            Projects &amp; <span className="gradient-text">Deployments</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="ink-divider" />
        </motion.div>

        {/* Featured projects — large cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "flex", flexDirection: "column", gap: 32 }}
        >
          {featured.map((project, i) => (
            <FeaturedProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .other-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function FeaturedProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  inView: boolean;
}) {
  const accent = project.accentColor || "#D4AF37";
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: isEven ? "1fr 1fr" : "1fr 1fr",
        gap: 0,
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}
      className="featured-card"
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${accent}40`;
        el.style.boxShadow = `0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px ${accent}18`;
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "none";
        el.style.transform = "none";
      }}
    >
      {/* Accent top bar */}
      <div style={{ gridColumn: "1 / -1", height: 3, background: `linear-gradient(90deg, ${accent}, transparent)` }} />

      {/* Media side */}
      <div
        style={{
          padding: 28,
          background: `linear-gradient(135deg, var(--surface) 0%, ${accent}06 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          order: isEven ? 1 : 2,
          minHeight: 280,
        }}
        className="card-media"
      >
        {project.videoSrc ? (
          <div style={{ width: "100%" }}>
            <VideoPreview src={project.videoSrc} accent={accent} />
          </div>
        ) : (
          <ProjectPlaceholder accent={accent} />
        )}
      </div>

      {/* Text side */}
      <div
        style={{
          padding: "36px 36px 36px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          order: isEven ? 2 : 1,
        }}
        className="card-text"
      >
        <div>
          <span
            style={{
              display: "inline-block",
              padding: "3px 12px",
              borderRadius: 999,
              background: `${accent}15`,
              border: `1px solid ${accent}30`,
              fontSize: "0.72rem",
              fontWeight: 600,
              color: accent,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            {project.subtitle}
          </span>
          <h3 className="font-heading" style={{ fontWeight: 700, fontSize: "1.35rem", color: "var(--text-primary)", margin: "0 0 10px", lineHeight: 1.25 }}>
            {project.title}
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
            {project.longDescription}
          </p>
        </div>

        {/* Features */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {project.features.slice(0, 4).map((f) => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <CheckCircle2 size={13} style={{ color: accent, flexShrink: 0 }} />
              <span style={{ color: "var(--text-secondary)", fontSize: "0.83rem" }}>{f}</span>
            </div>
          ))}
        </div>

        {/* Tech */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: "auto", paddingTop: 4 }}>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ padding: "10px 20px", fontSize: "0.84rem", background: accent, color: "#0a0a0a" }}
              id={`${project.id}-live-demo`}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ padding: "10px 20px", fontSize: "0.84rem" }}
              id={`${project.id}-github`}
            >
              <Github size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CompactProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  inView: boolean;
}) {
  const accent = project.accentColor || "#D4AF37";

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: 0.3 + index * 0.1 }}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = `${accent}40`;
        el.style.boxShadow = `0 16px 40px rgba(0,0,0,0.4)`;
        el.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "none";
        el.style.transform = "none";
      }}
    >
      <div style={{ height: 3, background: `linear-gradient(90deg, ${accent}, transparent)` }} />

      {/* Media */}
      <div style={{ padding: 20, background: `linear-gradient(135deg, var(--surface) 0%, ${accent}06 100%)` }}>
        {project.videoSrc ? (
          <VideoPreview src={project.videoSrc} accent={accent} />
        ) : (
          <ProjectPlaceholder accent={accent} />
        )}
      </div>

      <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div>
          <span style={{ display: "inline-block", padding: "2px 10px", borderRadius: 999, background: `${accent}12`, border: `1px solid ${accent}25`, fontSize: "0.68rem", fontWeight: 600, color: accent, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>
            {project.subtitle}
          </span>
          <h3 className="font-heading" style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", margin: "0 0 8px" }}>
            {project.title}
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.83rem", lineHeight: 1.65, margin: 0 }}>
            {project.description}
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-tag">+{project.tech.length - 4}</span>
          )}
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: "auto", paddingTop: 4 }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: "8px 16px", fontSize: "0.8rem", flex: 1, justifyContent: "center" }} id={`${project.id}-github-compact`}>
              <Github size={13} />
              GitHub
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "0.8rem", flex: 1, justifyContent: "center", background: accent, color: "#0a0a0a" }} id={`${project.id}-demo-compact`}>
              <ExternalLink size={13} />
              Demo
            </a>
          )}
          {!project.github && !project.liveDemo && (
            <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: 4 }}>
              <ChevronRight size={13} /> Private Repository
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
