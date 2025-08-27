"use client"
import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  const socialLinks = [
    {
      href: "https://github.com/Jozewski",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/joanne-liszewski-437036125",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:joanneliszewski@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold text-primary">Joanne Liszewski</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-Stack Developer passionate about creating technology solutions that empower communities and drive
              meaningful change.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Mesa, Arizona</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              {quickLinks.map((link) => (
                <div
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="cursor-pointer hover:text-primary transition-colors"
                >
                  {link.label}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Tech Stack</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>React & Next.js</div>
              <div>TypeScript</div>
              <div>Node.js & Express</div>
              <div>MongoDB</div>
              <div>Tailwind CSS</div>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{social.label}</span>
                  </a>
                )
              })}
              <div
                onClick={() => window.open("/Joanne_Liszewski_Resume.pdf", "_blank")}
                className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                <FileText className="h-4 w-4" />
                <span>Resume</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© {currentYear} Joanne Liszewski. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}