import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Shield, Zap, Globe, Users, Award, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PageTransition } from "@/components/ui/page-transition"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggeredContainer } from "@/components/ui/staggered-container"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former Goldman Sachs VP with 15+ years in traditional finance and blockchain technology.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer specializing in high-frequency trading systems and blockchain infrastructure.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "David Rodriguez",
      role: "Head of Security",
      bio: "Cybersecurity expert with experience at major exchanges, ensuring institutional-grade security.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const milestones = [
    {
      year: "2021",
      event: "Nairo Exchange founded",
      description: "Started with a vision to democratize crypto trading",
    },
    { year: "2022", event: "Series A Funding", description: "Raised $50M to expand our platform and team" },
    { year: "2023", event: "1M+ Users", description: "Reached over 1 million registered traders worldwide" },
    {
      year: "2024",
      event: "Global Expansion",
      description: "Launched in 50+ countries with full regulatory compliance",
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Nairo Exchange</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Markets
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Trading
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <AnimatedSection animation="bounce-in" delay={200}>
              <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200 animate-glow" variant="secondary">
                About Nairo Exchange
              </Badge>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={400}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Building the Future of
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  {" "}
                  Crypto Trading
                </span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={600}>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Founded in 2021, Nairo Exchange has grown to become one of the world's leading cryptocurrency trading
                platforms, serving over 2 million traders across 50+ countries with institutional-grade security and
                lightning-fast execution.
              </p>
            </AnimatedSection>
          </div>
        </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that everyone should have access to the financial opportunities that cryptocurrency provides.
                Our mission is to democratize crypto trading by providing a secure, fast, and user-friendly platform
                that serves both beginners and professional traders.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Through cutting-edge technology, regulatory compliance, and unwavering commitment to security, we're
                building the infrastructure for the future of finance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-amber-600 mb-2">2M+</h3>
                  <p className="text-gray-600">Active Traders</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-amber-600 mb-2">$2.5B+</h3>
                  <p className="text-gray-600">Daily Volume</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Nairo Exchange Team"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Nairo Exchange
            </p>
          </div>
          <StaggeredContainer staggerDelay={150} animation="scale-in" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-center group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300 group-hover:animate-bounce">
                  <Shield className="w-6 h-6 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" />
                </div>
                <CardTitle className="group-hover:text-amber-600 transition-colors duration-300">Security First</CardTitle>
                <CardDescription>
                  Your funds and data are protected by military-grade encryption and multi-signature wallets.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-center group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300 group-hover:animate-bounce">
                  <Zap className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">Innovation</CardTitle>
                <CardDescription>
                  We continuously push the boundaries of what's possible in cryptocurrency trading technology.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-center group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300 group-hover:animate-bounce">
                  <Users className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
                </div>
                <CardTitle className="group-hover:text-green-600 transition-colors duration-300">Community</CardTitle>
                <CardDescription>
                  Our users are at the heart of everything we do. We build for traders, by traders.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-center group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300 group-hover:animate-bounce">
                  <Globe className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                </div>
                <CardTitle className="group-hover:text-purple-600 transition-colors duration-300">Transparency</CardTitle>
                <CardDescription>
                  We believe in open communication and full transparency in all our operations and policies.
                </CardDescription>
              </CardHeader>
            </Card>
          </StaggeredContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry veterans with decades of combined experience in finance and technology
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              From startup to global leader in cryptocurrency trading
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/10 backdrop-blur-sm text-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{milestone.year}</CardTitle>
                  <CardDescription className="text-amber-100 font-medium">{milestone.event}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-100 text-sm">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Security & Compliance</h2>
              <p className="text-lg text-gray-600 mb-6">
                Security is not just a feature at Nairo Exchange—it's the foundation of everything we build. We employ
                multiple layers of protection to ensure your funds and data remain safe.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Multi-signature cold storage wallets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Bank-grade encryption and security protocols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">SOC 2 Type II certified infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Regulatory compliance in 50+ jurisdictions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Security Infrastructure"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the future of cryptocurrency trading with Nairo Exchange. Join millions of traders worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="text-lg px-8 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
              >
                Start Trading Today
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-amber-300 hover:bg-amber-100"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Nairo Exchange</span>
              </div>
              <p className="text-gray-400">The future of decentralized cryptocurrency trading.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Trading</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Spot Trading
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Futures
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Options
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nairo Exchange. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </PageTransition>
  )
}
