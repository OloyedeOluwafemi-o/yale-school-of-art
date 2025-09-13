"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import login from "@/public/login-image.jpg"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Handle login logic here
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <Image
            src="/login-image.jpg"
            alt="Yale School of Art Building"
            fill
            className="object-cover"
          />
          <div className="p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Welcome to Yale School of Art</h2>
            <p className="text-lg opacity-90">
              Join our community of artists, scholars, and creative minds pushing the boundaries of contemporary art.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <Link href="/" className="inline-block">
              <h1 className="text-2xl font-bold text-gray-900">Yale School of Art</h1>
            </Link>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-sm text-gray-600">Access your student portal and course materials</p>
          </div>

          {/* Login Form */}
          <Card className="shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full border-gray-300 focus:border-[color:var(--color-yale-orange)] focus:ring-[color:var(--color-yale-orange)]"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 block w-full border-gray-300 focus:border-[color:var(--color-yale-orange)] focus:ring-[color:var(--color-yale-orange)]"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-[color:var(--color-yale-orange)] focus:ring-[color:var(--color-yale-orange)] border-gray-300 rounded"
                    />
                    <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </Label>
                  </div>

                  <div className="text-sm">
                    <Link
                      href="/forgot-password"
                      className="font-medium text-[color:var(--color-yale-orange)] hover:text-[color:var(--color-yale-orange-hover)]"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[color:var(--color-yale-orange)] hover:bg-[color:var(--color-yale-orange-hover)] text-white py-3"
                  >
                    {isLoading ? "Signing in..." : "Sign in"}
                  </Button>
                </div>

                <div className="text-center">
                  <span className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      href="/signup"
                      className="font-medium text-[color:var(--color-yale-orange)] hover:text-[color:var(--color-yale-orange-hover)]"
                    >
                      Sign up here
                    </Link>
                  </span>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              For technical support, contact{" "}
              <Link href="mailto:support@yale.edu" className="text-[color:var(--color-yale-orange)]">
                support@yale.edu
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
