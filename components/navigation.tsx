"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, FileText } from "lucide-react"
import { ResumeModal } from "./resume-modal"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between leading-7 h-9">
            <div className="font-heading text-xl font-bold text-primary">Portfolio</div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="navigation"
                    size="sm"
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium ${activeSection === item.id ? "text-primary" : ""}`}
                  >
                    {item.label}
                  </Button>
                ))}
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <Button
                    variant="electric"
                    size="sm"
                    onClick={() => setIsResumeModalOpen(true)}
                    className="inline-flex items-center space-x-2"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Resume</span>
                  </Button>
                  <a
                    href="https://github.com/Jozewski"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/joanne-liszewski-437036125"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="navigation"
                    size="sm"
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full justify-start text-base font-medium ${
                      activeSection === item.id ? "text-primary" : ""
                    }`}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="electric"
                  size="sm"
                  onClick={() => {
                    setIsResumeModalOpen(true)
                    setIsOpen(false)
                  }}
                  className="w-full justify-start"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  <span>View Resume</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </>
  )
}
