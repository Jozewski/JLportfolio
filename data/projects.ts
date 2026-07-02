export interface Project {
  title: string
  description: string
  video: string // path to mp4 video
  technologies: string[]
  liveUrl: string
  liveLabel?: string
  githubUrl?: string
  videoId: string,
  featured: boolean
}

export const projects: Project[] = [
  {
    title: "Driver for my Drive",
    description:
      "A landing page for an automated Google Drive organization service that files documents into the right folders by subject — every hour, hands-free. Files are sorted automatically based on their content and moved into appropriately named folders without any manual effort.",
    video: "/videos/Automation.mp4",
    technologies: ["HTML5", "CSS3", "Google Fonts", "Responsive Design", "GitHub Pages"],
    liveUrl: "https://jozewski.github.io/Automation/",
    liveLabel: "Go to Live Site",
    githubUrl: "https://github.com/Jozewski/Automation.git",
    featured: true,
    videoId: "X4Z0tQjaK-8"
  },
  {
    title: "Procure Path",
    description:
      "Procure Path is an AI-powered grant summary platform with a Next.js frontend and Express.js backend. Built with MongoDB, Mongoose, Clerk authentication, Tailwind CSS, Framer Motion, and Docker, it provides a clean foundation for grant document processing and management.",
    video: "/videos/ProcurePath.mp4",
    technologies: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Mongoose", "Clerk", "Tailwind CSS", "Framer Motion", "Docker"],
    liveUrl: "https://procurepath.ojt.banyanlabs.io/",
    liveLabel: "Go to Live Site",
    featured: true,
    videoId: "FBkyptgomBU"
  },
  {
    title: "Four Tables",
    description:
      "Four Tables is a full-stack family recipe archive built around Italian, Dutch, German, and Mexican traditions. Public visitors can browse recipes by tradition, holiday, and category, while invited contributors can create, edit, archive, upload family images, add notes, and use OpenAI-assisted drafting to preserve family cooking knowledge.",
    video: "/videos/FourTables.mp4",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Neon", "OpenAI API", "Vitest", "Playwright", "Vercel"],
    liveUrl: "https://jozewski.tech/",
    liveLabel: "Go to Live Site",
    githubUrl: "https://github.com/Jozewski/Four_Tables.git",
    featured: true,
    videoId: "ziE8djsfve0"
  },
  {
    title: "Know Your Federal Rights",
    description:
      "Know Your Federal Rights is a free, static educational website that presents plain-English federal and state rights information for justice-impacted individuals, families, and support organizations. It covers seven core rights topics with a federal and state-specific view for all 50 states, including search, quick-jump topic navigation, responsive layouts, and accessible interaction patterns.",
    video: "/videos/KnowYourFederalRights.mp4",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Structured Data", "GitHub Pages", "GitHub Actions", "Accessibility"],
    liveUrl: "https://jozewski.github.io/know-your-federal-rights/",
    liveLabel: "Go to Live Site",
    githubUrl: "https://github.com/Jozewski/know-your-federal-rights.git",
    featured: true,
    videoId: "VBk8mNtf17c"
  },
  {
    title: "Warm Wishes",
    description:
      "Warm Wishes is a comprehensive full-stack web application crafted specifically for a non-profit organization. Its mission is to empower this organization by streamlining project management, donation tracking, and fostering operational efficiency, all from a single, easy-to-use platform.",
    video: "/videos/WarmWishes.mp4",
    technologies: ["React", "Redux Toolkit", "Express.js", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "Recharts"],
  liveUrl: "https://www.youtube.com/watch?v=NIpmPtr01fM",
    githubUrl: "https://github.com/Jozewski/WarmWishes.git",
    featured: true,
    videoId: "NIpmPtr01fM"
  },
  {
    title: "Ask AI",
    description:
      "AI-powered chat application using the Gemma2 model with React frontend and Express backend. Features markdown support and seamless AI conversation interface for enhanced user interaction.",
    video: "/videos/AskAI.mp4",
    technologies: ["React", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "React Markdown", "Express Session"],
  liveUrl: "https://www.youtube.com/watch?v=TZbh1p83Jr4",
    githubUrl: "https://github.com/Jozewski/AskAI.git",
    featured: true,
     videoId: "TZbh1p83Jr4"
  },
  {
    title: "Really Home",
    description:
      "Full-stack real estate website with dynamic photo galleries, listing management, and beautiful aesthetic design. Features comprehensive property search and detailed listing views.",
    video: "/videos/ReallyHome.mp4",
    technologies: ["React", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "Axios"],
  liveUrl: "https://www.youtube.com/watch?v=lcUMpTMfb_U",
    githubUrl: "https://github.com/Jozewski/ReallyHome.git",
    featured: true,
     videoId: "lcUMpTMfb_U"
  },
  {
    title: "Real Chat",
    description:
      "Real-time chat application with Socket.io for instant messaging, user authentication with Passport.js, and secure session management. Features live communication between users.",
    video: "/videos/RealChat.mp4",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io", "Passport.js", "Express Session", "Argon2"],
  liveUrl: "https://www.youtube.com/watch?v=Em4PJ1fJ5oc",
    githubUrl: "https://github.com/Jozewski/RealChat.git",
    featured: true,
     videoId: "Em4PJ1fJ5oc"
  },
  {
    title: "Blog Platform",
    description:
      "A modern blog platform with rich text editing, media uploads, and user authentication. Built for seamless content creation and sharing.",
    video: "/videos/Blog.mp4",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  liveUrl: "https://www.youtube.com/watch?v=BwP4WGUgPqM",
    githubUrl: "https://github.com/Jozewski/Blog.git",
    featured: true,
     videoId: "BwP4WGUgPqM"
  },
]
