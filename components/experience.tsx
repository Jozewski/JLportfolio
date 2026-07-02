import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer & Automation Specialist",
      company: "Building Web Applications and Workflows for Organizations",
      location: "Remote",
      period: "April 2026 - Present",
      description:
        "Built and deployed full-stack web applications, accessible public resources, and workflow-focused tools for organizations and communities. Combined modern web development, automation, data-driven interfaces, and user-centered design to create practical systems that are maintainable, responsive, and easy to use.",
      achievements: [
        "Built deployed applications with React, Next.js, TypeScript, Node.js, and Express",
        "Created structured data workflows with MongoDB, PostgreSQL, Prisma, and Mongoose",
        "Implemented authentication, contributor tools, AI-assisted drafting, and content management flows",
        "Applied accessibility, responsive design, and automation practices across user-facing projects",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "Automation",
        "Accessibility",
      ],
    },
    {
      title: "Driver for my Drive",
      company: "Automated Google Drive Organization",
      location: "Static Web Development",
      period: "Deployed July 2, 2026",
      description:
        "Built a landing page for an automated Google Drive organization service that files documents into the right folders by subject — every hour, hands-free. The service reads files in your Drive, categorizes them by content, and moves them into appropriately named folders without any manual effort.",
      achievements: [
        "Created a professional landing page with custom dark teal color scheme",
        "Implemented responsive design using CSS Grid and Flexbox for mobile-friendly layouts",
        "Built visual before/after comparison showcasing Drive transformation",
        "Designed email-based contact form with clear call-to-action for interested users",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "Google Fonts",
        "Responsive Design",
        "GitHub Pages",
      ],
    },
    {
      title: "Procure Path",
      company: "Banyan Labs",
      location: "Team-Based Full-Stack Development",
      period: "August 2025 - February 2026",
      description:
        "Worked in a team setting at Banyan Labs on Procure Path, an AI-powered grant summary platform with a Next.js frontend, Express.js backend, MongoDB data layer, and Clerk authentication. Contributed within a collaborative development workflow focused on grant document processing and management.",
      achievements: [
        "Collaborated with a development team using feature branches and pull requests",
        "Worked with a full-stack architecture spanning Next.js, Express.js, and MongoDB",
        "Supported secure user access with Clerk authentication",
        "Helped build a modern, maintainable foundation for AI-powered grant summaries",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Clerk",
        "Tailwind CSS",
        "Framer Motion",
        "Docker",
      ],
    },
    {
      title: "Four Tables",
      company: "Family Recipe Archive",
      location: "Full-Stack Development",
      period: "Deployed June 18, 2026",
      description:
        "Built Four Tables, a full-stack family recipe archive organized around Italian, Dutch, German, and Mexican traditions. The application preserves family cooking knowledge with public recipe browsing, structured recipe details, contributor-only content management, family notes, image uploads, and OpenAI-assisted recipe drafting.",
      achievements: [
        "Created public browsing by tradition, holiday, and category",
        "Built contributor tools for creating, editing, archiving, and enriching recipes",
        "Implemented signed contributor sessions with HTTP-only cookies",
        "Added recipe sharing, metadata, sitemap, robots, and structured data for public discovery",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Neon",
        "OpenAI API",
        "Vitest",
        "Playwright",
        "Vercel",
      ],
    },
    {
      title: "Know Your Federal Rights",
      company: "Plain-English Rights Education",
      location: "Static Web Development",
      period: "Deployed May 15, 2026",
      description:
        "Built Know Your Federal Rights, a free educational website that brings plain-language federal and state rights information into one accessible place for justice-impacted individuals, families, and support organizations. The site covers seven core rights topics with federal guidance and state-specific versions for all 50 states.",
      achievements: [
        "Created a federal and state jurisdiction toggle with a 50-state selector",
        "Built seven reusable rights topic cards from structured content data",
        "Added real-time search, quick-jump topic pills, smooth scrolling, and highlight feedback",
        "Designed an accessible, responsive, dependency-free site deployed through GitHub Pages",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "Vanilla JavaScript",
        "Structured Data",
        "GitHub Pages",
        "GitHub Actions",
        "Accessibility",
      ],
    },
    {
      title: "Warm Wishes",
      company: "Non-Profit Project Tracker",
      location: "Full-Stack Development",
      period: "January 2024",
      description: 
        "Warm Wishes is designed to help the organization fulfill its mission of providing warmth and comfort to vulnerable individuals during cold months by making it easier to manage resources, track impact, and strengthen connections with donors and volunteers.",
            
      achievements: [
        "Built complete CRUD functionality for project management",
        "Implemented secure authentication and authorization",
        "Created intuitive dashboard with data visualization using Recharts",
        "Designed responsive UI with Tailwind CSS for optimal user experience",
      ],
      technologies: [
        "React",
        "Redux Toolkit",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
      ],
    },
    {
      title: "Ask AI & Real Chat",
      company: "AI Integration & Real-time Communication",
      location: "Full-Stack Development",
      period: "2024",
      description:
        "Developed AI-powered chat application and real-time messaging platform, demonstrating expertise in modern communication technologies and AI integration.",
      achievements: [
        "Integrated Gemma2 AI model for intelligent conversation",
        "Implemented real-time messaging with Socket.io",
        "Built secure authentication with Passport.js and session management",
        "Created responsive chat interfaces with markdown support",
      ],
      technologies: [
        "React",
        "Socket.io",
        "Express.js",
        "MongoDB",
        "Passport.js",
        "AI Integration",
      ],
    },
    {
      title: "GUI Programmer & Customer Service Manager",
      company: "TKS",
      location: "Glendale, AZ",
      period: "2012 - 2016",
      description:
        "GUI development for digital newspaper platforms while managing customer service operations for major publications.",
      achievements: [
        "Developed GUI interfaces using C++ and JavaScript for tablet applications",
        "Provided technical support and training to clients, enhancing customer satisfaction",
        "Led customer service team, improving response times and service quality",
        "Created user-centered designs following usability principles and user feedback",      
        "Collaborated with cross-functional teams throughout development process",
      ],
      technologies: [
        "C++",
        "JavaScript",
        "iOS",
        "Android",
        "GUI Development",
        "User Experience Design",
      ],
      showcase: {
        images: [
          {
            src: "/virginian-pilot-tablet-realistic.png",
            alt: "The Virginian-Pilot digital newspaper on Android tablet",
            label: "Android Tablet",
          },
          {
            src: "/virginian-pilot-ipad-realistic.png",
            alt: "The Virginian-Pilot digital newspaper on iPad",
            label: "iPad",
          },
        ],
        caption: "Digital newspaper interfaces for tablet platforms in 2014",
      },
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">My Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A decade of programming evolution - from GUI development to modern
            full-stack applications
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="font-heading text-xl font-bold text-card-foreground mb-1">
                      {experience.title}
                    </CardTitle>
                    <div className="text-primary font-semibold text-lg">
                      {experience.company}
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {experience.description}
                </p>

                {experience.showcase && (
                  <div className="mb-6">
                    {experience.showcase.images ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {experience.showcase.images.map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="relative rounded-lg overflow-hidden border border-border"
                          >
                            <Image
                              src={img.src || "/placeholder.svg"}
                              alt={img.alt}
                              width={200}
                              height={150}
                              className="w-full h-auto object-cover max-w-xs mx-auto"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                              {img.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="relative rounded-lg overflow-hidden border border-border">
                        <Image
                          src={experience.showcase.images || "/placeholder.svg"}
                          alt="Showcase image"
                          width={800}
                          height={500}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground mt-2 italic text-center">
                      {experience.showcase.caption}
                    </p>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="font-semibold text-card-foreground mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {experience.achievements.map(
                      (achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="text-muted-foreground text-sm flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5 block w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          {achievement}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
