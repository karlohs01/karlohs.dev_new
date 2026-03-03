import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="font-mono text-terminal-blue text-sm">05.</span>
          <h2 className="text-2xl font-bold text-foreground">Contact</h2>
        </div>

        <div className="bg-card border border-border rounded-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-secondary/50 px-4 py-3 border-b border-border flex items-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-xs text-muted-foreground ml-4">contact.sh</span>
          </div>

          {/* Terminal Content */}
          <div className="p-8 md:p-12 font-mono">
            <div className="text-terminal-dim text-sm mb-4">$ ./get-in-touch.sh</div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{"Let's Build Something Together"}</h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed font-sans">
              I'm currently looking for new opportunities and would love to hear about interesting projects or potential
              collaborations. Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="text-terminal-dim text-sm mb-4">$ echo $CONTACT_LINKS</div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:carlosengineers@outlook.com"
                className="flex items-center gap-2 px-6 py-3 bg-terminal-blue text-primary-foreground hover:bg-terminal-blue/90 rounded transition-all font-medium w-full sm:w-auto justify-center"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/csmurillo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 border border-border rounded transition-all hover:border-terminal-blue hover:text-terminal-blue w-full sm:w-auto justify-center"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/karlohs01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 border border-border rounded transition-all hover:border-terminal-blue hover:text-terminal-blue w-full sm:w-auto justify-center"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="mt-8 text-muted-foreground text-sm">
              <span className="text-terminal-blue">›</span> carlosengineers@outlook.com
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
