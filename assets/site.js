/**
 * PORTFOLIO CLIENT ENGINE
 * ============================================================================
 * Handles bilingual i18n (safe device language detection), CRT/paper theming,
 * dynamic project generation for homepage and dedicated case-study pages.
 * ============================================================================
 */

const UI_STRINGS = {
    en: {
        nav_start: "01.START",
        nav_work: "02.WORK",
        nav_about: "03.ABOUT",
        nav_contact: "04.CONTACT",
        hero_status: "SYS.ONLINE // NEW DAMIETTA, EGYPT",
        hero_name: "ABDALRAHMAN EISSA",
        hero_class: "AI / ML Engineer & Competitive Programmer",
        hero_bio: "I build real-time computer vision pipelines, deterministic LLM agents, and interpretable neuro-fuzzy systems. Backed by an algorithmic core in C++ and competitive programming.",
        hero_cta_projects: "EXPLORE WORK",
        hero_cta_github: "GITHUB",
        hero_cta_linkedin: "LINKEDIN",
        hero_gear_caption: "GEAR: HC-SR04 Sonar Goggles (Yes, I know it's ultrasonic)",
        hero_status_label: "STATUS",
        hero_status_val: "Open to AI/ML Roles · Grad July '26",
        featured_header: "FEATURED_BUILDS",
        featured_sub: "Selected deep systems with real benchmarks & production builds",
        btn_case_study: "CASE STUDY",
        btn_source: "CODE",
        btn_live: "LIVE DEMO",
        directory_header: "PROJECT_DIRECTORY",
        directory_sub: "Filter through all systems, research notebooks, and tools",
        filter_all: "ALL",
        filter_apps: "APPS & SYSTEMS",
        filter_ml: "AI & ML",
        filter_tools: "ALGORITHMS & TOOLS",
        search_placeholder: "Filter projects or tags...",
        about_header: "ABOUT & LORE",
        about_sub: "From algorithmic problem-solving to production machine learning",
        about_p1: "I started in competitive programming, spending hundreds of hours optimizing graphs, dynamic programming, and data structures in C++. As an ACPC instructor and mentor at Damietta University, I trained 30+ students for regional ECPC contests and built tools to automate edge-case debugging.",
        about_p2: "Today, I channel that mathematical and algorithmic rigor into AI engineering: building real-time vision pipelines that run on constrained hardware, transparent LLM reasoning loops without bloated wrappers, and interpretable neuro-fuzzy architectures.",
        ach_1_title: "FINALIST // ECPC 2024",
        ach_1_desc: "Ranked Top 3 on Qualification Day at the Egyptian Collegiate Programming Contest.",
        ach_2_title: "TOP 5 // UNIVERSITY CONTEST 2024",
        ach_2_desc: "Placed 5th across Damietta University's annual programming competition.",
        ach_3_title: "CONTESTANT // ECPC 2023",
        ach_3_desc: "Represented Damietta University in regional algorithmic problem solving.",
        ach_4_title: "NVIDIA CERTIFIED // 2025",
        ach_4_desc: "Building LLM Applications With Prompt Engineering.",
        contact_header: "INITIATE_CONTACT",
        contact_sub: "Looking for an AI/ML engineer or collaborating on computer vision and agentic systems? Let's connect.",
        copy_email_success: "EMAIL COPIED TO CLIPBOARD!",
        back_to_work: "← BACK TO ALL PROJECTS",
        case_problem_label: "01 // THE CHALLENGE",
        case_approach_label: "02 // SYSTEM ARCHITECTURE & APPROACH",
        case_result_label: "03 // OUTCOME & BENCHMARKS",
        case_telemetry_title: "TELEMETRY & SPECS",
        case_links_title: "EXTERNAL LINKS",
        prev_project: "← PREVIOUS",
        next_project: "NEXT →",
        not_found_title: "404 // PROJECT NOT FOUND",
        not_found_desc: "The requested project identifier does not exist in the repository."
    },
    ar: {
        nav_start: "01.البداية",
        nav_work: "02.المشاريع",
        nav_about: "03.عني",
        nav_contact: "04.تواصل",
        hero_status: "النظام متصل // دمياط الجديدة، مصر",
        hero_name: "عبدالرحمن عيسى",
        hero_class: "مهندس ذكاء اصطناعي وتعلم آلة ومبرمج تنافسي",
        hero_bio: "أبني أنظمة الرؤية الحاسوبية اللحظية، ووكلاء النماذج اللغوية <bdi>(LLM Agents)</bdi>، والأنظمة العصبية الضبابية القابلة للتفسير، بالاعتماد على أساس رياضي وخوارزمي متين باستخدام <bdi>C++</bdi> وبايثون <bdi>(Python)</bdi>.",
        hero_cta_projects: "استعراض المشاريع",
        hero_cta_github: "جيتهاب",
        hero_cta_linkedin: "لينكد إن",
        hero_gear_caption: "العتاد: نظارة سونار HC-SR04 (نعم، أعلم أنها تعمل بالموجات فوق الصوتية!)",
        hero_status_label: "الحالة",
        hero_status_val: "متاح لفرص الذكاء الاصطناعي · تخرج يوليو 2026",
        featured_header: "المشاريع_المختارة",
        featured_sub: "أنظمة برمجية وبحثية متكاملة مدعومة بالاختبارات المعمارية والأرقام الحقيقية",
        btn_case_study: "دراسة المعمارية",
        btn_source: "الكود المصدري",
        btn_live: "تجربة حية",
        directory_header: "دليل_المشاريع_الكامل",
        directory_sub: "تصفح كافة التطبيقات، والدفاتر البحثية، والأدوات البرمجية",
        filter_all: "الكل",
        filter_apps: "التطبيقات والأنظمة",
        filter_ml: "تعلم الآلة والذكاء الاصطناعي",
        filter_tools: "الخوارزميات والأدوات",
        search_placeholder: "ابحث في المشاريع أو التقنيات...",
        about_header: "الخبرات_والإنجازات",
        about_sub: "من حل المسائل الخوارزمية المعقدة إلى هندسة أنظمة الذكاء الاصطناعي",
        about_p1: "بدأت رحلتي في البرمجة التنافسية، وقضيت مئات الساعات في تحسين خوارزميات الرسوم البيانية والبرمجة الديناميكية بلغة C++. وكمدرب ومرشد لمجتمع ACPC بجامعة دمياط، قمت بتدريب أكثر من 30 طالباً لتصفيات ECPC وبناء أدوات للكشف الآلي عن الأخطاء الحدية.",
        about_p2: "اليوم أوجه تلك الدقة الرياضية والخوارزمية نحو هندسة الذكاء الاصطناعي: بناء خطوط رؤية حاسوبية تعمل بكفاءة على موارد محدودة، ووكلاء لغويين شفافين دون مكتبات معتمة، وأنظمة استنتاج عصبية ضبابية قابلة للتفسير والتدقيق.",
        ach_1_title: "متأهل للنهائيات // ECPC 2024",
        ach_1_desc: "المركز ضمن أفضل 3 فرق في يوم التصفيات بالمسابقة المصرية للبرمجة الجامعية.",
        ach_2_title: "أفضل 5 فرق // مسابقة الجامعة 2024",
        ach_2_desc: "المركز الخامس على مستوى مسابقة البرمجة السنوية بجامعة دمياط.",
        ach_3_title: "مشارك إقليمي // ECPC 2023",
        ach_3_desc: "تمثيل جامعة دمياط في المسابقة الإقليمية لحل المسائل الخوارزمية.",
        ach_4_title: "شهادة NVIDIA // 2025",
        ach_4_desc: "تطوير تطبيقات النماذج اللغوية باستخدام هندسة الأوامر المتقدمة.",
        contact_header: "تواصل_معي",
        contact_sub: "تبحث عن مهندس ذكاء اصطناعي وتعلم آلة أو تبني أنظمة رؤية ووكلاء LLM؟ تواصل معي مباشرة.",
        copy_email_success: "تم نسخ البريد الإلكتروني بنجاح!",
        back_to_work: "→ العودة لكافة المشاريع",
        case_problem_label: "01 // التحدي الهندسي",
        case_approach_label: "02 // معمارية النظام والحل",
        case_result_label: "03 // النتائج والاختبارات",
        case_telemetry_title: "المؤشرات والأرقام القياسية",
        case_links_title: "روابط خارجية",
        prev_project: "→ المشروع السابق",
        next_project: "المشروع التالي ←",
        not_found_title: "404 // المشروع غير موجود",
        not_found_desc: "المعرف المطلوب غير مسجل في قاعدة بيانات المشاريع."
    }
};

