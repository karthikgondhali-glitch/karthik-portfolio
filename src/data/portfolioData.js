/**
 * ====================================================================
 * KARTHIK V.G. - PORTFOLIO DATA CONFIGURATION
 * ====================================================================
 * All portfolio information is centralized here for easy editing.
 * Update links, descriptions, skills, and projects as your journey progresses!
 */

/**
 * ====================================================================
 * 🔗 QUICK LINKS CONFIGURATION — PASTE YOUR LINKS HERE!
 * ====================================================================
 * To add or update your GitHub repository and live website links,
 * simply change the URLs in this object.
 * Every card and preview modal will automatically update!
 */
export const projectLinks = {
  // 1. UdyamSetu (GovTech / FinTech / AI)
  udyamSetu: {
    githubUrl: "https://github.com/karthikgondhali-glitch/udyamsetu", // <-- PASTE GITHUB REPO HERE
    demoUrl: null, // <-- PASTE LIVE WEBSITE LINK HERE (e.g. "https://udyamsetu.vercel.app") or null
  },

  // 2. Focus Buddy (IoT / ESP32)
  focusBuddy: {
    githubUrl: "https://github.com/karthikgondhali-glitch/focus-buddy-esp32", // <-- PASTE GITHUB REPO HERE
    demoUrl: null, // <-- PASTE LIVE WEBSITE LINK HERE or null
  },

  // 3. Moodify Mirror (IoT / AI)
  moodifyMirror: {
    githubUrl: "https://github.com/karthikgondhali-glitch/moodify-mirror", // <-- PASTE GITHUB REPO HERE
    demoUrl: null, // <-- PASTE LIVE WEBSITE LINK HERE or null
  },

  // 4. Cravely – Reels2Meals (FoodTech / Voice AI)
  cravely: {
    githubUrl: "https://github.com/karthikgondhali-glitch/cravely-reels2meals", // <-- PASTE GITHUB REPO HERE
    demoUrl: null, // <-- PASTE LIVE WEBSITE LINK HERE or null
  },

  // 5. NeuroFeed (EdTech / AI)
  neuroFeed: {
    githubUrl: null, // <-- PASTE GITHUB REPO HERE
    demoUrl: null, // <-- PASTE LIVE WEBSITE LINK HERE or null
  },

  // 6. CrisisGrid AI (AI / Disaster Relief)
  crisisGrid: {
    githubUrl: "https://github.com/karthikgondhali-glitch/crisise-guide-AI.git", // <-- PASTE GITHUB REPO HERE
    demoUrl: null, // <-- PASTE LIVE WEBSITE LINK HERE or null
  }
};

export const personalData = {
  name: "KARTHIK V.G.",
  greeting: "Hello, I'm",
  title: "Building ideas into real-world solutions.",
  roles: [
    "Computer Science & Engineering Student",
    "Aspiring Backend Developer",
    "AI Enthusiast",
    "Technology-Driven Problem Solver"
  ],
  roleSubtitle: "Computer Science & Engineering Student | Aspiring Backend Developer | AI Enthusiast",
  bio: "I'm a CSE student passionate about backend development, artificial intelligence, and full-stack engineering. I enjoy exploring new technologies, participating in hackathons, and developing practical solutions to real-world problems.",

  // Status and Availability
  availability: {
    status: "Available for Collaboration & Hackathons",
    indicatorColor: "#10B981", // Emerald green
    openFor: ["Internships", "Hackathon Collaborations", "Open Source Projects"]
  },

  // Contact Information
  contact: {
    email: "kvg0068@gmail.com", // Replace with your primary email
    github: "https://github.com/karthik7code",
    linkedin: "https://www.linkedin.com/in/karthik-v-g-3ba342374", // Update with your actual LinkedIn URL
    location: "Bengaluru, Karnataka, India",
    college: "Gopalan College of Engineering and Management, Bengaluru"
  },

  // Resume configuration
  resume: {
    downloadUrl: "/resume.pdf", // Placed in public/resume.pdf
    fileName: "Karthik_VG_Resume.pdf",
    lastUpdated: "November 2026"
  }
};

