"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, BarChart3, Wallet, Shield } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { PageTransition } from "@/components/ui/page-transition"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // 🎨 Generate random colors on each render
  const colors = useMemo(() => {
    const palettes = [
      { from: "from-pink-500", to: "to-purple-500", border: "border-pink-300", hover: "hover:from-pink-600 hover:to-purple-600", text: "text-pink-600" },
      { from: "from-blue-500", to: "to-cyan-500", border: "border-blue-300", hover: "hover:from-blue-600 hover:to-cyan-600", text: "text-blue-600" },
      { from: "from-green-500", to: "to-emerald-500", border: "border-green-300", hover: "hover:from-green-600 hover:to-emerald-600", text: "text-green-600" },
      { from: "from-yellow-500", to: "to-orange-500", border: "border-yellow-300", hover: "hover:from-yellow-600 hover:to-orange-600", text: "text-yellow-600" },
      { from: "from-indigo-500", to: "to-violet-500", border: "border-indigo-300", hover: "hover:from-indigo-600 hover:to-violet-600", text: "text-indigo-600" },
    ]
    return palettes[Math.floor(Math.random() * palettes.length)]
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/dashboard")
  }

  return (
    <PageTransition>
      <div className={`min-h-screen bg-gradient-to-br ${colors.from} ${colors.to} flex items-center justify-center p-4 transition-all duration-700`}>
        <div className="w-full max-w-md">
          {/* Header */}
          <AnimatedSection animation="fade-in-down" className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2 mb-6 group">
              <div className={`w-10 h-10 bg-gradient-to-r ${colors.from} ${colors.to} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 animate-float`}>
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className={`text-2xl font-bold bg-gradient-to-r ${colors.from} ${colors.to} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                Nairo Exchange
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-white drop-shadow-md mb-2">Welcome Back, Trader</h1>
            <p className="text-white/80">Sign in to access your trading dashboard</p>
          </AnimatedSection>

          {/* Card */}
          <AnimatedSection animation="scale-in" delay={300}>
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500">
              <CardHeader className="space-y-1 pb-6">
                <CardTitle className="text-2xl text-center font-bold text-gray-900">Sign In</CardTitle>
                <CardDescription className="text-center text-gray-600">Access your crypto trading account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Wallet Connect Options */}
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className={`w-full bg-white/50 ${colors.border} border hover:bg-opacity-70 transition-all`}
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    MetaMask
                  </Button>
                  <Button
                    variant="outline"
                    className={`w-full bg-white/50 ${colors.border} border hover:bg-opacity-70 transition-all`}
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    WalletConnect
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className={colors.border} />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-3 text-gray-500 font-medium">Or sign in with email</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`${colors.border} focus:border-current focus:ring-current bg-white/50`}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`${colors.border} focus:border-current focus:ring-current bg-white/50 pr-10`}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-gray-100"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" className={`${colors.border} data-[state=checked]:bg-current`} />
                      <Label htmlFor="remember" className="text-sm text-gray-600">
                        Remember me
                      </Label>
                    </div>
                    <Link href="#" className={`text-sm ${colors.text} hover:underline font-medium`}>
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className={`w-full bg-gradient-to-r ${colors.from} ${colors.to} ${colors.hover} text-white font-medium py-3 shadow-lg hover:shadow-xl transition-all`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Signing in...
                      </div>
                    ) : (
                      "Sign In to Trade"
                    )}
                  </Button>
                </form>

                <div className="text-center text-sm text-gray-600">
                  {"Don't have an account? "}
                  <Link href="/signup" className={`${colors.text} hover:underline font-medium`}>
                    Create trading account
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className={`mt-6 p-4 rounded-lg border ${colors.border} bg-white/40 backdrop-blur-sm`}>
              <div className={`flex items-center space-x-2 ${colors.text}`}>
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Your funds are secured by industry-leading encryption</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  )
}
