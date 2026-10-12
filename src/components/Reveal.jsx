import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hidden = {
    up: 'opacity-0 translate-y-10',
    down: 'opacity-0 -translate-y-10',
    left: 'opacity-0 translate-x-10',
    right: 'opacity-0 -translate-x-10',
    scale: 'opacity-0 scale-90',
    none: 'opacity-0',
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-[800ms] ease-out ${
        visible
          ? 'opacity-100 translate-y-0 translate-x-0 scale-100'
          : hidden[direction] || hidden.up
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
