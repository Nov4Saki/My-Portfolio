# Abdalrahman Eissa — AI & ML Portfolio

A retro CRT arcade-styled, bilingual (English & Arabic) portfolio showcasing machine learning systems, computer vision pipelines, and algorithmic problem-solving projects.

Designed as a **Deep Module**: all presentation, routing, responsive layouts, theme switching, and safe device-language auto-detection are encapsulated behind a lean data interface (`data/projects.js`).

---

## 📁 Repository Structure

```
personal_portfolio/
├── index.html              # Canonical entrypoint (Hero · Featured · All Projects · About · Contact)
├── project.html            # Case study template (renders project.html?id=<id>)
├── ADDING_A_PROJECT.md     # Authoritative protocol for future agents & contributors
├── AGENTS.md               # Quick instructions for coding agents
├── README.md               # Repository documentation
│
├── assets/                 # Shared static assets & client engine
│   ├── site.css            # CRT arcade design tokens, paper light theme, RTL overrides
│   ├── site.js             # Bilingual client engine, device detection & directory filters
│   ├── avatar.webp         # Character avatar with HC-SR04 sonar goggles
│   └── favicon.png         # Pixel art robot icon
│
├── data/
│   └── projects.js         # Single source of truth for all portfolio project metadata (EN/AR)
│
├── projects/               # Clean application screenshots and visual telemetry
│   ├── vera/               # Live VERA PDF editor rendering Arabic documents
│   ├── invoice-checker/    # Offline invoice line-item extraction dashboard
│   ├── chicken-invaders/   # YOLOv8 in-game sprite detection bounding box frame
│   ├── react-agent/        # ReAct reasoning loop & pixel robot assistant
│   ├── anfis/              # Neuro-fuzzy membership rules & pixel emotions
│   ├── seismic/            # Earthquake significance feature telemetry
│   └── cp-stress/          # ECPC diff oracle CLI
│
├── scripts/
│   └── verify.py           # Automated Playwright test suite (Dark, Light, EN, AR, Mobile)
│
└── legacy/                 # Preserved historical portfolio drafts (V1, V2.1)
```

---

## 🚀 Running Locally

Serve the directory with any standard static HTTP server:

```bash
# Python 3
python -m http.server 8000

# Or Node.js
npx serve .
```

- **English Desktop:** `http://localhost:8000/?lang=en`
- **Arabic Desktop (RTL):** `http://localhost:8000/?lang=ar`
- **VERA Case Study:** `http://localhost:8000/project.html?id=vera`

---

## 🤖 Adding New Projects

Follow the contract in [ADDING_A_PROJECT.md](ADDING_A_PROJECT.md):
1. Add screenshots inside `projects/<id>/cover.webp`.
2. Append **one** project record to `window.PROJECTS` in `data/projects.js` with bilingual (`en`/`ar`) metadata.
3. Never edit HTML templates or CSS.

---

## 🌐 Deploying to GitHub Pages

To publish to `https://nov4saki.github.io`:
```bash
git remote add origin https://github.com/Nov4Saki/Nov4Saki.github.io.git
git branch -M main
git push -u origin main
```
