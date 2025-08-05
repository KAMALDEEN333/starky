"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from "@/components/ui/page-transition"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredContainer } from "@/components/ui/staggered-container"
import { LoadingSpinner, LoadingOverlay } from "@/components/ui/loading-spinner"
import { BarChart3, Zap, Shield, Globe, Star, Heart, Sparkles } from "lucide-react"
import Link from "next/link"

export default function AnimationsDemoPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingDemo = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 animate-slide-in-down">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center animate-float">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:scale-105 transition-transform duration-300">
                Animations Demo
              </span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="hover:scale-105 transition-all duration-300">
                Back to Home
              </Button>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200 animate-glow" variant="secondary">
              ✨ Animation Showcase
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Beautiful
              <span className="gradient-text animate-shimmer bg-[length:200%_100%]"> Animations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the smooth animations and transitions that make our platform delightful to use.
            </p>
          </AnimatedSection>

          {/* Button Animations */}
          <AnimatedSection animation="fade-in-up" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Interactive Buttons</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <AnimatedButton variant="gradient" animation="bounce">
                Bounce Effect
              </AnimatedButton>
              <AnimatedButton variant="glow" animation="pulse">
                Pulse Glow
              </AnimatedButton>
              <AnimatedButton variant="gradient" animation="float">
                Float Animation
              </AnimatedButton>
              <AnimatedButton variant="gradient" animation="shimmer">
                Shimmer Effect
              </AnimatedButton>
            </div>
          </AnimatedSection>

          {/* Loading States */}
          <AnimatedSection animation="fade-in-up" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Loading Animations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <h3 className="font-semibold mb-4">Default Spinner</h3>
                <LoadingSpinner size="lg" />
              </div>
              <div>
                <h3 className="font-semibold mb-4">Gradient Spinner</h3>
                <LoadingSpinner size="lg" variant="gradient" />
              </div>
              <div>
                <h3 className="font-semibold mb-4">Dots Animation</h3>
                <LoadingSpinner size="lg" variant="dots" />
              </div>
              <div>
                <h3 className="font-semibold mb-4">Pulse Effect</h3>
                <LoadingSpinner size="lg" variant="pulse" />
              </div>
            </div>
            <div className="text-center mt-8">
              <Button onClick={handleLoadingDemo} className="hover:scale-105 transition-all duration-300">
                Demo Loading Overlay
              </Button>
            </div>
          </AnimatedSection>

          {/* Card Animations */}
          <LoadingOverlay isLoading={isLoading} loadingText="Loading amazing content...">
            <AnimatedSection animation="fade-in-up" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Card Animations</h2>
              <StaggeredContainer staggerDelay={150} animation="scale-in" className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group cursor-pointer hover-glow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300 group-hover:animate-bounce">
                      <Zap className="w-6 h-6 text-amber-600" />
                    </div>
                    <CardTitle className="group-hover:text-amber-600 transition-colors duration-300">
                      Lightning Fast
                    </CardTitle>
                    <CardDescription>
                      Smooth animations that don't compromise performance.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group cursor-pointer hover-glow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300 group-hover:animate-bounce">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="group-hover:text-green-600 transition-colors duration-300">
                      Smooth Transitions
                    </CardTitle>
                    <CardDescription>
                      Carefully crafted transitions for the best user experience.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group cursor-pointer hover-glow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300 group-hover:animate-bounce">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                      Global Appeal
                    </CardTitle>
                    <CardDescription>
                      Animations that work beautifully across all devices and browsers.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </StaggeredContainer>
            </AnimatedSection>
          </LoadingOverlay>

          {/* Special Effects */}
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Special Effects</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="animated-border p-6 text-center">
                <Sparkles className="w-12 h-12 text-amber-600 mx-auto mb-4 animate-pulse" />
                <h3 className="text-xl font-bold mb-2">Animated Border</h3>
                <p className="text-gray-600">A rotating gradient border effect</p>
              </Card>
              
              <Card className="glass p-6 text-center hover:scale-105 transition-all duration-300">
                <Star className="w-12 h-12 text-amber-600 mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-bold mb-2">Glass Morphism</h3>
                <p className="text-gray-600">Modern glass effect with backdrop blur</p>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  )
}
