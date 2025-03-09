"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Briefcase, Github, Linkedin, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
    const avatarRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    
    useEffect(() => {
        const avatarElement = avatarRef.current;
        if (!avatarElement) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!avatarElement) return;
            
            const rect = avatarElement.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            setMousePosition({ x, y });
            
            // Calculate rotation based on mouse position
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / 25;
            const deltaY = (y - centerY) / 25;
            
            avatarElement.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
        };
        
        const handleMouseEnter = () => {
            setIsHovering(true);
            if (avatarElement) {
                avatarElement.style.transition = 'transform 0.2s ease-out';
            }
        };
        
        const handleMouseLeave = () => {
            setIsHovering(false);
            setMousePosition({ x: avatarElement.offsetWidth / 2, y: avatarElement.offsetHeight / 2 });
            if (avatarElement) {
                avatarElement.style.transition = 'transform 0.5s ease-out';
                avatarElement.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
            }
        };
        
        avatarElement.addEventListener('mousemove', handleMouseMove);
        avatarElement.addEventListener('mouseenter', handleMouseEnter);
        avatarElement.addEventListener('mouseleave', handleMouseLeave);
        
        // Set initial position to center
        setMousePosition({ x: avatarElement.offsetWidth / 2, y: avatarElement.offsetHeight / 2 });
        
        return () => {
            avatarElement.removeEventListener('mousemove', handleMouseMove);
            avatarElement.removeEventListener('mouseenter', handleMouseEnter);
            avatarElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Calculate eye and head positions based on mouse
    const calculateEyePosition = () => {
        if (!avatarRef.current) return { x: 0, y: 0 };
        
        const rect = avatarRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const maxMove = 8;
        const deltaX = mousePosition.x - centerX;
        const deltaY = mousePosition.y - centerY;
        
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
        
        const moveFactor = Math.min(distance / maxDistance, 1);
        
        return {
            x: (deltaX / distance) * maxMove * moveFactor || 0,
            y: (deltaY / distance) * maxMove * moveFactor || 0
        };
    };

    const eyePosition = calculateEyePosition();

    return (
        <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-black to-slate-900">
            {/* Animated background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-pulse delay-700"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-pink-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            
            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    {/* Left side content */}
                    <div className="flex flex-col justify-center space-y-6 animate-in">
                        <div className="inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-200 backdrop-blur-xl w-fit">
                            <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
                            Available for work
                        </div>
                        
                        <div className="space-y-4">
                            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-white text-balance">
                                Hey, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Amhita</span>
                            </h1>
                            
                            <h2 className="text-xl md:text-2xl font-medium text-indigo-100">
                                Full-Stack Developer & UI/UX Enthusiast
                            </h2>
                            
                            <p className="max-w-[600px] text-slate-300 text-lg md:text-xl leading-relaxed text-balance mt-2">
                                I craft engaging digital experiences with modern technologies, 
                                focusing on clean code and intuitive design that solves real problems.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="#contact">
                                <Button className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-6 gap-2 shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-indigo-500/40">
                                    <Mail className="h-4 w-4" /> Get in Touch
                                </Button>
                            </Link>
                            <Link href="#projects">
                                <Button
                                    variant="outline"
                                    className="rounded-full text-white border-white/20 bg-white/5 hover:bg-white/10 px-8 py-6 gap-2 backdrop-blur-sm transition-all duration-300"
                                >
                                    <Briefcase className="h-4 w-4" /> View My Work
                                </Button>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Right side with Interactive Character Avatar */}
                    <div className="flex items-center justify-center animate-in">
                        <div 
                            ref={avatarRef}
                            className="relative bg-gradient-to-br from-indigo-900 to-slate-900 p-6 rounded-2xl shadow-xl transition-all duration-300 will-change-transform"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-md opacity-80"></div>
                            
                            {/* Character avatar container */}
                            <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
                                {/* Glowing background elements */}
                                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"></div>
                                
                                {/* Code-like patterns overlay */}
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_95%,rgba(99,102,241,0.3)_95%,rgba(99,102,241,0.3)_100%)] bg-[length:8px_8px]"></div>
                                
                                {/* Character avatar - inspired by MetaMask fox */}
                                <div 
                                    className="relative w-48 h-48 transition-all duration-300"
                                    style={{ transform: `translate(${eyePosition.x * 0.5}px, ${eyePosition.y * 0.3}px)` }}
                                >
                                    {/* Character body */}
                                    <div className="absolute top-12 left-0 right-0 bottom-0 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-3xl transform-gpu shadow-lg">
                                        {/* Neck */}
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-indigo-500 rounded-t-lg"></div>
                                    </div>
                                    
                                    {/* Character head */}
                                    <div 
                                        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-3xl shadow-lg transition-transform duration-300"
                                        style={{ transform: `translateX(calc(-50% + ${eyePosition.x * 0.3}px)) translateY(${eyePosition.y * 0.2}px)` }}
                                    >
                                        {/* Face pattern */}
                                        <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                            <div className="absolute top-1/2 left-0 right-0 h-1/2 bg-indigo-600/30"></div>
                                            <div className="absolute top-[60%] left-0 right-0 h-[15%] bg-indigo-600/20"></div>
                                        </div>
                                        
                                        {/* Eyes container */}
                                        <div className="absolute top-[35%] left-0 right-0 flex justify-center gap-8">
                                            {/* Left eye */}
                                            <div className="relative w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-inner">
                                                <div 
                                                    className="w-3 h-3 bg-slate-900 rounded-full transition-all duration-75"
                                                    style={{ 
                                                        transform: `translate(${eyePosition.x * 0.4}px, ${eyePosition.y * 0.4}px)`
                                                    }}
                                                ></div>
                                            </div>
                                            
                                            {/* Right eye */}
                                            <div className="relative w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-inner">
                                                <div 
                                                    className="w-3 h-3 bg-slate-900 rounded-full transition-all duration-75"
                                                    style={{ 
                                                        transform: `translate(${eyePosition.x * 0.4}px, ${eyePosition.y * 0.4}px)`
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        
                                        {/* Smile - changes based on hover */}
                                        <div 
                                            className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                                                isHovering 
                                                ? "top-[65%] w-10 h-4 border-b-4 border-white rounded-full" 
                                                : "top-[63%] w-8 h-3 border-b-3 border-white rounded-full"
                                            }`}
                                        ></div>
                                        
                                        {/* Ears */}
                                        <div className="absolute -left-3 top-8 w-6 h-10 bg-indigo-400 rounded-l-lg transform -rotate-6"></div>
                                        <div className="absolute -right-3 top-8 w-6 h-10 bg-indigo-400 rounded-r-lg transform rotate-6"></div>
                                    </div>
                                    
                                    {/* Headphones */}
                                    <div className="absolute top-6 left-0 right-0 h-4 bg-purple-700 rounded-full transform translate-y-2"></div>
                                    <div className="absolute -left-2 top-6 w-8 h-14 bg-purple-700 rounded-l-full"></div>
                                    <div className="absolute -right-2 top-6 w-8 h-14 bg-purple-700 rounded-r-full"></div>
                                    
                                    {/* Arms */}
                                    <div 
                                        className="absolute top-28 -left-6 w-6 h-20 bg-indigo-600 rounded-l-lg origin-top-right transition-transform duration-300"
                                        style={{ transform: `rotate(${isHovering ? -15 : -5}deg)` }}
                                    ></div>
                                    <div 
                                        className="absolute top-28 -right-6 w-6 h-20 bg-indigo-600 rounded-r-lg origin-top-left transition-transform duration-300"
                                        style={{ transform: `rotate(${isHovering ? 15 : 5}deg)` }}
                                    ></div>
                                </div>
                                
                                {/* Floating code elements */}
                                <div className="absolute top-8 left-8 font-mono text-indigo-400 opacity-60 text-sm">&lt;code&gt;</div>
                                <div className="absolute bottom-8 right-8 font-mono text-indigo-400 opacity-60 text-sm">&lt;/code&gt;</div>
                                
                                {/* Interactive element on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 backdrop-blur-sm transition-opacity duration-500 flex items-center justify-center ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="font-mono text-white text-xl text-center p-4">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="text-indigo-400 text-sm">Hello, World!</span>
                                            <span className="text-white">
                                                <span className="text-indigo-300">&lt;</span>
                                                <span className="text-white">Amhita</span>
                                                <span className="text-indigo-300">/&gt;</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Bottom glow */}
                            <div className="absolute -bottom-6 left-0 right-0 h-12 bg-indigo-500/30 blur-2xl rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </section>
    );
}