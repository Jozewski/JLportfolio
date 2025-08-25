import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone } from "lucide-react"

export const TechIcons = {
  React: () => (
    <svg className="h-5 w-5 transition-transform duration-300 hover:scale-110 text-[#61DAFB] dark:text-[#1e90ff]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c-.62 2.58-.46 4.79 1.01 5.63 1.46.84 3.45-.12 5.37 1.95 1.92 1.83 3.91 2.79 5.37 1.95 1.47-.84 1.63-3.05 1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z" />
    </svg>
  ),
  JavaScript: () => (
    <svg className="h-5 w-5 transition-transform duration-300 hover:scale-110" viewBox="0 0 24 24" fill="#F7DF1E">
      <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.404-.451-.439-.586-.473-.528-1.103-.798-2.126-.77l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z" />
    </svg>
  ),
  NodeJS: () => (
    <svg className="h-5 w-5 transition-transform duration-300 hover:scale-110" viewBox="0 0 24 24" fill="#339933">
      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c-0.141,0-0.254,0.112-0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,12.324,24,11.998,24z" />
    </svg>
  ),
  MongoDB: () => (
    <svg className="h-5 w-5 transition-transform duration-300 hover:scale-110" viewBox="0 0 24 24" fill="#47A248">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-3.032.284-6.017.51-9.020.417-.296 4.604-2.876 4.292-5.425z" />
    </svg>
  ),
  TailwindCSS: () => (
    <svg className="h-5 w-5 transition-transform duration-300 hover:scale-110" viewBox="0 0 24 24" fill="#06B6D4">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2-1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  ),
  VSCode: () => (
    <svg className="h-5 w-5 transition-transform duration-300 hover:scale-110" viewBox="0 0 24 24" fill="#007ACC">
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
    </svg>
  ),
  GitLab: () => (
    <svg className="h-5 w-5 transition-transform duration-300 hover:scale-110" viewBox="0 0 24 24" fill="#FC6D26">
      <path d="M4.845.904c-.435 0-.82.28-.955.692L2.639 7.04H1.346L.095 1.596C-.04 1.184-.435.904-.87.904c-.434 0-.83.28-.964.692L-3.076 7.04h-.002L-5.418 15.285c-.092.297-.047.616.123.872.17.256.441.407.732.407.291 0 .562-.15.732-.407L-1.539 12.2h4.078l2.292 3.957c.17.256.441.407.732.407.291 0 .562-.15.732-.407L1.65 17.94a.999.999 0 0 0 1.276.057l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 19.134L9.101 14.9h5.798L12 2.433zm-.001 19.134L9.101 14.9h5.798l-2.9 6.667zM23.905 1.596L22.654 7.04h-1.293L20.11 1.596c-.134-.412-.529-.692-.964-.692-.435 0-.83.28-.965.692L16.83 7.04h-.002L14.488 15.285c-.092.297-.047.616.123.872.17.256.441.407.732.407.291 0 .562-.15.732-.407L18.367 12.2h4.078l2.292 3.957c.17.256.441.407.732.407.291 0 .562-.15.732-.407.17-.256.215-.575.123-.872L23.905 1.596z" />
    </svg>
  ),
  GitHub: () => (
    <svg className="h-5 w-5 transition-transform duration-300 hover:scale-110 text-[#181717] dark:text-gray-200" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z M.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-6.454 3.078-14.677-2.548-9.085-6.617z" />
    </svg>
  ),
  Vercel: () => (
    <svg className="h-5 w-5 transition-transform duration-300 hover:scale-110 text-black dark:text-gray-200" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  ),
  Express: () => (
    <svg className="h-5 w-5 transition-transform duration-300 hover:scale-110 text-black dark:text-gray-200" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-6.454 3.078-14.677-2.548-9.085-6.617z" />
    </svg>
  ),
  SocketIO: () => (
    <svg className="h-5 w-5 transition-transform duration-300 hover:scale-110 text-black dark:text-gray-200" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm-1.2 3.6v12l9.6-6-9.6-6z" />
    </svg>
  ),
  HTML5: () => (
    <svg className="h-5 w-5 transition-transform duration-300 hover:scale-110" viewBox="0 0 24 24" fill="#E34F26">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H8.531l.33 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
    </svg>
  ),
  CSS3: () => (
    <svg className="h-5 w-5 transition-transform duration-300 hover:scale-110" viewBox="0 0 24 24" fill="#1572B6">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
    </svg>
  ),
  Vite: () => (
    <Code className="h-5 w-5 text-[#646CFF] transition-transform duration-300 hover:scale-110 hover:rotate-12" />
  ),
  Mongoose: () => <Database className="h-5 w-5 text-[#880000] transition-transform duration-300 hover:scale-110" />,
  JWT: () => <Code className="h-5 w-5 text-[#000000] transition-transform duration-300 hover:scale-110" />,
  Axios: () => <Globe className="h-5 w-5 text-[#5A29E4] transition-transform duration-300 hover:scale-110" />,
  Passport: () => <Code className="h-5 w-5 text-[#34E27A] transition-transform duration-300 hover:scale-110" />,
  Mobile: () => <Smartphone className="h-5 w-5 text-[#61DAFB] transition-transform duration-300 hover:scale-110" />,
}

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "text-primary",
    skills: [
      { name: "React", icon: TechIcons.React },
      { name: "JavaScript (ES6+)", icon: TechIcons.JavaScript },
      { name: "HTML5/CSS3", icon: TechIcons.HTML5 },
      { name: "Tailwind CSS", icon: TechIcons.TailwindCSS },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "text-accent",
    skills: [
      { name: "Node.js", icon: TechIcons.NodeJS },
      { name: "Express.js", icon: TechIcons.Express },
      { name: "MongoDB", icon: TechIcons.MongoDB },
      { name: "Socket.io", icon: TechIcons.SocketIO },
    ],
  },
  {
    title: "Tools",
    icon: Code,
    color: "text-chart-3",
    skills: [
      { name: "VS Code", icon: TechIcons.VSCode },
      { name: "GitLab", icon: TechIcons.GitLab },
      { name: "GitHub", icon: TechIcons.GitHub },
      { name: "Vercel", icon: TechIcons.Vercel },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "text-chart-4",
    skills: [
      { name: "Responsive Design", icon: TechIcons.Mobile },
      { name: "Progressive Web Apps", icon: TechIcons.Mobile },
      { name: "Cross-Platform", icon: TechIcons.Mobile },
    ],
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting innovative solutions with a focus on user experience and community impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div></div>

          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold text-foreground">My Coding Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My coding journey began in 2014 when I started developing GUI interfaces and programming solutions at TKS.
              Working with technologies like C++ and JavaScript, I created intuitive user interfaces for digital
              newspaper platforms and managed the technical rollout of tablet applications for major publications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As technology evolved rapidly, I recognized the need to modernize my skillset and embarked on a new
              adventure in 2024, diving deep into modern web development with React, Node.js, and full-stack
              technologies. This journey has allowed me to combine my foundational programming experience with
              cutting-edge frameworks to build applications that truly make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What drives me is the sheer joy of seeing something I built actually work and make a difference. I
              specialize in creating applications that help communities and organizations - from non-profit project
              trackers to real-time communication platforms. Every project teaches me something new about the endless
              possibilities of code.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                10+ Years Experience
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent">
                4+ Projects
              </Badge>
              <Badge variant="secondary" className="bg-chart-3/10 text-chart-3">
                Community Focused
              </Badge>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon
                    className={`h-6 w-6 ${category.color} transition-transform duration-300 hover:scale-110`}
                  />
                  <h4 className="font-heading text-lg font-semibold text-card-foreground">{category.title}</h4>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 transition-transform duration-200 hover:translate-x-1"
                    >
                      <skill.icon />
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
