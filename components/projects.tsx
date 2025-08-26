import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/data/projects"

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-card-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full-stack applications built to solve real-world challenges.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-background border-border overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                {project.title === "Warm Wishes" ? (
                  <iframe
                    width="100%"
                    height="384"
                    src="https://www.youtube.com/embed/NIpmPtr01fM?si=EJJa87LxhSmCKbCt"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-96 bg-black"
                  />
                ) : project.title === "Ask AI" ? (
                  <iframe
                    width="100%"
                    height="384"
                    src="https://www.youtube.com/embed/TZbh1p83Jr4?si=hdclkUGXb44pLzeY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-96 bg-black"
                  />
                ) : project.title === "Really Home" ? (
                  <iframe
                    width="100%"
                    height="384"
                    src="https://www.youtube.com/embed/lcUMpTMfb_U?si=_Zm-MhlqidwGBB0O"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-96 bg-black"
                  />
                ) : project.title === "Real Chat" ? (
                  <iframe
                    width="100%"
                    height="384"
                    src="https://www.youtube.com/embed/Em4PJ1fJ5oc?si=krlEtb7lqNAhrNgh"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-96 bg-black"
                  />
                ) : project.title === "Blog Platform" ? (
                  <iframe
                    width="100%"
                    height="384"
                    src="https://www.youtube.com/embed/BwP4WGUgPqM?si=9g1-toobVEVN9q_i"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-96 bg-black"
                  />
                ) : (
                  <video
                    src={project.video}
                    controls
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300 bg-black"
                    style={{ backgroundColor: '#000' }}
                  />
                )}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-background border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <video
                    src={project.video}
                    controls
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300 bg-black"
                    style={{ backgroundColor: '#000' }}
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-border text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* <h3 className="font-heading text-2xl font-bold text-card-foreground mt-12 mb-8 text-center">More Projects</h3> */}
        </div>
      </div>
    </section>
  )
}
