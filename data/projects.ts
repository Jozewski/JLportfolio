export interface Project {
  title: string
  description: string
  video: string // path to mp4 video
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: "Warm Wishes",
    description:
      "A Full Stack Web Application designed for Non Profit Organizations to manage donations, track contacts, and keep projects running smoothly. Provides warmth and comfort to vulnerable individuals during cold months.",
    video: "/videos/WarmWishes.mp4",
    technologies: ["React", "Redux Toolkit", "Express.js", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "Recharts"],
  liveUrl: "https://www.youtube.com/watch?v=NIpmPtr01fM",
    githubUrl: "http://104.131.171.220/jliszewski/project-tracker.git",
    featured: false,
  },
  {
    title: "Ask AI",
    description:
      "AI-powered chat application using the Gemma2 model with React frontend and Express backend. Features markdown support and seamless AI conversation interface for enhanced user interaction.",
    video: "/videos/AskAI.mp4",
    technologies: ["React", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "React Markdown", "Express Session"],
  liveUrl: "https://www.youtube.com/watch?v=TZbh1p83Jr4",
    githubUrl: "http://104.131.171.220/jliszewski/ollama-ui.git",
    featured: false,
  },
  {
    title: "Really Home",
    description:
      "Full-stack real estate website with dynamic photo galleries, listing management, and beautiful aesthetic design. Features comprehensive property search and detailed listing views.",
    video: "/videos/ReallyHome.mp4",
    technologies: ["React", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "Axios"],
  liveUrl: "https://www.youtube.com/watch?v=lcUMpTMfb_U",
    githubUrl: "http://104.131.171.220/jliszewski/real-estate-project.git",
    featured: false,
  },
  {
    title: "Real Chat",
    description:
      "Real-time chat application with Socket.io for instant messaging, user authentication with Passport.js, and secure session management. Features live communication between users.",
    video: "/videos/RealChat.mp4",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io", "Passport.js", "Express Session", "Argon2"],
  liveUrl: "https://www.youtube.com/watch?v=Em4PJ1fJ5oc",
    githubUrl: "http://104.131.171.220/jliszewski/real-chat.git",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "A modern blog platform with rich text editing, media uploads, and user authentication. Built for seamless content creation and sharing.",
    video: "/videos/Blog.mp4",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  liveUrl: "https://www.youtube.com/watch?v=BwP4WGUgPqM",
    githubUrl: "http://104.131.171.220/jliszewski/blog-platform.git",
    featured: false,
  },
]
