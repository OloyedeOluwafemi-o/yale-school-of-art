"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    program: "",
    year: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false)
      // Handle signup logic here
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
        <Image
          src="/art-lecture-hall-with-students.jpg"
          alt="Yale Art Students in Lecture Hall"
          fill
          className="object-cover"
        />
          <div className="p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Start Your Artistic Journey</h2>
            <p className="text-lg opacity-90">
              Join Yale's prestigious art programs and learn from world-renowned faculty in state-of-the-art facilities.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <Link href="/" className="inline-block">
              <h1 className="text-2xl font-bold text-gray-900">Yale School of Art</h1>
            </Link>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
            <p className="mt-2 text-sm text-gray-600">Join our community of artists and scholars</p>
          </div>

          {/* Signup Form */}
          <Card className="shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Get started</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="mt-1 focus:border-[color:var(--color-yale-orange)] focus:ring-[color:var(--color-yale-orange)]"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="mt-1 focus:border-[color:var(--color-yale-orange)] focus:ring-[color:var(--color-yale-orange)]"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-1 focus:border-[color:var(--color-yale-orange)] focus:ring-[color:var(--color-yale-orange)]"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="program" className="text-sm font-medium text-gray-700">
                      Program
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("program", value)}>
                      <SelectTrigger className="mt-1 focus:border-[color:var(--color-yale-orange)] focus:ring-[color:var(--color-yale-orange)]">
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="painting-mfa">Painting/Printmaking MFA</SelectItem>
                        <SelectItem value="sculpture-mfa">Sculpture MFA</SelectItem>
                        <SelectItem value="graphic-design-mfa">Graphic Design MFA</SelectItem>
                        <SelectItem value="photography-mfa">Photography MFA</SelectItem>
                        <SelectItem value="art-history-ba">Art History BA</SelectItem>
                        <SelectItem value="studio-art-ba">Studio Art BA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="year" className="text-sm font-medium text-gray-700">
                      Year
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("year", value)}>
                      <SelectTrigger className="mt-1 focus:border-[color:var(--color-yale-orange)] focus:ring-[color:var(--color-yale-orange)]">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1st Year</SelectItem>
                        <SelectItem value="2">2nd Year</SelectItem>
                        <SelectItem value="3">3rd Year</SelectItem>
                        <SelectItem value="4">4th Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="mt-1 focus:border-[color:var(--color-yale-orange)] focus:ring-[color:var(--color-yale-orange)]"
                    placeholder="Create a password"
                  />
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                    Confirm password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="mt-1 focus:border-[color:var(--color-yale-orange)] focus:ring-[color:var(--color-yale-orange)]"
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-[color:var(--color-yale-orange)] focus:ring-[color:var(--color-yale-orange)] border-gray-300 rounded"
                  />
                  <Label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[color:var(--color-yale-orange)] hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[color:var(--color-yale-orange)] hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white py-3"
                  >
                    {isLoading ? "Creating account..." : "Create account"}
                  </Button>
                </div>

                <div className="text-center">
                  <span className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="font-medium text-[color:var(--color-yale-orange)] hover:text-[color:var(--color-yale-orange-hover)]"
                    >
                      Sign in here
                    </Link>
                  </span>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Need help with registration? Contact{" "}
              <Link href="mailto:admissions@yale.edu" className="text-[color:var(--color-yale-orange)]">
                admissions@yale.edu
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
