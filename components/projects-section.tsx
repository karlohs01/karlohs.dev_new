import { ExternalLink, Github, Server, Cloud, Container } from "lucide-react"

const projects = [
  {
    title: "Student Academic Assistant Agent",
    description:
      "Architected an autonomous Student Academic Assistant in Python using LangChain’s tool-calling framework.",
    tech: ["Python", "LangChain"],
    icon: Cloud,
    highlights: ["Used for study schedule planning, deadline checking, rubric checking", "Short and long-term memory capabilities", "Demonstrates rational agent behavior"],
    date: "Feb. 2026 – Mar. 2026",
  },
  {
    title: "Socket-Based Cloud Network File Sharing Application",
    description:
      "Built a client/server networking system supporting file uploads/downloads from 50+ concurrent clients with integrated SQLite database and network analytics.",
    tech: ["Python", "SQLite", "GCP", "Socket Programming"],
    icon: Cloud,
    highlights: ["50+ concurrent client support", "25+ file storage capacity", "Real-time analytics module"],
    date: "Sep 2024 – Dec 2024",
  },
  {
    title: "Linux-Based Scheduler Program",
    description:
      "Developed a performance-focused C++ scheduling system with optimized vector-based algorithms achieving sub-3-second runtimes.",
    tech: ["C++", "Git", "GitHub"],
    icon: Server,
    highlights: ["Sub-3-second runtime", "Vector-based optimization", "3-person team collaboration"],
    date: "Feb 2024 – Apr 2024",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-terminal-blue text-sm">03.</span>
          <h2 className="text-2xl font-bold text-foreground">Projects</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-terminal-blue/50 transition-all group"
            >
              {/* Terminal Header */}
              <div className="bg-secondary/50 px-4 py-2 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground ml-2">
                    project-{String(index + 1).padStart(2, "0")}.md
                  </span>
                </div>
                <span className="font-mono text-xs text-terminal-dim">{project.date}</span>
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-terminal-blue/10 rounded-lg group-hover:bg-terminal-blue/20 transition-colors">
                    <project.icon className="w-6 h-6 text-terminal-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-terminal-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>

                <div className="ml-0 md:ml-16 space-y-4">
                  {/* Highlights */}
                  <div className="font-mono text-sm">
                    <span className="text-terminal-dim">$ cat highlights.txt</span>
                    <ul className="mt-2 space-y-1">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="text-muted-foreground flex items-center gap-2">
                          <span className="text-terminal-blue">›</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-xs font-mono text-terminal-blue border border-terminal-blue/30 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/karlohs01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-terminal-blue transition-colors"
          >
            <Github className="w-4 h-4" />
            View more on GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  )
}
