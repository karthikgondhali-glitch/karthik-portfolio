# Karthik V.G. — Personal Developer Portfolio

> **"Building ideas into real-world solutions."**  
> Computer Science & Engineering Student | Aspiring Backend Developer | AI Enthusiast | Technology-Driven Problem Solver

A high-performance, dark-themed, responsive developer portfolio built for **Karthik V.G.** to showcase backend engineering depth, practical AI model integrations, embedded IoT prototypes, and hackathon accomplishments.

---

## 🎨 Visual Identity & Design Tokens

Designed following a refined, modern developer aesthetic:
- **Background**: Deep Charcoal Black (`#0B0B12`, `#0F101D`)
- **Primary Accent**: Electric Violet (`#A995FF`, `#7C3AED`)
- **Secondary Accent**: Cyber Blue (`#38BDF8`, `#60A5FA`)
- **Cards**: Dark Navy Glassmorphism (`#121324`) with subtle glowing borders
- **Headings Font**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- **Body Font**: [DM Sans](https://fonts.google.com/specimen/DM+Sans)
- **Code Font**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

---

## 🚀 Key Sections & Features

1. **Hero Landing**:
   - High-impact introduction with title and real-time collaboration indicator.
   - "Download Resume" (configured to download `/public/resume.pdf` with dedicated preview modal).
   - "View Projects" and direct mailto / social profile triggers.
   - **Interactive Code Simulation Sandbox**: Switch between Java Backend (`UdyamSetu`), ESP32 C++ firmware (`Focus Buddy`), and Gemini AI prompt streaming (`Moodify Mirror`) with a live interactive "Run Simulation" button.

2. **About Me**:
   - Heading: *"A Curious Mind. A Builder's Mindset."*
   - Honest, authentic engineering narrative highlighting Java fundamentals, backend architectures, system design curiosities, and a commitment to deep code comprehension over copy-pasting.

3. **Technical Skills**:
   - Four distinct categories: *Programming*, *Frontend*, *Backend & Database*, and *AI & Development Tools*.
   - **Honest Proficiency Indicators**: Skills are transparently tagged with realistic levels (`Core Foundation`, `Intermediate`, `Active Learning`, `Working Knowledge`, `Active Builder`, `Exploring`).

4. **Featured Projects (6 Projects)**:
   - **UdyamSetu** (GovTech / FinTech / AI) — Scheme discovery & Indic voice assistant.
   - **Focus Buddy** (IoT / Embedded Systems) — ESP32 Pomodoro desk companion with OLED, ultrasonic presence sensing, and physical servo feedback.
   - **Moodify Mirror** (IoT / AI) — Intelligent mirror integrating ESP32-CAM, Gemini Multimodal API, WS2812B LEDs, and I2S audio DAC.
   - **Cravely – Reels2Meals** (FoodTech / AI / Voice) — Regional recipe video to grocery list parser.
   - **NeuroFeed** (EdTech / AI) — Adaptive personalized micro-learning stream concept.
   - **CrisisGrid AI** (AI / Social Impact) — Low-bandwidth disaster response orchestrator.
   - Includes **Architecture Deep Dive Modal** with full technical breakdown.

5. **Ideas & Explorations (11 Concepts)**:
   - Transparent lab for conceptual ideas (*EcoPulse AI, GreenPrint, SmartCart AI, AI Question Paper Creator, Job Love by ArjunaX, HEAL-NEST X, AI Dustbin 2.0, OMR Sheet Analyzer, Smart Irrigation System, Bank Scheme Comparison Platform, Hesitant Student Doubt Support System*).
   - Search bar and category tags.

6. **Hackathons & Milestones**:
   - Timeline highlighting *Tech4Bharat*, *UdyamSetu development*, *Decode Top 100 recognition*, and *BEMS College Hackathon*.

7. **Education**:
   - **Gopalan College of Engineering and Management, Bengaluru** (Bachelor of Engineering in CSE).
   - Academic coursework, labs, and student activities.

8. **Contact & Footer**:
   - Direct Email, GitHub, and LinkedIn profile actions.
   - Contact form with client-side validation and direct mailto launcher (no fake database claims).

---

## 📁 Project Structure

```
my portfolio/
├── public/
│   ├── favicon.svg              # Custom monogram favicon
│   └── resume.pdf               # Valid, ready-to-download PDF resume
├── src/
│   ├── assets/                  # Static assets
│   ├── components/
│   │   ├── BrandIcons.jsx       # Pixel-perfect SVG brand icons (GitHub, LinkedIn)
│   │   ├── Navbar.jsx           # Responsive glassmorphism header & mobile drawer
│   │   ├── Hero.jsx             # Hero section with interactive code playground
│   │   ├── About.jsx            # About narrative and operating principles
│   │   ├── Skills.jsx           # Categorized skills with proficiency badges
│   │   ├── Projects.jsx         # 6 Featured project cards with status pills
│   │   ├── IdeasExplorations.jsx# 11 Idea cards with live search & filters
│   │   ├── Hackathons.jsx       # Visual vertical milestone timeline
│   │   ├── Education.jsx        # College & coursework showcase
│   │   ├── Contact.jsx          # Interactive contact form & social channels
│   │   ├── Footer.jsx           # Footer with back-to-top and credits
│   │   ├── ProjectModal.jsx     # Deep dive architectural popup
│   │   └── ResumeModal.jsx      # Resume preview & download popup
│   ├── data/
│   │   └── portfolioData.js     # ⭐ Centralized data file (edit all content here!)
│   ├── styles/
│   │   └── index.css            # Complete design system & responsive styling
│   ├── App.jsx                  # Main application container
│   └── main.jsx                 # Vite application entry point
├── scripts/
│   └── generate-resume.cjs      # Generates valid PDF resume to public/resume.pdf
├── index.html                   # HTML template with Google Fonts & SEO metadata
├── vite.config.js               # Vite build configuration
└── package.json                 # Dependencies and scripts
```

---

## 🛠️ How to Run Locally

### 1. Prerequisites
Ensure you have **Node.js (v18+)** installed.

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
The optimized static bundle will be created in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Customize Your Content

All data is centralized in **`src/data/portfolioData.js`**. You do not need to touch component code to change your information!

1. **Update Social Links & Email**:
   Edit `personalData.contact`:
   ```javascript
   email: "your.email@gmail.com",
   github: "https://github.com/your-username",
   linkedin: "https://linkedin.com/in/your-profile",
   ```

2. **Replace Your Resume**:
   - Simply drop your exported PDF into `public/resume.pdf` (keeping the filename `resume.pdf`), OR
   - Change `personalData.resume.downloadUrl` in `src/data/portfolioData.js`.

3. **Add or Edit Projects**:
   - Modify the `featuredProjects` array or `projectIdeas` array in `portfolioData.js`.
   - Update `status` to `"Completed"`, `"Working Prototype"`, `"In Development"`, or `"Concept"`.

---

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended — Free & Instant)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `my portfolio` repository.
4. Framework Preset: **Vite** (auto-detected).
5. Click **"Deploy"**. Your portfolio will be live in 30 seconds with global CDN and automatic HTTPS!

### Option 2: Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/<repo-name>/'`.
2. Run `npm run build`.
3. Use the `gh-pages` package:
   ```bash
   npx gh-pages -d dist
   ```

### Option 3: Deploy to Netlify
1. Drag and drop the `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
2. Or connect your GitHub repository; Build command: `npm run build`, Publish directory: `dist`.

---

## 📄 License
This portfolio template is personal to **Karthik V.G.** Feel free to adapt and build upon it!
