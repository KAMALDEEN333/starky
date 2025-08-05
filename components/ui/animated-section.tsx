"use client"

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'bounce-in'
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function AnimatedSection({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px',
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  })

  const animationClass = isIntersecting ? `animate-${animation}` : 'opacity-0'
  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {}

  return (
    <div
      ref={ref}
      className={cn(animationClass, className)}
      style={delayStyle}
    >
      {children}
    </div>
  )
}
