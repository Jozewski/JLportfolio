import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export function Experience() {
  const experiences = [
    {
      title: "Full-Stack Web Development",
      company: "Modern Technology Transition",
      location: "Remote",
      period: "2024 - Present",
      description:
        "Transitioned from traditional GUI programming to modern full-stack web development, building projects designed to solve real community challenges. Leveraged foundational programming experience to rapidly master contemporary technologies.",
      achievements: [
        "Successfully modernized skillset from GUI programming to full-stack web development",
        "Built 5 major full-stack applications from scratch using modern frameworks",
        "Mastered React, Node.js, MongoDB, and contemporary web development practices",
        "Applied decade of programming experience to create robust, scalable applications",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Socket.io",
        "JWT",
      ],
    },
    {
      title: "Project: Warm Wishes",
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
      title: "Project: Ask AI & Real Chat",
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
