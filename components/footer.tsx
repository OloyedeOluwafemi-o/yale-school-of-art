import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Yale School of Art Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Yale School of Art</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A graduate school that confers MFAs in Graphic Design, Painting/Printmaking, Photography, and Sculpture.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>1156 Chapel Street</p>
              <p>New Haven, CT 06511</p>
              <p>(203) 432-2600</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                href="/exhibitions"
                className="block text-gray-300 hover:text-[color:var(--color-yale-orange)] transition-colors text-sm"
              >
                Exhibitions
              </Link>
              <Link
                href="/programs"
                className="block text-gray-300 hover:text-[color:var(--color-yale-orange)] transition-colors text-sm"
              >
                Programs
              </Link>
              <Link
                href="/events"
                className="block text-gray-300 hover:text-[color:var(--color-yale-orange)] transition-colors text-sm"
              >
                Events
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-[color:var(--color-yale-orange)] transition-colors text-sm"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Academic Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Programs</h4>
            <nav className="space-y-2">
              <Link
                href="/programs#graphic-design"
                className="block text-gray-300 hover:text-[color:var(--color-yale-orange)] transition-colors text-sm"
              >
                Graphic Design
              </Link>
              <Link
                href="/programs#painting-printmaking"
                className="block text-gray-300 hover:text-[color:var(--color-yale-orange)] transition-colors text-sm"
              >
                Painting/Printmaking
              </Link>
              <Link
                href="/programs#photography"
                className="block text-gray-300 hover:text-[color:var(--color-yale-orange)] transition-colors text-sm"
              >
                Photography
              </Link>
              <Link
                href="/programs#sculpture"
                className="block text-gray-300 hover:text-[color:var(--color-yale-orange)] transition-colors text-sm"
              >
                Sculpture
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="space-y-3">
              <Button
                asChild
                className="bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white w-full"
              >
                <Link href="/login">Student Portal</Link>
              </Button>
              <div className="space-y-2">
                <Link
                  href="mailto:artschool.info@yale.edu"
                  className="block text-gray-300 hover:text-[color:var(--color-yale-orange)] transition-colors text-sm"
                >
                  artschool.info@yale.edu
                </Link>
                <Link
                  href="/news"
                  className="block text-gray-300 hover:text-[color:var(--color-yale-orange)] transition-colors text-sm"
                >
                  News & Updates
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-300 hover:text-[color:var(--color-yale-orange)] transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Yale School of Art. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[color:var(--color-yale-orange)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/accessibility"
                className="text-gray-400 hover:text-[color:var(--color-yale-orange)] transition-colors"
              >
                Accessibility
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[color:var(--color-yale-orange)] transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
