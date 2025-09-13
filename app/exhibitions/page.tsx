import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ExhibitionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Exhibitions</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl text-balance">
            Discover innovative works by our students, faculty, and visiting artists in our dynamic exhibition spaces.
          </p>
        </div>
      </section>

      {/* Current Exhibitions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Current Exhibitions</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src="/contemporary-art-installation-in-gallery.jpg"
                  alt="Emerging Voices exhibition"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-[color:var(--color-yale-orange)] text-white">Current</Badge>
                  <span className="text-sm text-gray-500">Through January 15, 2025</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Emerging Voices</h3>
                <p className="text-gray-600 mb-4">
                  A showcase of innovative works by our MFA candidates exploring contemporary themes in painting,
                  sculpture, and mixed media. This exhibition highlights the diverse perspectives and experimental
                  approaches of our graduate students.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white">
                    View Details
                  </Button>
                  <Button variant="outline">Gallery Map</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src="/digital-fabrication-workshop.jpg"
                  alt="Digital Futures exhibition"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-[color:var(--color-yale-orange)] text-white">Current</Badge>
                  <span className="text-sm text-gray-500">Through December 20, 2024</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Digital Futures</h3>
                <p className="text-gray-600 mb-4">
                  An exploration of digital art and new media technologies featuring interactive installations, video
                  art, and virtual reality experiences created by students and faculty.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white">
                    View Details
                  </Button>
                  <Button variant="outline">Gallery Map</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exhibition Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/abstract-painting-red-figure.jpg"
                  alt="Abstract painting exhibition piece"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                <p className="text-sm text-gray-600">Untitled #3, 2024</p>
                <p className="text-xs text-gray-500">Oil on canvas</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/modern-sculpture-installation.jpg"
                  alt="Modern sculpture piece"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Marcus Rodriguez</h4>
                <p className="text-sm text-gray-600">Intersection, 2024</p>
                <p className="text-xs text-gray-500">Steel and concrete</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/ceramic-pottery-collection.jpg"
                  alt="Ceramic art piece"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Elena Vasquez</h4>
                <p className="text-sm text-gray-600">Vessel Series, 2024</p>
                <p className="text-xs text-gray-500">Ceramic and glaze</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/photography-portrait-study.jpg"
                  alt="Photography exhibition piece"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">James Liu</h4>
                <p className="text-sm text-gray-600">Identity Study #7, 2024</p>
                <p className="text-xs text-gray-500">Digital photography</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Exhibitions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Upcoming Exhibitions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src="/modern-sculpture-installation.jpg"
                  alt="Faculty showcase preview"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="border-blue-500 text-blue-600">
                    Upcoming
                  </Badge>
                  <span className="text-sm text-gray-500">January 20 - March 15, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Faculty Showcase</h3>
                <p className="text-gray-600 text-sm">
                  Annual exhibition featuring new works by Yale School of Art faculty members.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src="/new-gallery-opening.jpg"
                  alt="Visiting artist exhibition preview"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="border-blue-500 text-blue-600">
                    Upcoming
                  </Badge>
                  <span className="text-sm text-gray-500">February 1 - April 10, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visiting Artist Series</h3>
                <p className="text-gray-600 text-sm">Works by internationally renowned artists in residence at Yale.</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src="/thesis-exhibition-preview.jpg"
                  alt="Thesis exhibition preview"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="border-blue-500 text-blue-600">
                    Upcoming
                  </Badge>
                  <span className="text-sm text-gray-500">April 15 - May 30, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">MFA Thesis Exhibition</h3>
                <p className="text-gray-600 text-sm">Final projects by graduating MFA students across all programs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
