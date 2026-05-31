export const personal = {
  name: "Lahiruni Malshika",
  fullName: "Lahiruni Malshika Amarasena",
  role: "Software Engineer",
  location: "Matara, Sri Lanka",
  tagline:
    "Final-year IT undergraduate at the University of Moratuwa, building full-stack web and mobile applications.",
  email: "lahimalshi@gmail.com",
  phone: "+94 71 242 8170",
  github: "https://github.com/LahiruniMalshika",
  linkedin: "https://www.linkedin.com/in/lahiruni-malshika-234242222/",
  medium: "https://medium.com/@lahimalshi",
  cv: "/Lahiruni Malshika CV.pdf",
};

export const about = {
  intro:
    "I'm a final-year Information Technology undergraduate at the Faculty of Information Technology, University of Moratuwa. Passionate about building software that's both useful and a pleasure to use.",
  body:
    "Over the last two years I've moved from coursework projects into production environments — currently working at Virstack on full-stack web and mobile applications across React, Angular, Express, and Flutter. I care about clean code, considered UI, and shipping things that real people actually use.",
  closing:
    "Outside of work I write about software on Medium, explore new frameworks, and occasionally tinker with hardware projects.",
  facts: [
    { label: "Based in", value: "Matara, Sri Lanka" },
    { label: "Education", value: "BSc IT, University of Moratuwa" },
    { label: "Currently", value: "Trainee SE @ Virstack" },
    { label: "Open to", value: "Full-time SE roles" },
  ],
};

export const experience = [
  {
    role: "Trainee Software Engineer",
    company: "Virstack",
    type: "Part-time",
    period: "Dec 2025 — Present",
    points: [
      "Contributing to full-stack web and mobile application development using React, Angular, Express with TypeScript, and Flutter.",
      "Building responsive UI components, implementing form validation and API integrations in a production environment.",
      "Supporting feature development and code reviews across multiple client products.",
    ],
    stack: ["React", "Angular", "TypeScript", "Express", "Flutter", "Dart"],
  },
  {
    role: "Software Engineer Intern",
    company: "Virstack",
    type: "Internship",
    period: "Mar 2025 — Nov 2025",
    points: [
      "Worked on AI-powered applications contributing to both frontend and backend development.",
      "Integrated AI-driven features and built scalable user interfaces for production-ready solutions.",
      "Collaborated closely with senior engineers in an agile delivery workflow.",
    ],
    stack: ["React", "TypeScript", "Node.js", "AI integrations"],
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Responsive, performant web applications built with modern frameworks like Next.js, React, and Angular — from landing pages to complex full-stack platforms.",
    bullets: ["Next.js & React", "Full-stack with Node.js", "TypeScript-first"],
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps using Flutter — clean architecture, smooth UX, and tight integration with backend APIs.",
    bullets: ["Flutter & Dart", "iOS + Android", "REST & GraphQL APIs"],
  },
  {
    title: "UI Engineering",
    description:
      "Component-driven interfaces with strong attention to design systems, accessibility, and motion. I bridge the gap between designers and engineers.",
    bullets: ["Tailwind CSS", "Design systems", "Framer Motion"],
  },
];

export const projects = [
  {
    title: "Anothershot",
    tagline: "Photography marketplace platform",
    description:
      "A full-stack platform connecting photographers with clients. Photographers create profiles, upload public or private albums, offer service packages, and manage bookings in real time. Clients browse portfolios and book sessions directly through photographer profiles.",
    role: "Full-stack developer — team of 5 (NerdLabs, UoM)",
    stack: ["Next.js", "NestJS", "MySQL", "Socket.io", "TypeScript", "Tailwind"],
    highlights: [
      "Real-time booking and notification system using Socket.io",
      "Package and appointment management with private/public album visibility",
      "Built and deployed as part of a five-person engineering team",
    ],
    live: "https://anothershots.com/",
    frontend: "https://github.com/NerdLabs-UoM/anothershot-frontend",
    backend: "https://github.com/NerdLabs-UoM/anothershot-backend",
    featured: true,
  },
  {
    title: "Multi-Colour Wall Art Machine",
    tagline: "Hardware + software wall printing system",
    description:
      "A two-axis stepper-motor-driven machine that prints custom images directly onto walls in 1m × 1m dimensions. Users input an image and target size; the machine sprays ink through controlled nozzles to reproduce the artwork.",
    role: "Team lead — group of 5",
    stack: ["Embedded C", "Stepper motors", "Computer vision", "Hardware design"],
    highlights: [
      "Designed dual-track motion system powered by two stepper motors",
      "Image-to-print pipeline converting digital input to nozzle spray patterns",
      "Extensible to fabric printing and large-format poster production",
    ],
    featured: true,
  },
  {
    title: "Image Search Application",
    tagline: "Searchable image gallery web app",
    description:
      "A responsive image search web application that fetches and displays images from a public API based on user search queries, with infinite scroll and clean UI.",
    role: "Solo project",
    stack: ["React", "JavaScript", "REST API", "CSS"],
    highlights: [
      "Debounced search input for efficient API usage",
      "Responsive grid layout with lazy-loaded images",
    ],
    live: "https://image-search-eapp.vercel.app/",
    featured: false,
  },
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "Dart", "Java", "C"],
  Frontend: ["React", "Next.js", "Angular", "Flutter", "Tailwind CSS", "HTML", "CSS"],
  Backend: ["Node.js", "Express", "NestJS", "REST APIs", "Socket.io"],
  Database: ["MySQL"],
  Tools: ["Git", "GitHub", "Vercel", "VS Code", "Figma"],
};

export const writing = [
  {
    title: "Socket.io",
    summary:
      "An introduction to real-time bidirectional event-based communication between web clients and servers using Socket.io.",
    date: "Jul 06, 2024",
    url: "https://medium.com/@lahimalshi/socket-io-b7ccb936139a",
  },
  {
    title: "Introduction to Enterprise Application Development",
    summary:
      "Overview of what enterprise applications are and the patterns used to build large-scale software systems for organizational needs.",
    date: "Sep 10, 2024",
    url: "https://medium.com/@ieeewieuom/introduction-to-enterprise-application-development-26a31c02b168",
  },
];
