export type Freelancer = {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  skills: string[];
  match: number;
  verified: boolean;
  available: boolean;
  location: string;
  bio: string;
  category: string;
  completedProjects: number;
  responseTime: string;
};

export const freelancers: Freelancer[] = [
  { id: "f1", name: "Aria Okafor", title: "Senior Product Designer", avatar: "AO", rating: 4.9, reviews: 132, hourlyRate: 95, skills: ["Figma", "Design Systems", "Webflow"], match: 96, verified: true, available: true, location: "Lagos, NG", bio: "Designing fintech and AI products for 8+ years.", category: "Design", completedProjects: 89, responseTime: "< 2h" },
  { id: "f2", name: "Mateo Rivera", title: "Full-Stack Engineer", avatar: "MR", rating: 4.8, reviews: 89, hourlyRate: 110, skills: ["Next.js", "TypeScript", "Postgres"], match: 92, verified: true, available: true, location: "Madrid, ES", bio: "Shipping SaaS products with React + Node.", category: "Engineering", completedProjects: 67, responseTime: "< 1h" },
  { id: "f3", name: "Yuki Tanaka", title: "AI/ML Engineer", avatar: "YT", rating: 5.0, reviews: 47, hourlyRate: 140, skills: ["PyTorch", "LLMs", "RAG"], match: 98, verified: true, available: false, location: "Tokyo, JP", bio: "Fine-tuning LLMs and building agentic systems.", category: "AI/ML", completedProjects: 34, responseTime: "< 4h" },
  { id: "f4", name: "Lina Haddad", title: "Brand & Motion Designer", avatar: "LH", rating: 4.7, reviews: 71, hourlyRate: 80, skills: ["After Effects", "Brand", "3D"], match: 88, verified: false, available: true, location: "Beirut, LB", bio: "Crafting brand systems with motion.", category: "Design", completedProjects: 52, responseTime: "< 3h" },
  { id: "f5", name: "Devon Park", title: "Mobile Engineer", avatar: "DP", rating: 4.9, reviews: 105, hourlyRate: 100, skills: ["React Native", "Swift", "Kotlin"], match: 91, verified: true, available: true, location: "Seoul, KR", bio: "Building beautiful cross-platform apps.", category: "Engineering", completedProjects: 78, responseTime: "< 2h" },
  { id: "f6", name: "Sara Bloom", title: "Webflow & SEO Specialist", avatar: "SB", rating: 4.6, reviews: 54, hourlyRate: 65, skills: ["Webflow", "SEO", "CMS"], match: 84, verified: true, available: true, location: "Berlin, DE", bio: "Webflow sites that convert and rank.", category: "Marketing", completedProjects: 43, responseTime: "< 2h" },
  { id: "f7", name: "Kai Müller", title: "Blockchain Developer", avatar: "KM", rating: 4.8, reviews: 38, hourlyRate: 130, skills: ["Solidity", "Web3.js", "Rust"], match: 87, verified: true, available: true, location: "Zürich, CH", bio: "Building DeFi protocols and smart contracts.", category: "Engineering", completedProjects: 29, responseTime: "< 6h" },
  { id: "f8", name: "Priya Nair", title: "Data Scientist", avatar: "PN", rating: 4.9, reviews: 66, hourlyRate: 115, skills: ["Python", "TensorFlow", "SQL"], match: 94, verified: true, available: true, location: "Bangalore, IN", bio: "Turning raw data into business intelligence.", category: "AI/ML", completedProjects: 51, responseTime: "< 3h" },
  { id: "f9", name: "Carlos Mendes", title: "DevOps / Cloud Architect", avatar: "CM", rating: 4.7, reviews: 82, hourlyRate: 120, skills: ["Kubernetes", "AWS", "Terraform"], match: 89, verified: true, available: false, location: "São Paulo, BR", bio: "Scaling infra for high-growth startups.", category: "Engineering", completedProjects: 61, responseTime: "< 4h" },
  { id: "f10", name: "Sana Khalil", title: "UX Researcher & Strategist", avatar: "SK", rating: 4.8, reviews: 43, hourlyRate: 85, skills: ["User Research", "Figma", "Analytics"], match: 90, verified: true, available: true, location: "Dubai, AE", bio: "Evidence-based design that users love.", category: "Design", completedProjects: 36, responseTime: "< 2h" },
];

export type Project = {
  id: string;
  title: string;
  budget: string;
  skills: string[];
  deadline: string;
  proposals: number;
  type: "Fixed" | "Hourly";
  description: string;
  category: string;
  complexity: "Low" | "Medium" | "High";
  postedBy: string;
  featured?: boolean;
};

