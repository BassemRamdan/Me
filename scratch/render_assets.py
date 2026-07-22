import os
import subprocess
from PIL import Image

ARTIFACTS_DIR = r"C:\Users\basse\.gemini\antigravity\brain\3c5968f9-e164-411b-9c04-878ce9fc7ea7"
PUBLIC_DIR = r"c:\Me\portfolio\public"
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

# 1. Profile Picture HTML (800x800)
profile_html_content = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;600&display=swap');
  
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 800px;
    height: 800px;
    background: #0a0a0a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    overflow: hidden;
    position: relative;
  }

  /* Ambient Gold Radial Glow */
  .glow-bg {
    position: absolute;
    width: 650px;
    height: 650px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.28) 0%, rgba(212, 175, 55, 0.08) 50%, transparent 75%);
    filter: blur(40px);
  }

  /* Outer Dashed Gold Ring */
  .dashed-ring {
    position: absolute;
    width: 580px;
    height: 580px;
    border-radius: 50%;
    border: 3px dashed rgba(212, 175, 55, 0.5);
    box-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
  }

  /* Inner Glassmorphic Ring */
  .glass-ring {
    position: absolute;
    width: 530px;
    height: 530px;
    border-radius: 50%;
    border: 2px solid rgba(212, 175, 55, 0.3);
    box-shadow: 0 0 60px rgba(212, 175, 55, 0.25), inset 0 0 30px rgba(212, 175, 55, 0.15);
  }

  /* Main Portrait Frame */
  .portrait-frame {
    position: relative;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    padding: 9px;
    background: linear-gradient(135deg, rgba(212,175,55,0.95) 0%, rgba(23,23,23,0.9) 50%, rgba(212,175,55,0.6) 100%);
    box-shadow: 0 30px 90px rgba(0,0,0,0.9), 0 0 70px rgba(212,175,55,0.35);
    z-index: 2;
  }

  .portrait-inner {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background: #0a0a0a;
    border: 3px solid #0a0a0a;
  }

  .portrait-inner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
    filter: contrast(1.05) brightness(0.98) saturate(1.05);
  }

  .vignette {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 40%, rgba(10,10,10,0.35) 100%);
    pointer-events: none;
  }
</style>
</head>
<body>
  <div class="glow-bg"></div>
  <div class="dashed-ring"></div>
  <div class="glass-ring"></div>
  <div class="portrait-frame">
    <div class="portrait-inner">
      <img src="me.jpeg" alt="Bassem Ramadan">
      <div class="vignette"></div>
    </div>
  </div>
