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
              href="/JoanneLiszewskiResume_updated%20-%20Google%20Docs.pdf"
              download="JoanneLiszewskiResume_updated - Google Docs.pdf"
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
                  <Phone className="h-4 w-4" />
                  <span>(480) 310 9875</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <span>joanneliszewski@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Greater Phoenix Metro</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <p className="text-sm leading-relaxed text-foreground">
                I'm driven to partner with organizations that share my dedication to uplifting communities. By
                leveraging technology as a catalyst for change, I strive to expand their reach, amplify their impact,
                and streamline their efforts in delivering meaningful support across the globe. Through collaboration
                and a shared commitment to purpose, we can create lasting, tangible change—one project, one community,
                one life at a time.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-3">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div>• React, JavaScript, TypeScript</div>
                <div>• Node.js, Express, Socket.io, MongoDB, NoSQL, REST</div>
                <div>• Tailwind CSS, Bootstrap</div>
                <div>• Git, GitHub, Gitlab</div>
                <div>• Agile, Scrum, GitLab Issues, CICD</div>
              </div>
            </div>

            {/* Professional Skills */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-3">Professional Skills</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Communication:</strong> Strong written and verbal communication skills
                </div>
                <div>
                  <strong>Collaboration:</strong> Proven ability to work effectively within cross-functional teams
                </div>
                <div>
                  <strong>Leadership:</strong> Experience leading through training, coaching, and performance management
                </div>
                <div>
                  <strong>Problem-Solving & Critical Thinking:</strong> Ability to analyze client situations, identify
                  root causes, develop solutions, and implement effective strategies
                </div>
                <div>
                  <strong>Empathy & Compassion:</strong> Understanding the challenges faced by individuals and providing
                  compassionate support
                </div>
                <div>
                  <strong>Time Management & Organization:</strong> Successfully manages multiple projects simultaneously
                  and prioritizes tasks effectively to meet deadlines consistently
                </div>
                <div>
                  <strong>Adaptability & Flexibility:</strong> Comfortable learning new technologies, adjusting to
                  changing project requirements
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-lg font-heading font-semibold text-primary mb-4">Experience</h2>

              {/* Full Stack Development */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Full Stack Web Development</h3>
                    <p className="text-sm text-muted-foreground">Persevere Coding • Phoenix, AZ</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2024-2025</span>
                </div>
                <p className="text-sm mb-3 leading-relaxed">
                  Full Stack Developer with a strong background in both front-end and back-end development. Proficient
                  in JavaScript, HTML5, CSS3, and familiar with modern React. Strong understanding of Node.js,
                  Express.js, REST, and MongoDB. Skilled in Agile/Scrum methodologies, test-driven development, and
                  continuous integration practices.
                </p>
                <div className="space-y-1 text-sm">
                  <div>• Gained expertise in building responsive user interfaces using React</div>
                  <div>• Mastered Node.js and REST design principles</div>
                  <div>• Gained skills in database design and management using MongoDB and APIs</div>
                  <div>• Learned backend frameworks and server setup with Express.js</div>
                  <div>• Applied Agile methodology Scrum for efficient project management</div>
                </div>
              </div>

              {/* Housing Advocate */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">CCJ Housing Advocate / Shelter Coordinator</h3>
                    <p className="text-sm text-muted-foreground">Coalition for Compassion and Justice • Prescott, AZ</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2016-2018</span>
                </div>
                <p className="text-sm mb-3 leading-relaxed">
                  Provided comprehensive support to individuals and families experiencing homelessness or housing
                  insecurity in Prescott. Responsibilities encompassed both direct client services and efficient
                  management of shelter operations.
                </p>
                <div className="space-y-1 text-sm">
                  <div>• Case Management & Advocacy: Provided individualized case management and advocacy</div>
                  <div>• Housing Support & Outreach: Offered housing counseling and community outreach</div>
                  <div>• Shelter Operations: Oversaw daily operations and program development</div>
                  <div>• Resource Coordination: Leveraged relationships with organizations and agencies</div>
                </div>
              </div>

              {/* Call Center Manager */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Customer Service Call Center Manager / GUI Programmer
                    </h3>
                    <p className="text-sm text-muted-foreground">TKS/Landmark Media • Glendale, AZ</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2012-2016</span>
                </div>
                <p className="text-sm mb-3 leading-relaxed">
                  Excelled as Call Center Manager for major news publications while leading the successful rollout of
                  digital editions on iPad and Android tablets, demonstrating strategic planning and execution
                  abilities.
                </p>
                <div className="space-y-1 text-sm">
                  <div>• Leadership & Development: Managed team of call center agents with training and coaching</div>
                  <div>• Customer-Centric Operations: Collaborated across departments for customer satisfaction</div>
                  <div>• Process Optimization: Evaluated technology and processes for efficiency improvements</div>
                  <div>• Full Development Lifecycle: Spearheaded GUI development using C++ and JavaScript</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
