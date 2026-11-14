export const profile = {
  name: "Phạm Duy Anh",
  email: "phamduyanh.01062005da@gmail.com",
  phoneDisplay: "0969 218 231",
  phoneHref: "tel:+84969218231",
  location: "Cần Thơ · Hồ Chí Minh City",
  availableFrom: "12/2026",
  preferredWorkplace: "Onsite · Hồ Chí Minh City",
  expectedGraduation: "Early 2027",
  resumeUrl: "/cv/pham-duy-anh-cv.pdf",
  github: "https://github.com/anh1650000",
  githubDisplay: "github.com/anh1650000",
  linkedin: "https://www.linkedin.com/in/duy-anh-ph%E1%BA%A1m-35ba53291/",
  instagram: "https://www.instagram.com/phm.danhh__/",
  facebook: "https://www.facebook.com/phmdanh1650/",
  zaloDisplay: "+84 834 573 195",
  zaloHref: "tel:+84834573195",
};

export const navItems = [
  { id: "about", labelKey: "navAbout" },
  { id: "work", labelKey: "navWork" },
  { id: "resume", labelKey: "navResume" },
  { id: "skills", labelKey: "navSkills" },
  { id: "journey", labelKey: "navJourney" },
  { id: "activities", labelKey: "navActivities" },
  { id: "life", labelKey: "navLife" },
  { id: "quotes", labelKey: "navQuotes" },
  { id: "resume", labelKey: "navResume" },
  { id: "contact", labelKey: "navContact" },
];

export const stackOverview = [
  { area: "ai / cv", tools: "PyTorch · YOLOv8 · SAHI · OpenCV" },
  { area: "agents / rag", tools: "LangGraph · FAISS · BM25 · Ollama" },
  { area: "backend", tools: "Python · FastAPI · Node.js · Java 17" },
  { area: "databases", tools: "PostgreSQL · MySQL · MongoDB" },
  { area: "frontend", tools: "Vue 3 · React 19 · JavaScript" },
  { area: "devops", tools: "Docker · Arch Linux · Git" },
];

export const metrics = [
  { index: "01", value: "3.28", suffix: "/4.0", labelKey: "metricGpa" },
  { index: "02", value: "10", suffix: "+", labelKey: "metricProjects" },
  { index: "03", value: "Dec", suffix: " 2026", labelKey: "metricAvailability" },
  { index: "04", value: "2027", suffix: " · EARLY", labelKey: "metricGraduation" },
];

export const capabilityCards = [
  {
    code: "SYS.CV-01",
    badgeKey: "core",
    icon: "CV",
    titleKey: "skillCvTitle",
    bodyKey: "skillCvBody",
    tags: ["PyTorch", "YOLOv8 / 26s", "SAHI", "OpenCV", "NIG Bayes"],
    state: "RESEARCH & METRICS",
  },
  {
    code: "SYS.LLM-02",
    badgeKey: "core",
    icon: "AG",
    titleKey: "skillAiTitle",
    bodyKey: "skillAiBody",
    tags: ["LangGraph", "Dual FAISS", "BM25 + RRF", "Ollama"],
    state: "AGENTIC & RAG",
  },
  {
    code: "SYS.API-03",
    badgeKey: "strong",
    icon: "BE",
    titleKey: "skillBackendTitle",
    bodyKey: "skillPythonBody",
    tags: ["Python", "FastAPI", "Node.js", "Express", "SSE"],
    state: "REST & STREAMING",
  },
  {
    code: "SYS.UI-04",
    badgeKey: "proven",
    icon: "UI",
    titleKey: "skillFrontendTitle",
    bodyKey: "skillFrontendBody",
    tags: ["Vue 3", "React 19", "Java 17", "Swing", "JavaScript"],
    state: "WEB & DESKTOP",
  },
  {
    code: "SYS.DATA-05",
    badgeKey: "practical",
    icon: "DB",
    titleKey: "skillDataTitle",
    bodyKey: "skillDataBody",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "FAISS"],
    state: "SQL & VECTOR",
  },
  {
    code: "SYS.OPS-06",
    badgeKey: "daily",
    icon: "OP",
    titleKey: "skillPracticeTitle",
    bodyKey: "skillPracticeBody",
    tags: ["Docker", "Docker Compose", "Arch Linux", "Git / GitHub"],
    state: "CONTAINERS & LINUX",
  },
];