</body>
</html>
"""

# 2. LinkedIn Cover Banner HTML (1584x396)
cover_html_content = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600;700&display=swap');
  
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1584px;
    height: 396px;
    background: #0a0a0a;
    color: #f5f5f5;
    font-family: 'Inter', sans-serif;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
  }

  /* Noise overlay */
  .noise {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
  }

  /* Glowing Radial Atmosphere Orbs */
  .orb-1 {
    position: absolute;
    top: -40px;
    right: -20px;
    width: 550px;
    height: 550px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, rgba(212, 175, 55, 0.04) 55%, transparent 75%);
    filter: blur(40px);
  }

  .orb-2 {
    position: absolute;
    bottom: -80px;
    left: 20%;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(74, 155, 127, 0.12) 0%, transparent 70%);
    filter: blur(50px);
  }

  /* Grid pattern overlay */
  .grid-pattern {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(212,175,55,0.12) 1px, transparent 1px);
    background-size: 36px 36px;
    mask-image: radial-gradient(ellipse 90% 80% at 70% 50%, black 40%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 90% 80% at 70% 50%, black 40%, transparent 100%);
    opacity: 0.7;
  }

  /* Main Banner Layout Container */
  .container {
    position: relative;
    z-index: 3;
    width: 100%;
    padding-left: 360px; /* Offset to leave space for LinkedIn profile avatar overlap on bottom left */
    padding-right: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left-content {
    max-width: 780px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 5px 14px;
    border-radius: 999px;
    background: rgba(212, 175, 55, 0.08);
    border: 1px solid rgba(212, 175, 55, 0.25);
    font-size: 0.72rem;
    font-weight: 600;
    color: #d4af37;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #d4af37;
    box-shadow: 0 0 10px #d4af37;
  }

  h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.85rem;
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .gradient-text {
    background: linear-gradient(135deg, #f5f5f5 0%, #d4af37 60%, #b8960c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.12rem;
    font-weight: 600;
    color: rgba(212, 175, 55, 0.95);
    letter-spacing: 0.02em;
    margin-bottom: 16px;
  }

  .pills-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .pill {
    padding: 5px 12px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 999px;
    font-size: 0.73rem;
    font-weight: 500;
    color: #a1a1aa;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .pill-gold {
    background: rgba(212, 175, 55, 0.08);
    border-color: rgba(212, 175, 55, 0.25);
    color: #f5f5f5;
  }

  .pill-green {
    background: rgba(74, 155, 127, 0.08);
    border-color: rgba(74, 155, 127, 0.25);
    color: #f5f5f5;
  }

  /* Right Side Contact & Identity Column */
  .right-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    padding-left: 36px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.8rem;
    color: #a1a1aa;
    font-weight: 500;
  }

  .contact-icon {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: rgba(212, 175, 55, 0.1);
    border: 1px solid rgba(212, 175, 55, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d4af37;
    font-size: 0.8rem;
  }
</style>
</head>
<body>
  <div class="noise"></div>
  <div class="orb-1"></div>
  <div class="orb-2"></div>
  <div class="grid-pattern"></div>

  <div class="container">
    <div class="left-content">
      <div class="badge">
        <div class="badge-dot"></div>
        Intelligent Systems & AI Specialist
      </div>
      <h1>Bassem <span class="gradient-text">Ramadan</span></h1>
      <div class="subtitle">Data Scientist &bull; Machine Learning Engineer &bull; AI Developer</div>
      
      <div class="pills-row">
        <div class="pill pill-gold">🧠 Supervised & Unsupervised ML</div>
        <div class="pill pill-gold">⚡ Deep Learning (PyTorch & CNNs)</div>
        <div class="pill pill-green">📊 Data Mining & Analytics</div>
        <div class="pill">🎓 FCIS Computer Science</div>
      </div>
    </div>

    <div class="right-content">
      <div class="contact-item">
        <span>github.com/BassemRamdan</span>
        <div class="contact-icon">🌐</div>
      </div>
      <div class="contact-item">
        <span>linkedin.com/in/bassem-ramadan-</span>
        <div class="contact-icon">💼</div>
      </div>
      <div class="contact-item">
        <span>bassemx85@gmail.com</span>
        <div class="contact-icon">✉️</div>
      </div>
      <div class="contact-item">
        <span>Alexandria, Egypt</span>
        <div class="contact-icon">📍</div>
      </div>
    </div>
  </div>
</body>
</html>
"""

# Save HTML files
profile_html_path = os.path.join(PUBLIC_DIR, "profile_framed.html")
cover_html_path = os.path.join(PUBLIC_DIR, "linkedin_cover.html")

with open(profile_html_path, "w", encoding="utf-8") as f:
    f.write(profile_html_content)

with open(cover_html_path, "w", encoding="utf-8") as f:
    f.write(cover_html_content)

print("HTML files written successfully.")

# Output paths
profile_png_public = os.path.join(PUBLIC_DIR, "bassem_profile_framed.png")
cover_png_public = os.path.join(PUBLIC_DIR, "bassem_linkedin_cover.png")

profile_png_artifact = os.path.join(ARTIFACTS_DIR, "bassem_profile_framed.png")
cover_png_artifact = os.path.join(ARTIFACTS_DIR, "bassem_linkedin_cover.png")

# Command 1: Render Profile Picture
cmd_profile = [
    EDGE_PATH,
    "--headless",
    "--disable-gpu",
    f"--screenshot={profile_png_public}",
    "--window-size=800,800",
    f"file:///{profile_html_path}"
]

# Command 2: Render Cover Banner
cmd_cover = [
    EDGE_PATH,
    "--headless",
    "--disable-gpu",
    f"--screenshot={cover_png_public}",
    "--window-size=1584,396",
    f"file:///{cover_html_path}"
]

print("Rendering Profile Picture...")
subprocess.run(cmd_profile, check=True)

print("Rendering LinkedIn Cover Banner...")
subprocess.run(cmd_cover, check=True)

# Copy to artifacts directory
Image.open(profile_png_public).save(profile_png_artifact)
Image.open(cover_png_public).save(cover_png_artifact)

print("Both images rendered and copied to artifacts successfully!")
