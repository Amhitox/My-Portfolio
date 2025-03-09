"use client";
import { User, GraduationCap, CheckCircle2, Coffee, ChevronRight, Code, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";

export function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach(el => observer.observe(el));
        
        return () => {
            elements?.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <section id="about" className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-black to-slate-900">
            {/* Animated background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-pulse delay-700"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-pink-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            
            <div ref={containerRef} className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                    <div className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-sm text-indigo-400 backdrop-blur-xl">
                        <User className="h-4 w-4 mr-2" /> About Me
                    </div>
                    <div className="space-y-2 max-w-3xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
                            Crafting Digital Experiences with Passion
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mt-16">
                    {/* Left side - Image with code overlay */}
                    <div className="relative animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-700 delay-300">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl opacity-70"></div>
                        <div className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-slate-900/60 backdrop-blur-sm h-full">
                            {/* Code background */}
                            <div className="absolute inset-0 opacity-20 overflow-hidden">
                                <pre className="text-xs text-indigo-400 p-6 font-mono">
{`function Developer() {
  const [skills, setSkills] = useState([
    'JavaScript', 'React', 'Node.js',
    'TypeScript', 'Next.js', 'CSS'
  ]);
  
  const [passion, setPassion] = useState(100);
  
  useEffect(() => {
    // Always learning new things
    const interval = setInterval(() => {
      setSkills(prev => [...prev, learnNewSkill()]);
      setPassion(prev => Math.min(prev + 1, 100));
    }, 86400000); // Every day
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="developer">
      <code>Hello, World!</code>
      <Skills data={skills} />
      <Passion level={passion} />
      <Coffee />
    </div>
  );
}`}
                                </pre>
                            </div>
                            
                            {/* Profile image */}
                            <div className="relative h-full flex items-center justify-center p-6">
                                <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-indigo-500/20 shadow-xl shadow-indigo-500/10">
                                    <Image
                                        src="/placeholder.svg?height=600&width=600"
                                        alt="About Me"
                                        width={600}
                                        height={600}
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Glowing overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>
                                </div>
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-6 left-6 bg-indigo-500/10 rounded-full p-2 backdrop-blur-sm border border-indigo-500/20">
                                <Code className="h-5 w-5 text-indigo-400" />
                            </div>
                            <div className="absolute bottom-6 right-6 bg-purple-500/10 rounded-full p-2 backdrop-blur-sm border border-purple-500/20">
                                <Zap className="h-5 w-5 text-purple-400" />
                            </div>
                        </div>
                    </div>

                    {/* Right side - Info cards */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="flex gap-5 items-start animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400 group">
                            <div className="rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 p-4 mt-1 border border-indigo-500/20 shadow-lg shadow-indigo-500/5 group-hover:shadow-indigo-500/10 transition-all duration-300">
                                <GraduationCap className="h-6 w-6 text-indigo-400" />
                            </div>
                            <div className="space-y-3 flex-1">
                                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">My Journey</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    I started my journey in tech when I was 19 years old. Since then, I've been constantly learning and
                                    improving my skills, embracing new technologies and methodologies along the way.
                                </p>
                                <div className="w-full h-1 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>
                        </div>

                        <div className="flex gap-5 items-start animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500 group">
                            <div className="rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-4 mt-1 border border-purple-500/20 shadow-lg shadow-purple-500/5 group-hover:shadow-purple-500/10 transition-all duration-300">
                                <CheckCircle2 className="h-6 w-6 text-purple-400" />
                            </div>
                            <div className="space-y-3 flex-1">
                                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">My Approach</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    I believe in writing clean, maintainable code and creating intuitive user experiences. I'm always
                                    looking for ways to improve and optimize my work, focusing on performance and accessibility.
                                </p>
                                <div className="w-full h-1 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>
                        </div>

                        <div className="flex gap-5 items-start animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-600 group">
                            <div className="rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 p-4 mt-1 border border-pink-500/20 shadow-lg shadow-pink-500/5 group-hover:shadow-pink-500/10 transition-all duration-300">
                                <Coffee className="h-6 w-6 text-pink-400" />
                            </div>
                            <div className="space-y-3 flex-1">
                                <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors">When I'm Not Coding</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    When I'm not in front of a computer, you can find me enjoying football, playing video games, or immersed in a good novel. I believe in maintaining a healthy work-life balance.
                                </p>
                                <div className="w-full h-1 bg-gradient-to-r from-pink-500/50 to-red-500/50 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>
                        </div>

                        <div className="pt-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-700">
                            <Link href="#contact">
                                <Button className="group gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-none shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300">
                                    Let's Connect <ChevronRight className="transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
