"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function ProgramsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const programs = [
    {
      id: 1,
      title: "Graphic Design MFA",
      level: "graduate",
      duration: "2 years",
      description:
        "A rigorous program exploring visual communication, typography, and digital design in contemporary contexts.",
      image: "/graphic-design-studio.jpg.png",
      featured: true,
    },
    {
      id: 2,
      title: "Painting/Printmaking MFA",
      level: "graduate",
      duration: "2 years",
      description:
        "Traditional and experimental approaches to painting and printmaking with emphasis on individual artistic development.",
      image: "/painting-studio-workspace.jpg.png",
      featured: true,
    },
    {
      id: 3,
      title: "Photography MFA",
      level: "graduate",
      duration: "2 years",
      description:
        "Contemporary photography practice including digital media, installation, and conceptual approaches.",
      image: "/photography-darkroom-studio.jpg.png",
      featured: false,
    },
    {
      id: 4,
      title: "Sculpture MFA",
      level: "graduate",
      duration: "2 years",
      description: "Three-dimensional art practice with access to traditional and digital fabrication facilities.",
      image: "/sculpture-workshop-space.jpg.png",
      featured: true,
    },
    {
      id: 5,
      title: "Art History BA",
      level: "undergraduate",
      duration: "4 years",
      description:
        "Comprehensive study of art history from ancient to contemporary periods with critical analysis focus.",
      image: "/art-history-lecture-hall.jpg.png",
      featured: false,
    },
    {
      id: 6,
      title: "Studio Art BA",
      level: "undergraduate",
      duration: "4 years",
      description:
        "Foundation in multiple artistic disciplines with opportunities for specialization and interdisciplinary work.",
      image: "/undergraduate-studio-space.jpg.png",
      featured: false,
    },
  ]

  const filteredPrograms = programs.filter((program) => activeFilter === "all" || program.level === activeFilter)

  const featuredPrograms = programs.filter((program) => program.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Academic Programs</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl text-balance">
            Explore our comprehensive range of undergraduate and graduate programs designed to foster artistic
            excellence and critical thinking.
          </p>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Programs</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <Image src={program.image} alt={program.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      className={
                        program.level === "graduate"
                          ? "bg-[color:var(--color-yale-orange)] text-white"
                          : "bg-blue-500 text-white"
                      }
                    >
                      {program.level === "graduate" ? "Graduate" : "Undergraduate"}
                    </Badge>
                    <span className="text-sm text-gray-500">{program.duration}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex gap-3">
                    <Button className="bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white">
                      Learn More
                    </Button>
                    <Button variant="outline">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">All Programs</h2>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                onClick={() => setActiveFilter("all")}
                className={
                  activeFilter === "all"
                    ? "bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white"
                    : ""
                }
              >
                All Programs
              </Button>
              <Button
                variant={activeFilter === "undergraduate" ? "default" : "outline"}
                onClick={() => setActiveFilter("undergraduate")}
                className={
                  activeFilter === "undergraduate"
                    ? "bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white"
                    : ""
                }
              >
                Undergraduate
              </Button>
              <Button
                variant={activeFilter === "graduate" ? "default" : "outline"}
                onClick={() => setActiveFilter("graduate")}
                className={
                  activeFilter === "graduate"
                    ? "bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white"
                    : ""
                }
              >
                Graduate
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      className={
                        program.level === "graduate"
                          ? "bg-[color:var(--color-yale-orange)] text-white"
                          : "bg-blue-500 text-white"
                      }
                    >
                      {program.level === "graduate" ? "Graduate" : "Undergraduate"}
                    </Badge>
                    <span className="text-sm text-gray-500">{program.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white"
                    >
                      Learn More
                    </Button>
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Apply?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-balance">
            Join our community of artists, designers, and scholars. Applications are reviewed on a rolling basis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white px-8 py-3 text-lg"
            >
              <Link href="/apply">Start Application</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-[color:var(--color-yale-orange)] text-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange)] hover:text-white px-8 py-3 text-lg bg-transparent"
            >
              <Link href="/admissions">Admissions Info</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
