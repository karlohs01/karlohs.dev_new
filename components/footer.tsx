import { Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <Terminal className="w-4 h-4 text-terminal-blue" />
            <span>carlos@portfolio</span>
            <span className="text-terminal-dim">~</span>
            <span>Built with Next.js</span>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-terminal-dim">// </span>© {new Date().getFullYear()} Carlos Murillo. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
