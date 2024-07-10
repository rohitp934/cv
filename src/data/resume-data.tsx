import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import {
  BarepapersLogo, ClevertechLogo,
  ConsultlyLogo, JarockiMeLogo, Minimal, MonitoLogo, ParabolLogo, YearProgressLogo
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Rohit Prakash",
  initials: "RP",
  location: "New York City, EST",
  locationLink: "https://www.google.com/maps/place/New+York",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "Full time student at NYU, full stack engineer. I love building products that are simple, intuitive and delightful to use. I have experience working with startups and open source. I am currently looking for full time opportunities starting May 2025.",
  avatarUrl: "https://avatars.githubusercontent.com/u/54208873?v=4",
  personalWebsiteUrl: "https://rohitprakash.dev",
  contact: {
    email: "rohitp934@gmail.com",
    tel: undefined,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/seatedro",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohitp934/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/seatedro",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "New York University",
      degree: "Master's degree in Computer Science",
      start: "2023",
      end: "2025",
    },
    {
      school: "BMS Institute of Technology & Management",
      degree: "Bachelor's degree in Computer Science",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "NBCUniversal",
      link: "https://www.nbcuniversal.com/",
      badges: ["Remote"],
      title: "Software Engineer Intern (SRE)",
      logo: ParabolLogo,
      start: "Jun 2024",
      end: "Aug 2024",
      description:
        "Shipped Go services that collect Prometheus metrics providing overviews on internal AWS Database services. Designed Grafana dashboards to make stakeholder lives easier when viewing internal tooling metrics. Tech stack: Go, Terraform, Prometheus, Grafana, Kubernetes",
    },
    {
      company: "HiringTek Pvt. Ltd.",
      link: "https://hiringtek.com",
      badges: ["Remote"],
      title: "Software Engineer II (Full Stack)",
      logo: ParabolLogo,
      start: "Aug 2021",
      end: "Jun 2023",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Kansastek LLC",
      link: "https://kansastek.com",
      badges: ["Remote"],
      title: "Software Engineering Intern (ML/AI -> Full Stack)",
      logo: ClevertechLogo,
      start: "May 2020",
      end: "Jun 2021",
      description:
        "Worked on building AI models to identify plagiarism during online interviews. Shipped OCR and Object detection models using Tesseract, Python, and Tensorflow.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Angular",
    "Node.js",
    "GraphQL",
    "Go",
    "Rust",
    "SQL",
    "Java",
    "WebRTC",
    "Terraform",
    "Kubernetes",
    "Docker",
  ],
  projects: [
    {
      title: "Encrypto",
      techStack: ["Uni", "Java", "Spring Boot", "Swing", "WebSockets"],
      description:
        "A simple, end-to-end encrypted chat application written entirely in Java",
      logo: ConsultlyLogo,
      link: {
        label: "encrypto",
        href: "https://github.com/seatedro/Encrypto",
      },
    },
    {
      title: "Guam",
      techStack: ["Open Source", "Go", "Authentication", "Library"],
      description: "Rewrite of Lucia-Auth in Golang",
      link: {
        label: "github.com",
        href: "https://github.com/seatedro/guam",
      },
    },
    {
      title: "Blog",
      techStack: ["Side Project", "Vue", "Nuxt 3"],
      description: "Minimalist blog built with Nuxt 3 and Tailwind CSS",
      logo: MonitoLogo,
      link: {
        label: "blog",
        href: "https://blog.rohitprakash.dev/",
      },
    },
    {
      title: "Portfolio",
      techStack: ["Side Project", "Next.js", "MDX"],
      description: "My personal website and blog. Built with Next.js",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/seatedro/v2",
      },
    },
    {
      title: "Mirame",
      techStack: ["Side Project", "Rust", "Go"],
      description:
        "An implementation of Thorsten Ball's Interpreter book in Rust and Go",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/seatedro/mirame",
      },
    },
    {
      title: "Coding.rs",
      techStack: ["Side Project", "Rust", "Actix-Web"],
      description:
        "A coding judge written in Rust with support for multiple languages",
      logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/seatedro/coding.rs",
      },
    },
    {
      title: "Shems",
      techStack: ["Uni", "TypeScript", "Next.js", "Bun", "Postgres.js"],
      description: "A smart home energy management system",
      logo: YearProgressLogo,
      link: {
        label: "shems.lol",
        href: "https://shems.lol",
      },
    },
  ],
} as const;
