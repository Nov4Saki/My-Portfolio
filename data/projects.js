/**
 * PROJECTS DATA REPOSITORY
 * ============================================================================
 * Central single-source-of-truth for all projects displayed on the portfolio.
 * 
 * To add a new project, follow the contract defined in ADDING_A_PROJECT.md:
 * - Append one project object to window.PROJECTS below.
 * - Place screenshots inside projects/<id>/cover.webp (and optional gallery).
 * - Both English (en) and Arabic (ar) fields are supported.
 * ============================================================================
 */

window.PROJECTS = [
    {
        id: "vera",
        featured: true,
        year: 2026,
        status: "live",
        category: "apps",
        tags: ["JavaScript", "PDF.js", "pdf-lib", "fontkit", "Electron", "Arabic RTL"],
        cover: "projects/vera/cover.webp",
        gallery: [
            {
                src: "projects/vera/cover.webp",
                caption: {
                    en: "Bilingual document editing canvas with real-time stream operator injection and Arabic typography.",
                    ar: "لوحة تحرير المستندات ثنائية اللغة مع حقن أوامر PDF اللحظية ودعم الخطوط العربية."
                }
            },
            {
                src: "projects/vera/editor-outlines.webp",
                caption: {
                    en: "Deterministic text-clustering hitboxes with XY-Cut and baseline alignment.",
                    ar: "حدود التجميع المكاني للنصوص باستخدام خوارزميات XY-Cut والمحاذاة المترية."
                }
            }
        ],
        links: [
            { type: "github", label: "GitHub Repository", url: "https://github.com/Nov4Saki/vera-pdf-editor" },
            { type: "demo", label: "Desktop Standalone (.EXE)", url: "https://github.com/Nov4Saki/vera-pdf-editor" }
        ],
        title: {
            en: "Vera — High-Fidelity PDF Editor",
            ar: "Vera — محرر ملفات PDF عالي الدقة"
        },
        tagline: {
            en: "In-place browser-native and desktop PDF editor preserving 100% vector geometry with zero-dependency Arabic RTL reshaping.",
            ar: "محرر PDF أصيل للمتصفح وسطح المكتب يعدل النصوص والصور مباشرة مع الحفاظ التام على معمارية الملف ودعم كامل للغة العربية."
        },
        stats: [
            {
                value: "100%",
                label: {
                    en: "Vector & Metadata Fidelity",
                    ar: "حفظ تام للرسوم المتجهية"
                }
            },
            {
                value: "4-Form",
                label: {
                    en: "Zero-Dep Arabic Reshaper",
                    ar: "محلل نصوص عربية بدون مكتبات"
                }
            },
            {
                value: "0 ms",
                label: {
                    en: "Offline Air-Gapped Latency",
                    ar: "عمل محلي 100% دون خوادم"
                }
            }
        ],
        story: {
            problem: {
                en: "Conventional PDF editors rely on destructive full-page document reflow or crude whiteout masks that break fonts, scramble Arabic ligatures, and destroy delicate graphic vectors.",
                ar: "تعتمد محررات PDF التقليدية على إعادة تنسيق المستندات بشكل مدمر أو تغطية النصوص بمربعات بيضاء، مما يشوه الخطوط، ويعكس ترتيب الحروف العربية، ويدمر الرسوم المتجهية الحساسة."
            },
            approach: {
                en: "Engineered a non-destructive content-stream editor using PDF.js for rendering and pdf-lib with fontkit for binary reconstruction. Built a custom zero-dependency Arabic reshaper handling all 4 contextual cursive forms (isolated, initial, medial, final) and Lam-Alef ligatures, paired with a 2-stage XY-Cut clustering engine to detect editable text blocks without altering untouched coordinates.",
                ar: "بناء محرر غير مدمر لتدفق الأوامر البرمجية للـ PDF بالاعتماد على PDF.js للعرض وpdf-lib مع fontkit لإعادة بناء الملف الثنائي. قمت ببرمجة محلل نصوص عربية متكامل بدون أي مكتبات خارجية يتعامل مع حالات الحروف الأربع وتركيبات اللام ألف، مدمجاً مع محرك تجميع هجين يعتمد خوارزمية XY-Cut لتمييز الفقرات القابلة للتحرير بدقة."
            },
            result: {
                en: "Packaged as both a zero-setup browser app and a portable standalone Windows executable (.exe). Provides instant search across multipage documents, table grid navigation, image replacement, and authoritative dark-mode telemetry.",
                ar: "تم بناء التطبيق ليعمل كصفحة ويب فورية بدون تثبيت، وكذلك كبرنامج ويندوز محمول (.exe). يوفر بحثاً فورياً عبر المستندات متعددة الصفحات، والتنقل بين خلايا الجداول، واستبدال الصور، وواجهة تحكم ليلية دقيقة."
            }
        }
    },
    {
        id: "invoice-checker",
        featured: true,
        year: 2026,
        status: "live",
        category: "ml",
        tags: ["Python", "RapidOCR", "ONNX Runtime", "Dynamic Geometry", "SQLite", "Desktop UI"],
        cover: "projects/invoice-checker/cover.webp",
        gallery: [
            {
                src: "projects/invoice-checker/cover.webp",
                caption: {
                    en: "Interactive audit dashboard showing detected columns, confidence tiers, and math discrepancies.",
                    ar: "لوحة تدقيق تفاعلية توضح الأعمدة المستخرجة ومستويات الثقة وفروقات الحسابات."
                }
            }
        ],
        links: [
            { type: "writeup", label: "110-Company Benchmark Report", url: "#" }
        ],
        title: {
            en: "Air-Gapped Invoice Line-Item Extractor",
            ar: "مستخرج ومدقق فواتير محلي دون اتصال"
        },
        tagline: {
            en: "Deterministic OCR & geometry engine extracting tabular invoice rows with arithmetic self-verification on constrained hardware.",
            ar: "محرك استخراج ذكي لبيانات وجداول الفواتير يعمل كلياً بدون إنترنت مع التحقق الحسابي من صحة الأرقام على أجهزة محدودة الإمكانيات."
        },
        stats: [
            {
                value: "110 / 110",
                label: {
                    en: "Companies Evaluated (0 Aborts)",
                    ar: "شركة مقيمة في الاختبار المعياري"
                }
            },
            {
                value: "3.01 s",
                label: {
                    en: "Average CPU Extraction Latency",
                    ar: "متوسط وقت الاستخراج على المعالج"
                }
            },
            {
                value: "206 MB",
                label: {
                    en: "Peak RAM Usage (< 500 MB budget)",
                    ar: "أقصى استهلاك للذاكرة العشوائية"
                }
            }
        ],
        story: {
            problem: {
                en: "Enterprise accounts teams processing physical scans and messy PDF invoices on air-gapped computers require high-accuracy line-item extraction without leaking financial data to external cloud APIs or requiring expensive GPUs.",
                ar: "تحتاج فرق المحاسبة والمالية التي تتعامل مع فواتير ورقية وإلكترونية معقدة على أجهزة معزولة عن الإنترنت إلى استخراج دقيق لبنود الفواتير دون إرسال البيانات إلى السحابة وبدون الحاجة لبطاقات رسومية باهظة."
            },
            approach: {
                en: "Designed a local CPU-first extraction pipeline combining RapidOCR ONNX inference with dynamic coordinate clustering. Built an arithmetic hypothesis resolver that dynamically tests candidates against Net (Qty x Price) and Gross (Qty x Price x (1 + Tax)) formulas, ranking extractions into Green (>=90%), Yellow (60-89%), and Red (<60%) confidence tiers.",
                ar: "تصميم خط معالجة محلي يعمل بالكامل على المعالج (CPU) يدمج محرك RapidOCR عبر ONNX مع خوارزميات التجميع الهندسي للإحداثيات. تم بناء نظام اختبار فرضيات حسابي يفحص التوافق بين الكمية والسعر والإجمالي والضريبة تلقائياً لتصنيف الفواتير إلى درجات ثقة خضراء وصفراء وحمراء."
            },
            result: {
                en: "Successfully benchmarked against 110 distinct commercial companies from the Hugging Face donut invoice dataset with 100% pipeline completion, zero crashes, an average latency of 3.01 seconds per invoice, and a peak memory footprint of only 206 MB.",
                ar: "تم إجراء تقييم معياري شامل على 110 فواتير من 110 شركة تجارية مختلفة بنسبة نجاح 100% بدون أي انهيار، بمتوسط زمن 3.01 ثانية لكل فاتورة واستهلاك ذاكرة لم يتجاوز 206 ميجابايت."
            }
        }
    },
    {
        id: "chicken-invaders",
        featured: true,
        year: 2025,
        status: "live",
        category: "ml",
        tags: ["PyTorch", "YOLOv8", "Roboflow", "OpenCV", "Quantization", "Computer Vision"],
        cover: "projects/chicken-invaders/cover.webp",
        gallery: [
            {
                src: "projects/chicken-invaders/cover.webp",
                caption: {
                    en: "Quantized detector latency profile and real-time bounding box tracking.",
                    ar: "لوحة قياس استنتاج النموذج المضغوط وتتبع العناصر اللحظي."
                }
            }
        ],
        links: [
            { type: "dataset", label: "Roboflow Benchmark Dataset", url: "https://app.roboflow.com/chicken-invaders-labeling/chicken-invasion-detection" }
        ],
        title: {
            en: "Chicken Invaders Real-Time Sprite Detection",
            ar: "نظام الرصد اللحظي لعناصر لعبة Chicken Invaders"
        },
        tagline: {
            en: "End-to-end computer vision pipeline featuring automated frame deduplication, custom YOLOv8 weights, and quantized inference.",
            ar: "خط معالجة متكامل للرصد اللحظي يشمل تجميع واستبعاد الإطارات وتدريب أوزان YOLOv8 المضغوطة لتتبع الكائنات في ألعاب الأركيد."
        },
        stats: [
            {
                value: "97.4%",
                label: {
                    en: "mAP@50 Detection Accuracy",
                    ar: "دقة الرصد اللحظي mAP@50"
                }
            },
            {
                value: "11.4 ms",
                label: {
                    en: "CPU Quantized Latency",
                    ar: "زمن الاستنتاج على المعالج"
                }
            },
            {
                value: "1,840+",
                label: {
                    en: "Curated Sprite Annotations",
                    ar: "إطار مصنف ومفروز آلياً"
                }
            }
        ],
        story: {
            problem: {
                en: "High-sprite-density retro arcade games feature rapid projectile motions, overlapping particle effects, and severe class imbalance that easily trick conventional generic object detectors.",
                ar: "تتميز ألعاب الأركيد الكلاسيكية بكثافة عالية وحركة سريعة للمقذوفات والمؤثرات البصرية المتداخلة التي تضلل نماذج الرصد العامة."
            },
            approach: {
                en: "Built an automated video frame harvester that uses perceptual hashing (pHash) to filter redundant gameplay states. Curated 1,840+ annotations across multiple entity classes in Roboflow, trained custom YOLOv8 models in PyTorch, and applied post-training quantization for low-latency CPU and GPU inference.",
                ar: "بناء أداة التقاط مؤتمتة لإطارات اللعب تستخدم البصمة الإدراكية (pHash) لاستبعاد الصور المكررة. تم تصنيف أكثر من 1840 إطاراً عبر روبوفلو وتدريب نماذج YOLOv8 وضغط أوزانها للاستنتاج السريع."
            },
            result: {
                en: "Published an open benchmark dataset and achieved 97.4% mAP@50 on boss entities and 11.4 ms latency per frame on standard CPU hardware.",
                ar: "نشر قاعدة بيانات معيارية مفتوحة وتحقيق دقة 97.4% mAP@50 مع زمن استجابة 11.4 مللي ثانية لكل إطار على المعالجات العادية."
            }
        }
    },
    {
        id: "react-agent",
        featured: true,
        year: 2025,
        status: "live",
        category: "ml",
        tags: ["Llama 3.1", "LangChain", "Python", "Tool Calling", "Prompt Engineering"],
        cover: "projects/react-agent/cover.webp",
        gallery: [
            {
                src: "projects/react-agent/cover.webp",
                caption: {
                    en: "Deterministic Thought-Action-Observation loop with live web search and ASL translation.",
                    ar: "حلقة تفكير واستنتاج صريحة تدعم البحث الحي والترجمة إلى لغة الإشارة."
                }
            }
        ],
        links: [
            { type: "notebook", label: "Colab Research Notebook", url: "https://colab.research.google.com/drive/1qTTPRWybfoN1lU9_U35tQP5B2lBgAMJT?usp=sharing" }
        ],
        title: {
            en: "Custom ReAct Agent Loop from Scratch",
            ar: "بناء حلقة تنفيذ وكيل ذكي (ReAct Loop) من الصفر"
        },
        tagline: {
            en: "Transparent Thought-Action-Observation loop with deterministic tool calling and English-to-ASL Gloss syntax translator.",
            ar: "حلقة تفكير واستدعاء أدوات صريحة بدون أطر مغلقة مع مترجم مخصص لقواعد لغة الإشارة الأمريكية."
        },
        stats: [
            {
                value: "0",
                label: {
                    en: "Opaque Framework Wrappers",
                    ar: "اعتماد على مكتبات الوكلاء المغلقة"
                }
            },
            {
                value: "T4 GPU",
                label: {
                    en: "Low-VRAM Execution Profile",
                    ar: "تشغيل سلس على بطاقات المستهلكين"
                }
            }
        ],
        story: {
            problem: {
                en: "High-level agent abstractions often hide prompt states, crash unpredictably on malformed tool JSON, and consume unnecessary VRAM on local open-weight models.",
                ar: "تخفي أطر الوكلاء الذكية الجاهزة تفاصيل الأوامر وتفشل بصمت عند ورود أخطاء في تنسيق JSON مع استهلاك غير مبرر للذاكرة."
            },
            approach: {
                en: "Engineered an explicit state machine running quantized Llama 3.1 weights with deterministic regex parser guards. Wired live DuckDuckGo web querying alongside a dedicated few-shot English-to-ASL Gloss syntactic translator (handling TIME-TOPIC-COMMENT order).",
                ar: "تطوير آلة حالة صريحة تعمل على أوزان Llama 3.1 مع التحقق الصارم من مدخلات ومخرجات الأدوات، وربطها بالبحث الحي عبر DuckDuckGo وأداة تحويل الجمل الإنجليزية إلى لغة الإشارة الأمريكية."
            },
            result: {
                en: "A zero-black-box agent execution notebook that reliably navigates multi-step tool-calling workflows on consumer GPUs without hallucinated tool loops.",
                ar: "دفتر بحثي متكامل يوضح دورة استدعاء الأدوات الشفافة بدقة تامة دون حلقات تكرار لا نهائية."
            }
        }
    },
    {
        id: "anfis",
        featured: false,
        year: 2025,
        status: "live",
        category: "ml",
        tags: ["ANFIS", "Fuzzy Logic", "PyTorch", "NLP", "Explainable AI"],
        cover: "projects/anfis/cover.webp",
        gallery: [
            {
                src: "projects/anfis/cover.webp",
                caption: {
                    en: "Layered neuro-fuzzy architecture and Takagi-Sugeno rule firing visualization.",
                    ar: "معمارية الطبقات العصبية الضبابية وتفعيل قواعد تاكاجي-سوجينو."
                }
            }
        ],
        links: [
            { type: "notebook", label: "Colab Research Notebook", url: "https://colab.research.google.com/drive/1G8EnFBmLXAJz-m7pX_UKDiKAi9mp-SN0?usp=sharing" }
        ],
        title: {
            en: "Interpretable Emotion Classification via ANFIS",
            ar: "تصنيف المشاعر القابل للتفسير عبر أنظمة ANFIS"
        },
        tagline: {
            en: "Coupling neural backpropagation with Takagi-Sugeno fuzzy logic for human-auditable text emotion scoring.",
            ar: "دمج التعلم العصبي مع قواعد المنطق الضبابي لتفسير وتدقيق قرارات تصنيف المشاعر النصية."
        },
        stats: [
            {
                value: "100%",
                label: {
                    en: "Auditable Decision Rules",
                    ar: "قواعد منطقية قابلة للمراجعة البشرية"
                }
            }
        ],
        story: {
            problem: {
                en: "Pure deep-neural text classifiers operate as black boxes, making it nearly impossible for clinicians and auditors to verify why borderline phrases trigger specific emotional classifications.",
                ar: "تعمل نماذج التعلم العميق كصناديق مغلقة يصعب معها معرفة الأسباب المنطقية الكامنة وراء تصنيف العبارات الحساسة."
            },
            approach: {
                en: "Designed an Adaptive Neuro-Fuzzy Inference System (ANFIS) that learns Gaussian membership functions via gradient descent while preserving first-order Takagi-Sugeno fuzzy IF-THEN rules.",
                ar: "تصميم نظام استنتاج عصبي ضبابي يتعلم دوال الانتماء الغاوسية عبر التدرج التنازلي مع الحفاظ على القواعد المنطقية الصريحة."
            },
            result: {
                en: "Produced a transparent classifier with fully extractable rules allowing direct inspection of linguistic decision boundaries.",
                ar: "تحقيق تصنيف دقيق للمشاعر النصية مع إمكانية استخراج ومراجعة القواعد اللغوية المؤثرة في كل قرار."
            }
        }
    },
    {
        id: "seismic",
        featured: false,
        year: 2024,
        status: "writeup",
        category: "ml",
        tags: ["Scikit-learn", "LightGBM", "Pandas", "Feature Engineering", "NumPy"],
        cover: "projects/seismic/cover.webp",
        gallery: [
            {
                src: "projects/seismic/cover.webp",
                caption: {
                    en: "Feature importance breakdown and spatial telemetry correlation matrix.",
                    ar: "مصفوفة الارتباط المكاني وأهمية الخصائص في تقييم خطورة الزلازل."
                }
            }
        ],
        links: [],
        title: {
            en: "Seismic Significance Predictive Modeling",
            ar: "النمذجة التنبؤية للنشاط والأهمية الزلزالية"
        },
        tagline: {
            en: "Spatial-temporal feature engineering on global seismic telemetry with ensemble tree estimators.",
            ar: "هندسة خصائص مكانية وزمنية على سجلات الزلازل العالمية وبناء نماذج شجرية تنبؤية لتقييم الأثر."
        },
        stats: [
            {
                value: "0.874",
                label: {
                    en: "R2 Score on Holdout Set",
                    ar: "معامل التحديد R2 على بيانات الاختبار"
                }
            }
        ],
        story: {
            problem: {
                en: "Raw earthquake catalogs contain multi-collinear attributes and extreme outliers where magnitude alone fails to predict structural significance.",
                ar: "تحتوي بيانات الزلازل على متغيرات متداخلة وقيم شاذة لا تكفي معها قوة الزلزال وحدها للتنبؤ بمدى خطورته الإنشائية."
            },
            approach: {
                en: "Engineered geographic fault distance, depth-to-magnitude interactions, and aftershock decay features in Pandas, trained gradient-boosted trees and random forest ensembles.",
                ar: "هندسة خصائص جيولوجية تربط بين المسافة من خطوط الصدع وتفاعل العمق مع القوة وتلاشي الهزات الارتدادية عبر نماذج شجرية مجمعة."
            },
            result: {
                en: "Isolated the top non-linear interactions driving impact and established an R2 score of 0.874 on unseen test splits.",
                ar: "عزل العوامل المؤثرة بدقة وتحقيق معامل تحديد 0.874 على مجموعات الاختبار المستقلة."
            }
        }
    },
    {
        id: "cp-stress",
        featured: false,
        year: 2024,
        status: "live",
        category: "tools",
        tags: ["C++20", "Python", "CLI", "Algorithms", "ECPC / ACPC"],
        cover: "projects/cp-stress/cover.webp",
        gallery: [
            {
                src: "projects/cp-stress/cover.webp",
                caption: {
                    en: "Automated counterexample isolation output during contest simulation.",
                    ar: "عزل حالات الاختبار المسببة للخطأ آلياً أثناء تدريبات المسابقات البرمجية."
                }
            }
        ],
        links: [
            { type: "github", label: "GitHub Profile", url: "https://github.com/Nov4Saki" }
        ],
        title: {
            en: "Competitive Programming Stress-Test Harness",
            ar: "منصة الفحص العشوائي للخوارزميات (Stress-Test CLI)"
        },
        tagline: {
            en: "Automated CLI runner piping randomized edge cases against brute-force oracles to isolate counterexamples.",
            ar: "أداة سطر أوامر لتوليد الحالات الحدية ومقارنة الحلول الخوارزمية بالحل المرجعي لعزل الأخطاء."
        },
        stats: [
            {
                value: "30+ Devs",
                label: {
                    en: "Trained using this tool at ACPC",
                    ar: "طالب تدربوا عبر الأداة في ACPC"
                }
            }
        ],
        story: {
            problem: {
                en: "Hidden graph and dynamic programming edge cases often fail optimal contest solutions without pinpointing the failing test input.",
                ar: "الحالات الحدية المخفية في مسائل الرسوم البيانية والبرمجة الديناميكية تفشل الحلول السريعة دون توضيح المدخل المتسبب بالخطأ."
            },
            approach: {
                en: "Built a fast CLI harness that pipes randomized graph/tree generators simultaneously into a fast candidate and a brute-force solver, halting on stdout divergence.",
                ar: "برمجة أداة سريعة تشغل مولد مدخلات عشوائي وتقارن مخرجات الحل السريع بالحل المرجعي المضمون حتى تعزل أول حالة اختلاف."
            },
            result: {
                en: "Adopted in Damietta University ACPC training sessions to train over 30 contestants in systematic debugging.",
                ar: "تم اعتماد الأداة في تدريبات مجتمع ACPC بجامعة دمياط لتدريب أكثر من 30 متسابقاً على اكتشاف الأخطاء المنهجي."
            }
        }
    }
];
