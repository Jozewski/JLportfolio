export interface Project {
  title: string
  description: string
  image: string
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
    image: "/nonprofit-project-dashboard.png",
    technologies: ["React", "Redux Toolkit", "Express.js", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "Recharts"],
    liveUrl: "http://104.131.171.220/jliszewski/project-tracker.git",
    githubUrl: "http://104.131.171.220/jliszewski/project-tracker.git",
    featured: true,
  },
  {
    title: "Ask AI",
    description:
      "AI-powered chat application using the Gemma2 model with React frontend and Express backend. Features markdown support and seamless AI conversation interface for enhanced user interaction.",
    image: "/ai-chat-purple.png",
    technologies: ["React", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "React Markdown", "Express Session"],
    liveUrl: "http://104.131.171.220/jliszewski/ollama-ui.git",
    githubUrl: "http://104.131.171.220/jliszewski/ollama-ui.git",
    featured: true,
  },
  {
    title: "Really Home",
    description:
      "Full-stack real estate website with dynamic photo galleries, listing management, and beautiful aesthetic design. Features comprehensive property search and detailed listing views.",
    image: "/real-estate-website.png",
    technologies: ["React", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "Axios"],
    liveUrl: "http://104.131.171.220/jliszewski/real-estate-project.git",
    githubUrl: "http://104.131.171.220/jliszewski/real-estate-project.git",
    featured: false,
  },
  {
    title: "Real Chat",
    description:
      "Real-time chat application with Socket.io for instant messaging, user authentication with Passport.js, and secure session management. Features live communication between users.",
    image: "/real-time-chat-interface.png",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io", "Passport.js", "Express Session", "Argon2"],
    liveUrl: "http://104.131.171.220/jliszewski/real-chat.git",
    githubUrl: "http://104.131.171.220/jliszewski/real-chat.git",
    featured: false,
  },
]
