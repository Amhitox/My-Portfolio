"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
  onClick?: () => void
}

export function NavLink({ href, children, className, activeClassName = "text-primary", onClick }: NavLinkProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (href.startsWith("#")) {
        const section = document.querySelector(href)
        if (section) {
          const rect = section.getBoundingClientRect()
          // Consider the section active if it's in the viewport (with some buffer for the header)
          setIsActive(rect.top <= 100 && rect.bottom >= 100)
        }
      }
    }

    // Initial check
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [href])

  return (
    <Link
      href={href}
      className={cn("transition-colors hover:text-primary", isActive && activeClassName, className)}
      onClick={(e) => {
        if (href.startsWith("#")) {
          // Only handle if it's an anchor link
          const section = document.querySelector(href)
          if (section) {
            e.preventDefault()
            section.scrollIntoView({ behavior: "smooth" })
            // Update URL without causing a page reload
            window.history.pushState(null, "", href)
            if (onClick) onClick()
          }
        }
      }}
    >
      {children}
    </Link>
  )
}