export const aboutData = {
  badge: "About My Journey",
  heading: "A Curious Mind. A Builder's Mindset.",
  introParagraph: "As an engineering student at Gopalan College of Engineering and Management, Bengaluru, I approach technology not just as code to compile, but as a discipline of crafting resilient, purposeful systems. I am fundamentally driven by curiosity — diving deep beneath surface abstractions to grasp how operating systems manage resources, how databases optimize queries, and how scalable backends endure real-world loads.",

  highlights: [
    {
      title: "Backend Engineering Focus",
      description: "Dedicated to mastering server architectures, RESTful API design, database schemas, and microservice fundamentals.",
      icon: "Server"
    },
    {
      title: "Strong Programming Foundations",
      description: "Actively sharpening Object-Oriented Programming (OOP) and algorithmic thinking through Java and core computer science principles.",
      icon: "Cpu"
    },
    {
      title: "AI-Powered Applications",
      description: "Harnessing modern Large Language Models (like Gemini) and multimodal APIs to solve contextual, localized human challenges.",
      icon: "Brain"
    },
    {
      title: "Hands-on Hardware & IoT",
      description: "Bridging physical microcontrollers (ESP32) and sensors with cloud backends to turn conceptual hardware into working prototypes.",
      icon: "Radio"
    },
    {
      title: "Hackathon-Driven Innovation",
      description: "Thriving under high-pressure sprint environments, collaborating with peers, and turning rough concepts into functional demos.",
      icon: "Trophy"
    },
    {
      title: "Code Comprehension First",
      description: "Committed to understanding the exact 'why' behind each architectural decision and line of code rather than blindly copying answers.",
      icon: "CheckCircle2"
    }
  ],

  principles: [
    "Understanding first, implementing second",
    "Clean interfaces & robust error handling",
    "Empowering end-users through intuitive tech",
    "Constant experimentation & humble learning"
  ]
};

export const skillsData = {
  sectionTitle: "Technical Skills",
  sectionSubtitle: "Categorized competencies with honest proficiency indicators — from established foundations to active explorations.",

  categories: [
    {
      id: "programming",
      name: "Programming",
      description: "Core languages and structural computer science fundamentals",
      skills: [
        {
          name: "Java",
          level: "Core Foundation",
          badgeType: "primary",
          description: "OOP principles, collections framework, exception handling, multithreading fundamentals",
          icon: "Coffee"
        },
        {
          name: "JavaScript",
          level: "Intermediate",
          badgeType: "accent",
          description: "ES6+, asynchronous programming (Promises, async/await), DOM manipulation, JSON handling",
          icon: "FileCode"
        },
        {
          name: "Programming Fundamentals",
          level: "Strong Foundation",
          badgeType: "primary",
          description: "Data Structures & Algorithms, Memory Management, Logic Building & Modular Design",
          icon: "Binary"
        }
      ]
    },
    {
      id: "frontend",
      name: "Frontend Development",
      description: "Modern, accessible, responsive client-side development",
      skills: [
        {
          name: "React",
          level: "Intermediate",
          badgeType: "accent",
          description: "Component architecture, functional hooks (useState, useEffect, useMemo), state flow",
          icon: "Layers"
        },
        {
          name: "HTML5",
          level: "Proficient",
          badgeType: "primary",
          description: "Semantic elements, web accessibility standards (ARIA), SEO best practices",
          icon: "Code"
        },
        {
          name: "CSS3",
          level: "Proficient",
          badgeType: "primary",
          description: "Flexbox, Grid layout, custom CSS variables, keyframe animations, glassmorphism",
          icon: "Palette"
        },
        {
          name: "Responsive Web Design",
          level: "Proficient",
          badgeType: "primary",
          description: "Mobile-first styling, media queries, adaptive layouts across all modern device viewports",
          icon: "Smartphone"
        }
      ]
    },
    {
      id: "backend",
      name: "Backend & Database",
      description: "Server architecture, data storage, and external system integrations",
      skills: [
        {
          name: "Backend Development Fundamentals",
          level: "Active Learning",
          badgeType: "learning",
          description: "Client-server architecture, HTTP protocols, request-response lifecycles, REST APIs",
          icon: "Server"
        },
        {
          name: "Firebase",
          level: "Working Knowledge",
          badgeType: "accent",
          description: "Firestore NoSQL database, Firebase Authentication, Cloud Storage, hosting rules",
          icon: "Flame"
        },
        {
          name: "Supabase",
          level: "Working Knowledge",
          badgeType: "accent",
          description: "PostgreSQL schemas, real-time subscriptions, Row Level Security (RLS), Auth",
          icon: "Database"
        },
        {
          name: "API Integration",
          level: "Intermediate",
          badgeType: "accent",
          description: "Consuming REST endpoints, handling bearer authentication, error recovery, JSON parsing",
          icon: "Webhook"
        }
      ]
    },
    {
      id: "ai-tools",
      name: "AI & Development Tools",
      description: "AI model orchestration, development platforms, and collaborative workflows",
      skills: [
        {
          name: "Google AI Studio",
          level: "Active Builder",
          badgeType: "accent",
          description: "Prompt tuning, system instruction modeling, multimodal experimentation, parameter tuning",
          icon: "Sparkles"
        },
        {
          name: "Gemini AI",
          level: "Active Builder",
          badgeType: "accent",
          description: "Gemini 1.5/2.0 API integration, multimodal vision-language parsing, structured JSON output",
          icon: "Bot"
        },
        {
          name: "Git & GitHub",
          level: "Working Knowledge",
          badgeType: "primary",
          description: "Version control, branching strategies, commit hygiene, pull requests, collaborative merges",
          icon: "GitBranch"
        },
        {
          name: "Google Stitch",
          level: "Exploring",
          badgeType: "learning",
          description: "Cross-platform cloud integration workflows, app glue architecture",
          icon: "Workflow"
        },
        {
          name: "Bhashini",
          level: "Working Knowledge",
          badgeType: "accent",
          description: "National Language Translation Mission API, Indic voice-to-text, regional language localization",
          icon: "Languages"
        }
      ]
    }
  ]
};

