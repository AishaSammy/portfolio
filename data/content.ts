export const profile = {
  name: "Ayshe Sammiyeva Gurbandurdyyeva",
  tagline: "I build high-traffic SaaS systems end to end with Laravel and Nuxt.",
  availability: "Open to remote work and new opportunities · English B2/C1",
  title: "Full-Stack Developer",
  location: "Mary City, Turkmenistan",
  email: "asammiyeva@gmail.com",
  github: "https://github.com/AishaSammy",
  linkedin: "https://linkedin.com/in/ayshe-sammiyeva",
  resume: "/resume.pdf",
  summary:
    "Full-stack web developer building APIs and responsive web applications with Laravel, Django, Vue.js and Nuxt.js. Skilled in MySQL and PostgreSQL design, migrations, query optimization, recurring payments, transaction logging and Python-based web scraping.",
  roles: ["Full-Stack Developer", "Laravel + Nuxt Engineer", "API & Database Designer"],
  careerStart: "2023-03-01",
  highlights: [
    { value: "1000+", label: "users served" },
    { value: "300+", label: "production issues resolved" },
    { value: "20s → 3s", label: "page load time" },
  ],
};

export const stack = [
  { group: "Backend", items: ["Laravel", "Django", "PHP", "Python", "Scrapy"] },
  { group: "Frontend", items: ["Vue.js", "Nuxt.js", "Laravel Blade", "JavaScript", "Bootstrap"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "Redis", "Migrations", "Query optimization"] },
  { group: "DevOps & Tools", items: ["PM2", "Cloudflare", "Git", "GitHub / GitLab", "Automated testing", "MCP"] },
];

export const languages = ["English (B2/C1)", "Russian (A2)", "Turkish (Native)", "Turkmen (Native)"];

export const projects = [
  {
    name: "Salon & Appointment SaaS",
    description:
      "Multi-tenant platform for appointments and salon management with role-based access for clients, salon admins, masters and super admins. Queue-based subscriptions with concurrency locking and idempotency handling.",
    tech: ["Laravel", "Nuxt.js (SSR)", "Redis", "PM2", "Cloudflare"],
    live: "https://onliner.tr",
    repo: "",
  },
  {
    name: "Admin Analytics Dashboard",
    description:
      "Dashboard backed by aggregate tables, with a client lifecycle classifier (new / regular / at-risk / lost) and a weighted staff performance scoring algorithm.",
    tech: ["Laravel", "MySQL", "Vue.js"],
    image: "/projects/admin-analytics.webp",
    imageAlt: "Admin analytics dashboard showing per-specialist revenue, appointments, occupancy, cancellation rate and performance score",
    live: "",
    repo: "",
  },
  {
    name: "Payments & Transactions Module",
    description:
      "Recurring payments, refunds and full transaction logging for a production platform, with APIs built on Laravel and Django.",
    tech: ["Laravel", "Django", "PostgreSQL"],
    live: "",
    repo: "",
  },
  {
    name: "Web Scraping Tools",
    description: "Scrapers designed and implemented in Python with Scrapy for structured data collection.",
    tech: ["Python", "Scrapy"],
    live: "",
    repo: "",
  },
  {
    name: "MCP Integration",
    description:
      "Integrated the Model Context Protocol to connect AI models with internal services and context sources.",
    tech: ["MCP", "Laravel", "AI"],
    live: "",
    repo: "",
  },
];

export const experience = [
  {
    role: "Full-Stack Web Developer",
    org: "Onliner",
    period: "Jun 2025 – Present",
    points: [
      "Designed and implemented a multi-tenant SaaS platform for appointment and salon management using Laravel and Nuxt.js (SSR), serving 1000+ users.",
      "Built a queue-based subscription system with concurrency locking, idempotency handling and automated status updates via model observers.",
      "Built an admin analytics dashboard with aggregate tables, client lifecycle classification and weighted staff performance scoring.",
      "Optimized production deployment with PM2, Cloudflare and Redis caching, plus scheduled Laravel Artisan tasks.",
      "Resolved 300+ production issues and bugs; integrated Model Context Protocol (MCP) to connect AI models with internal services.",
    ],
  },
  {
    role: "Full-Stack Web Developer",
    org: "Takyk Ulgam",
    period: "Mar 2024 – Jun 2025",
    points: [
      "Designed and implemented APIs with Laravel and Django.",
      "Designed databases, created migrations and optimized queries with MySQL and PostgreSQL.",
      "Built dynamic, responsive interfaces with Vue.js and Nuxt.js.",
      "Built web-scraping tools in Python with Scrapy, and recurring-payment, refund and transaction-logging features.",
    ],
  },
  {
    role: "Backend-Web Developer",
    org: "Ussat Engineering",
    period: "Mar 2023 – Feb 2024",
    points: [
      "Built and supported a B2B platform with Laravel, focusing on secure handling of high-traffic workflows and large data volumes.",
      "Improved performance by optimizing database queries and applying Laravel caching, cutting page load time from 20s to 3s.",
      "Developed responsive interfaces with Laravel Blade and Bootstrap.",
    ],
  },
];

export const education = [
  { title: "Back-end Development", org: "Gujurly Nesil", period: "Dec 2022 – May 2023" },
  { title: "Front-end Development", org: "LaunchLife Bootcamp", period: "Mar 2022 – Sep 2022" },
];

export const volunteering = [
  "Student Mentor — American Councils for International Education",
  "Volunteer Assistant — UNDP",
  "Volunteer English Teacher — Local School",
];
