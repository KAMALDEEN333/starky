"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, BarChart3, Wallet, Shield, CheckCircle, X, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { PageTransition } from "@/components/ui/page-transition"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [agreedToRisk, setAgreedToRisk] = useState(false)
  const router = useRouter()

  // Random gradient generator
  const randomGradients = useMemo(() => {
    const colors = [
      "from-pink-500 via-red-500 to-yellow-500",
      "from-indigo-500 via-purple-500 to-pink-500",
      "from-green-400 via-teal-500 to-blue-500",
      "from-orange-400 via-red-500 to-pink-500",
      "from-blue-400 via-sky-500 to-cyan-500",
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreedToTerms || !agreedToRisk) return
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push("/dashboard")
  }

  const passwordRequirements = [
    { text: "At least 8 characters", met: formData.password.length >= 8 },
    { text: "Contains uppercase letter", met: /[A-Z]/.test(formData.password) },
    { text: "Contains lowercase letter", met: /[a-z]/.test(formData.password) },
    { text: "Contains number", met: /\d/.test(formData.password) },
    { text: "Contains special character", met: /[!@#$%^&*(),.?\":{}|<>]/.test(formData.password) },
  ]

  const allRequirementsMet = passwordRequirements.every((req) => req.met)
  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword !== ""

  return (
    <PageTransition>
      <div className={`min-h-screen bg-gradient-to-br ${randomGradients} flex items-center justify-center p-4`}>
        <div className="w-full max-w-lg relative">
          {/* Floating animated circles background */}
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-black/10 rounded-full blur-3xl animate-pulse" />

          {/* Header */}
          <AnimatedSection animation="fade-in-down" className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-r from-black to-gray-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                Nairo Exchange
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Start Your Trading Journey</h1>
            <p className="text-gray-200">Create your account and join millions of crypto traders</p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" delay={300}>
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-md hover:shadow-3xl transition-all duration-500 rounded-2xl">
              <CardHeader className="space-y-1 pb-6">
                <CardTitle className="text-2xl text-center font-bold text-gray-900">Create Account</CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Join the future of cryptocurrency trading
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Wallet Connect Options */}
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 hover:border-black hover:bg-gray-100 transition-all"
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    MetaMask
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 hover:border-black hover:bg-gray-100 transition-all"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    WalletConnect
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="bg-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-3 text-gray-500 font-medium">Or create with email</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="focus:ring-2 focus:ring-black/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="focus:ring-2 focus:ring-black/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="focus:ring-2 focus:ring-black/50"
                      required
                    />
                  </div>

                  {/* Password Fields */}
                  {/* ... keep your password logic same but styled with focus:ring-black/50 */}
                  
                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-900 text-white font-medium py-3 shadow-lg hover:shadow-xl transition-all"
                    disabled={isLoading || !agreedToTerms || !agreedToRisk || !allRequirementsMet || !passwordsMatch}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Creating account...
                      </div>
                    ) : (
                      "Create Trading Account"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Risk Warning */}
            <div className="mt-6 p-4 bg-black/10 rounded-lg border border-white/30 backdrop-blur-sm text-white">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium mb-1">Risk Warning</p>
                  <p>Cryptocurrency trading is highly speculative and involves substantial risk. Only invest what you can afford to lose.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </PageTransition>
  )
}