export const projects: Project[] = [
  { id: "p1", title: "Build an AI dashboard for analytics SaaS", budget: "$8k–$12k", skills: ["Next.js", "Recharts", "Tailwind"], deadline: "6 weeks", proposals: 18, type: "Fixed", description: "Modern dashboard with charts, filters, and AI insights panel. Must be production-ready.", category: "Engineering", complexity: "High", postedBy: "Lumen Labs", featured: true },
  { id: "p2", title: "Brand identity for fintech launch", budget: "$4k–$6k", skills: ["Brand", "Logo", "Guidelines"], deadline: "3 weeks", proposals: 23, type: "Fixed", description: "Logo, palette, type system, and brand book for Series A fintech startup.", category: "Design", complexity: "Medium", postedBy: "Nexus Finance" },
  { id: "p3", title: "Mobile app for habit coaching", budget: "$75/hr", skills: ["React Native", "Firebase"], deadline: "Ongoing", proposals: 11, type: "Hourly", description: "iOS + Android with streaks, social, and notifications. Long-term engagement.", category: "Engineering", complexity: "High", postedBy: "HabitFlow Inc" },
  { id: "p4", title: "RAG chatbot over product docs", budget: "$5k–$9k", skills: ["LLMs", "Python", "Vector DB"], deadline: "4 weeks", proposals: 14, type: "Fixed", description: "Embed product docs with hybrid search, eval harness, and Slack integration.", category: "AI/ML", complexity: "High", postedBy: "Docu AI", featured: true },
  { id: "p5", title: "Webflow rebuild + SEO", budget: "$3k–$5k", skills: ["Webflow", "SEO", "Copy"], deadline: "2 weeks", proposals: 9, type: "Fixed", description: "Move from WordPress to Webflow with CMS and full SEO audit.", category: "Marketing", complexity: "Low", postedBy: "GrowthCo" },
  { id: "p6", title: "Design system for B2B SaaS", budget: "$7k–$11k", skills: ["Figma", "Design Systems", "React"], deadline: "8 weeks", proposals: 7, type: "Fixed", description: "Comprehensive component library, tokens, and Figma + code handoff.", category: "Design", complexity: "High", postedBy: "Basecamp AI" },
  { id: "p7", title: "Kubernetes migration for startup", budget: "$90/hr", skills: ["Kubernetes", "AWS", "CI/CD"], deadline: "Ongoing", proposals: 5, type: "Hourly", description: "Migrate from bare EC2 to EKS with Helm, Argo, and observability stack.", category: "Engineering", complexity: "High", postedBy: "Stackify" },
  { id: "p8", title: "Market research & UX strategy", budget: "$2k–$4k", skills: ["User Research", "Analytics", "Figma"], deadline: "3 weeks", proposals: 16, type: "Fixed", description: "Competitor analysis, user interviews, and strategic UX roadmap.", category: "Design", complexity: "Medium", postedBy: "ProductLabs" },
];

export const earningsSeries = [
  { m: "Jan", v: 2400 }, { m: "Feb", v: 3100 }, { m: "Mar", v: 2800 },
  { m: "Apr", v: 4200 }, { m: "May", v: 5100 }, { m: "Jun", v: 4800 },
  { m: "Jul", v: 6400 }, { m: "Aug", v: 7200 }, { m: "Sep", v: 6900 },
  { m: "Oct", v: 8400 }, { m: "Nov", v: 9100 }, { m: "Dec", v: 10200 },
];

export const proposalSeries = [
  { m: "Jan", sent: 12, won: 4 }, { m: "Feb", sent: 18, won: 7 },
  { m: "Mar", sent: 15, won: 6 }, { m: "Apr", sent: 22, won: 10 },
  { m: "May", sent: 19, won: 9 }, { m: "Jun", sent: 25, won: 13 },
];

export const categoryRevenue = [
  { name: "Engineering", value: 42000, color: "#8B5CF6" },
  { name: "AI/ML", value: 28000, color: "#06B6D4" },
  { name: "Design", value: 18000, color: "#EC4899" },
  { name: "Marketing", value: 8000, color: "#10B981" },
];

export const budgetSeries = [
  { m: "Jan", v: 12000 }, { m: "Feb", v: 8000 }, { m: "Mar", v: 15000 },
  { m: "Apr", v: 9500 }, { m: "May", v: 17000 }, { m: "Jun", v: 14000 },
];

