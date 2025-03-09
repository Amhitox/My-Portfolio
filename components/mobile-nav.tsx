"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { NavLink } from "@/components/nav-link"
import { Menu, X, User, Star, Briefcase, Mail } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => setIsOpen(!isOpen)
  const closeNav = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleNav}>
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm pt-16">
          <nav className="container flex flex-col items-center justify-center gap-6 text-lg font-medium">
            <NavLink href="#about" className="flex items-center gap-2" onClick={closeNav}>
              <User className="h-5 w-5" /> About
            </NavLink>
            <NavLink href="#skills" className="flex items-center gap-2" onClick={closeNav}>
              <Star className="h-5 w-5" /> Skills
            </NavLink>
            <NavLink href="#projects" className="flex items-center gap-2" onClick={closeNav}>
              <Briefcase className="h-5 w-5" /> Projects
            </NavLink>
            <NavLink href="#contact" className="flex items-center gap-2" onClick={closeNav}>
              <Mail className="h-5 w-5" /> Contact
            </NavLink>

            <div className="mt-8 flex gap-4">
              <Button className="rounded-full">Resume</Button>
              <Button variant="outline" className="rounded-full" onClick={closeNav}>
                Close
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

