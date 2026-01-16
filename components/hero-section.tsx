"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Software Engineer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Terminal Window */}
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-secondary/50 px-4 py-3 flex items-center gap-2 border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-xs text-muted-foreground ml-4">~/carlos-murillo/portfolio</span>
          </div>

          {/* Terminal Content */}
          <div className="p-8 md:p-12 font-mono">
            <div className="text-terminal-dim text-sm mb-2">$ whoami</div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Carlos Murillo</h1>
            <div className="text-terminal-dim text-sm mb-2">$ cat role.txt</div>
            <h2 className="text-2xl md:text-3xl text-terminal-green mb-6">
              {displayText}
              <span className="cursor-blink">|</span>
            </h2>
            <div className="text-terminal-dim text-sm mb-2">$ cat bio.txt</div>
            <p className="text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Computer Science student at Florida Polytechnic University specializing in Software Engineering. Building
              scalable systems, optimizing performance, and crafting elegant solutions to complex problems.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-terminal-green" />
                <span>Lakeland, FL (Open to relocation)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-terminal-green">•</span>
                <span>Graduating May 2026</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/karlohs01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 border border-border rounded text-sm transition-all hover:border-terminal-green hover:text-terminal-green"
              >
                <Github className="w-4 h-4" />
                <span>github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/csmurillo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 border border-border rounded text-sm transition-all hover:border-terminal-green hover:text-terminal-green"
              >
                <Linkedin className="w-4 h-4" />
                <span>linkedin</span>
              </a>
              <a
                href="mailto:carlosengineers@outlook.com"
                className="flex items-center gap-2 px-4 py-2 bg-terminal-green text-primary-foreground hover:bg-terminal-green/90 rounded text-sm transition-all font-medium"
              >
                <Mail className="w-4 h-4" />
                <span>contact</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="text-muted-foreground hover:text-terminal-green transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
