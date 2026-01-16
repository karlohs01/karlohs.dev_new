"use client"

const skillCategories = [
  {
    title: "Languages",
    command: "ls languages/",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "Developer Tools",
    command: "ls tools/",
    skills: ["Git", "Docker", "GCP", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Figma", "Copilot"],
  },
  {
    title: "Libraries & Frameworks",
    command: "ls libraries/",
    skills: ["pandas", "NumPy", "Matplotlib", "TensorFlow", "scikit-learn", "Flask", "PostgreSQL", "SQLite"],
  },
  {
    title: "Concepts",
    command: "cat concepts.txt",
    skills: ["Data Structures", "Algorithms", "System Design", "Networking", "Cloud Computing", "Machine Learning"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-terminal-green text-sm">02.</span>
          <h2 className="text-2xl font-bold text-foreground">Skills</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-terminal-green/50 transition-all"
            >
              {/* Terminal Header */}
              <div className="bg-secondary/50 px-4 py-2 border-b border-border">
                <span className="font-mono text-xs text-muted-foreground">
                  {category.title.toLowerCase().replace(/ /g, "-")}.sh
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="text-terminal-dim mb-3">$ {category.command}</div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-foreground rounded text-xs border border-border hover:border-terminal-green hover:text-terminal-green transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
