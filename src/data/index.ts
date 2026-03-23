// ─── PERSONAL INFO ────────────────────────────────────────────────
export const personal = {
  name: 'Lokesh Kumar Telagamalla',
  shortName: 'Lokesh Kumar',
  title: 'AI & Full-Stack Developer',
  tagline: 'Building Intelligent Systems, One Model at a Time.',
  email: 'lokeshkumartelagamalla@gmail.com',
  location: 'Hyderabad, Telangana, India',
  github: 'https://github.com/tlokeshkumar1',
  linkedin: 'https://linkedin.com/in/lokesh-kumar-telagamalla-18b986221',
  hackerrank: 'https://www.hackerrank.com/profile/lokeshkumartela1',
  kaggle: 'https://www.kaggle.com/code/tlokeshkumar14/',
  githubUsername: 'tlokeshkumar1',
  resumeUrl: '/Lokesh_Resume.pdf',
  roles: ['AI Engineer', 'ML Engineer', 'Full-Stack Developer', 'LLM Builder', 'RAG Specialist', 'Agentic AI Developer'],
  bio: `I'm a passionate B.Tech (IT) graduate from Hyderabad, India, specialising in Generative AI,
        LLMs, RAG pipelines, and agentic frameworks. I sit at the intersection of backend engineering
        and applied AI — building production-grade systems that combine intelligent reasoning with
        robust full-stack architecture. I'm actively seeking impactful Full-Time or Contract roles
        in AI & Full-Stack engineering.`,
}

// ─── STATS ────────────────────────────────────────────────────────
export const stats = [
  { value: '25+', label: 'Projects' },
  { value: '10+', label: 'Certifications' },
  { value: '1', label: 'Internship' },
  { value: '3', label: 'Languages' },
]

// ─── SKILLS ───────────────────────────────────────────────────────
export const skillGroups = [
  {
    label: 'AI / ML / GenAI',
    skills: ['GPT (OpenAI)', 'LLaMA', 'Mistral', 'BERT', 'RAG Pipelines', 'FAISS', 'Pinecone', 'LangChain', 'TensorFlow', 'PyTorch', 'Agentic AI', 'Fine-tuning', 'Prompt Engineering', 'NLP', 'Transformers'],
  },
  {
    label: 'Frontend',
    skills: ['React.js', 'TypeScript', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'Django', 'REST APIs', 'JWT Auth', 'Python'],
  },
  {
    label: 'Database & Cloud',
    skills: ['MongoDB', 'SQL', 'AWS', 'GCP', 'Azure', 'Git', 'GitHub Actions', 'Vercel'],
  },
  {
    label: 'ML Techniques',
    skills: ['Computer Vision', 'CNNs', 'LSTMs', 'GANs', 'VAEs', 'Deep Neural Networks', 'Encoder-Decoder', 'Boosting / Bagging', 'Classification'],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────
export type ProjectCategory = 'all' | 'ai-ml' | 'full-stack' | 'backend'

export interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  category: ProjectCategory[]
  github?: string
  live?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Helpdesk with Agentic AI',
    description: 'Full-stack intelligent helpdesk platform powered by Gemini LLM and agentic reasoning. Features JWT-secured multi-role auth, ticket auto-classification, and real-time AI-generated resolutions via a MERN + Python microservice architecture.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'Gemini LLM', 'JWT', 'FastAPI'],
    category: ['all', 'ai-ml', 'full-stack'],
    github: 'https://github.com/tlokeshkumar1/Smart-Helpdesk-with-Agentic',
    featured: true,
  },
  {
    id: 2,
    title: 'Email Summarizer & Replier Agent',
    description: 'Autonomous AI agent that reads, summarises, and drafts contextual replies to emails. Integrates with Google Calendar and Meet APIs to schedule follow-ups automatically using FastAPI + LLM backbone.',
    tech: ['FastAPI', 'LLM', 'Google Calendar API', 'Google Meet API', 'Python', 'OAuth2'],
    category: ['all', 'ai-ml', 'backend'],
    github: 'https://github.com/tlokeshkumar1/Email-Replier-Agent',
    featured: true,
  },
  {
    id: 3,
    title: 'Lightweight AI Assistant with RAG',
    description: 'Production RAG pipeline combining Pinecone vector store with Gemini for context-aware Q&A over custom documents. React frontend with streaming responses and source attribution.',
    tech: ['React', 'Pinecone', 'Gemini', 'FastAPI', 'Python', 'LangChain', 'FAISS'],
    category: ['all', 'ai-ml', 'full-stack'],
    github: 'https://github.com/tlokeshkumar1/rag-assistant',
    featured: true,
  },
  {
    id: 4,
    title: 'AI Chatbot Companion',
    description: 'Conversational AI companion with persistent memory via MongoDB, Gmail API integration for inbox-aware context, and a React/TypeScript frontend. Powered by LangChain orchestration over FastAPI.',
    tech: ['React', 'TypeScript', 'FastAPI', 'LangChain', 'MongoDB', 'Gmail API', 'Python'],
    category: ['all', 'ai-ml', 'full-stack'],
    github: 'https://github.com/tlokeshkumar1/AI-Companion',
    featured: true,
  },
  {
    id: 5,
    title: 'Smart Ticket Hub',
    description: 'LLM-powered ticket management system built with Flask and MongoDB. Automatically categorises, prioritises, and suggests resolutions for incoming support tickets.',
    tech: ['Flask', 'MongoDB', 'Python', 'LLM', 'REST API'],
    category: ['all', 'ai-ml', 'backend'],
    github: 'https://github.com/tlokeshkumar1/Smart-Ticket-Hub',
    featured: false,
  },
  {
    id: 6,
    title: 'Bank Customer Churn Prediction',
    description: 'End-to-end ML pipeline predicting customer churn with ensemble methods (XGBoost, Random Forest). Includes EDA, feature engineering, and a Flask-powered prediction API.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Flask', 'Pandas', 'NumPy'],
    category: ['all', 'ai-ml'],
    github: 'https://github.com/tlokeshkumar1/Customer-CHURN-Prediction',
    featured: false,
  },
  {
    id: 7,
    title: 'AI-ML Phishing Detection System',
    description: 'Deep learning system combining CNN + LSTM + RNN models for URL-based phishing detection. Deployed via Flask with a REST API achieving >95% classification accuracy.',
    tech: ['Python', 'TensorFlow', 'CNN', 'LSTM', 'RNN', 'Flask', 'Scikit-learn'],
    category: ['all', 'ai-ml', 'backend'],
    github: 'https://github.com/anilkumar1306/ML-Powered-Threat-Detection-System',
    featured: false,
  },
  {
    id: 8,
    title: 'IPO Web Application — Bluestock Fintech',
    description: 'Internship project: full-stack IPO management platform for real-time share trading. Built with React.js frontend and Django REST backend with smooth responsive transaction management UI.',
    tech: ['React.js', 'Django', 'Python', 'REST API', 'PostgreSQL'],
    category: ['all', 'full-stack'],
    github: 'https://github.com/tlokeshkumar1',
    featured: false,
  },
]

