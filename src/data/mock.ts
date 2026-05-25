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
};

export const freelancers: Freelancer[] = [
  { id: "f1", name: "Aria Okafor", title: "Senior Product Designer", avatar: "AO", rating: 4.9, reviews: 132, hourlyRate: 95, skills: ["Figma", "Design Systems", "Webflow"], match: 96, verified: true, available: true, location: "Lagos, NG", bio: "Designing fintech and AI products for 8+ years." },
  { id: "f2", name: "Mateo Rivera", title: "Full-Stack Engineer", avatar: "MR", rating: 4.8, reviews: 89, hourlyRate: 110, skills: ["Next.js", "TypeScript", "Postgres"], match: 92, verified: true, available: true, location: "Madrid, ES", bio: "Shipping SaaS products with React + Node." },
  { id: "f3", name: "Yuki Tanaka", title: "AI/ML Engineer", avatar: "YT", rating: 5.0, reviews: 47, hourlyRate: 140, skills: ["PyTorch", "LLMs", "RAG"], match: 98, verified: true, available: false, location: "Tokyo, JP", bio: "Fine-tuning LLMs and building agentic systems." },
  { id: "f4", name: "Lina Haddad", title: "Brand & Motion Designer", avatar: "LH", rating: 4.7, reviews: 71, hourlyRate: 80, skills: ["After Effects", "Brand", "3D"], match: 88, verified: false, available: true, location: "Beirut, LB", bio: "Crafting brand systems with motion." },
  { id: "f5", name: "Devon Park", title: "Mobile Engineer", avatar: "DP", rating: 4.9, reviews: 105, hourlyRate: 100, skills: ["React Native", "Swift", "Kotlin"], match: 91, verified: true, available: true, location: "Seoul, KR", bio: "Building beautiful cross-platform apps." },
  { id: "f6", name: "Sara Bloom", title: "Webflow & SEO Specialist", avatar: "SB", rating: 4.6, reviews: 54, hourlyRate: 65, skills: ["Webflow", "SEO", "CMS"], match: 84, verified: true, available: true, location: "Berlin, DE", bio: "Webflow sites that convert and rank." },
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
};

export const projects: Project[] = [
  { id: "p1", title: "Build an AI dashboard for analytics SaaS", budget: "$8k–$12k", skills: ["Next.js", "Recharts", "Tailwind"], deadline: "6 weeks", proposals: 18, type: "Fixed", description: "Modern dashboard with charts, filters, and AI insights." },
  { id: "p2", title: "Brand identity for fintech launch", budget: "$4k–$6k", skills: ["Brand", "Logo", "Guidelines"], deadline: "3 weeks", proposals: 23, type: "Fixed", description: "Logo, palette, type, and brand book." },
  { id: "p3", title: "Mobile app for habit coaching", budget: "$75/hr", skills: ["React Native", "Firebase"], deadline: "Ongoing", proposals: 11, type: "Hourly", description: "iOS + Android with streaks, social, and notifications." },
  { id: "p4", title: "RAG chatbot over product docs", budget: "$5k–$9k", skills: ["LLMs", "Python", "Vector DB"], deadline: "4 weeks", proposals: 14, type: "Fixed", description: "Embed docs, hybrid search, eval harness." },
  { id: "p5", title: "Webflow rebuild + SEO", budget: "$3k–$5k", skills: ["Webflow", "SEO", "Copy"], deadline: "2 weeks", proposals: 9, type: "Fixed", description: "Move from WP to Webflow with CMS." },
];

export const earningsSeries = [
  { m: "Jan", v: 2400 }, { m: "Feb", v: 3100 }, { m: "Mar", v: 2800 },
  { m: "Apr", v: 4200 }, { m: "May", v: 5100 }, { m: "Jun", v: 4800 },
  { m: "Jul", v: 6400 }, { m: "Aug", v: 7200 }, { m: "Sep", v: 6900 },
  { m: "Oct", v: 8400 }, { m: "Nov", v: 9100 }, { m: "Dec", v: 10200 },
];

export const budgetSeries = [
  { m: "Jan", v: 12000 }, { m: "Feb", v: 8000 }, { m: "Mar", v: 15000 },
  { m: "Apr", v: 9500 }, { m: "May", v: 17000 }, { m: "Jun", v: 14000 },
];

export const testimonials = [
  { quote: "TalentStage's AI matching cut our hiring time from weeks to days.", name: "Priya Shah", role: "CTO, Lumen Labs" },
  { quote: "I doubled my income in 6 months. The proposal scoring is unreal.", name: "James Carter", role: "Freelance Engineer" },
  { quote: "Best designer talent pool I've used. Verified skills actually mean something.", name: "Nora Kim", role: "Head of Product, Drift" },
];

export const pricing = [
  { name: "Starter", price: 0, tagline: "For exploring", features: ["Up to 3 active proposals", "Basic AI match", "Community access"], cta: "Start free" },
  { name: "Pro", price: 29, tagline: "For serious freelancers", features: ["Unlimited proposals", "AI proposal scoring", "Verified badges", "Priority support"], cta: "Go Pro", highlight: true },
  { name: "Business", price: 99, tagline: "For teams hiring", features: ["AI freelancer matching", "Team workspace", "Milestone escrow", "Dedicated CSM"], cta: "Contact sales" },
];

export const messages = [
  { id: "m1", from: "Aria Okafor", preview: "Sending v2 of the dashboard…", time: "2m", unread: true },
  { id: "m2", from: "Yuki Tanaka", preview: "Eval results look great.", time: "1h", unread: true },
  { id: "m3", from: "Lina Haddad", preview: "Brand board attached.", time: "3h", unread: false },
];

export const communityPosts = [
  { id: "c1", author: "Mateo Rivera", time: "2h", body: "Just shipped a Next.js + Postgres template with auth + billing. Free.", likes: 84, comments: 12 },
  { id: "c2", author: "Yuki Tanaka", time: "5h", body: "Hot take: evals matter more than fine-tuning for most RAG apps.", likes: 142, comments: 33 },
  { id: "c3", author: "Aria Okafor", time: "1d", body: "Design system thread 🧵 — tokens that actually scale.", likes: 220, comments: 41 },
];
