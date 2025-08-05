"use client"

import { ReactNode, Children, cloneElement, isValidElement } from 'react'
import { cn } from '@/lib/utils'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface StaggeredContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'bounce-in'
  threshold?: number
  rootMargin?: string
}

export function StaggeredContainer({
  children,
  className,
  staggerDelay = 100,
  animation = 'fade-in-up',
  threshold = 0.1,
  rootMargin = '0px',
}: StaggeredContainerProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  })

  const childrenArray = Children.toArray(children)

  return (
    <div ref={ref} className={cn(className)}>
      {childrenArray.map((child, index) => {
        if (!isValidElement(child)) return child

        const delay = index * staggerDelay
        const animationClass = isIntersecting ? `animate-${animation}` : 'opacity-0'
        const delayStyle = { animationDelay: `${delay}ms`, animationFillMode: 'both' }

        return cloneElement(child, {
          key: index,
          className: cn(child.props.className, animationClass),
          style: { ...child.props.style, ...delayStyle },
        })
      })}
    </div>
  )
}
