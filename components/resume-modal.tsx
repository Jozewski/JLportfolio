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
                Detail-oriented and mission-driven QA Analyst and Front-End Developer with 4+ years of experience ensuring high-quality, accessible, and user-centered digital products. Skilled in exploratory testing, accessibility validation, UX analysis, and collaboration with design and engineering teams. As a visually impaired professional, I bring a uniquely valuable perspective to accessibility testing, approaching applications from the same lens as the users who depend on inclusive design. Proficient in using modern QA tools, analytics, and AI-assisted testing to identify risks and improve product performance. Passionate about building sustainable, data-informed QA practices that align with delivering meaningful, inclusive, and excellent user experiences.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-3">Technical Skills</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Languages and Frameworks:</strong>
                  <div className="ml-4 space-y-1">
                    <div>• HTML5, CSS3, JavaScript, TypeScript, React, Node.js, Express, MongoDB</div>
                  </div>
                </div>
                <div>
                  <strong>Testing Tools:</strong>
                  <div className="ml-4 space-y-1">
                    <div>• Chrome DevTools, Postman, GraphQL Clients, Session Replay, BrowserStack</div>
                  </div>
                </div>
                <div>
                  <strong>Accessibility Tools:</strong>
                  <div className="ml-4 space-y-1">
                    <div>• Axe DevTools, Wave, NVDA/VoiceOver, Color Contrast Analyzer</div>
                  </div>
                </div>
                <div>
                  <strong>Automation and Monitoring:</strong>
                  <div className="ml-4 space-y-1">
                    <div>• Familiar with CI/CD pipelines, synthetic monitoring, and automatable acceptance criteria</div>
                  </div>
                </div>
                <div>
                  <strong>Analytics and Performance:</strong>
                  <div className="ml-4 space-y-1">
                    <div>• Google Analytics, Core Web Vitals, API Metrics, User Session Data</div>
                  </div>
                </div>
                <div>
                  <strong>Collaboration and Workflow:</strong>
                  <div className="ml-4 space-y-1">
                    <div>• Git, GitHub, GitLab, Agile, JIRA, Notion, Confluence</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-3">Core Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div>• Exploratory and UX Testing (Web and Mobile)</div>
                <div>• Accessibility Validation (WCAG 2.1 AA, Keyboard Navigation, Screen Reader Testing)</div>
                <div>• Automated Testing Collaboration (UI/API Criteria and Synthetic Monitoring)</div>
                <div>• Usability and Experience Quality Auditing</div>
                <div>• Analytics, Logs, and Real-User Monitoring (RUM) Analysis</div>
                <div>• QA Documentation and Reproducible Defect Reporting</div>
                <div>• Agile / Scrum Team Participation and Cross-Functional Collaboration</div>
                <div>• DevTools, Postman, GraphQL Clients, and API Spot Checks</div>
                <div>• AI-Assisted Quality Tools and Testing Data Generation</div>
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-4">Professional Experience</h2>

              {/* Banyan Labs */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Quality Assurance and Front-End Developer (Intern)</h3>
                    <p className="text-sm text-muted-foreground">Banyan Labs – Remote</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2025–Present</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div>• Conduct exploratory and accessibility testing for web applications built in React and Node.js</div>
                  <div>• Identify UX and performance issues, documenting reproducible defects with user impact summaries</div>
                  <div>• Partner with developers to define automatable acceptance criteria and ensure comprehensive test coverage</div>
                  <div>• Use Postman, DevTools, and analytics data to validate site behavior across browsers and devices</div>
                  <div>• Participate in Agile ceremonies, collaborating with design and engineering teams to improve usability and experience correctness</div>
                  <div>• Leverage AI-assisted tools to generate test ideas, streamline bug documentation, and enhance reporting workflows</div>
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
