"use client"

import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "gradient" | "dots" | "pulse"
  className?: string
}

export function LoadingSpinner({ 
  size = "md", 
  variant = "default", 
  className 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8",
    xl: "w-12 h-12"
  }

  if (variant === "dots") {
    return (
      <div className={cn("flex space-x-1", className)}>
        <div className={cn("rounded-full bg-amber-600 animate-bounce", sizeClasses[size])} style={{ animationDelay: "0ms" }} />
        <div className={cn("rounded-full bg-amber-600 animate-bounce", sizeClasses[size])} style={{ animationDelay: "150ms" }} />
        <div className={cn("rounded-full bg-amber-600 animate-bounce", sizeClasses[size])} style={{ animationDelay: "300ms" }} />
      </div>
    )
  }

  if (variant === "pulse") {
    return (
      <div className={cn("rounded-full bg-gradient-to-r from-amber-600 to-orange-600 animate-pulse", sizeClasses[size], className)} />
    )
  }

  if (variant === "gradient") {
    return (
      <div className={cn("relative", sizeClasses[size], className)}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 animate-spin">
          <div className="absolute inset-1 rounded-full bg-white" />
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-gray-300 border-t-amber-600",
        sizeClasses[size],
        className
      )}
    />
  )
}

interface LoadingOverlayProps {
  isLoading: boolean
  children: React.ReactNode
  loadingText?: string
  className?: string
}

export function LoadingOverlay({ 
  isLoading, 
  children, 
  loadingText = "Loading...",
  className 
}: LoadingOverlayProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="text-center">
            <LoadingSpinner size="lg" variant="gradient" className="mx-auto mb-4" />
            <p className="text-gray-600 font-medium">{loadingText}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mb-6 mx-auto animate-bounce">
          <div className="w-8 h-8 bg-white rounded-lg animate-pulse" />
        </div>
        <LoadingSpinner size="xl" variant="gradient" className="mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">Nairo Exchange</h2>
        <p className="text-gray-600">Loading your trading experience...</p>
      </div>
    </div>
  )
}
