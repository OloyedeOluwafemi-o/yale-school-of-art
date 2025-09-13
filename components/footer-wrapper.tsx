"use client"

import { usePathname } from "next/navigation"
import Footer from "@/components/footer"

export default function FooterWrapper() {
  const pathname = usePathname()
  const hideFooterRoutes = ["/login", "/signup"]

  if (hideFooterRoutes.includes(pathname)) {
    return null
  }

  return <Footer />
}
