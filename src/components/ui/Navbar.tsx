"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "navbar-glass" : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
              }}
              aria-label="Bassem Ramadan — Home"
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#0a0a0a",
                  letterSpacing: "-0.5px",
                  flexShrink: 0,
                }}
              >
                BR
              </div>
              <span
                className="font-heading hide-mobile"
                style={{ fontWeight: 600, fontSize: "1rem", color: "var(--text-primary)" }}
              >
                Bassem Ramadan
              </span>
            </motion.a>

            {/* Desktop Links */}
            <motion.div
              className="hide-mobile"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: "flex", alignItems: "center", gap: 6 }}
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  id={`nav-${link.label.toLowerCase()}`}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "6px 14px",
                    borderRadius: 8,
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color:
                      activeSection === link.href.slice(1)
                        ? "var(--accent)"
                        : "var(--text-secondary)",
                    transition: "color 0.2s, background 0.2s",
                    fontFamily: "Inter, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== link.href.slice(1)) {
                      (e.target as HTMLElement).style.color = "var(--text-primary)";
                      (e.target as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== link.href.slice(1)) {
                      (e.target as HTMLElement).style.color = "var(--text-secondary)";
                      (e.target as HTMLElement).style.background = "transparent";
                    }
                  }}
                >
                  {link.label}
                </button>
              ))}
            </motion.div>

            {/* CTA + Mobile hamburger */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              <a
                href="/cv/Bassem_Ramadan_Resume.docx"
                download
                className="btn btn-primary hide-mobile"
                style={{ padding: "8px 18px", fontSize: "0.84rem" }}
                id="nav-download-cv"
              >
                Download CV
              </a>

              {/* Mobile hamburger */}
              <button
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  background: "none",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: 8,
                  cursor: "pointer",
                  color: "var(--text-primary)",
                  display: "none",
                }}
                className="mobile-menu-btn"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Progress bar */}
        <ProgressBar />
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "280px",
              background: "var(--surface)",
              borderLeft: "1px solid var(--border)",
              zIndex: 60,
              padding: "80px 32px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                id={`mobile-nav-${link.label.toLowerCase()}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "12px 16px",
                  borderRadius: 10,
                  fontSize: "1rem",
                  fontWeight: 500,
                  color:
                    activeSection === link.href.slice(1)
                      ? "var(--accent)"
                      : "var(--text-primary)",
                  textAlign: "left",
                  fontFamily: "Inter, sans-serif",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href="/cv/Bassem_Ramadan_Resume.docx"
              download
              className="btn btn-primary"
              style={{ marginTop: 24, textAlign: "center", justifyContent: "center" }}
            >
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              zIndex: 55,
              backdropFilter: "blur(4px)",
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 2,
        width: `${progress}%`,
        background: "linear-gradient(90deg, var(--accent), transparent)",
        transition: "width 0.05s linear",
        borderRadius: "0 2px 2px 0",
      }}
    />
  );
}
