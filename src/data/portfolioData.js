// ============================================================
// 📋 PORTFOLIO DATA — Edit all your personal info here!
// ============================================================

export const personalInfo = {
  // ✏️ UPDATE: Your full name
  name: "Harshini Balasubramanian",

  // ✏️ UPDATE: Short headline shown under your name
  headline: "NTU Masters in Artificial Intelligence",

  // ✏️ UPDATE: One-line tagline
  tagline: "Building intelligent systems at the intersection of AI, data, and security.",

  // ✏️ UPDATE: Short intro for hero section (1-2 sentences)
  heroIntro:
    "Final-year Computer Science student passionate about machine learning, software development, and cybersecurity. I build projects that solve real problems.",

  // ✏️ UPDATE: Longer about me paragraph
  aboutMe:
    "I'm a Computer Science student with a deep interest in artificial intelligence, machine learning, and software engineering. My journey in tech started when I built my first Python script to automate a tedious task — and I've been hooked ever since. I enjoy working at the intersection of AI, data science, and cybersecurity, building systems that are both intelligent and robust. Outside of academics, I actively explore open-source projects, participate in hackathons, and enjoy reading about the latest advancements in large language models and AI safety. I'm currently seeking internship and research opportunities where I can apply my technical skills and continue growing as an engineer.",

  // ✏️ UPDATE: Your contact details
  email: "harshini.balasubramanian@gmail.com",
  github: "https://github.com/HarshiniProfile",
  linkedin: "https://www.linkedin.com/in/harshinibalasubramanian/",

  // ✏️ UPDATE: Direct link to your resume PDF (e.g. Google Drive share link or GitHub link)
  resumeLink: "https://drive.google.com/your-resume-link",

  // ✏️ UPDATE: Your location (optional)
  location: "Singapore",
};

// ============================================================
// 🚀 PROJECTS — Add / remove project objects in this array
// ============================================================
export const projects = [
  {
    id: 1,
    title: "Credit Card Fraud Detection",
    description:
      "A machine learning system that detects fraudulent credit card transactions in real-time using anomaly detection and classification algorithms on highly imbalanced financial datasets.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "SMOTE", "Matplotlib"],
    keyFeatures: [
      "Handles severe class imbalance using SMOTE oversampling",
      "Ensemble model achieving 99.2% AUC-ROC",
      "Feature engineering from transaction patterns",
      "Real-time inference pipeline",
    ],
    role: "Solo Developer — end-to-end ML pipeline, data preprocessing, model training and evaluation.",
    github: "https://github.com/alexchen/fraud-detection",
    demo: "", // ✏️ Leave empty if no demo
    category: "Machine Learning",
  },
  {
    id: 2,
    title: "AI Customer Support Chatbot",
    description:
      "An LLM-powered customer support chatbot using Retrieval-Augmented Generation (RAG) to answer questions from a company knowledge base with accurate, context-aware responses.",
    technologies: ["Python", "LangChain", "OpenAI API", "FAISS", "FastAPI", "React"],
    keyFeatures: [
      "RAG architecture with vector similarity search",
      "Conversation memory for multi-turn dialogue",
      "REST API backend with FastAPI",
      "React frontend with streaming responses",
    ],
    role: "Full-stack Developer — RAG pipeline, backend API, and frontend UI.",
    github: "https://github.com/alexchen/ai-chatbot",
    demo: "https://ai-chatbot-demo.vercel.app",
    category: "LLM / RAG",
  },
  {
    id: 3,
    title: "Network Intrusion Detection System",
    description:
      "A machine learning-based NIDS that classifies network traffic as normal or malicious using the NSL-KDD dataset, with a dashboard for real-time monitoring.",
    technologies: ["Python", "Scikit-learn", "Random Forest", "Pandas", "Streamlit", "Wireshark"],
    keyFeatures: [
      "Multi-class attack classification (DoS, Probe, R2L, U2R)",
      "98.7% detection accuracy on test set",
      "Interactive Streamlit dashboard",
      "Feature importance analysis",
    ],
    role: "Solo Developer — data processing, model development, and dashboard creation.",
    github: "https://github.com/alexchen/nids",
    demo: "",
    category: "Cybersecurity",
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    description:
      "An interactive web dashboard for exploring and visualising large datasets, featuring dynamic charts, filters, and export capabilities for business intelligence use cases.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    keyFeatures: [
      "Interactive charts with drill-down capability",
      "Real-time data filtering and search",
      "CSV/Excel export functionality",
      "Responsive design for all devices",
    ],
    role: "Full-stack Developer — database design, API development, and React frontend.",
    github: "https://github.com/alexchen/analytics-dashboard",
    demo: "https://analytics-dashboard-demo.netlify.app",
    category: "Data Science",
  },
  // ✏️ ADD MORE PROJECTS: Copy the block above and paste below this line
];

// ============================================================
// 🛠️ SKILLS — Edit categories and skill lists
// ============================================================
export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code",
    skills: ["Python", "JavaScript", "Java", "SQL", "Bash"],
  },
  {
    category: "AI / Machine Learning",
    icon: "Brain",
    skills: ["Machine Learning", "Deep Learning", "NLP", "LLMs", "RAG", "Data Preprocessing", "Model Evaluation", "Computer Vision"],
  },
  {
    category: "Web Development",
    icon: "Globe",
    skills: ["React", "Next.js", "FastAPI", "Node.js", "HTML/CSS", "Tailwind CSS", "REST APIs"],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "FAISS (Vector DB)"],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Jupyter Notebook", "Google Colab", "Linux"],
  },
  {
    category: "Cybersecurity & Data",
    icon: "Shield",
    skills: ["Network Security", "Intrusion Detection", "Data Cleaning", "Data Visualisation", "OWASP", "Wireshark"],
  },
];

