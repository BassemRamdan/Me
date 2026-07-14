"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { META } from "@/data/meta";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        padding: "48px 0 32px",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 40,
            alignItems: "center",
            marginBottom: 40,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  background: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#0a0a0a",
                }}
              >
                BR
              </div>
              <span
                className="font-heading"
                style={{ fontWeight: 600, fontSize: "1rem", color: "var(--text-primary)" }}
              >
                Bassem Ramadan
              </span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", maxWidth: 360, lineHeight: 1.6 }}>
              Data Scientist &amp; ML Engineer building intelligent solutions that bridge the gap between data and real-world impact.
            </p>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 12 }}>
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
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 24,
            borderTop: "1px solid var(--border)",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>
            © {year} Bassem Ramadan. All rights reserved.
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <MapPin size={12} />
            {META.location}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