class PortfolioApp {
    constructor() {
        this.projects = window.PROJECTS || [];
        this.currentLang = this.detectLanguage();
        this.currentTheme = localStorage.getItem("novas_portfolio_theme") || "dark";
        this.activeFilter = "all";
        this.searchTerm = "";

        this.init();
    }

    /**
     * Safe language detection without redirects or cloaking:
     * 1. URL search param ?lang=ar or ?lang=en wins.
     * 2. If absent, check explicit user preference in localStorage.
     * 3. If absent, inspect device navigator languages.
     */
    detectLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get("lang");
        if (urlLang === "ar" || urlLang === "en") {
            return urlLang;
        }

        const stored = localStorage.getItem("novas_portfolio_lang");
        if (stored === "ar" || stored === "en") {
            return stored;
        }

        // Device language detection
        const navLangs = navigator.languages || [navigator.language || navigator.userLanguage || "en"];
        for (const l of navLangs) {
            if (l && l.toLowerCase().startsWith("ar")) {
                return "ar";
            }
        }
        return "en";
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.applyLanguage(this.currentLang, false);

        // Bind Navbar Controls
        const langToggle = document.getElementById("langToggle");
        if (langToggle) {
            langToggle.addEventListener("click", () => {
                const next = this.currentLang === "en" ? "ar" : "en";
                this.applyLanguage(next, true);
            });
        }