// ============================================================
// 🏅 CERTIFICATIONS — Add / remove certifications
// ============================================================
export const certifications = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Foundational certification covering AWS cloud concepts, services, security, and pricing.",
    link: "https://www.credly.com/badges/cdca78d9-66b4-47f2-8890-8dffab10ec72", // ✏️ UPDATE or leave ""
  },

  // ✏️ ADD MORE: Copy a block above and paste here
];

// ============================================================
// 🏆 AWARDS & ACHIEVEMENTS
// ============================================================
export const awards = [
{
    id: 1,
    title: "University Pretigious award",
    organisation: "Singapore Institute of Management",
    year: "2026",
    description: "Awarded for academic excellence, professional excellence and leadership.",
  },
  // ✏️ ADD MORE: Copy a block above and paste here
];

// ============================================================
// 🎓 EDUCATION — Timeline
// ============================================================
export const education = [
  {
    id: 1,
    degree: "Masters of Computing in Artificial Intelligence",
    institution: "Nanyang Technological University",
    duration: "2025-2026",
    description:
      "Specialising in Artificial Intelligence. Relevant modules: Machine Learning, Deep Learning, Agentic AI , LLM and RAG, Reinforcement Learning, Computer Vision, Software Engineering.",
    achievement: "CAP: 4.3 / 5.0",
  },
  {
    id: 2,
    degree: "Bachelor of Computing (Computer Science)",
    institution: "National University of Singapore",
    duration: "2022-2025",
    description:
      "Specialising in Artificial Intelligence. Relevant modules: Machine Learning, Deep Learning, Data Structures & Algorithms, Computer Networks, Cybersecurity, Database Systems, Software Engineering.",
    achievement: "CAP: 4.3 / 5.0",
  },
  // ✏️ ADD MORE: Copy a block above and paste here
];

// ============================================================
// 💼 EXPERIENCE — Timeline
// ============================================================
export const experience = [
  {
  id: 1,
  role: "Data Scientist Intern (AI and GenAI Products)",
  organisation: "Monetary Authority of Singapore",
  duration: "Feb 2026 – Present",
  type: "Internship",
  description:
  "Designed end-to-end AI/ML pipelines in Python, covering data cleaning, exploratory data analysis, preprocessing, feature engineering, model training, testing, and evaluation. Applied LLMs to analyse unstructured data such as text, reports, and logs, and built dashboards and self-service analytics tools to support stakeholder reporting and cloud-based model testing.",
  skills: ["Python", "LLMs", "Streamlit", "Dash", "Plotly", "Tableau", "Machine Learning"],
  },
  
  {
  id: 2,
  role: "Data Scientist Intern",
  organisation: "Munich Re",
  duration: "Aug 2025 – Dec 2025",
  type: "Internship",
  description:
  "Conducted end-to-end data analysis on insurance datasets, including EDA, data cleaning, feature engineering, statistical analysis, and trend identification across sales, underwriting, claims, and risk domains. Built Power BI dashboards and visual reports based on business requirements to support stakeholder decision-making and machine learning use cases.",
  skills: ["Python", "Power BI", "Data Analysis", "EDA", "Feature Engineering", "Machine Learning"],
  },

  {
  id: 3,
  role: "Artificial Intelligence / Machine Learning Engineer Intern",
  organisation: "Krux Asia",
  duration: "Jun 2025 – Aug 2025",
  type: "Internship",
  description:
  "Built a RAG-based question-answering pipeline using LangChain, LLMs, FAISS/ChromaDB, and semantic search to retrieve answers from unstructured documents. Improved response accuracy and reduced hallucination through embedding-based retrieval, top-k semantic search, prompt engineering, and vector database integration.",
  skills: ["Python", "LangChain", "LLMs", "RAG", "FAISS", "ChromaDB", "Prompt Engineering"],
  },

  {
  id: 4,
  role: "Risk Services Intern (Data Analytics)",
  organisation: "PwC",
  duration: "Jan 2025 – Jun 2025",
  type: "Internship",
  description:
  "Conducted data cleaning, visualisation, and trend analysis for IT risk assessments, identifying risk patterns and actionable insights for client decision-making. Supported Power BI reporting, data protection reviews, compliance assessments, third-party risk checks, and process audits.",
  skills: ["Power BI", "Data Analytics", "Risk Assessment", "Compliance", "Data Visualisation"],
  },

  {
  id: 5,
  role: "Director",
  organisation: "Singapore Affairs Society",
  duration: "2024 – 2025",
  type: "Leadership",
  description:
  "Awarded Best Director for leadership, event execution, and member engagement. Organised civic discussions and supported high-profile forums with distinguished guests, including Minister for Law Mr. K. Shanmugam.",
  skills: ["Leadership", "Event Management", "Stakeholder Engagement", "Communication"],
  },

  {
  id: 6,
  role: "President",
  organisation: "Student Council",
  duration: "2024 – 2025",
  type: "Leadership",
  description:
  "Served as President and championed student concerns while working with faculty to improve academic support and campus facilities. Recognised by faculty and peers for outstanding leadership, teamwork, and student advocacy.",
  skills: ["Leadership", "Teamwork", "Student Advocacy", "Communication"],
  },
  ];
  