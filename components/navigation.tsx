"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, X, Search } from "lucide-react"

// Navigation menu items configuration
const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Exhibitions", href: "/exhibitions" },
  { name: "Programs", href: "/programs" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
  { name: "Login", href: "/login" },
]

export function Navigation() {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false)
  // State for search input value
  const [searchQuery, setSearchQuery] = useState("")

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement search functionality here
    console.log("Search query:", searchQuery)
  }

  return (
    // Main navigation container with sticky positioning
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Yale School of Art Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Yale School of Art
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[color:var(--color-yale-orange)] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Search Form - Moved to the end of navigation */}
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                {/* Search Icon */}
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                {/* Search Input Field */}
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 text-sm border-gray-300 focus:border-[color:var(--color-yale-orange)] focus:ring-[color:var(--color-yale-orange)]"
                />
              </div>
            </form>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {/* Mobile Navigation Links */}
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[color:var(--color-yale-orange)] block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)} // Close mobile menu on link click
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Search Form - Also moved to the end */}
              <form onSubmit={handleSearch} className="px-3 py-2">
                <div className="relative">
                  {/* Mobile Search Icon */}
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  {/* Mobile Search Input */}
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full text-sm border-gray-300 focus:border-[color:var(--color-yale-orange)] focus:ring-[color:var(--color-yale-orange)]"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