export const projects = [
  {
    number: "01",
    metaKey: "featured",
    year: "Oct 2026 – Present",
    title: "Autonomous Contract Auditing & Verification Agent",
    descriptionKey: "projectAudit",
    roleKey: "soloDeveloper",
    challengeKey: "auditChallenge",
    tags: ["Python", "LangGraph", "FastAPI", "PostgreSQL", "Docker Compose", "Ollama", "pdfplumber"],
    url: "https://github.com/anh1650000/codoveragsy-project",
    videoDemoUrl: "",
    hasDemo: true,
    outcomes: [
      { textKey: "auditOutcome1" },
      { textKey: "auditOutcome2" },
      { textKey: "auditOutcome3" },
    ],
    flow: {
      title: "LANGGRAPH · STATEGRAPH",
      badge: "BOUNDED RETRY",
      badgeTone: "orange",
      groups: [
        {
          type: "node",
          step: "01",
          name: "PARSE",
          detail: "pdfplumber · text & token offsets",
        },
        {
          type: "retry",
          label: "↺ retry",
          nodes: [
            {
              step: "02",
              name: "EXTRACT",
              detail: "Qwen3.5-ins 4B · structured schema",
              tone: "accent",
            },
            {
              step: "03",
              name: "VERIFY",
              detail: "CitationVerifier · fuzzy & offset check",
              tone: "verify",
            },
          ],
        },
        {
          type: "node",
          step: "04",
          name: "RECONCILE",
          detail: "PostgreSQL · 6 anomaly checks",
        },
        {
          type: "node",
          step: "05",
          name: "REPORT",
          detail: "FastAPI + Streamlit · verified audit",
          tone: "final",
        },
      ],
    },
    featured: true,
  },
  {
    number: "03",
    metaKey: "metaResearch",
    year: "Mar – Nov 2026",
    title: "RICAI: Intelligent Rice Grain Estimation & Analysis",
    descriptionKey: "projectRicai",
    roleKey: "coResearcher",
    challengeKey: "ricaiChallenge",
    tags: ["Python", "PyTorch", "YOLOv8-Seg", "SAHI", "OpenCV", "Extra Trees", "NIG Bayes", "FastAPI", "React 19"],
    url: "",
    videoDemoUrl: "https://youtu.be/s4x3dYaX21c",
    hasDemo: true,
    noteKey: "researchTag",
    outcomes: [
      { textKey: "ricaiOutcome1" },
      { textKey: "ricaiOutcome2" },
      { textKey: "ricaiOutcome3" },
    ],
    flow: {
      title: "RICAI · COMPUTER VISION + BAYES PIPELINE",
      badge: "TSV2026-129",
      badgeTone: "cyan",
      groups: [
        {
          type: "node",
          step: "01",
          name: "SAHI SLICE",
          detail: "YOLOv8m (97.56% mAP) · YOLO26s",
          tone: "accent",
        },
        {
          type: "node",
          step: "02",
          name: "GEOMETRY",
          detail: "OpenCV · 31 shape features (593 samples)",
        },
        {
          type: "node",
          step: "03",
          name: "REGRESS",
          detail: "Extra Trees · R² = 0.9994, MAE 1.79",
        },
        {
          type: "node",
          step: "04",
          name: "3σ GATE",
          detail: "2-branch NIG Bayes · K=0 → K=5 few-shot",
          tone: "verify",
        },
        {
          type: "node",
          step: "05",
          name: "ESTIMATE",
          detail: "FastAPI + React 19 · 100% CI90 (73 tests)",
          tone: "final",
        },
      ],
    },
  },
  {
    number: "02",
    metaKey: "metaRag",
    year: "May – Oct 2026",
    title: "CTU Regulations Q&A Assistant (RAG)",
    descriptionKey: "projectChatbot",
    roleKey: "soloDeveloper",
    challengeKey: "ragChallenge",
    tags: ["Python", "FastAPI", "Dual FAISS", "BM25", "RRF", "Ollama (Llama 3.1 8B)", "MySQL"],
    url: "https://github.com/anh1650000/chatbot-ctu-regulations",
    videoDemoUrl: "https://mtuajpgurlthfwos.public.blob.vercel-storage.com/chatbot-ctu-regulation-demo.mp4",
    hasDemo: true,
    outcomes: [
      { textKey: "ragOutcome1" },
      { textKey: "ragOutcome2" },
    ],
    flow: {
      title: "HYBRID RAG · DUAL FAISS + BM25",
      badge: "84% ACCURACY",
      badgeTone: "green",
      groups: [
        {
          type: "node",
          step: "01",
          name: "CHUNK",
          detail: "14 handbooks → ~183 clauses",
        },
        {
          type: "node",
          step: "02",
          name: "DUAL INDEX",
          detail: "vietnamese-bi-encoder (768d) + BM25",
          tone: "accent",
        },
        {
          type: "node",
          step: "03",
          name: "HYBRID RRF",
          detail: "Accented + raw FAISS · RRF (k=50)",
          tone: "verify",
        },
        {
          type: "node",
          step: "04",
          name: "BUDGET",
          detail: "Dynamic context · MAX 3,000 tokens",
        },
        {
          type: "node",
          step: "05",
          name: "STREAM",
          detail: "Ollama Llama 3.1 8B · SSE + MySQL",
          tone: "final",
        },
      ],
    },
  },
  {
    number: "04",
    meta: "DESKTOP · ERP",
    year: "2025 – 2026",
    title: "Hotel Booking Desktop Suite",
    descriptionKey: "projectHotel",
    roleKey: "applicationDeveloper",
    tags: ["Java 17", "Swing", "Maven", "MySQL"],
    url: "https://github.com/anh1650000/booking-hotel",
    videoDemoUrl: "",
    challengeKey: "hotelChallenge",
    outcomes: [
      { textKey: "hotelOutcome1" },
    ],
  },
  {
    number: "05",
    meta: "FULL-STACK · MICROSERVICES",
    year: "2025 – 2026",
    title: "Library & Contact Management Systems",
    descriptionKey: "projectLibrary",
    role: "Full-stack Developer",
    challengeKey: "libraryChallenge",
    outcomes: [
      { textKey: "libraryOutcome1" },
    ],
    tags: ["Vue 3", "Node.js", "Express", "MongoDB", "JWT"],
    url: "https://github.com/anh1650000/CT449_libary-managerment",
    videoDemoUrl: "https://mtuajpgurlthfwos.public.blob.vercel-storage.com/library-managerment.mp4",
  },
];

