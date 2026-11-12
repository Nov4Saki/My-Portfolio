# Adding a Project to this Portfolio

This repository uses a **data-driven static architecture**. Layout, styles, and client scripts are decoupled from project content.

> [!IMPORTANT]
> **Never modify `index.html`, `project.html`, `assets/site.css`, or `assets/site.js` when adding or editing projects.**
> You only need to touch `data/projects.js` and the `projects/<id>/` asset directory.

---

## 3-Step Protocol

### Step 1: Create the Project Asset Directory
Create a folder inside `projects/` using a lowercase, hyphenated slug:
```
projects/<project-id>/
├── cover.webp          (Required: 16:10 or 16:9 ratio, compressed WebP, <= 300 KB)
└── gallery-shot.webp   (Optional extra screenshots)
```

**Quality rules for project screenshots:**
1. **Never use full desktop/OS screenshots** showing taskbars, open personal chat clients (Discord, WhatsApp), or external browser tabs.
2. Only capture the running application, terminal output, evaluation graph, or rendered UI.
3. If capturing a CLI tool or algorithm, generate a clean CRT/terminal telemetry graphic using standard Pillow scripts.

---

### Step 2: Append One Object to `data/projects.js`
Open `data/projects.js` and append your project object to `window.PROJECTS`:

```javascript
{
    id: "my-app",                        // Unique URL slug (matches projects/<id>)
    featured: false,                     // Set true ONLY if chosen as a top flagship (max 4)
    year: 2026,
    status: "live",                      // "live" | "wip" | "archived" | "writeup"
    category: "apps",                    // "apps" | "ml" | "tools"
    tags: ["Python", "FastAPI", "Docker"],
    cover: "projects/my-app/cover.webp",
    gallery: [
        {
            src: "projects/my-app/cover.webp",
            caption: {
                en: "Detailed description of the screenshot.",
                ar: "وصف توضيحي باللغة العربية لما يظهر في الصورة."
            }
        }
    ],
    links: [
        { type: "github", label: "GitHub Repository", url: "https://github.com/..." },
        { type: "demo", label: "Live Demo", url: "https://..." }
    ],
    title: {
        en: "My App Title",
        ar: "عنوان المشروع بالعربية"
    },
    tagline: {
        en: "Punchy one-sentence description explaining what was built and why.",
        ar: "جملة تعريفية مركزة تشرح فكرة المشروع وأهميته."
    },
    stats: [
        {
            value: "99.2%",
            label: {
                en: "Verified Precision",
                ar: "دقة المعالجة المعتمدة"
            }
        }
    ],
    story: {
        problem: {
            en: "What was the technical obstacle or engineering challenge?",
            ar: "ما هي المشكلة التقنية أو التحدي الهندسي الذي واجهته؟"
        },
        approach: {
            en: "How did you solve it? Architecture, tradeoffs, and key choices.",
            ar: "كيف قمت بالحل؟ المعمارية، والمفاضلات، والقرارات الهندسية."
        },
        result: {
            en: "What was the outcome? Measured benchmarks, deployment status, and latency.",
            ar: "ما هي المخرجات والأرقام القياسية المقاسة والنتائج المحققة؟"
        }
    }
}
```

---

### Step 3: Verification Check
Run a quick local HTTP server and verify the page in both English and Arabic:
```bash
python -m http.server 8000
```
- Open `http://localhost:8000/?lang=en` and confirm:
  - The project appears in the directory table and category filters.
  - Clicking the row navigates to `project.html?id=<project-id>&lang=en`.
- Open `http://localhost:8000/?lang=ar` and confirm RTL alignment and proper Arabic text rendering.
- Test in both Dark Mode (`CRT_DARK`) and Light Mode (`LIGHT_DECK`).
