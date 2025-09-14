import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const facultyMembers = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Dean & Professor of Painting",
      image: "/faculty-sarah-mitchell.jpg",
      bio: "Leading contemporary painter with works in major museums worldwide.",
    },
    {
      name: "Prof. Marcus Chen",
      title: "Professor of Sculpture",
      image: "/faculty-marcus-chen.jpg",
      bio: "Internationally exhibited sculptor specializing in large-scale installations.",
    },
    {
      name: "Dr. Elena Rodriguez",
      title: "Professor of Art History",
      image: "/faculty-elena-rodriguez.jpg",
      bio: "Scholar of contemporary art theory and criticism with numerous publications.",
    },
    {
      name: "Prof. James Wilson",
      title: "Professor of Graphic Design",
      image: "/faculty-james-wilson.jpg",
      bio: "Award-winning designer and former creative director at major design studios.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">About Yale School of Art</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl text-balance">
            For over a century, Yale School of Art has been at the forefront of artistic education, fostering
            creativity, critical thinking, and innovation in the visual arts.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Yale School of Art is dedicated to providing students with intellectually challenging and professionally
                relevant graduate and undergraduate education in the visual arts. We foster an environment where
                students can develop their artistic voice while engaging with contemporary issues and historical
                contexts.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our programs emphasize both technical excellence and conceptual rigor, preparing artists who will
                contribute meaningfully to the cultural dialogue of our time.
              </p>
              <Button
                asChild
                className="bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white"
              >
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/yale-university-art-building-exterior.jpg"
                alt="Yale School of Art building exterior"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/yale-art-school-historical-photo.jpg"
                alt="Historical photo of Yale School of Art"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 1869, Yale School of Art has a rich tradition of excellence in artistic education. We were
                among the first institutions to offer graduate degrees in fine arts and have consistently evolved to
                meet the changing needs of contemporary art practice.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our alumni include some of the most influential artists, designers, and cultural leaders of the past
                century, contributing to museums, galleries, design studios, and academic institutions worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[color:var(--color-yale-orange)] mb-2">150+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[color:var(--color-yale-orange)] mb-2">500+</div>
                  <div className="text-sm text-gray-600">Current Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Distinguished Faculty</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 relative">
                  <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-1">{faculty.name}</h3>
                  <p className="text-sm text-[color:var(--color-yale-orange)] mb-3 font-medium">{faculty.title}</p>
                  <p className="text-xs text-gray-600">{faculty.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="border-[color:var(--color-yale-orange)] text-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange)] hover:text-white bg-transparent"
            >
              <Link href="/faculty">View All Faculty</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">World-Class Facilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <Image src="/painting-studio-workspace.jpg.png" alt="Painting studios" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Studio Spaces</h3>
                <p className="text-gray-600 text-sm">
                  Individual and shared studio spaces equipped with professional lighting and ventilation systems.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src="/digital-fabrication-workshop.jpg"
                  alt="Digital fabrication lab"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Digital Labs</h3>
                <p className="text-gray-600 text-sm">
                  State-of-the-art digital fabrication, 3D printing, and multimedia production facilities.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src="/contemporary-art-installation-in-gallery.jpg"
                  alt="Gallery spaces"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Gallery Spaces</h3>
                <p className="text-gray-600 text-sm">
                  Multiple exhibition spaces for student, faculty, and visiting artist shows throughout the year.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Us</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-balance">
            Experience our campus and community firsthand. Schedule a visit or attend one of our public events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white px-8 py-3 text-lg"
            >
              <Link href="/visit">Schedule a Visit</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-[color:var(--color-yale-orange)] text-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange)] hover:text-white px-8 py-3 text-lg bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
