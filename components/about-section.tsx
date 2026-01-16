import { GraduationCap, Award, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-terminal-green text-sm">01.</span>
          <h2 className="text-2xl font-bold text-foreground">About</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science student with a concentration in Software Engineering at Florida
              Polytechnic University. My journey in tech has led me to develop performance-focused applications,
              cloud-based solutions, and collaborative software systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I take on leadership roles as a Resident Assistant managing 25+ residents and as Chief of
              Staff for the Music Association, where I've driven initiatives that increased student engagement by 45%.
            </p>
            <div className="font-mono text-sm">
              <span className="text-terminal-dim">$ echo $COURSEWORK</span>
              <div className="mt-2 text-muted-foreground">
                Data Structures • Algorithm Design • Operating Systems • Computer Networks • Machine Learning • Systems
                Analysis • Software Requirements
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-terminal-green/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-terminal-green/10 rounded">
                  <GraduationCap className="w-5 h-5 text-terminal-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Florida Polytechnic University</h3>
                  <p className="text-sm text-muted-foreground">B.S. Computer Science, Software Engineering</p>
                  <p className="text-sm text-terminal-green font-mono mt-1">GPA: 3.03/4.0</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-terminal-green/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-terminal-green/10 rounded">
                  <Award className="w-5 h-5 text-terminal-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">RSO Innovation Award</h3>
                  <p className="text-sm text-muted-foreground">2025 Florida Poly NOVA Awards</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-terminal-green/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-terminal-green/10 rounded">
                  <Users className="w-5 h-5 text-terminal-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Leadership Experience</h3>
                  <p className="text-sm text-muted-foreground">Resident Assistant • Chief of Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
