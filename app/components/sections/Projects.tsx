import { Button } from "@/components/ui/button"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, ExternalLink, GithubIcon, Link } from "lucide-react"
    
export function Projects() {
    return (
        <section id="projects" className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-black to-slate-900">
            {/* Animated background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-pulse delay-700"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-pink-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>

            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary backdrop-blur-xl">
                        <Briefcase className="h-4 w-4 mr-2" /> Portfolio
                    </div>
                    <div className="space-y-2 max-w-3xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                            Featured Projects
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed text-balance">
                            A showcase of my recent work, personal projects, and experiments.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {[
                        {
                            title: "E-commerce Platform",
                            description:
                                "A full-featured online store with product management, cart functionality, and secure checkout process.",
                            image: "/placeholder.svg?height=300&width=500",
                            tech: ["React", "Node.js", "MongoDB"],
                        },
                        {
                            title: "Task Management App",
                            description:
                                "A productivity application that helps users organize tasks, set priorities, and track progress.",
                            image: "/placeholder.svg?height=300&width=500",
                            tech: ["Next.js", "TypeScript", "Tailwind"],
                        },
                        {
                            title: "Portfolio Website",
                            description:
                                "A personal portfolio website showcasing projects and skills with a modern, responsive design.",
                            image: "/placeholder.svg?height=300&width=500",
                            tech: ["React", "Tailwind CSS", "Framer Motion"],
                        },
                    ].map((project, index) => (
                        <Card
                            key={index}
                            className="group overflow-hidden border-border/40 bg-background/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="flex gap-2">
                                        <Button variant="secondary" size="sm" className="rounded-full gap-1">
                                            <GithubIcon className="h-4 w-4" />
                                            Code
                                        </Button>
                                        <Button variant="secondary" size="sm" className="rounded-full gap-1">
                                            <ExternalLink className="h-4 w-4" />
                                            Demo
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Link href="/projects">
                        <Button variant="outline" className="rounded-full group gap-2">
                            View All Projects
                            <ArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>      
    )
}