export const journeyItems = [
  {
    number: "03",
    phase: "RESEARCH & ENGINEERING",
    date: "2025 —",
    dateKey: "present",
    titleKey: "independentTitle",
    bodyKey: "independentBody",
    tags: ["TSV2026-129 approved", "First end-to-end LangGraph workflow", "Docker delivery"],
  },
  {
    number: "02",
    phase: "LEADERSHIP",
    date: "2024",
    titleKey: "leadershipTitle",
    bodyKey: "leadershipBody",
    tags: ["Decision 116-QĐ/ĐTN", "Class Monitor", "Team Coordination", "CICT Youth Union"],
  },
  {
    number: "01",
    phase: "EDUCATION",
    date: "2023 — 2027",
    titleKey: "universityTitle",
    bodyKey: "universityBody",
    tags: ["GPA 3.28/4.0", "Image Processing 9.7", "Applied ML 9.5", "Principles of ML 9.5", "OOP 9.1"],
  },
];

export const activityItems = [
  {
    number: "01",
    year: "2024 —",
    categoryKey: "activityTravelCategory",
    titleKey: "activityTravelTitle",
    descriptionKey: "activityTravelDescription",
    imageUrl: "",
    images: [],
  },
  {
    number: "02",
    year: "2023 —",
    categoryKey: "activityClassCategory",
    titleKey: "activityClassTitle",
    descriptionKey: "activityClassDescription",
    imageUrl: "",
    images: [],
  },
];

export const personalItems = [
  {
    number: "01",
    icon: "01",
    titleKey: "personalGamingTitle",
    bodyKey: "personalGamingBody",
    noteKey: "personalGamingNote",
  },
  {
    number: "02",
    icon: "02",
    titleKey: "personalSportTitle",
    bodyKey: "personalSportBody",
    noteKey: "personalSportNote",
  },
  {
    number: "03",
    icon: "03",
    titleKey: "personalGymTitle",
    bodyKey: "personalGymBody",
    noteKey: "personalGymNote",
  },
];

export const quoteItems = [
  { number: "01", quoteKey: "quoteOne", authorKey: "quoteAuthor" },
  { number: "02", quoteKey: "quoteTwo", authorKey: "quoteAuthor" },
  { number: "03", quoteKey: "quoteThree", authorKey: "quoteAuthor" },
];

export const processItems = [
  { number: "01", stage: "DISCOVER", titleKey: "process1Title", bodyKey: "process1Body" },
  { number: "02", stage: "DESIGN", titleKey: "process2Title", bodyKey: "process2Body" },
  { number: "03", stage: "EVALUATE", titleKey: "process3Title", bodyKey: "process3Body" },
  { number: "04", stage: "SHIP", titleKey: "process4Title", bodyKey: "process4Body" },
];

export const certificates = [
  {
    provider: "Kaggle Learn",
    titleKey: "kaggleCertificateTitle",
    bodyKey: "kaggleCertificateBody",
    badgeKey: "verifiedBadge",
  },
  {
    provider: "Can Tho University Youth Union",
    titleKey: "ctuCertificateTitle",
    bodyKey: "ctuCertificateBody",
    badgeKey: "verifiedBadge",
  },
  {
    provider: "The University of Tokyo",
    titleKey: "gciCertificateTitle",
    bodyKey: "gciCertificateBody",
    badgeKey: "inProgressBadge",
  },
];
