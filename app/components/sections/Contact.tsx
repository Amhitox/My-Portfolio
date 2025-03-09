import { Mail, User, FileCode, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contact" className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 to-black">
           
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
            </div>
            <div className="absolute top-20 right-10 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-pulse delay-700"></div>
            <div className="absolute top-40 left-20 w-16 h-16 bg-pink-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>

            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary backdrop-blur-xl">
                        <Mail className="h-4 w-4 mr-2" /> Contact
                    </div>
                    <div className="space-y-2 max-w-3xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                            Let's Work Together
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed text-balance">
                            Have a project in mind or want to chat? Feel free to reach out!
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mt-16">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl opacity-50"></div>
                        <Card className="relative overflow-hidden border-border/40 bg-background/60 backdrop-blur-sm">
                            <CardContent className="p-6">
                                <form className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                                            <User className="h-4 w-4 text-primary" /> Name
                                        </label>
                                        <input
                                            id="name"
                                            className="w-full rounded-md border border-input bg-background/50 px-4 py-3 text-sm backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                                            <Mail className="h-4 w-4 text-primary" /> Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="w-full rounded-md border border-input bg-background/50 px-4 py-3 text-sm backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                                            <FileCode className="h-4 w-4 text-primary" /> Message
                                        </label>
                                        <textarea
                                            id="message"
                                            className="min-h-[150px] w-full rounded-md border border-input bg-background/50 px-4 py-3 text-sm backdrop-blur-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                            placeholder="Your message..."
                                        />
                                    </div>
                                    <Button type="submit" className="w-full rounded-md gap-2">
                                        <Mail className="h-4 w-4" /> Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Contact Information</h3>
                            <p className="text-muted-foreground">Feel free to reach out through any of the following channels:</p>
                        </div>

                        <div className="space-y-4">
                            <Card className="overflow-hidden border-border/40 bg-background/60 backdrop-blur-sm">
                                <CardContent className="p-6 flex items-center gap-4">
                                    <div className="rounded-full bg-primary/10 p-3">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Email</h4>
                                        <p className="text-muted-foreground">amhitasao@gmail.com</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden border-border/40 bg-background/60 backdrop-blur-sm">
                                <CardContent className="p-6 flex items-center gap-4">
                                    <div className="rounded-full bg-primary/10 p-3">
                                        <Linkedin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">LinkedIn</h4>
                                        <Link
                                            href="https://linkedin.com/in/amhita-marouane"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            linkedin.com/in/amhita-marouane
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden border-border/40 bg-background/60 backdrop-blur-sm">
                                <CardContent className="p-6 flex items-center gap-4">
                                    <div className="rounded-full bg-primary/10 p-3">
                                        <Github className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">GitHub</h4>
                                        <Link
                                            href="https://github.com/Amhitox"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            github.com/Amhitox
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="pt-4">
                            <p className="text-muted-foreground">
                                I'm currently available for freelance work and full-time positions. Let's create something amazing
                                together!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