// ─── EXPERIENCE ───────────────────────────────────────────────────
export const experience = [
  {
    company: 'Bluestock Fintech',
    role: 'Software Development Engineer Intern',
    type: 'Remote',
    period: 'Aug 2024 – Oct 2024',
    points: [
      'Developed a full-stack IPO web application using React.js and Django for real-time share trading.',
      'Designed an intuitive, responsive UI for transaction management, improving UX metrics significantly.',
      'Enhanced user engagement via smooth, accessible interactions across all device breakpoints.',
    ],
  },
]

// ─── EDUCATION ────────────────────────────────────────────────────
export const education = [
  {
    degree: 'B.Tech — Information Technology',
    institution: 'Vignana Bharathi Institute of Technology',
    period: '2020 – 2024',
    score: 'GPA 7.39',
    icon: '🎓',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'MJP Telangana BC Welfare Residential Institutions',
    period: '2018 – 2020',
    score: '64%',
    icon: '📘',
  },
  {
    degree: '10th Grade',
    institution: 'Narayana Group of Schools',
    period: '2017 – 2018',
    score: 'GPA 8.7',
    icon: '🏫',
  },
]

// ─── CERTIFICATIONS ───────────────────────────────────────────────
export const certifications = [
  { title: 'HTML, CSS & JavaScript', issuer: 'Infosys Springboard', color: 'from-blue-600 to-cyan-500' },
  { title: 'Python Fundamentals', issuer: 'Infosys Springboard', color: 'from-blue-600 to-cyan-500' },
  { title: 'Blockchain In Depth', issuer: 'Infosys Springboard', color: 'from-blue-600 to-cyan-500' },
  { title: 'Java Course', issuer: 'Oracle', color: 'from-red-600 to-orange-500' },
  { title: 'AI Intensive Course', issuer: 'Kaggle', color: 'from-teal-600 to-cyan-500' },
  { title: 'Data Analytics', issuer: 'AWS Academy', color: 'from-yellow-600 to-orange-500' },
  { title: 'Machine Learning', issuer: 'AWS Academy', color: 'from-yellow-600 to-orange-500' },
  { title: 'Machine Learning For All', issuer: 'Coursera', color: 'from-sky-600 to-blue-500' },
]
