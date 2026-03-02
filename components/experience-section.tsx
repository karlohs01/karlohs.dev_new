import { Briefcase, Calendar, ArrowUpRight } from "lucide-react"

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Everglades Financial",
    location: "Lakeland, FL",
    date: "May 2025 – Aug 2025",
    description: [
      "Improved application performance by 26% through code-level optimizations and frontend/backend coordination using JavaScript and PHP.",
      "Collaborated cross-functionally with AI engineering team to create user interface for integrated PDF Scraper using Python & JavaScript.",
      "Participated in iterative development, debugging, and feature refinement in a team-based engineering environment.",
    ],
    tech: ["JavaScript", "PHP", "Python"],
  },
]

const leadership = [
  {
    role: "Resident Assistant",
    company: "Florida Polytechnic University",
    date: "Aug 2024 – Present",
    description: [
      "Manage 25+ residents & practice effective communication & problem-solving skills.",
      "Lead a team of 3 Resident Assistants in developing monthly programs to boost engagement across all 3 buildings.",
    ],
  },
  {
    role: "Chief of Staff",
    company: "Florida Polytechnic University Music Association",
    date: "Mar 2023 – Present",
    description: [
      "Spearheaded numerous events & initiatives that increased student engagement by 45%.",
      "Advocated for various asset purchases totaling around $7000 for the 2024-2025 fiscal year.",
      "Recognized with RSO Innovation Award at the 2025 Florida Poly NOVA Awards.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-terminal-blue text-sm">04.</span>
          <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="space-y-12">
          {/* Work Experience */}
          <div>
            <div className="font-mono text-sm text-terminal-dim mb-6">$ cat work-experience.log</div>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.role}
                  className="bg-card border border-border rounded-lg p-6 hover:border-terminal-blue/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        {exp.role}
                        <ArrowUpRight className="w-4 h-4 text-terminal-blue" />
                      </h3>
                      <p className="text-terminal-blue font-mono text-sm">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                      <Calendar className="w-4 h-4" />
                      {exp.date}
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-terminal-blue mt-1">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-xs font-mono text-foreground border border-border rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <div className="font-mono text-sm text-terminal-dim mb-6">$ cat leadership.log</div>
            <div className="grid md:grid-cols-2 gap-6">
              {leadership.map((exp) => (
                <div
                  key={exp.role}
                  className="bg-card border border-border rounded-lg p-6 hover:border-terminal-blue/50 transition-all"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-terminal-blue/10 rounded">
                      <Briefcase className="w-4 h-4 text-terminal-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-terminal-blue font-mono text-xs">{exp.company}</p>
                      <p className="text-muted-foreground text-xs font-mono mt-1">{exp.date}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-terminal-blue mt-1">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