export const testimonials = [
  { quote: "TalentStage's AI matching cut our hiring time from 3 weeks to 2 days. The quality of freelancers is unmatched.", name: "Priya Shah", role: "CTO, Lumen Labs", avatar: "PS", rating: 5 },
  { quote: "I doubled my income in 6 months. The proposal scoring is unreal — it tells you exactly where to improve.", name: "James Carter", role: "Freelance Engineer", avatar: "JC", rating: 5 },
  { quote: "Best designer talent pool I've ever used. Verified skills actually mean something here.", name: "Nora Kim", role: "Head of Product, Drift", avatar: "NK", rating: 5 },
  { quote: "The AI project scoping saved us 40 hours of requirements work. Shipped our MVP in 4 weeks.", name: "Rafael Torres", role: "Founder, Orbit AI", avatar: "RT", rating: 5 },
  { quote: "Milestone escrow gives us total confidence. No more payment disputes.", name: "Elena Vasquez", role: "Startup CFO", avatar: "EV", rating: 5 },
  { quote: "Skill verification is a game-changer. My verified TypeScript badge landed me 3 high-budget clients.", name: "Amit Patel", role: "Frontend Architect", avatar: "AP", rating: 5 },
];

export const pricing = [
  {
    name: "Starter",
    price: 0,
    tagline: "For exploring the platform",
    features: ["Up to 3 active proposals", "Basic AI match score", "Community access", "1 verified skill"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: 29,
    tagline: "For serious freelancers",
    features: ["Unlimited proposals", "AI proposal scoring", "5 verified skill badges", "Priority listing", "Advanced analytics", "Priority support"],
    cta: "Go Pro",
    highlight: true,
  },
  {
    name: "Business",
    price: 99,
    tagline: "For teams and agencies",
    features: ["AI freelancer matching", "Team workspace", "Milestone escrow", "Unlimited hiring", "API access", "Dedicated CSM"],
    cta: "Contact sales",
    highlight: false,
  },
];

export const messages = [
  { id: "m1", from: "Aria Okafor", preview: "Sending v2 of the dashboard design…", time: "2m", unread: true, avatar: "AO" },
  { id: "m2", from: "Yuki Tanaka", preview: "Eval results look great — 94% accuracy!", time: "1h", unread: true, avatar: "YT" },
  { id: "m3", from: "Lina Haddad", preview: "Brand board final version attached.", time: "3h", unread: false, avatar: "LH" },
  { id: "m4", from: "Devon Park", preview: "iOS build is ready for TestFlight review.", time: "1d", unread: false, avatar: "DP" },
];

export const communityPosts = [
  { id: "c1", author: "Mateo Rivera", avatar: "MR", time: "2h", body: "Just shipped a Next.js + Postgres template with auth + billing baked in. Completely free. Link in comments 👇", likes: 84, comments: 12, tags: ["Next.js", "Open Source"] },
  { id: "c2", author: "Yuki Tanaka", avatar: "YT", time: "5h", body: "Hot take: evals matter more than fine-tuning for most RAG applications. Here's why…", likes: 142, comments: 33, tags: ["AI/ML", "RAG"] },
  { id: "c3", author: "Aria Okafor", avatar: "AO", time: "1d", body: "Design system thread 🧵 — tokens that actually scale across 50+ components without breaking anything.", likes: 220, comments: 41, tags: ["Design Systems", "Figma"] },
  { id: "c4", author: "Sara Bloom", avatar: "SB", time: "2d", body: "My Webflow site went from 45 to 92 PageSpeed. Here are the exact optimizations I used:", likes: 97, comments: 18, tags: ["Webflow", "SEO"] },
];

export const skillChallenges = [
  { id: "sc1", title: "React Performance Mastery", category: "Engineering", submissions: 234, deadline: "4 days", prize: "$500", difficulty: "Hard", participants: 412 },
  { id: "sc2", title: "Brand Identity Sprint", category: "Design", submissions: 189, deadline: "6 days", prize: "$300", difficulty: "Medium", participants: 278 },
  { id: "sc3", title: "LLM Eval Framework", category: "AI/ML", submissions: 67, deadline: "9 days", prize: "$750", difficulty: "Expert", participants: 156 },
];

export const mentors = [
  { id: "mn1", name: "David Chen", title: "Ex-Google, AI Lead", avatar: "DC", expertise: ["LLMs", "MLOps", "RAG"], sessionPrice: 180, rating: 4.98, sessions: 312, available: true },
  { id: "mn2", name: "Sophie Laurent", title: "Design Director, ex-Airbnb", avatar: "SL", expertise: ["Design Systems", "Product Design", "UX"], sessionPrice: 150, rating: 4.95, sessions: 248, available: true },
  { id: "mn3", name: "Marcus Williams", title: "CTO & Startup Advisor", avatar: "MW", expertise: ["Architecture", "Scaling", "TypeScript"], sessionPrice: 200, rating: 4.97, sessions: 189, available: false },
];

export const contracts = [
  { id: "ct1", project: "AI Dashboard for Analytics SaaS", client: "Lumen Labs", status: "Active", budget: "$10,000", paid: 4000, milestones: 5, completedMilestones: 2, deadline: "2025-07-15", startDate: "2025-06-01" },
  { id: "ct2", project: "Brand Identity System", client: "Nexus Finance", status: "Active", budget: "$5,500", paid: 2750, milestones: 3, completedMilestones: 2, deadline: "2025-07-01", startDate: "2025-06-10" },
  { id: "ct3", project: "Mobile App MVP", client: "HabitFlow", status: "Completed", budget: "$8,200", paid: 8200, milestones: 4, completedMilestones: 4, deadline: "2025-05-20", startDate: "2025-04-01" },
];

export const transactions = [
  { id: "tx1", type: "Payment", amount: 2000, project: "AI Dashboard", date: "2025-06-20", status: "Completed" },
  { id: "tx2", type: "Payment", amount: 2750, project: "Brand Identity", date: "2025-06-18", status: "Completed" },
  { id: "tx3", type: "Withdrawal", amount: 4000, project: "Bank Transfer", date: "2025-06-15", status: "Processing" },
  { id: "tx4", type: "Payment", amount: 1500, project: "AI Dashboard M1", date: "2025-06-10", status: "Completed" },
  { id: "tx5", type: "Payment", amount: 3200, project: "Mobile App Final", date: "2025-06-05", status: "Completed" },
];

export const proposals = [
  { id: "pr1", project: "Build an AI dashboard for analytics SaaS", status: "Pending", bid: "$9,500", aiScore: 87, clarity: 82, relevance: 91, value: 88, submitted: "2025-06-20", client: "Lumen Labs" },
  { id: "pr2", project: "RAG chatbot over product docs", status: "Accepted", bid: "$7,200", aiScore: 94, clarity: 95, relevance: 96, value: 91, submitted: "2025-06-18", client: "Docu AI" },
  { id: "pr3", project: "Design system for B2B SaaS", status: "Pending", bid: "$8,800", aiScore: 79, clarity: 76, relevance: 82, value: 79, submitted: "2025-06-17", client: "Basecamp AI" },
  { id: "pr4", project: "Mobile app for habit coaching", status: "Rejected", bid: "$5,500", aiScore: 64, clarity: 60, relevance: 68, value: 64, submitted: "2025-06-15", client: "HabitFlow Inc" },
];

export const portfolioProjects = [
  { id: "pp1", title: "FinanceAI Dashboard", description: "Real-time analytics platform with AI-powered insights for investment firms.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", tech: ["Next.js", "TypeScript", "Recharts", "OpenAI"], category: "Engineering", aiScore: 94, liveUrl: "#", githubUrl: "#" },
  { id: "pp2", title: "Nova Brand System", description: "Complete brand identity for a Series B SaaS company — logo, tokens, motion guidelines.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80", tech: ["Figma", "After Effects", "Design Tokens"], category: "Design", aiScore: 91, liveUrl: "#" },
  { id: "pp3", title: "HabitFlow Mobile App", description: "Cross-platform habit tracking app with social features and AI coaching.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80", tech: ["React Native", "Firebase", "TypeScript"], category: "Engineering", aiScore: 88, liveUrl: "#", githubUrl: "#" },
  { id: "pp4", title: "RAG Knowledge Base", description: "Enterprise knowledge base with hybrid search, eval harness, and Slack integration.", image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80", tech: ["Python", "LangChain", "Pinecone", "FastAPI"], category: "AI/ML", aiScore: 96, githubUrl: "#" },
];

export const skills = [
  { name: "TypeScript", level: "Expert", verified: true, verifiedDate: "2025-05-12", score: 94 },
  { name: "React", level: "Expert", verified: true, verifiedDate: "2025-04-20", score: 97 },
  { name: "Next.js", level: "Advanced", verified: true, verifiedDate: "2025-03-15", score: 91 },
  { name: "PostgreSQL", level: "Advanced", verified: false, score: null },
  { name: "GraphQL", level: "Intermediate", verified: false, score: null },
  { name: "Docker", level: "Intermediate", verified: true, verifiedDate: "2025-02-10", score: 86 },
  { name: "Python", level: "Intermediate", verified: false, score: null },
  { name: "AWS", level: "Beginner", verified: false, score: null },
];