/**
 * Status Types:
 * - "Completed" (green)
 * - "Working Prototype" (cyan)
 * - "In Development" (amber)
 * - "Concept" (purple)
 */
export const featuredProjects = [
  {
    id: "udyam-setu",
    title: "UdyamSetu",
    tagline: "Empowering Marginalized MSMEs with AI Scheme Navigation & Eligibility Verification",
    domain: "GovTech / FinTech / AI",
    status: "Working Prototype",
    statusType: "prototype", // 'completed' | 'prototype' | 'in-progress' | 'concept'
    description: "An AI-powered GovTech platform engineered to bridge the accessibility gap between government assistance programs and grassroots MSME entrepreneurs. It decodes complex bureaucratic policy documents into simplified vernacular guidance.",
    overview: "Marginalized and small-scale business owners frequently miss out on critical government subsidies and credit guarantee schemes due to convoluted eligibility terminology and language barriers. UdyamSetu leverages generative AI and Bhashini to translate, evaluate criteria, and generate actionable document checklists.",
    keyFeatures: [
      "Government scheme discovery matching MSME business scale, sector, and demographic profile",
      "Preliminary algorithmic eligibility assessment reducing rejected applications",
      "Multilingual Indic speech & text support powered by the national Bhashini API",
      "AI-driven conversational scheme assistant explaining policy conditions in plain vernacular",
      "Automated document preparation guidance with checklist verification",
      "Assisted access workflows designed for Common Service Centres (CSCs) and local facilitators"
    ],
    technologies: ["Java", "React", "Gemini API", "Bhashini", "Firebase", "REST APIs"],
    architectureHighlights: "Modular client-server pipeline combining Bhashini speech-to-text with Gemini reasoning modules to map unstructured applicant queries directly to indexed government scheme criteria.",
    githubUrl: projectLinks.udyamSetu.githubUrl,
    demoUrl: projectLinks.udyamSetu.demoUrl,
    hasDemoModal: true,
    accentGlow: "from-purple-500/20 to-blue-500/20"
  },
  {
    id: "focus-buddy",
    title: "Focus Buddy",
    tagline: "ESP32-Powered Physical Pomodoro Companion with Haptic & Sensory Feedback",
    domain: "IoT / Embedded Systems / Productivity",
    status: "Working Prototype",
    statusType: "prototype",
    description: "A standalone, tactile Pomodoro productivity desk companion powered by an ESP32 microcontroller, featuring real-time visual progress on an OLED screen, user proximity sensing, and physical servo feedback.",
    overview: "Digital timers are easily ignored behind browser tabs. Focus Buddy brings mindfulness and focused flow state back into the physical realm using physical servo flags, ultrasonic user presence detection, and audible cue pacing.",
    keyFeatures: [
      "25-minute deep focus intervals and 5-minute restorative break cycles",
      "Crisp 0.96-inch monochrome OLED display showing active timers and progress bars",
      "Ultrasonic proximity sensor detecting when the user sits down or leaves the desk",
      "Integrated servo motor driving physical visual status indicators and alerts",
      "Buzzer notification cues with distinct pitch profiles for session transitions",
      "Tactile push-button interface for start, pause, skip, and reset interactions"
    ],
    technologies: ["ESP32", "C / C++", "OLED (I2C)", "Ultrasonic Sensor", "Servo Control", "FreeRTOS"],
    architectureHighlights: "Interrupt-driven C++ firmware running on ESP32 with state-machine task scheduling for timing accuracy, debounced hardware inputs, and non-blocking sensor telemetry.",
    githubUrl: projectLinks.focusBuddy.githubUrl,
    demoUrl: projectLinks.focusBuddy.demoUrl,
    hasDemoModal: true,
    accentGlow: "from-cyan-500/20 to-emerald-500/20"
  },
  {
    id: "moodify-mirror",
    title: "Moodify Mirror",
    tagline: "Smart Interactive Mirror Integrating Multimodal Vision AI with Ambient Feedback",
    domain: "IoT / AI / Embedded Systems",
    status: "Working Prototype",
    statusType: "prototype",
    description: "An intelligent IoT vanity mirror prototype combining edge camera vision with the Gemini API to analyze facial expressions and deliver synchronized ambient lighting and audio experiences.",
    overview: "Built to explore human-computer interaction in home environments, Moodify Mirror captures momentary facial cues, evaluates emotional valence via Gemini's vision endpoints, and modulates surrounding room acoustics and LED spectrum accordingly.",
    keyFeatures: [
      "ESP32-CAM module handling image frame capture and lightweight edge buffering",
      "Gemini Multimodal API analysis for context-aware mood and sentiment evaluation",
      "Addressable WS2812B RGB LED strip creating adaptive ambient chromatic glows",
      "High-fidelity digital audio playback via MAX98357A I2S DAC amplifier",
      "Onboard MicroSD card storage for offline sound profiles and logging telemetry",
      "Real-time state orchestration balancing hardware limits with cloud latency"
    ],
    technologies: ["ESP32-CAM", "WS2812B LEDs", "MAX98357A I2S", "Gemini API", "MicroSD", "C++"],
    architectureHighlights: "Hybrid architecture where the ESP32 captures camera buffers, securely transmits Base64 streams over Wi-Fi to a cloud inference hook, and drives peripheral I2S audio and WS2812B PWM simultaneously.",
    githubUrl: projectLinks.moodifyMirror.githubUrl,
    demoUrl: projectLinks.moodifyMirror.demoUrl,
    hasDemoModal: true,
    accentGlow: "from-violet-500/20 to-pink-500/20"
  },
  {
    id: "cravely-reels2meals",
    title: "Cravely – Reels2Meals",
    tagline: "Turn Cooking Videos and Vernacular Voice Prompts into Actionable Grocery Lists",
    domain: "FoodTech / AI / Voice Technology",
    status: "Concept / In Development",
    statusType: "in-progress",
    description: "A smart culinary assistant that parses fast-paced cooking reels, shorts, and colloquial voice instructions in regional Indian languages, transforming them into categorized grocery shopping lists.",
    overview: "People save hundreds of social media recipe reels but struggle to transcribe ingredients while cooking. Cravely accepts video URLs or spoken instructions, understands dialectal ingredient variations (e.g., Hing, Jeera, Dhaniya), and outputs structured pantry checklists.",
    keyFeatures: [
      "Recipe reel video URL parsing and audio transcription pipeline",
      "Multilingual regional voice input supporting Kannada, Telugu, Tamil, and Hindi",
      "Intelligent ingredient extraction with unit conversion (spoons to grams/ml)",
      "Smart pantry categorization (Produce, Spices, Dairy, Dry Goods)",
      "One-tap sharing to quick-commerce delivery carts and messaging apps"
    ],
    technologies: ["React", "Python", "Gemini 1.5 Flash", "Bhashini API", "Speech Recognition", "REST"],
    architectureHighlights: "Utilizes Gemini 1.5's large multimodal context window for end-to-end recipe extraction paired with Bhashini's speech models for seamless Indic speech transcription.",
    githubUrl: projectLinks.cravely.githubUrl,
    demoUrl: projectLinks.cravely.demoUrl,
    hasDemoModal: true,
    accentGlow: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: "neurofeed",
    title: "NeuroFeed",
    tagline: "Adaptive AI-Driven Micro-Learning Feed for Complex Technical Concepts",
    domain: "EdTech / AI",
    status: "Concept",
    statusType: "concept",
    description: "An AI-based personalized educational concept designed to eliminate cognitive overload by transforming textbook topics into bite-sized, interactive, and comprehension-adapted learning streams.",
    overview: "Traditional learning platforms present static syllabi that fail to adapt when a student struggles with a prerequisite. NeuroFeed constructs dynamic knowledge dependency graphs, diagnosing learning gaps in real-time.",
    keyFeatures: [
      "Dynamic knowledge graph construction breaking complex topics into modular steps",
      "Adaptive pacing algorithm adjusting depth based on quick interactive check-ins",
      "Interactive code and diagram comprehension widgets embedded directly in feed",
      "Socratic explanation assistant providing intuitive analogies for difficult abstractions",
      "Spaced repetition telemetry optimizing long-term memory retention"
    ],
    technologies: ["React", "Generative AI Prompts", "Supabase", "Knowledge Graph Architecture", "Tailwind"],
    architectureHighlights: "Hierarchical concept decomposition pipeline using structured prompting to produce progressive scaffolding based on student self-assessments.",
    githubUrl: projectLinks.neuroFeed.githubUrl,
    demoUrl: projectLinks.neuroFeed.demoUrl,
    hasDemoModal: true,
    accentGlow: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: "crisisgrid-ai",
    title: "CrisisGrid AI",
    tagline: "Low-Bandwidth Crisis Response & Urgent Resource Allocation Orchestrator",
    domain: "AI / Social Impact",
    status: "Concept",
    statusType: "concept",
    description: "An AI-driven disaster management concept engineered to aggregate chaotic emergency signals, prioritize high-vulnerability distress calls, and coordinate local volunteer mobilization under low-connectivity conditions.",
    overview: "Conceived during an emergency response hackathon, CrisisGrid AI tackles the breakdown of communication during urban flooding and natural crises by clustering SMS and social distress requests into geo-spatial priority zones.",
    keyFeatures: [
      "Automated triage clustering prioritizing medical emergencies over non-critical requests",
      "Low-bandwidth data payload optimization for offline / mesh transmission",
      "Interactive emergency response map with dynamic heatmaps and routing overlays",
      "Resource matching algorithm connecting local aid supplies to nearby verified shelters",
      "Automated summary reports for civil emergency responders and NGOs"
    ],
    technologies: ["React", "Node.js", "Gemini AI", "Geo-Spatial Mapping", "IndexedDB Offline Cache"],
    architectureHighlights: "Resilient offline-first state architecture using client-side indexing and lightweight sync protocols when connection restores.",
    githubUrl: projectLinks.crisisGrid.githubUrl,
    demoUrl: projectLinks.crisisGrid.demoUrl,
    hasDemoModal: true,
    accentGlow: "from-rose-500/20 to-purple-500/20"
  }
];

