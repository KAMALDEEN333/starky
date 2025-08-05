"use client"

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { PageLoader } from './loading-spinner'

interface RouteTransitionProps {
  children: React.ReactNode
}

export function RouteTransition({ children }: RouteTransitionProps) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    setIsLoading(true)
    
    const timer = setTimeout(() => {
      setDisplayChildren(children)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname, children])

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <div className="animate-fade-in">
      {displayChildren}
    </div>
  )
}
