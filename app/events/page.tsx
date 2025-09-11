"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function EventsPage() {
  const [activeView, setActiveView] = useState("upcoming")

  const events = [
    {
      id: 1,
      title: "Artist Lecture: Marina Abramović",
      date: "December 15, 2024",
      time: "7:00 PM",
      location: "Holcombe T. Green Jr. Hall",
      type: "lecture",
      description:
        "Renowned performance artist Marina Abramović discusses her latest work and the evolution of performance art.",
      image: "/art-lecture-hall-with-students.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "MFA Thesis Presentations",
      date: "December 18, 2024",
      time: "2:00 PM",
      location: "Various Studios",
      type: "presentation",
      description: "Second-year MFA students present their thesis work in progress to faculty and peers.",
      image: "/thesis-presentation-space.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Holiday Studio Open House",
      date: "December 20, 2024",
      time: "6:00 PM",
      location: "All Studio Buildings",
      type: "social",
      description: "Join us for an evening of studio visits, refreshments, and community celebration.",
      image: "/studio-open-house-event.jpg",
      featured: true,
    },
    {
      id: 4,
      title: "Visiting Artist Workshop: Digital Fabrication",
      date: "January 8, 2025",
      time: "10:00 AM",
      location: "Digital Media Lab",
      type: "workshop",
      description: "Hands-on workshop exploring 3D printing and digital fabrication techniques with visiting artist.",
      image: "/digital-fabrication-workshop.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Spring Semester Opening Reception",
      date: "January 15, 2025",
      time: "5:30 PM",
      location: "Gallery 32",
      type: "reception",
      description: "Welcome back reception featuring new student and faculty work from winter break.",
      image: "/gallery-opening-reception.jpg",
      featured: true,
    },
  ]

  const upcomingEvents = events.filter((event) => new Date(event.date) >= new Date())
  const featuredEvents = events.filter((event) => event.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Events & Lectures</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl text-balance">
            Join our vibrant community for lectures, workshops, exhibitions, and special events throughout the academic
            year.
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Events</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredEvents.slice(0, 2).map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-[color:var(--color-yale-orange)] text-white capitalize">{event.type}</Badge>
                    <span className="text-sm text-gray-500">
                      {event.date} • {event.time}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-2 text-sm font-medium">{event.location}</p>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex gap-3">
                    <Button className="bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white">
                      Register
                    </Button>
                    <Button variant="outline">Add to Calendar</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">All Events</h2>

            {/* View Toggle */}
            <div className="flex gap-2">
              <Button
                variant={activeView === "upcoming" ? "default" : "outline"}
                onClick={() => setActiveView("upcoming")}
                className={
                  activeView === "upcoming"
                    ? "bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white"
                    : ""
                }
              >
                Upcoming
              </Button>
              <Button
                variant={activeView === "calendar" ? "default" : "outline"}
                onClick={() => setActiveView("calendar")}
                className={
                  activeView === "calendar"
                    ? "bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white"
                    : ""
                }
              >
                Calendar View
              </Button>
            </div>
          </div>

          {activeView === "upcoming" ? (
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 aspect-video md:aspect-square bg-gray-200 relative">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-[color:var(--color-yale-orange)] text-white capitalize">
                          {event.type}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {event.date} • {event.time}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-2 text-sm font-medium">{event.location}</p>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          className="bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white"
                        >
                          Register
                        </Button>
                        <Button variant="outline" size="sm">
                          Add to Calendar
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Calendar View</h3>
              <p className="text-gray-600 mb-6">
                Interactive calendar coming soon. For now, view all upcoming events above.
              </p>
              <Button
                onClick={() => setActiveView("upcoming")}
                className="bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white"
              >
                View Upcoming Events
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