export const projectIdeas = [
  {
    id: "ecopulse-ai",
    title: "EcoPulse AI",
    domain: "Sustainability / AI",
    status: "Concept",
    description: "Micro-habit sustainability tracker measuring individual resource consumption and recommending personalized carbon reduction targets.",
    tags: ["AI", "Sustainability", "Behavioral Modeling"]
  },
  {
    id: "greenprint",
    title: "GreenPrint",
    domain: "Green Tech / Web",
    status: "Concept",
    description: "Digital sustainability analyzer assessing the server energy efficiency and carbon weight of developer websites and cloud endpoints.",
    tags: ["Cloud Metrics", "Performance", "Green Computing"]
  },
  {
    id: "smartcart-ai",
    title: "SmartCart AI",
    domain: "Retail Tech / IoT",
    status: "Concept",
    description: "Automated retail cart integrating load-cell sensors and computer vision barcodes to enable scan-free frictionless checkout lanes.",
    tags: ["Embedded Sensors", "Computer Vision", "Retail Automation"]
  },
  {
    id: "ai-question-paper-creator",
    title: "AI Question Paper Creator",
    domain: "EdTech / AI",
    status: "Concept",
    description: "Curriculum-aligned question paper synthesizer enforcing Bloom's taxonomy balance across multiple cognitive difficulty levels.",
    tags: ["Generative AI", "Bloom's Taxonomy", "Academic Tool"]
  },
  {
    id: "job-love-arjunax",
    title: "Job Love by ArjunaX",
    domain: "HR Tech / Career AI",
    status: "Concept",
    description: "Culture and developer aptitude matchmaking engine evaluating work style harmony rather than keyword-stuffed resumes.",
    tags: ["Algorithmic Matching", "Talent Intelligence", "Career Design"]
  },
  {
    id: "heal-nest-x",
    title: "HEAL-NEST X",
    domain: "HealthTech / IoT",
    status: "Concept",
    description: "Intelligent recovery room environmental monitor regulating patient ambient temperature, acoustic noise levels, and circadian lighting.",
    tags: ["Sensors", "Healthcare IoT", "Environmental Control"]
  },
  {
    id: "ai-dustbin-2",
    title: "AI Dustbin 2.0",
    domain: "Smart Cities / IoT",
    status: "Concept",
    description: "Autonomous smart waste bin employing edge camera classification to segment recyclable plastics, paper, and compostable organic waste at the point of disposal.",
    tags: ["ESP32-CAM", "Edge AI", "Robotics"]
  },
  {
    id: "omr-sheet-analyzer",
    title: "OMR Sheet Analyzer",
    domain: "Computer Vision / EdTech",
    status: "Working Prototype",
    statusType: "prototype",
    description: "Low-cost mobile optical mark recognition tool utilizing smartphone camera perspective correction to grade student test sheets in under 2 seconds without expensive scanners.",
    tags: ["OpenCV / Vision", "Image Processing", "Accessible EdTech"]
  },
  {
    id: "smart-irrigation-system",
    title: "Smart Irrigation System",
    domain: "AgriTech / IoT",
    status: "Concept",
    description: "Micro-drip irrigation system combining multi-depth capacitive soil moisture sensors with local weather API forecast data to save up to 45% water in rural farmland.",
    tags: ["IoT Hardware", "Soil Telemetry", "AgriTech"]
  },
  {
    id: "bank-scheme-comparison",
    title: "Bank Scheme Comparison Platform",
    domain: "FinTech / GovTech",
    status: "Concept",
    description: "Transparent financial matrix analyzing interest subsidies, collateral mandates, and processing charges across public and private bank schemes for small businesses.",
    tags: ["Financial Data", "Comparison Engine", "MSME Finance"]
  },
  {
    id: "hesitant-student-doubt-support",
    title: "Hesitant Student Doubt Support System",
    domain: "EdTech / AI",
    status: "Concept",
    description: "Safe, anonymous classroom query conduit allowing introverted students to submit micro-questions during live lectures, summarized in real-time on the instructor's dashboard.",
    tags: ["Inclusive Learning", "Real-Time Websockets", "NLP Triage"]
  }
];

