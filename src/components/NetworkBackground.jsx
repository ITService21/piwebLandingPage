import { useEffect, useRef } from 'react'

// Animated plexus/network background — drifting, glowing dots connected by lines.
// The animation loop only runs while the canvas is actually on screen, to keep
// long-page scrolling smooth (several of these can be mounted at once).
export default function NetworkBackground({
  className = '',
  dotColors = ['255, 255, 255'],
  lineColor = '255, 255, 255',
  density = 0.00009,
  maxSpeed = 0.45,
  linkDistance = 140,
  glow = false,
  opacity = 1,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    let nodes = []
    let rafId = null
    let visible = false

    const makeNodes = () => {
      const count = Math.max(16, Math.min(70, Math.floor(width * height * density)))
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * maxSpeed,
        vy: (Math.random() - 0.5) * maxSpeed,
        r: 1.3 + Math.random() * 1.4,
        color: dotColors[Math.floor(Math.random() * dotColors.length)],
        glowing: glow && i % 3 === 0,
      }))
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      makeNodes()
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < linkDistance) {
            ctx.strokeStyle = `rgba(${lineColor}, ${(1 - dist / linkDistance) * 0.4})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        if (n.glowing) {
          ctx.shadowColor = `rgba(${n.color}, 0.9)`
          ctx.shadowBlur = 6
        }
        ctx.fillStyle = `rgba(${n.color}, 0.85)`
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
        if (n.glowing) ctx.shadowBlur = 0
      }
    }

    const draw = () => {
      step()
      rafId = requestAnimationFrame(draw)
    }

    const start = () => {
      if (rafId || prefersReduced) return
      rafId = requestAnimationFrame(draw)
    }

    const stop = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = null
    }

    resize()
    window.addEventListener('resize', resize)

    if (prefersReduced) {
      step()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) start()
        else stop()
      },
      { rootMargin: '200px 0px' }
    )
    observer.observe(canvas)

    return () => {
      window.removeEventListener('resize', resize)
      observer.disconnect()
      stop()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineColor, density, maxSpeed, linkDistance, glow, JSON.stringify(dotColors)])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  )
}
