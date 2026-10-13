import { useEffect, useMemo } from 'react'
import { homePath } from '../lib/navigation'

const steps = [
  { title: 'We review your details', description: 'Our team looks at your requirement and budget.', icon: '🔍' },
  { title: 'We call you', description: 'Expect a call or WhatsApp message within 24 hours.', icon: '📞' },
  { title: 'You get a clear plan', description: 'A tailored proposal with timeline and pricing.', icon: '🚀' },
]

const confettiColors = ['#ec4899', '#f472b6', '#fb923c', '#fbbf24']

function useConfetti(count) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 4,
        size: 6 + Math.random() * 8,
        color: confettiColors[i % confettiColors.length],
        round: i % 3 === 0,
        drift: (Math.random() - 0.5) * 160,
      })),
    [count]
  )
}

function Burst({ pieces }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.round ? p.size : p.size * 1.6,
            background: p.color,
            borderRadius: p.round ? '9999px' : '2px',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  )
}

export default function ThankYou() {
  const pieces = useConfetti(40)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Thank You | Piweb Technology'
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#EEF0F4] flex items-center py-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" aria-hidden="true" />
      <Burst pieces={pieces} />

      <div className="container-page relative z-20 max-w-3xl text-center">
        <div className="relative mx-auto mb-8 h-24 w-24">
          <span className="absolute inset-0 rounded-full bg-primary opacity-30 animate-ping" />
          <span className="thanks-pop relative flex h-24 w-24 items-center justify-center rounded-full bg-primary shadow-[0_0_40px_rgba(236,72,153,0.45)]">
            <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path className="thanks-check" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>

        <p className="eyebrow mb-4">Enquiry received</p>
        <h1 className="display-heading text-secondary text-4xl sm:text-6xl">
          Thank you! We&apos;ll be in <span className="text-primary">touch soon.</span>
        </h1>
        <p className="text-secondary/65 leading-relaxed mt-5 max-w-xl mx-auto">
          Your project is in good hands. We&apos;ve received your details and our team will get back to you
          within 24 hours.
        </p>

        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 text-left">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative overflow-hidden rounded-2xl border border-secondary/10 bg-white p-5 shadow-[0_10px_30px_-15px_rgba(11,14,26,0.15)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="text-2xl">{step.icon}</span>
              <p className="mt-3 text-xs font-semibold text-primary">Step {i + 1}</p>
              <h2 className="font-display font-bold text-lg text-secondary mb-1.5">{step.title}</h2>
              <p className="text-sm text-secondary/60 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto mt-12">
          <a href="tel:+919351870445" className="btn-primary py-3.5">Call Now</a>
          <a
            href="https://wa.me/919351870445"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-secondary/20 text-secondary font-semibold py-3.5 rounded-full hover:bg-secondary hover:text-white transition-all text-sm"
          >
            WhatsApp
          </a>
        </div>

        <a href={homePath()} className="inline-block mt-8 text-sm font-semibold text-secondary/60 hover:text-secondary transition-colors">
          ← Back to home
        </a>
      </div>
    </main>
  )
}
