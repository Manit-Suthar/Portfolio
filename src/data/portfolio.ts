export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  highlights: string[];
  stack: string[];
  images: string[];
  mobileImages?: boolean;
  isPlaceholder?: boolean;
  demoUrl?: string | null;
  githubUrl?: string | null;
}

export interface OtherProject {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  demoUrl?: string | null;
  githubUrl?: string | null;
  badge?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  mode: string;
  points: string[];
  stack: string[];
  demoUrl?: string | null;
  images: string[];
}

export interface AchievementItem {
  title: string;
  organizationOrEvent: string;
  year: string;
  description: string;
  highlight?: string;
}

export interface GitHubFallbackData {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  recentRepos: { name: string; language: string; stars: number }[];
}

export const PORTFOLIO_DATA = {
  identity: {
    name: "Manit Suthar",
    monogram: "MS",
    title: "Full-Stack Developer | Software Engineer | AI/ML Enthusiast",
    headline: "Building practical software products through full-stack engineering, backend systems, and applied AI.",
    location: "Ahmedabad, Gujarat, India",
    statusBadge: "Open to Internships",
    email: "manitsuthar2007@gmail.com",
    github: "https://github.com/Manit-Suthar",
    githubUsername: "Manit-Suthar",
    linkedin: "https://www.linkedin.com/in/manit-suthar/",
    leetcode: "https://leetcode.com/u/Manit_Suthar/",
    leetcodeUsername: "Manit_Suthar",
    resumePath: "/Manit_Suthar_Resume.pdf",
    shortBio:
      "Information Technology undergraduate at L.D. College of Engineering. Focused on resilient distributed backend pipelines, deterministic business engines, and lightweight applied AI.",
  },

  education: {
    institution: "L.D. College of Engineering, Ahmedabad",
    degree: "Bachelor of Engineering in Information Technology",
    period: "July 2024 – June 2028",
    cpi: "9 / 10",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Cybersecurity",
      "Software Engineering",
      "Linear Algebra",
      "Artificial Intelligence",
      "Data Science",
      "Digital Electronics",
      "Web Application Development",
    ],
  },

  stats: [
    { label: "DSA Problems Solved", value: "277", detail: "Verified on LeetCode" },
    { label: "Hackathons", value: "10+", detail: "SIH, Maverick, GDG, DA-IICT" },
    { label: "Academic CPI", value: "9.0", detail: "Information Technology" },
    { label: "Public Repositories", value: "19", detail: "Verified on GitHub" },
  ],

  leetcodeLiveFallback: {
    totalSolved: 277,
    easySolved: 160,
    mediumSolved: 85,
    hardSolved: 32,
    ranking: 587831,
    contributionPoint: 1909,
    recentAcceptances: [
      "Minimum Score by Changing Two Elements",
      "Minimum Number of Changes to Make Binary String Beautiful",
      "Minimum Changes to Make K Semi-palindromes",
      "Calculate Digit Sum of a String",
      "Number of Sub-arrays With Odd Sum",
    ],
  },

  githubLiveFallback: {
    publicRepos: 20,
    followers: 0,
    following: 0,
    totalStars: 0,
    recentRepos: [
      { name: "EcoVision---Smart-Waste-Segregation-Circular-Economy", language: "Dart", stars: 0 },
      { name: "fleetFlow_odoo_X_vidhyapith", language: "JavaScript", stars: 0 },
      { name: "Edutrack", language: "JavaScript", stars: 0 },
      { name: "GlobeTrotter_Odoo", language: "Python", stars: 0 },
      { name: "miniflow", language: "TypeScript", stars: 0 },
    ],
  },

  experience: [
    {
      role: "Full-Stack Web Developer",
      company: "Shree Boutique",
      period: "Aug 2025 – Dec 2025",
      location: "Ahmedabad, India",
      mode: "Remote",
      points: [
        "Built a CMS-driven e-commerce platform using Next.js, React.js, JavaScript, and Sanity.io, deployed on Vercel.",
        "Designed structured content schemas and dynamic image delivery, enabling the business owner to independently manage storefront content.",
        "Engineered responsive catalog layouts and cart interfaces optimized for mobile commerce traffic.",
      ],
      stack: ["Next.js", "React.js", "JavaScript", "Sanity.io", "Vercel"],
      demoUrl: "https://shreeboutique.vercel.app/",
      images: [
        "/experience/shree-boutique-1.png",
        "/experience/shree-boutique-2.png",
        "/experience/shree-boutique-3.png",
        "/experience/shree-boutique-4.png",
      ],
    },
  ] as ExperienceItem[],

  featuredProjects: [
    {
      id: "greenfleet",
      title: "GreenFleet — Egreen Quanta",
      category: "AI & Optimization / SIH 2026",
      description:
        "Quantum-inspired fuel consumption prediction and green fleet optimization.GreenFleet plans a container-shipping fleet's routes, speeds, and fuels tominimize cost, well-to-wake GHG emissions, and deliveryunreliability at once, subject to real IMO/EU regulatory constraints (CII,EEXI, EU ETS, FuelEU Maritime). Two multi-objective optimizers compete on thesame problem: a pymoo NSGA-II baseline and a hand-written quantum-inspired NSGA-II (EAH-QNSGA-II).Multi-objective fleet dispatch optimization engine powered by FastAPI backend, Numba-accelerated scoring pipeline, and quantum-inspired genetic optimizer (PennyLane).",
      problem:
        "Maritime fleet dispatch requires optimizing vessel routes, speeds, and bunkering across complex operational, emission, and regulatory constraints.",
      solution:
        "Engineered a deterministic constraint-repair engine validating canal draft limits, 13 emission control zones (ECZs), and bunkering buffers across 500 vessels and 627 port corridors.",
      highlights: [
        "Numba-compiled JIT scoring kernel executing objective trade-off evaluation in microseconds",
        "PennyLane quantum-inspired genetic optimizer computing multi-parameter route vectors",
        "Deterministic constraint repair engine verifying canal drafts and 13 ECZs",
      ],
      stack: ["Python", "FastAPI", "PyTorch", "PennyLane", "Numba"],
      images: [
        "/projects/greenfleet-1.png",
        "/projects/greenfleet-2.png",
      ],
      isPlaceholder: true,
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: "ecovision",
      title: "EcoVision — Smart Waste Segregation",
      category: "Computer Vision / Maverick Effect AI Challenge Finalist",
      description:
        "Cross-platform AI waste classification system running on-device inference across 10 categories with 224×224 preprocessing and confidence rejection.",
      problem:
        "Users struggle to accurately classify household waste materials and follow proper local recycling and disposal streams without cloud-latency overhead.",
      solution:
        "Implemented on-device inference via mobile ONNX Runtime and browser TensorFlow.js. Includes EXIF correction, bilinear resizing, a 65% confidence rejection threshold, and a 4-stream disposal decision engine.",
      highlights: [
        "Zero-cloud inference overhead: on-device ONNX Runtime on mobile & TensorFlow.js on web",
        "Input pipeline: 224×224 bilinear scaling, auto EXIF orientation, normalized tensor pass",
        "Deterministic 4-stream disposal rule engine routing materials into optimal streams",
      ],
      stack: ["Flutter", "Dart", "JavaScript", "ONNX Runtime", "TensorFlow.js"],
      images: [
        "/projects/ecovision-1.png",
        "/projects/ecovision-2.png",
        "/projects/ecovision-3.png",
        "/projects/ecovision-4.png",
      ],
      mobileImages: true,
      isPlaceholder: true,
      demoUrl: null,
      githubUrl: "https://github.com/Manit-Suthar/EcoVision---Smart-Waste-Segregation-Circular-Economy",
    },
    {
      id: "edutrack",
      title: "EduTrack — Academic Platform",
      category: "Full-Stack Development & Real-Time SSE",
      description:
        "Unified academic dashboard consolidating 6 student workflows across 9 NeDB collections and 29+ REST endpoints with real-time SSE study rooms.",
      problem:
        "Students juggle fragmented tools for assignments, habits, study resources, inventory, and group project coordination.",
      solution:
        "Engineered real-time collaborative study rooms using Server-Sent Events (SSE) with 20-second connection heartbeats, room subscriber management, bcrypt password hashing, and stateless JWT authentication.",
      highlights: [
        "Real-time event bus powered by lightweight Server-Sent Events with 20s keep-alives",
        "Consolidated schema supporting 6 modular student workflows across 9 dedicated NeDB stores",
        "29+ documented REST endpoints with granular user-scoped access control",
      ],
      stack: [
        "React",
        "Node.js",
        "Express.js",
        "Server-Sent Events",
        "JWT",
        "bcrypt",
        "NeDB",
      ],
      images: [
        "/projects/edutrack-1.png",
        "/projects/edutrack-2.png",
        "/projects/edutrack-3.png",
        "/projects/edutrack-4.png",
      ],
      isPlaceholder: false,
      demoUrl: "https://student-life-dashboard-nine.vercel.app/",
      githubUrl: "https://github.com/Manit-Suthar/Edutrack",
    },
    {
      id: "fleetflow",
      title: "FleetFlow — Fleet Management",
      category: "Backend Systems & Relational Schemas",
      description:
        "Centralized fleet dispatch and asset-tracking platform built on a 10-entity PostgreSQL relational schema and 32 REST API endpoints.",
      problem:
        "Fleet operations require coordinated vehicle scheduling, driver assignments, cargo capacity validation, and strict role-based governance.",
      solution:
        "Enforces data integrity via PostgreSQL ACID transactions, row-level locking to prevent double-booking, cargo capacity validation, and 4-tier Role-Based Access Control (RBAC).",
      highlights: [
        "Normalized 10-entity PostgreSQL relational architecture with foreign-key constraints",
        "ACID transactions with row-level locks preventing vehicle and driver schedule collision",
        "4-tier Role-Based Access Control (RBAC) securing operational dashboards",
      ],
      stack: ["PostgreSQL", "Express.js", "React", "Node.js", "JWT"],
      images: [
        "/projects/fleetflow-1.png",
        "/projects/fleetflow-2.png",
      ],
      isPlaceholder: true,
      demoUrl: null,
      githubUrl: "https://github.com/Manit-Suthar/fleetFlow_odoo_X_vidhyapith",
    },
  ] as FeaturedProject[],

  allTechnologies: [
    { name: "TypeScript", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "Java", category: "Language" },
    { name: "C", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "SQL", category: "Database" },
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "Flask", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "PyTorch", category: "AI/ML" },
    { name: "ONNX Runtime", category: "AI/ML" },
    { name: "TensorFlow.js", category: "AI/ML" },
    { name: "PennyLane", category: "AI/ML" },
    { name: "Numba JIT", category: "AI/ML" },
    { name: "FAISS", category: "AI/ML" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Server-Sent Events", category: "Backend" },
    { name: "TCP Sockets", category: "Systems" },
    { name: "Multithreading", category: "Systems" },
    { name: "JWT Auth", category: "Security" },
    { name: "Zod", category: "Security" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "Vercel", category: "Cloud" },
    { name: "Render", category: "Cloud" },
    { name: "Google Cloud Run", category: "Cloud" },
    { name: "Sanity.io", category: "CMS" },
  ],

  otherProjects: [
    // {
    //   id: "kanban",
    //   title: "Kanban Task Manager",
    //   category: "Full-Stack",
    //   description:
    //     "Full-stack drag-and-drop task board with RESTful CRUD endpoints, Mongoose schema validation, and responsive workflow views.",
    //   stack: ["React", "Node.js", "Express.js", "MongoDB"],
    //   demoUrl: "https://kanban-task-manager-psi-eight.vercel.app",
    //   githubUrl: "https://github.com/Manit-Suthar/kanban-task-manager",
    // },
    {
      id: "globetrotter",
      title: "GlobeTrotter",
      category: "AI / ML",
      description:
        "Multi-city travel planner with two-phase LLM itinerary generation, PostgreSQL models, JWT auth, share tokens, and 20+ REST endpoints.",
      stack: ["FastAPI", "PostgreSQL", "React", "Gemini API"],
      demoUrl: null,
      githubUrl: "https://github.com/Manit-Suthar/GlobeTrotter_Odoo",
    },
    {
      id: "miniflow",
      title: "MiniFlow",
      category: "Full-Stack",
      description:
        "Collaborative project tracker with Kanban boards, nested discussions, 26 REST endpoints, Zod runtime validation, and workspace RBAC.",
      stack: ["React", "TypeScript", "Express.js", "PostgreSQL", "Zod"],
      demoUrl: null,
      githubUrl: "https://github.com/Manit-Suthar/miniflow",
    },
    {
      id: "metromitr",
      title: "MetroMitr",
      badge: "SIH 2025",
      category: "AI / ML",
      description:
        "AI document processing pipeline implementing English/Malayalam OCR → classification → summarization → FAISS semantic retrieval.",
      stack: ["Python", "FastAPI", "React", "PostgreSQL", "OCR", "NLP", "FAISS"],
      demoUrl: null,
      githubUrl: "https://github.com/Manit-Suthar/KMRL_Project",
    },
    {
      id: "chatsystem",
      title: "Chat System",
      category: "Systems & Cloud",
      description:
        "Multithreaded TCP client-server messaging engine with bidirectional sockets, ConcurrentHashMap routing, and structured JSON payloads.",
      stack: ["Java", "TCP Sockets", "Multithreading", "Google Gson"],
      demoUrl: null,
      githubUrl: "https://github.com/Manit-Suthar/Chat-System",
    },
    {
      id: "techvidhya",
      title: "TechVidhya",
      category: "AI / ML",
      description:
        "Low-bandwidth multilingual digital literacy chatbot supporting Gujarati, Hindi, and English with Web Speech API voice input.",
      stack: ["React", "Node.js", "Express.js", "Web Speech API"],
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: "googleformsolver",
      title: "Google Form Solver",
      category: "Tools & Automation",
      description:
        "AI automation backend for MCQ, grid, and multi-select forms using structured prompt generation and CORS-enabled REST APIs.",
      stack: ["Python", "Flask", "Gemini API", "REST APIs"],
      demoUrl: null,
      githubUrl: "https://github.com/Manit-Suthar/Google-Form-Solver",
    },
    {
      id: "jarvis",
      title: "Jarvis",
      category: "Tools & Automation",
      description:
        "Modular desktop voice assistant automating browser navigation and media playback via speech-to-text and text-to-speech.",
      stack: ["Python", "SpeechRecognition", "pyttsx3", "OS Automation"],
      demoUrl: null,
      githubUrl: "https://github.com/Manit-Suthar/Jarvis",
    },
    {
      id: "skycast",
      title: "SkyCast",
      category: "Full-Stack",
      description:
        "Interactive weather analytics dashboard featuring debounced location search, geolocation, historical trends, and Chart.js visuals.",
      stack: ["JavaScript ES6+", "Chart.js", "Open-Meteo API", "WeatherAPI"],
      demoUrl: null,
      githubUrl: "https://github.com/Manit-Suthar/weather_project",
    },
    {
      id: "upifds",
      title: "UPI-FDS",
      category: "Systems & Cloud",
      description:
        "Receiver-side merchant UPI fraud detection concept combining transaction heuristic checks, event-driven Cloud Run architecture, and soundbox alerts.",
      stack: [
        "Flutter",
        "Dart",
        "Google Cloud Run",
        "Firebase Cloud Messaging",
      ],
      demoUrl: null,
      githubUrl: "https://github.com/Manit-Suthar/Googlies_FDS",
    },
  ] as OtherProject[],

  achievements: [
    {
      title: "Top Finalist",
      organizationOrEvent: "Maverick Effect AI Challenge 2026",
      year: "2026",
      description:
        "Shortlisted for final presentation for EcoVision, developing on-device computer vision waste categorization for circular economy streams.",
      highlight: "Finalist",
    },
    {
      title: "GreenFleet Optimization Engine",
      organizationOrEvent: "Smart India Hackathon 2026",
      year: "2026",
      description:
        "Engineered GreenFleet: quantum-inspired fuel consumption prediction and multi-objective maritime green fleet dispatch optimization.",
      highlight: "SIH 2026",
    },
    {
      title: "Shortlisted Participant",
      organizationOrEvent: "HackOut'26 — Dhirubhai Ambani University",
      year: "2026",
      description:
        "Shortlisted participant at HackOut'26 at Dhirubhai Ambani Institute of Information and Communication Technology.",
      highlight: "DA-IICT",
    },
    {
      title: "MetroMitr Semantic Document Engine",
      organizationOrEvent: "Smart India Hackathon 2025",
      year: "2025",
      description:
        "Engineered multilingual OCR, document classification, and FAISS-based vector retrieval pipeline.",
      highlight: "SIH 2025",
    },
    {
      title: "250+ Problems Solved",
      organizationOrEvent: "LeetCode & Competitive Programming",
      year: "2024-2026",
      description:
        "Solved 250+ DSA problems covering trees, graphs, dynamic programming, and systems algorithms. Active participant across 10+ hackathons including GDG, Odoo, and DA-IICT events.",
      highlight: "277 DSA",
    },
  ] as AchievementItem[],
};
