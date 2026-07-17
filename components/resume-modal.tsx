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
              <p className="text-sm text-muted-foreground mb-3">Full-Stack Developer | Phoenix, Arizona</p>
              <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:joanneliszewski@gmail.com" className="hover:text-primary">joanneliszewski@gmail.com</a>
                </div>
                <span>|</span>
                <a href="https://github.com/Jozewski" target="_blank" rel="noopener noreferrer" className="hover:text-primary">github.com/Jozewski</a>
                <span>|</span>
                <a href="https://linkedin.com/in/joanne-liszewski-437036125" target="_blank" rel="noopener noreferrer" className="hover:text-primary">linkedin.com/in/joanne-liszewski</a>
                <span>|</span>
                <a href="/" className="hover:text-primary">Portfolio</a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-3">Professional Summary</h2>
              <p className="text-sm leading-relaxed text-foreground">
                Full-stack developer who builds accessible, AI-powered web applications with React, Node.js, TypeScript, and MongoDB. Shipped production features on an AI grant-management platform, including role-based authentication, document-analysis integration, and subscription UI. Accessibility specialist with WCAG 2.1 AA expertise grounded in lived experience as a visually impaired developer, and a track record of civic tech projects that make complex systems usable for the people who need them most.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-3">Technical Skills</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Languages:</strong> JavaScript (ES6+), TypeScript, Python, SQL, HTML5, CSS3
                </div>
                <div>
                  <strong>Frontend:</strong> React, Next.js, Vite, Tailwind CSS, Radix UI, Recharts, responsive and component-based design
                </div>
                <div>
                  <strong>Backend & Data:</strong> Node.js, Express, RESTful API design, MongoDB (Mongoose), PostgreSQL (Prisma, Neon), SQLite, JWT and Clerk authentication, Socket.io
                </div>
                <div>
                  <strong>AI & Cloud:</strong> Retrieval-augmented generation (RAG), vector search, OpenAI and Gemini APIs, prompt engineering, AWS fundamentals, Vercel, Docker
                </div>
                <div>
                  <strong>Accessibility:</strong> WCAG 2.1 AA, screen reader testing (NVDA, VoiceOver), Axe DevTools, WAVE, ARIA patterns
                </div>
                <div>
                  <strong>Workflow:</strong> Git, GitHub, GitHub Actions CI/CD, Vitest, Playwright, Postman, Agile/Scrum, JIRA, code reviews
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-4">Professional Experience</h2>

              {/* Banyan Labs */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Full Stack Developer — Banyan Labs LLC</h3>
                    <p className="text-sm text-muted-foreground">Phoenix, AZ</p>
                  </div>
                  <span className="text-sm text-muted-foreground">August 2025 – February 2026</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div>Built core features for ProcurePath, an AI-powered grant management platform that helps nonprofits find, match, and track grant opportunities.</div>
                  <div>• Developed the authentication and authorization system with JWT and role-based access control.</div>
                  <div>• Designed and optimized MongoDB schemas for grant document storage and AI analysis results.</div>
                  <div>• Built React components for the document-analysis dashboard and grant-matching interface, and implemented the REST endpoints behind document upload, processing, and reporting.</div>
                  <div>• Integrated AI document analysis and scoring into the platform, and created responsive UI for the freemium pricing and subscription flows.</div>
                </div>
              </div>

              {/* Persevere */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Full Stack Web Developer (Apprenticeship) — Persevere</h3>
                    <p className="text-sm text-muted-foreground">Phoenix, AZ</p>
                  </div>
                  <span className="text-sm text-muted-foreground">August 2024 – June 2025</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div>Built accessible, responsive web applications with React, Node.js, Express, and MongoDB in a collaborative Agile team.</div>
                  <div>• Designed REST APIs, integrated automated testing into builds, and conducted peer code reviews.</div>
                  <div>• Applied UX heuristics, accessibility testing, and Core Web Vitals analysis across projects.</div>
                </div>
              </div>

              {/* Coalition for Compassion and Justice */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Shelter Coordinator & Housing Advocate — Coalition for Compassion and Justice</h3>
                    <p className="text-sm text-muted-foreground">Prescott, AZ</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2016 – 2018</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div>Maintained precise documentation and data accuracy across multi-agency systems while advocating for accessible, clear client communication.</div>
                </div>
              </div>

              {/* Turn Key Solutions */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Call Center Manager / GUI Programmer — Turn Key Solutions</h3>
                    <p className="text-sm text-muted-foreground">Glendale, AZ</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2012 – 2016</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div>Supported front-end interface rollouts for tablet platforms used by major digital publications; led user acceptance testing and supervised CMS updates and data accuracy.</div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-4">Projects</h2>

              {/* Be In The Know */}
              <div className="mb-6">
                <div className="mb-2">
                  <h3 className="font-semibold text-foreground">Be In The Know / Just Ask JO — AI legal rights education platform</h3>
                  <a href="https://beintheknowjustaskjo.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">beintheknowjustaskjo.com</a>
                </div>
                <div className="space-y-1 text-sm">
                  <div>Built a legal rights education platform for people navigating reentry, featuring JO, an AI assistant that answers questions on voting, expungement, housing, employment, police interactions, and supervision across all 50 states plus federal law.</div>
                  <div>• Engineered a retrieval-augmented generation (RAG) chat system with Next.js, MongoDB Atlas Vector Search, and Gemini embeddings that answers only from human-approved, cited legal sources — and declines when no approved source exists.</div>
                  <div>• Automated legislative monitoring with a LegiScan pipeline (Vercel cron) that flags law changes for human review; built the admin review dashboard, streaming chat with quota enforcement, and privacy-first accounts (hashed IPs, bcrypt, self-service deletion).</div>
                </div>
              </div>

              {/* ProcurePath */}
              <div className="mb-6">
                <div className="mb-2">
                  <h3 className="font-semibold text-foreground">ProcurePath — AI grant management platform (Banyan Labs)</h3>
                  <a href="https://procurepath.ojt.banyanlabs.io" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">procurepath.ojt.banyanlabs.io</a>
                </div>
                <div className="space-y-1 text-sm">
                  <div>Team-built AI-powered grant platform helping nonprofits summarize, match, and track grant opportunities — Next.js and TypeScript frontend, Express backend, MongoDB, Clerk authentication, and Docker.</div>
                  <div>• Contributed role-based access control, database schemas for grant documents and AI analysis results, document-analysis dashboard components, and REST endpoints for upload, processing, and reporting.</div>
                </div>
              </div>

              {/* Four Tables */}
              <div className="mb-6">
                <div className="mb-2">
                  <h3 className="font-semibold text-foreground">Four Tables — family recipe archive</h3>
                  <a href="https://jozewski.tech" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">jozewski.tech</a>
                </div>
                <div className="space-y-1 text-sm">
                  <div>Designed and shipped a full-stack recipe archive preserving Italian, Dutch, German, and Mexican family traditions — Next.js, React, TypeScript, Prisma, and PostgreSQL (Neon), with public browsing by tradition, holiday, and category.</div>
                  <div>• Built contributor-only content management with signed HTTP-only cookie sessions, image uploads, family notes, and OpenAI-assisted recipe drafting; added SEO structured data and tested with Vitest and Playwright.</div>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-3">Education & Certifications</h2>
              <div className="space-y-1 text-sm">
                <div>• AI Engineering Principles — Columbia University (in progress)</div>
                <div>• AWS Cloud Practitioner Essentials — Amazon Web Services (2025)</div>
                <div>• Full Stack Web Development — Persevere Coding Program (2024–2025)</div>
                <div>• Learn Python Specialization — Scrimba (2025)</div>
                <div>• Prompt Engineering for ChatGPT — Vanderbilt University (2025)</div>
                <div>• IBM Data Analytics Certificate — Coursera (2023)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
