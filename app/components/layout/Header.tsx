import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Download } from "lucide-react"
import { NavLink } from "@/components/nav-link"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-indigo-500/10">
      {/* Glass background with subtle gradient */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      <div className="container flex h-16 items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-2">
          
          <span className="font-bold text-lg hidden sm:inline-block text-white">Amhita Portfolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink href="#about" className="text-slate-300 hover:text-indigo-400 transition-colors">About</NavLink>
          <NavLink href="#skills" className="text-slate-300 hover:text-indigo-400 transition-colors">Skills</NavLink>
          <NavLink href="#projects" className="text-slate-300 hover:text-indigo-400 transition-colors">Projects</NavLink>
          <NavLink href="#contact" className="text-slate-300 hover:text-indigo-400 transition-colors">Contact</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="https://github.com/Amhitox" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full bg-slate-800/50 border border-indigo-500/20 text-slate-300 hover:text-indigo-400 hover:bg-slate-800/80 shadow-lg shadow-black/20"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full hidden md:flex gap-2 border-indigo-500/20 bg-slate-800/50 text-slate-300 hover:text-white hover:bg-indigo-500/20 shadow-lg shadow-black/20"
            >
              <Download className="h-4 w-4" /> Resume
            </Button>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  )
} 