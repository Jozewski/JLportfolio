"use client"
import { Button } from "@/components/ui/button"
import { X, Download, Phone, Mail, MapPin } from "lucide-react"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-background border border-border rounded-lg shadow-2xl max-w-4xl max-h-[90vh] w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-heading font-bold text-primary">Resume</h2>
          <div className="flex items-center space-x-2">
            <a
              href="/Joanne_Liszewski_Resume.pdf"
              download="Joanne_Liszewski_Resume.pdf"
              className="inline-flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-white bg-[#00bfff] hover:bg-[#0099cc] rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.5)]"
            >
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </a>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Header */}
            <div className="text-center border-b border-border pb-6">
              <h1 className="text-3xl font-heading font-bold text-primary mb-2">Joanne Liszewski</h1>
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <span>joanneliszewski@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Phoenix, Arizona, United States</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-3">Professional Summary</h2>
              <p className="text-sm leading-relaxed text-foreground">
                Mission-driven Full Stack Developer specializing in accessible, user-centered web applications. Experienced in building scalable solutions with React, Node.js, Express, and MongoDB, including authentication systems, RESTful APIs, and AI-powered features. Combines technical development skills with a deep understanding of accessibility and UX principles gained through both professional experience and lived perspective as a visually impaired developer. Proficient in modern development workflows, collaborative Agile environments, and creating inclusive digital experiences that prioritize both functionality and usability.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-3">Technical Skills</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Languages and Frameworks:</strong>
                  <div className="ml-4 space-y-1">
                    <div>• JavaScript (ES6+), TypeScript, HTML5, CSS3, React, Node.js, Express.js, MongoDB, Socket.io</div>
                  </div>
                </div>
                <div>
                  <strong>Frontend Technologies:</strong>
                  <div className="ml-4 space-y-1">
                    <div>• Tailwind CSS, Bootstrap, Responsive Design, Component-Based Architecture</div>
                  </div>
                </div>
                <div>
                  <strong>Backend and Database:</strong>
                  <div className="ml-4 space-y-1">
                    <div>• RESTful API Development, NoSQL (MongoDB), JWT Authentication, Real-time Communication (Socket.io)</div>
                  </div>
                </div>
                <div>
                  <strong>Development and Deployment Tools:</strong>
                  <div className="ml-4 space-y-1">
                    <div>• Git, GitHub, GitLab, VS Code, Vercel, Chrome DevTools, Postman</div>
                  </div>
                </div>
                <div>
                  <strong>Accessibility and Testing:</strong>
                  <div className="ml-4 space-y-1">
                    <div>• WCAG 2.1 AA Standards, Axe DevTools, NVDA/VoiceOver, Wave, Screen Reader Testing</div>
                  </div>
                </div>
                <div>
                  <strong>Collaboration and Workflow:</strong>
                  <div className="ml-4 space-y-1">
                    <div>• Agile/Scrum Methodologies, JIRA, Notion, Confluence, Code Reviews, CI/CD Pipelines</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-3">Core Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div>• Full-Stack Web Application Development</div>
                <div>• RESTful API Design and Implementation</div>
                <div>• Database Schema Design and Optimization</div>
                <div>• Authentication and Authorization Systems (JWT, Role-Based Access Control)</div>
                <div>• Real-Time Features and WebSocket Integration</div>
                <div>• Responsive and Accessible UI/UX Development</div>
                <div>• Component-Based Architecture with React</div>
                <div>• AI Integration and Implementation</div>
                <div>• Accessibility-First Development (WCAG 2.1 AA)</div>
                <div>• Version Control and Collaborative Development</div>
                <div>• Agile/Scrum Team Collaboration</div>
                <div>• Performance Optimization and Core Web Vitals</div>
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-4">Professional Experience</h2>

              {/* Banyan Labs */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Full Stack Developer</h3>
                    <p className="text-sm text-muted-foreground">Banyan Labs LLC – Phoenix, Arizona, United States</p>
                  </div>
                  <span className="text-sm text-muted-foreground">August 2025 - February 2026</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div>• Collaborated with my team on full-stack development for Procure Path, an AI-powered grant management platform designed to help nonprofits streamline their grant acquisition process. Built scalable solutions enabling organizations to analyze grant opportunities, track deadlines, and receive intelligent matching recommendations.</div>
                  <div className="font-semibold mt-2">Key Achievements:</div>
                  <div>• Developed comprehensive authentication and authorization system with role-based access control</div>
                  <div>• Designed and optimized database schemas for grant document storage and AI analysis results</div>
                  <div>• Built complex React components for document analysis dashboard and grant matching interface</div>
                  <div>• Implemented RESTful API endpoints for document upload, processing, and reporting features</div>
                  <div>• Integrated AI-powered document analysis and scoring algorithms into the platform</div>
                  <div>• Created responsive UI components for freemium pricing model and subscription management</div>
                </div>
              </div>

              {/* Persevere */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Full Stack Web Development (Training)</h3>
                    <p className="text-sm text-muted-foreground">Persevere – Phoenix, AZ</p>
                  </div>
                  <span className="text-sm text-muted-foreground">August 2024 – June 2025 (11 months)</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div>• Built accessible, responsive web applications using React, Node.js, Express, and MongoDB</div>
                  <div>• Applied UX heuristics and accessibility testing methods during project development</div>
                  <div>• Learned to design APIs, validate RESTful architecture, and integrate testing into builds</div>
                  <div>• Conducted peer code reviews and debugging in collaborative, Agile environments</div>
                  <div>• Gained experience analyzing Core Web Vitals and front-end performance metrics</div>
                </div>
              </div>

              {/* Coalition for Compassion and Justice */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Shelter Coordinator and Housing Advocate</h3>
                    <p className="text-sm text-muted-foreground">Coalition for Compassion and Justice – Prescott, AZ</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2016–2018</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div>• Maintained precise documentation and data accuracy across multi-agency systems</div>
                  <div>• Advocated for accessibility and clarity in communication to improve client engagement</div>
                  <div>• Strengthened operational processes through organization, empathy, and problem-solving</div>
                </div>
              </div>

              {/* Turn Key Solutions */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Customer Service Call Center Manager / GUI Programmer</h3>
                    <p className="text-sm text-muted-foreground">Turn Key Solutions – Glendale, AZ</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2012–2016</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div>• Supported front-end interface rollouts for tablet-based platforms used by major digital publications</div>
                  <div>• Conducted user acceptance testing (UAT) for new features and updates</div>
                  <div>• Supervised data entry accuracy, CMS updates, and technical troubleshooting</div>
                </div>
              </div>

              {/* Education and Certifications */}
              <div>
                <h2 className="text-lg font-heading font-semibold text-primary mb-3">Education and Certifications</h2>
                <div className="space-y-2 text-sm">
                  <div>• IBM Data Analytics Certificate – Coursera (2023)</div>
                  <div>• Full Stack Web Development – Persevere Coding Program (2024–2025)</div>
                  <div>• Prompt Engineering for ChatGPT – Vanderbilt University (2025)</div>
                  <div>• AWS Cloud Practitioner Essentials – Amazon Web Services (2025)</div>
                  <div>• Learn Python Specialization – Scrimba (2025)</div>
                  <div>• Columbia University - AI Engineering Principles - Currently Enrolled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