export const achievementsData = {
  sectionTitle: "Hackathons & Milestones",
  sectionSubtitle: "Real experiences gained through collaborative sprint building, competitive challenges, and continuous hands-on learning.",
  timeline: [
    {
      id: "tech4bharat",
      event: "Tech4Bharat Hackathon",
      badge: "National Hackathon",
      year: "Active Participation",
      description: "Participated in an intensive nationwide hackathon aimed at building indigenous technology platforms addressing critical grassroots challenges across India.",
      learnings: [
        "Rapid sprint ideation and requirement scoping under strict hackathon deadlines",
        "Collaborative problem solving and cross-functional team coordination",
        "Focus on scalable, vernacular-friendly solutions for diverse citizen groups"
      ],
      icon: "Award"
    },
    {
      id: "udyamsetu-dev",
      event: "UdyamSetu Project Development",
      badge: "Major Innovation Project",
      year: "Project Milestone",
      description: "Spearheaded the technical architecture of UdyamSetu, creating a functional prototype combining Indic language translation (Bhashini) with Gemini AI for MSME scheme navigation.",
      learnings: [
        "Architecting full-stack pipelines bridging language models with structured public scheme data",
        "Refining user workflows for users with limited digital literacy",
        "Document verification heuristics and preliminary eligibility rule logic"
      ],
      icon: "Rocket"
    },
    {
      id: "decode-top100",
      event: "Decode Hackathon — Top 100 Recognition",
      badge: "Top 100 Finalist",
      year: "Recognition",
      description: "Honored with a place in the Top 100 shortlisted teams out of extensive submissions for presenting practical, high-impact technological solutions.",
      learnings: [
        "Feasibility and viability validation in front of technical evaluators",
        "Pitching technical architectures succinctly to highlight architectural strengths",
        "Constructive feedback from senior industry mentors on system modularity"
      ],
      icon: "Trophy"
    },
    {
      id: "bems-college-hackathon",
      event: "Hackathon Participation at BEMS College",
      badge: "Collegiate Hackathon",
      year: "Competitive Sprint",
      description: "Engaged in collaborative on-ground hackathon building, teaming up with peers to design, debug, and present working prototypes in a timed competition environment.",
      learnings: [
        "Live debugging and hardware-software integration under tight pressure",
        "Effective task delegation and peer code review practices",
        "Resilient demo preparation with contingency fallbacks"
      ],
      icon: "Code2"
    },
    {
      id: "collaborative-dev",
      event: "Collaborative Project Development & Mentorship",
      badge: "Teamwork & Synergy",
      year: "Continuous",
      description: "Active contributor and collaborator in student engineering teams, pairing backend logic with physical computing microcontrollers and clean frontend interfaces.",
      learnings: [
        "Git branch management, merge conflict resolution, and structured PRs",
        "Clear technical documentation and architectural diagramming",
        "Empathy-driven peer code reviews and knowledge sharing"
      ],
      icon: "Users"
    },
    {
      id: "continuous-learning",
      event: "Continuous Technical Deep-Dives",
      badge: "Self-Driven Learning",
      year: "Ongoing Commitment",
      description: "Committed to ongoing deep dives into core Java concepts, backend system patterns, database index optimization, and state-of-the-art AI model capabilities.",
      learnings: [
        "Relentless emphasis on understanding algorithmic complexity rather than copy-pasting",
        "Hands-on experimentation with IoT hardware pins and protocols (I2C, SPI, UART)",
        "Daily code practice strengthening fundamental computer science problem solving"
      ],
      icon: "BookOpen"
    }
  ]
};

