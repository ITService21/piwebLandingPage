import { useEffect } from 'react'
import { homePath } from '../lib/navigation'

const steps = [
  { title: 'We review your details', description: 'Our team looks at your requirement and budget.' },
  { title: 'We call you', description: 'Expect a call or WhatsApp message within 24 hours.' },
  { title: 'You get a clear plan', description: 'A tailored proposal with timeline and pricing.' },
]

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Thank You | Piweb Technology'
  }, [])

  return (
    <main className="min-h-screen bg-paper flex items-center py-16">
      <div className="container-page max-w-3xl text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="eyebrow mb-4">Enquiry received</p>
        <h1 className="display-heading text-4xl sm:text-5xl">
          Thank you! We&apos;ll be in <span className="gradient-text">touch soon.</span>
        </h1>
        <p className="text-secondary/60 leading-relaxed mt-5 max-w-xl mx-auto">
          We&apos;ve received your details and our team will get back to you within 24 hours.
        </p>

        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-left">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t-[3px] border-primary pt-4">
              <p className="text-xs font-semibold text-primary mb-1">Step {i + 1}</p>
              <h2 className="font-display font-bold text-lg text-secondary mb-1.5">{step.title}</h2>
              <p className="text-sm text-secondary/55 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto mt-12">
          <a href="tel:+919351870445" className="btn-primary py-3.5">Call Now</a>
          <a
            href="https://wa.me/919351870445"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-secondary/15 text-secondary font-semibold py-3.5 rounded-full hover:border-secondary hover:bg-secondary hover:text-white transition-all text-sm"
          >
            WhatsApp
          </a>
        </div>

        <a href={homePath()} className="inline-block mt-8 text-sm font-semibold text-primary hover:underline">
          ← Back to home
        </a>
      </div>
    </main>
  )
}
