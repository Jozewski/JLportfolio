"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
  <h1 className="font-heading lg:text-7xl font-bold mb-6 leading-tight text-5xl mt-16">
          Joanne Liszewski
          <br />
          <span
            className="text-electric-blue glow-text"
            style={{
              textShadow: "0 0 10px #00bfff, 0 0 20px #00bfff, 0 0 30px #00bfff",
              color: "#00bfff",
            }}
          >
            Full-Stack Developer
          </span>
        </h1>

        <p className="text-lg lg:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed sm:text-lg">
          I'm driven to partner with organizations that share my dedication to uplifting communities. By leveraging
          technology as a catalyst for change, I strive to expand their reach, amplify their impact, and streamline
          their efforts in delivering meaningful support across the globe.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="xl"
            variant="electric"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button
            size="xl"
            variant="electric-outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="https://github.com/Jozewski"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-accent transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/joanne-liszewski-437036125"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/70 hover:text-accent transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:joanneliszewski@gmail.com"
            className="text-primary-foreground/70 hover:text-accent transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="animate-bounce text-primary-foreground/70 hover:text-accent transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>

      <style jsx>{`
        .glow-text {
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          from {
            text-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff, 0 0 30px #00bfff;
          }
          to {
            text-shadow: 0 0 20px #00bfff, 0 0 30px #00bfff, 0 0 40px #00bfff;
          }
        }
      `}</style>
    </section>
  )
}
