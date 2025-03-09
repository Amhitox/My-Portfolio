import { Star, Code, FileCode, Layout, Palette, Server, Zap, Terminal, Github, Clock, Heart, Smartphone, Database, Globe, Monitor, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Skills() {
    return (
        <section id="skills" className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 to-black">
            {/* Animated background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-20 right-10 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-pulse delay-700"></div>
            <div className="absolute top-40 left-20 w-16 h-16 bg-pink-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>

            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary backdrop-blur-xl">
                        <Star className="h-4 w-4 mr-2" /> Expertise
                    </div>
                    <div className="space-y-2 max-w-3xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                            Skills & Technologies
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed text-balance">
                            Here are some of the technologies and tools I work with to bring ideas to life.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    <Card className="overflow-hidden border-border/40 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="rounded-full bg-primary/10 p-3">
                                    <Monitor className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">Frontend Development</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <Code className="h-4 w-4 text-primary" /> React
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Code className="h-4 w-4 text-primary" /> Next.js
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FileCode className="h-4 w-4 text-primary" /> TypeScript
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Layout className="h-4 w-4 text-primary" /> HTML/CSS
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden border-border/40 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="rounded-full bg-primary/10 p-3">
                                    <Palette className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">UI/UX Design</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <Layers className="h-4 w-4 text-primary" /> Figma
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Layers className="h-4 w-4 text-primary" /> Tailwind CSS
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Smartphone className="h-4 w-4 text-primary" /> Responsive Design
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Heart className="h-4 w-4 text-primary" /> Accessibility
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden border-border/40 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="rounded-full bg-primary/10 p-3">
                                    <Server className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">Backend Development</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <Server className="h-4 w-4 text-primary" /> Node.js
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Server className="h-4 w-4 text-primary" /> Express
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Globe className="h-4 w-4 text-primary" /> REST APIs
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Database className="h-4 w-4 text-primary" /> Databases
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden border-border/40 bg-background/60 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="rounded-full bg-primary/10 p-3">
                                    <Zap className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">Tools & Workflow</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <Terminal className="h-4 w-4 text-primary" /> Git
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Github className="h-4 w-4 text-primary" /> GitHub
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Code className="h-4 w-4 text-primary" /> VS Code
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-primary" /> CI/CD
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Next.js",
                        "Node.js",
                        "HTML",
                        "CSS",
                        "Tailwind CSS",
                        "Git",
                        "GitHub",
                        "Figma",
                        "Responsive Design",
                    ].map((skill) => (
                        <div
                            key={skill}
                            className="flex items-center justify-center rounded-full border border-border/40 bg-background/60 backdrop-blur-sm py-2 px-4 text-sm"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
