import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">Yale School of Art</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 text-balance">A Living Wiki of Creativity</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white px-8 py-3 text-lg"
            >
              <Link href="/exhibitions">View Exhibitions</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-[color:var(--color-yale-orange)] text-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange)] hover:text-white px-8 py-3 text-lg bg-transparent"
            >
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Student Artwork</h2>
            <Button
              variant="outline"
              asChild
              className="border-[color:var(--color-yale-orange)] text-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange)] hover:text-white bg-transparent"
            >
              <Link href="/exhibitions">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-6">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/abstract-painting-red-figure.jpg"
                  alt="Abstract painting with red figure"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/architectural-interior-hallway.jpg"
                  alt="Architectural interior study"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/modern-sculpture-installation.jpg"
                  alt="Modern sculpture installation"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/digital-art-golden-circle.jpg"
                  alt="Digital art with golden circle"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/ceramic-pottery-collection.jpg"
                  alt="Ceramic pottery collection"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/photography-portrait-study.jpg"
                  alt="Photography portrait study"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/mixed-media-collage.jpg"
                  alt="Mixed media collage artwork"
                  width={300}
                  height={225}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/textile-fiber-art.jpg"
                  alt="Textile and fiber art piece"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Current Exhibitions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src="/contemporary-art-installation-in-gallery.jpg"
                  alt="Contemporary art installation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[color:var(--color-yale-orange)] text-white px-2 py-1 text-xs font-medium rounded">
                    Current
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Emerging Voices</h3>
                <p className="text-gray-600 mb-4">
                  A showcase of innovative works by our MFA candidates exploring contemporary themes.
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="border-[color:var(--color-yale-orange)] text-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange)] hover:text-white bg-transparent"
                >
                  <Link href="/exhibitions">View Exhibition</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src="/art-lecture-hall-with-students.jpg"
                  alt="Art lecture and workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-500 text-white px-2 py-1 text-xs font-medium rounded">Upcoming</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Artist Lecture Series</h3>
                <p className="text-gray-600 mb-4">
                  Join renowned artists and critics for talks on contemporary art practice and theory.
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="border-[color:var(--color-yale-orange)] text-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange)] hover:text-white bg-transparent"
                >
                  <Link href="/events">View Schedule</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src="/yale-university-art-building-exterior.jpg"
                  alt="Yale School of Art building"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">Open</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Graduate Programs</h3>
                <p className="text-gray-600 mb-4">
                  Explore our MFA programs in Graphic Design, Painting/Printmaking, Photography, and Sculpture.
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="border-[color:var(--color-yale-orange)] text-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange)] hover:text-white bg-transparent"
                >
                  <Link href="/programs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <Button
              variant="outline"
              asChild
              className="border-[color:var(--color-yale-orange)] text-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange)] hover:text-white bg-transparent"
            >
              <Link href="/news">View All News</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="flex gap-4">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                <Image
                  src="/art-award-ceremony.jpg"
                  alt="Art award ceremony"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <time className="text-sm text-gray-500">December 15, 2024</time>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Yale MFA Students Win National Art Awards</h3>
                <p className="text-gray-600 text-sm">
                  Three graduate students receive recognition for outstanding contributions to contemporary art
                  practice.
                </p>
              </div>
            </article>

            <article className="flex gap-4">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                <Image
                  src="/new-gallery-opening.jpg"
                  alt="New gallery space opening"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <time className="text-sm text-gray-500">December 10, 2024</time>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">New Gallery Space Opens in Green Hall</h3>
                <p className="text-gray-600 text-sm">
                  The renovated exhibition space will host student and faculty work throughout the academic year.
                </p>
              </div>
            </article>

            <article className="flex gap-4">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                <Image
                  src="/visiting-artist-workshop.jpg"
                  alt="Visiting artist workshop"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <time className="text-sm text-gray-500">December 5, 2024</time>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visiting Artist Residency Program</h3>
                <p className="text-gray-600 text-sm">
                  Applications now open for the spring semester visiting artist residency program.
                </p>
              </div>
            </article>

            <article className="flex gap-4">
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                <Image
                  src="/student-exhibition-opening.jpg"
                  alt="Student exhibition opening"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <time className="text-sm text-gray-500">November 28, 2024</time>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Annual Student Exhibition Opens</h3>
                <p className="text-gray-600 text-sm">
                  The year-end showcase features work from all graduate programs and visiting artists.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
