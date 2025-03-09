import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Briefcase, Star, User, Heart } from "lucide-react"
import { NavLink } from "@/components/nav-link"

export function Footer() {
    return (
        <footer className="w-full py-12 relative overflow-hidden bg-gradient-to-b from-black to-slate-950">
            {/* Animated background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.075)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-purple-500/5 to-transparent"></div>
            </div>

            {/* Floating elements - more subtle than main sections */}
            <div className="absolute bottom-40 left-10 w-32 h-32 bg-indigo-600/5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-20 right-10 w-24 h-24 bg-purple-600/5 rounded-full blur-xl animate-pulse delay-700"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">
                                A
                            </div>
                            <span className="font-bold text-lg text-white">Amhita</span>
                        </Link>
                        <p className="text-sm text-slate-400">
                            Crafting beautiful digital experiences with modern technologies, focusing on clean code and intuitive
                            design.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-medium text-white">Navigation</h3>
                        <nav className="flex flex-col space-y-3 text-sm">
                            <NavLink href="#about" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                                <User className="h-4 w-4" /> About
                            </NavLink>
                            <NavLink href="#skills" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                                <Star className="h-4 w-4" /> Skills
                            </NavLink>
                            <NavLink href="#projects" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                                <Briefcase className="h-4 w-4" /> Projects
                            </NavLink>
                            <NavLink href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                                <Mail className="h-4 w-4" /> Contact
                            </NavLink>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-medium text-white">Connect</h3>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/Amhitox" target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 bg-slate-800/50 border border-indigo-500/20 text-slate-300 hover:text-indigo-400 hover:bg-slate-800/80 shadow-lg shadow-black/20">
                                    <Github className="h-4 w-4" />
                                    <span className="sr-only">GitHub</span>
                                </Button>
                            </Link>
                            <Link href="https://linkedin.com/in/amhita-marouane" target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 bg-slate-800/50 border border-indigo-500/20 text-slate-300 hover:text-indigo-400 hover:bg-slate-800/80 shadow-lg shadow-black/20">
                                    <Linkedin className="h-4 w-4" />
                                    <span className="sr-only">LinkedIn</span>
                                </Button>
                            </Link>
                            <Link href="mailto:amhitasao@gmail.com">
                                <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 bg-slate-800/50 border border-indigo-500/20 text-slate-300 hover:text-indigo-400 hover:bg-slate-800/80 shadow-lg shadow-black/20">
                                    <Mail className="h-4 w-4" />
                                    <span className="sr-only">Email</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-indigo-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Amhita Marouane. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>Made with</span>
                        <Heart className="h-3 w-3 text-pink-500 animate-pulse" />
                        <span>using Next.js & Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}