        const themeToggle = document.getElementById("themeToggle");
        if (themeToggle) {
            themeToggle.addEventListener("click", () => {
                const next = this.currentTheme === "dark" ? "light" : "dark";
                this.applyTheme(next);
            });
        }

        // Email copy
        const copyEmailBtn = document.getElementById("copyEmailBtn");
        if (copyEmailBtn) {
            copyEmailBtn.addEventListener("click", () => this.copyEmail());
        }

        // Check if on index.html or project.html
        if (document.getElementById("featuredContainer")) {
            this.initHomepage();
        } else if (document.getElementById("projectDetailContainer")) {
            this.initProjectDetail();
        }

        this.initScrollspy();
    }

    applyLanguage(lang, persist = false) {
        this.currentLang = lang;
        if (persist) {
            localStorage.setItem("novas_portfolio_lang", lang);
            // Reflect in URL without page reload
            const url = new URL(window.location);
            url.searchParams.set("lang", lang);
            window.history.replaceState({}, "", url);
        }

        const htmlEl = document.documentElement;
        htmlEl.setAttribute("lang", lang);
        htmlEl.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

        // Update Toggle Button Label
        const langLabel = document.getElementById("langLabel");
        if (langLabel) {
            langLabel.textContent = lang === "ar" ? "EN // ENGLISH" : "AR // عربي";
        }

        // Update static i18n nodes
        const strings = UI_STRINGS[lang] || UI_STRINGS.en;
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (strings[key]) {
                if (strings[key].includes("<bdi>") || strings[key].includes("<span")) {
                    el.innerHTML = strings[key];
                } else {
                    el.textContent = strings[key];
                }
            }
        });

        // Update placeholders
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (strings[key]) {
                el.setAttribute("placeholder", strings[key]);
            }
        });

        // Re-render dynamic project sections
        if (document.getElementById("featuredContainer")) {
            this.renderFeaturedProjects();
            this.renderDirectoryChips();
            this.renderDirectoryRows();
        } else if (document.getElementById("projectDetailContainer")) {
            this.renderProjectDetail();
        }
    }

    applyTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem("novas_portfolio_theme", theme);
        document.documentElement.setAttribute("data-theme", theme);

        const themeIcon = document.getElementById("themeIcon");
        const themeLabel = document.getElementById("themeLabel");
        if (themeIcon) {
            themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
        }
        if (themeLabel) {
            if (this.currentLang === "ar") {
                themeLabel.textContent = theme === "dark" ? "الوضع النهاري" : "الوضع الليلي";
            } else {
                themeLabel.textContent = theme === "dark" ? "LIGHT_DECK" : "CRT_DARK";
            }
        }
    }

    copyEmail() {
        const email = "abdalrahmaneissa05@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            const span = document.getElementById("copyEmailText");
            if (!span) return;
            const original = span.textContent;
            span.textContent = UI_STRINGS[this.currentLang].copy_email_success;
            setTimeout(() => {
                span.textContent = original;
            }, 2200);
        });
    }

    initScrollspy() {
        const sections = ["hero", "work", "about", "contact"];
        const navLinks = document.querySelectorAll(".nav-link");
        if (navLinks.length === 0) return;

        window.addEventListener("scroll", () => {
            let current = "hero";
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 150) {
                    current = id;
                }
            });
            navLinks.forEach(link => {
                link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
            });
        });
    }

    /* ======================================================================
       HOMEPAGE RENDERING
       ====================================================================== */
    initHomepage() {
        this.renderFeaturedProjects();
        this.renderDirectoryChips();
        this.renderDirectoryRows();

        const searchInput = document.getElementById("searchInput");
        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                this.searchTerm = e.target.value.toLowerCase().trim();
                this.renderDirectoryRows();
            });
        }
    }

    renderFeaturedProjects() {
        const container = document.getElementById("featuredContainer");
        if (!container) return;

        const featured = this.projects.filter(p => p.featured);
        const lang = this.currentLang;
        const strings = UI_STRINGS[lang];

        container.innerHTML = featured.map(p => {
            const title = p.title[lang] || p.title.en;
            const tagline = p.tagline[lang] || p.tagline.en;
            const firstStat = p.stats && p.stats.length > 0 ? p.stats[0] : null;
            const statVal = firstStat ? firstStat.value : "";
            const statLbl = firstStat ? (firstStat.label[lang] || firstStat.label.en) : "";

            const primaryLink = p.links && p.links.length > 0 ? p.links[0] : null;

            return `
            <article class="featured-card">
                <div class="featured-thumb">
                    <span class="featured-badge">${p.category.toUpperCase()} // ${p.year}</span>
                    <img src="./${p.cover}" alt="${title}" loading="lazy">
                </div>
                <div class="featured-body">
                    <div class="featured-meta-top">
                        <span>${p.tags.slice(0, 3).join(" · ")}</span>
                        <span class="text-green">[${p.status.toUpperCase()}]</span>
                    </div>
                    <h3 class="featured-title">${title}</h3>
                    <p class="featured-desc">${tagline}</p>
                    
                    ${firstStat ? `
                    <div class="stats-pill-row">
                        <div class="stat-pill">
                            <strong>${statVal}</strong>
                            <span>${statLbl}</span>
                        </div>
                    </div>` : ""}

                    <div class="featured-actions">
                        <a href="project.html?id=${p.id}&lang=${lang}" class="btn-cta primary">
                            <i class="fas fa-terminal"></i> <span>${strings.btn_case_study}</span>
                        </a>
                        ${primaryLink ? `
                        <a href="${primaryLink.url}" target="_blank" rel="noopener" class="btn-cta">
                            <i class="${primaryLink.type === 'github' ? 'fab fa-github' : 'fas fa-external-link-alt'}"></i>
                            <span>${primaryLink.label}</span>
                        </a>` : ""}
                    </div>
                </div>
            </article>
            `;
        }).join("");
    }

    renderDirectoryChips() {
        const container = document.getElementById("categoryChips");
        if (!container) return;

        const lang = this.currentLang;
        const strings = UI_STRINGS[lang];

        const counts = {
            all: this.projects.length,
            apps: this.projects.filter(p => p.category === "apps").length,
            ml: this.projects.filter(p => p.category === "ml").length,
            tools: this.projects.filter(p => p.category === "tools").length
        };

        const chips = [
            { id: "all", label: `${strings.filter_all} [${counts.all}]` },
            { id: "apps", label: `${strings.filter_apps} [${counts.apps}]` },
            { id: "ml", label: `${strings.filter_ml} [${counts.ml}]` },
            { id: "tools", label: `${strings.filter_tools} [${counts.tools}]` }
        ];

        container.innerHTML = chips.map(c => `
            <button type="button" class="chip-btn ${this.activeFilter === c.id ? 'active' : ''}" data-filter="${c.id}">
                ${c.label}
            </button>
        `).join("");

        container.querySelectorAll(".chip-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                this.activeFilter = btn.getAttribute("data-filter");
                this.renderDirectoryChips();
                this.renderDirectoryRows();
            });
        });
    }

    renderDirectoryRows() {
        const container = document.getElementById("directoryList");
        if (!container) return;

        const lang = this.currentLang;
        let list = this.projects;

        if (this.activeFilter !== "all") {
            list = list.filter(p => p.category === this.activeFilter);
        }

        if (this.searchTerm) {
            list = list.filter(p => {
                const title = (p.title[lang] || p.title.en).toLowerCase();
                const desc = (p.tagline[lang] || p.tagline.en).toLowerCase();
                const tags = p.tags.map(t => t.toLowerCase()).join(" ");
                return title.includes(this.searchTerm) || desc.includes(this.searchTerm) || tags.includes(this.searchTerm);
            });
        }

        if (list.length === 0) {
            container.innerHTML = `
                <div style="padding: 2.5rem; text-align: center; color: var(--text-muted); font-family: var(--font-mono);">
                    >> ZERO SYSTEMS MATCH FILTER CRITERIA
                </div>
            `;
            return;
        }

        container.innerHTML = list.map(p => {
            const title = p.title[lang] || p.title.en;
            const tagline = p.tagline[lang] || p.tagline.en;

            return `
            <a href="project.html?id=${p.id}&lang=${lang}" class="directory-row">
                <span class="row-year">${p.year}</span>
                <span class="row-title">${title}</span>
                <span class="row-tagline">${tagline}</span>
                <div class="row-tags">
                    ${p.tags.slice(0, 2).map(t => `<span class="mini-tag">${t}</span>`).join("")}
                </div>
                <span class="row-arrow">${lang === 'ar' ? '←' : '→'}</span>
            </a>
            `;
        }).join("");
    }

    /* ======================================================================
       PROJECT DETAIL PAGE RENDERING
       ====================================================================== */
    initProjectDetail() {
        this.renderProjectDetail();
    }

    renderProjectDetail() {
        const container = document.getElementById("projectDetailContainer");
        if (!container) return;

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id");
        const lang = this.currentLang;
        const strings = UI_STRINGS[lang];

        const projectIndex = this.projects.findIndex(p => p.id === id);
        if (projectIndex === -1) {
            container.innerHTML = `
                <div style="padding: 4rem 1rem; text-align: center;">
                    <h2 class="game-font text-purple" style="font-size: 2.8rem; margin-bottom: 1rem;">${strings.not_found_title}</h2>
                    <p class="text-muted" style="margin-bottom: 2rem;">${strings.not_found_desc}</p>
                    <a href="index.html?lang=${lang}" class="btn-cta primary">
                        <i class="fas fa-home"></i> <span>${strings.back_to_work}</span>
                    </a>
                </div>
            `;
            return;
        }

        const p = this.projects[projectIndex];
        const title = p.title[lang] || p.title.en;
        const tagline = p.tagline[lang] || p.tagline.en;
        const problem = p.story.problem[lang] || p.story.problem.en;
        const approach = p.story.approach[lang] || p.story.approach.en;
        const result = p.story.result[lang] || p.story.result.en;

        const prevP = projectIndex > 0 ? this.projects[projectIndex - 1] : null;
        const nextP = projectIndex < this.projects.length - 1 ? this.projects[projectIndex + 1] : null;

        container.innerHTML = `
            <div class="detail-header">
                <a href="index.html?lang=${lang}#work" class="back-link">
                    ${strings.back_to_work}
                </a>
                <h1 class="detail-title">${title}</h1>
                <p class="detail-tagline">${tagline}</p>
                
                <div class="detail-meta-strip">
                    <div class="detail-tags">
                        ${p.tags.map(t => `<span class="mini-tag" style="font-size: 0.82rem; padding: 0.25rem 0.65rem;">${t}</span>`).join("")}
                    </div>
                    <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">
                        <span>${p.year} // </span>
                        <span class="text-green">[${p.status.toUpperCase()}]</span>
                    </div>
                </div>
            </div>

            <div class="detail-hero-media">
                <img src="./${p.cover}" alt="${title}">
                <div class="media-caption">
                    <i class="fas fa-terminal text-cyan"></i>
                    <span>${title} // COVER_TELEMETRY.WEBP</span>
                </div>
            </div>

            <div class="case-study-grid">
                <div>
                    <div class="case-section">
                        <div class="case-label">${strings.case_problem_label}</div>
                        <p>${problem}</p>
                    </div>

                    <div class="case-section">
                        <div class="case-label">${strings.case_approach_label}</div>
                        <p>${approach}</p>
                    </div>

                    <div class="case-section">
                        <div class="case-label">${strings.case_result_label}</div>
                        <p>${result}</p>
                    </div>
                </div>

                <aside class="case-sidebar">
                    <h3 class="sidebar-title text-green">${strings.case_telemetry_title}</h3>
                    
                    ${p.stats && p.stats.length > 0 ? p.stats.map(s => `
                        <div class="sidebar-stat">
                            <div class="sidebar-stat-val">${s.value}</div>
                            <div class="sidebar-stat-lbl">${s.label[lang] || s.label.en}</div>
                        </div>
                    `).join("") : ""}

                    ${p.links && p.links.length > 0 ? `
                        <div style="margin-top: 2rem; border-top: 1px dashed var(--border-color); padding-top: 1.25rem;">
                            <h4 style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--neon-cyan); margin-bottom: 0.85rem;">
                                ${strings.case_links_title}
                            </h4>
                            <div style="display: flex; flex-direction: column; gap: 0.65rem;">
                                ${p.links.map(l => `
                                    <a href="${l.url}" target="_blank" rel="noopener" class="btn-cta" style="padding: 0.5rem 0.85rem; font-size: 0.82rem;">
                                        <i class="${l.type === 'github' ? 'fab fa-github' : 'fas fa-external-link-alt'}"></i>
                                        <span>${l.label}</span>
                                    </a>
                                `).join("")}
                            </div>
                        </div>
                    ` : ""}
                </aside>
            </div>

            <nav class="project-nav-bar" aria-label="Project Navigation">
                <div>
                    ${prevP ? `
                    <a href="project.html?id=${prevP.id}&lang=${lang}" class="hud-btn">
                        <span>${strings.prev_project}: ${prevP.title[lang] || prevP.title.en}</span>
                    </a>` : ""}
                </div>
                <div>
                    ${nextP ? `
                    <a href="project.html?id=${nextP.id}&lang=${lang}" class="hud-btn">
                        <span>${strings.next_project}: ${nextP.title[lang] || nextP.title.en}</span>
                    </a>` : ""}
                </div>
            </nav>
        `;
    }
}

// Instantiate on DOM ready
document.addEventListener("DOMContentLoaded", () => {
    window.app = new PortfolioApp();
});
