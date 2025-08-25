import { Code, Database, Globe, Smartphone } from "lucide-react"

export const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "text-primary",
    skills: [
      { name: "React", icon: () => import("../components/about").then((m) => m.TechIcons?.React) || (() => null) },
      {
        name: "JavaScript (ES6+)",
        icon: () => import("../components/about").then((m) => m.TechIcons?.JavaScript) || (() => null),
      },
      { name: "HTML5/CSS3", icon: () => import("../components/about").then((m) => m.TechIcons?.HTML5) || (() => null) },
      {
        name: "Tailwind CSS",
        icon: () => import("../components/about").then((m) => m.TechIcons?.TailwindCSS) || (() => null),
      },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "text-accent",
    skills: [
      { name: "Node.js", icon: () => import("../components/about").then((m) => m.TechIcons?.NodeJS) || (() => null) },
      {
        name: "Express.js",
        icon: () => import("../components/about").then((m) => m.TechIcons?.Express) || (() => null),
      },
      { name: "MongoDB", icon: () => import("../components/about").then((m) => m.TechIcons?.MongoDB) || (() => null) },
      {
        name: "Socket.io",
        icon: () => import("../components/about").then((m) => m.TechIcons?.SocketIO) || (() => null),
      },
    ],
  },
  {
    title: "Tools",
    icon: Code,
    color: "text-chart-3",
    skills: [
      { name: "VS Code", icon: () => import("../components/about").then((m) => m.TechIcons?.VSCode) || (() => null) },
      { name: "GitLab", icon: () => import("../components/about").then((m) => m.TechIcons?.GitLab) || (() => null) },
      { name: "GitHub", icon: () => import("../components/about").then((m) => m.TechIcons?.GitHub) || (() => null) },
      { name: "Vercel", icon: () => import("../components/about").then((m) => m.TechIcons?.Vercel) || (() => null) },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "text-chart-4",
    skills: [
      {
        name: "Responsive Design",
        icon: () => import("../components/about").then((m) => m.TechIcons?.Mobile) || (() => null),
      },
      {
        name: "Progressive Web Apps",
        icon: () => import("../components/about").then((m) => m.TechIcons?.Mobile) || (() => null),
      },
      {
        name: "Cross-Platform",
        icon: () => import("../components/about").then((m) => m.TechIcons?.Mobile) || (() => null),
      },
    ],
  },
]
