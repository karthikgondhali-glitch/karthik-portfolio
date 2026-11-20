const fs = require('fs');
const path = require('path');

const content = [
  'BT',
  '/F2 22 Tf',
  '50 780 Td',
  '(KARTHIK V.G.) Tj',
  '0 -24 Td',
  '/F2 11 Tf',
  '(Computer Science & Engineering Student | Aspiring Backend Developer | AI Enthusiast) Tj',
  '0 -18 Td',
  '/F1 9 Tf',
  '(Email: karthikvg.official@gmail.com | Bengaluru, Karnataka, India | Degree: B.E. CSE) Tj',
  '0 -28 Td',
  '/F2 12 Tf',
  '(ACADEMIC BACKGROUND) Tj',
  '0 -16 Td',
  '/F2 10 Tf',
  '(Gopalan College of Engineering and Management, Bengaluru) Tj',
  '0 -14 Td',
  '/F1 9 Tf',
  '(Bachelor of Engineering in Computer Science and Engineering - Undergraduate Student) Tj',
  '0 -14 Td',
  '(Coursework: Data Structures & Algorithms, Java OOP, DBMS, Operating Systems, Networks) Tj',
  '0 -26 Td',
  '/F2 12 Tf',
  '(CORE TECHNICAL COMPETENCIES) Tj',
  '0 -16 Td',
  '/F1 9 Tf',
  '(Programming: Java (Core, OOP, Collections), JavaScript (ES6+), Programming Fundamentals) Tj',
  '0 -14 Td',
  '(Frontend: React, HTML5, CSS3, Responsive Web Design) Tj',
  '0 -14 Td',
  '(Backend & Database: Backend Development Fundamentals, Firebase, Supabase, API Integration) Tj',
  '0 -14 Td',
  '(AI & Dev Tools: Google AI Studio, Gemini AI, Git and GitHub, Google Stitch, Bhashini) Tj',
  '0 -26 Td',
  '/F2 12 Tf',
  '(FEATURED PROJECTS & PROTOTYPES) Tj',
  '0 -16 Td',
  '/F2 10 Tf',
  '(1. UdyamSetu - GovTech / FinTech / AI Platform [Working Prototype]) Tj',
  '0 -14 Td',
  '/F1 9 Tf',
  '(- AI-powered platform helping MSMEs discover schemes, understand eligibility and prepare docs.) Tj',
  '0 -13 Td',
  '(- Multilingual Indic voice support powered by Bhashini API paired with Gemini AI reasoning.) Tj',
  '0 -16 Td',
  '/F2 10 Tf',
  '(2. Focus Buddy - ESP32 Smart Pomodoro Companion [Working Prototype]) Tj',
  '0 -14 Td',
  '/F1 9 Tf',
  '(- 25/5-min Pomodoro timer with 0.96-inch OLED, ultrasonic presence sensing, servo & buzzer cues.) Tj',
  '0 -16 Td',
  '/F2 10 Tf',
  '(3. Moodify Mirror - IoT / Multimodal AI Smart Mirror [Working Prototype]) Tj',
  '0 -14 Td',
  '/F1 9 Tf',
  '(- ESP32-CAM prototype evaluating facial expressions via Gemini API and adapting LEDs & audio.) Tj',
  '0 -16 Td',
  '/F2 10 Tf',
  '(4. Cravely - Reels2Meals [FoodTech / Vernacular Voice AI Concept]) Tj',
  '0 -14 Td',
  '/F1 9 Tf',
  '(- Converts video reels and vernacular voice instructions into categorized grocery lists.) Tj',
  '0 -26 Td',
  '/F2 12 Tf',
  '(HACKATHONS & RECOGNITION) Tj',
  '0 -16 Td',
  '/F1 9 Tf',
  '(- Tech4Bharat Hackathon: Built indigenous technology solutions for Indian MSME access.) Tj',
  '0 -14 Td',
  '(- Decode Hackathon: Ranked among Top 100 teams for technical feasibility and architecture.) Tj',
  '0 -14 Td',
  '(- BEMS College Hackathon: Collaborative rapid prototype sprint under live jury evaluation.) Tj',
  'ET'
].join('\n');

const streamBuf = Buffer.from(content, 'utf-8');

const objects = [];
function makeObj(num, body) {
  return `${num} 0 obj\n${body}\nendobj\n`;
}

const obj1 = makeObj(1, '<< /Type /Catalog /Pages 2 0 R >>');
const obj2 = makeObj(2, '<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
const obj3 = makeObj(3, '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>');
const obj4 = makeObj(4, `<< /Length ${streamBuf.length} >>\nstream\n${content}\nendstream`);
const obj5 = makeObj(5, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
const obj6 = makeObj(6, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');

const allObjs = [obj1, obj2, obj3, obj4, obj5, obj6];

let body = '%PDF-1.4\n';
const offsets = [0];

for (const obj of allObjs) {
  offsets.push(Buffer.byteLength(body, 'utf-8'));
  body += obj;
}

const startxref = Buffer.byteLength(body, 'utf-8');
let xref = `xref\n0 ${offsets.length}\n0000000000 65535 f \n`;
for (let i = 1; i < offsets.length; i++) {
  xref += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
}
xref += `trailer\n<< /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`;

const finalPdf = body + xref;
const outDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
const outPath = path.join(outDir, 'resume.pdf');
fs.writeFileSync(outPath, finalPdf, 'binary');
console.log('Successfully created valid PDF at:', outPath, 'Bytes:', fs.statSync(outPath).size);
