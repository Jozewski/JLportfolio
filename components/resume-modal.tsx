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
                  <span>Mesa, Arizona, United States</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-3">Professional Summary</h2>
              <p className="text-sm leading-relaxed text-foreground">
                Solution-oriented Technical Support Specialist and Full-Stack Developer with 4+ years of customer service leadership
                experience and proven development skills. Combines frontline problem resolution expertise with hands-on coding
                abilities in JavaScript, React, Node.js, and MongoDB. Track record of identifying patterns, creating automated
                solutions, and translating technical concepts for diverse audiences. Eager to leverage support desk experience and
                programming foundation to transition into full-stack development while delivering immediate impact through technical
                problem-solving.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-3">Technical Skills</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Programming & Development:</strong>
                  <div className="ml-4 space-y-1">
                    <div>• Frontend: React, JavaScript, TypeScript, HTML5, CSS3, Sass, Bootstrap, Tailwind CSS</div>
                    <div>• Backend: Node.js, Express.js, REST APIs, MongoDB, NoSQL</div>
                    <div>• Tools & Platforms: Git, GitHub, GitLab, Webpack, Docker</div>
                    <div>• Cloud & Infrastructure: AWS (Lambda, S3), DigitalOcean</div>
                    <div>• Methodologies: Agile, Scrum, Test-Driven Development, CI/CD</div>
                  </div>
                </div>
                <div>
                  <strong>Technical Support & Operations:</strong>
                  <div className="ml-4 space-y-1">
                    <div>• CRM Platforms, Microsoft Office, Google Suite</div>
                    <div>• Automated Workflows & Scripting</div>
                    <div>• Knowledge Base Development</div>
                    <div>• Cross-functional Collaboration</div>
                    <div>• Issue Escalation & Resolution</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Competencies */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-3">Professional Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div>• Solution Architecture & Problem Pattern Recognition</div>
                <div>• Technical Documentation & Knowledge Transfer</div>
                <div>• Communication Excellence (Technical & Non-Technical Audiences)</div>
                <div>• Process Optimization & Automation</div>
                <div>• Remote Work & Time Management</div>
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
                    <p className="text-sm text-muted-foreground">Banyan Labs LLC</p>
                  </div>
                  <span className="text-sm text-muted-foreground">August 2025 – Present</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div>• Collaborate with development teams to troubleshoot and resolve complex technical issues in distributed environments</div>
                  <div>• Build and optimize responsive user interfaces using React and modern JavaScript frameworks</div>
                  <div>• Develop backend solutions using Node.js and Express.js with MongoDB database integration</div>
                  <div>• Demonstrate strong problem-solving abilities and adaptability in fast-paced development projects</div>
                  <div>• Apply version control best practices using Git for collaborative team-based development</div>
                </div>
              </div>

              {/* Persevere */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Full Stack Web Development Program</h3>
                    <p className="text-sm text-muted-foreground">Persevere • Phoenix, Arizona</p>
                  </div>
                  <span className="text-sm text-muted-foreground">August 2024 – June 2025</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div>• Mastered full-stack development including React component architecture, state management, and event handling</div>
                  <div>• Built RESTful APIs and backend services using Node.js and Express.js</div>
                  <div>• Designed and implemented MongoDB database schemas and optimized queries for application performance</div>
                  <div>• Applied Agile/Scrum methodology including Daily Standups, Sprint Retros, and iterative development practices</div>
                  <div>• Developed debugging and troubleshooting skills to identify root causes and implement effective solutions</div>
                  <div>• Collaborated with cross-functional teams using Git for version control and code management</div>
                  <div>• Created automated workflows and scripts to streamline development processes</div>
                </div>
              </div>

              {/* Turn Key Solutions */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Customer Service Call Center Manager / GUI Programmer</h3>
                    <p className="text-sm text-muted-foreground">Turn Key Solutions • Glendale, Arizona</p>
                  </div>
                  <span className="text-sm text-muted-foreground">May 2012 – October 2016</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div>• Managed technical support operations for major publications including The Arizona Republic and The Virginian Pilot</div>
                  <div>• Served as first line of defense for complex technical issues, escalating system-level problems to development teams</div>
                  <div>• Led successful rollout of The Virginian Pilot's digital edition on iPad and Android tablets (2014)</div>
                  <div>• Created and maintained knowledge base documentation</div>
                  <div>• Trained and mentored support staff on troubleshooting methodologies</div>
                  <div>• Fostered a culture of excellence through solution-oriented approach</div>
                  <div>• Translated technical concepts for non-technical users</div>
                </div>
              </div>

              {/* Coalition for Compassion & Justice */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Housing Advocate / Shelter Coordinator</h3>
                    <p className="text-sm text-muted-foreground">Coalition for Compassion & Justice • Prescott, Arizona</p>
                  </div>
                  <span className="text-sm text-muted-foreground">November 2016 – August 2018</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div>• Provided empathetic, solution-oriented support to individuals experiencing complex, sensitive situations</div>
                  <div>• Coordinated shelter operations and managed efficient communication between cross-functional teams</div>
                  <div>• Demonstrated learning agility by quickly mastering new case management systems and processes</div>
                  <div>• Built comprehensive documentation and knowledge resources for team members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
