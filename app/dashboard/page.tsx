import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function DashboardPage() {
  const upcomingEvents = [
    {
      title: "Artist Lecture: Marina Abramović",
      date: "Dec 15",
      time: "7:00 PM",
      location: "Holcombe Hall",
    },
    {
      title: "MFA Thesis Presentations",
      date: "Dec 18",
      time: "2:00 PM",
      location: "Various Studios",
    },
  ]

  const recentAnnouncements = [
    {
      title: "Spring 2025 Course Registration Opens",
      date: "Dec 10, 2024",
      excerpt: "Registration for spring semester courses begins Monday, December 16th.",
    },
    {
      title: "Holiday Studio Access Hours",
      date: "Dec 8, 2024",
      excerpt: "Updated studio access hours during winter break period.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
              <p className="text-gray-600">Welcome back, Sarah Chen</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-[color:var(--color-yale-orange)] text-white">MFA Painting</Badge>
              <Button variant="outline" asChild>
                <Link href="/">Back to Site</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button
                    asChild
                    className="bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white h-auto py-4 flex-col"
                  >
                    <Link href="/courses">
                      <span className="text-lg mb-1">📚</span>
                      <span>My Courses</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto py-4 flex-col bg-transparent">
                    <Link href="/portfolio">
                      <span className="text-lg mb-1">🎨</span>
                      <span>Portfolio</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto py-4 flex-col bg-transparent">
                    <Link href="/studio">
                      <span className="text-lg mb-1">🏢</span>
                      <span>Studio Access</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-auto py-4 flex-col bg-transparent">
                    <Link href="/resources">
                      <span className="text-lg mb-1">📖</span>
                      <span>Resources</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Current Courses */}
            <Card>
              <CardHeader>
                <CardTitle>Current Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Advanced Painting Techniques</h3>
                      <p className="text-sm text-gray-600">Prof. Sarah Mitchell • Tuesdays & Thursdays 2:00-5:00 PM</p>
                    </div>
                    <Button size="sm" variant="outline">
                      View Course
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Contemporary Art Theory</h3>
                      <p className="text-sm text-gray-600">Dr. Elena Rodriguez • Mondays 1:00-4:00 PM</p>
                    </div>
                    <Button size="sm" variant="outline">
                      View Course
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Graduate Critique Seminar</h3>
                      <p className="text-sm text-gray-600">Various Faculty • Fridays 10:00 AM-12:00 PM</p>
                    </div>
                    <Button size="sm" variant="outline">
                      View Course
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Announcements */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Announcements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAnnouncements.map((announcement, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{announcement.date}</p>
                      <p className="text-gray-600">{announcement.excerpt}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-4 border-[color:var(--color-yale-orange)] pl-4">
                      <h3 className="font-semibold text-sm">{event.title}</h3>
                      <p className="text-xs text-gray-600">
                        {event.date} • {event.time}
                      </p>
                      <p className="text-xs text-gray-500">{event.location}</p>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full mt-4 bg-transparent">
                  <Link href="/events">View All Events</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Studio Status */}
            <Card>
              <CardHeader>
                <CardTitle>My Studio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Studio Assignment:</span>
                    <span className="font-semibold">Room 204B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Access Hours:</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Key Card Status:</span>
                    <Badge className="bg-green-500 text-white">Active</Badge>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full mt-4 bg-transparent">
                  <Link href="/studio">Manage Studio</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Profile */}
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-xl font-semibold text-gray-600">SC</span>
                  </div>
                  <h3 className="font-semibold">Sarah Chen</h3>
                  <p className="text-sm text-gray-600">MFA Painting, 2nd Year</p>
                  <Button asChild variant="outline" size="sm" className="mt-3 bg-transparent">
                    <Link href="/profile">Edit Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