export const educationData = {
  sectionTitle: "Education & Academics",
  sectionSubtitle: "Strong theoretical foundations paired with hands-on engineering practice.",
  institution: "Gopalan College of Engineering and Management",
  location: "Bengaluru, Karnataka, India",
  degree: "Bachelor of Engineering (B.E.)",
  branch: "Computer Science and Engineering (CSE)",
  status: "Undergraduate Student (Currently Pursuing)",
  highlights: [
    "Comprehensive coverage of core Computer Science: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Object-Oriented System Design",
    "Active participant in campus technical clubs, hackathon squads, and project showcase symposiums",
    "Strong hands-on laboratory discipline adhering to version control and structured programming documentation"
  ],
  keyCoursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming with Java",
    "Database Management Systems (DBMS)",
    "Operating Systems & Process Scheduling",
    "Computer Organization & Architecture",
    "Software Engineering & Agile Practices",
    "Web Technologies & API Design"
  ]
};

export const codePlaygroundSnippet = {
  filename: "UdyamSetuEngine.java",
  language: "java",
  code: `public class UdyamSetuEngine {
    private final BhashiniVoiceClient voiceClient;
    private final GeminiAiReasoner aiReasoner;

    public SchemeEligibility evaluateMSME(BusinessProfile profile) {
        // Step 1: Decode vernacular voice input if present
        String parsedNeed = voiceClient.translateToEnglish(profile.getVoicePrompt());
        
        // Step 2: Query scheme criteria using Gemini reasoning
        SchemeRecommendation recommendation = aiReasoner.analyzeCriteria(
            profile.getEnterpriseType(),
            profile.getInvestmentTurnover(),
            parsedNeed
        );
        
        // Step 3: Return preliminary actionable eligibility
        return new SchemeEligibility(
            recommendation.getSchemeName(),
            recommendation.isLikelyEligible(),
            recommendation.getRequiredDocumentsChecklist()
        );
    }
}`
};
