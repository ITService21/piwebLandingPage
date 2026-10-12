import Reveal from './Reveal'
import { accentAt } from '../lib/accentColors'

const checklistItems = [
  'Custom website design',
  'Mobile responsive design',
  'Home page',
  'About page',
  'Services / Products pages',
  'Contact page',
  'Enquiry form',
  'WhatsApp integration',
  'Google Maps integration',
  'Social media integration',
  'Basic technical SEO setup',
  'SSL / HTTPS',
  'Analytics integration',
  'Search-engine-friendly structure',
  'Testing across devices',
  'Deployment',
  'Post-launch support',
]

// Static plexus pattern + glow, pinned via background-attachment: fixed —
// the content panel scrolls over it while the backdrop itself stays put.
const parallaxStyle = {
  backgroundColor: '#05060B',
  backgroundImage: [
    'radial-gradient(ellipse 60% 50% at 15% 20%, rgba(200,20,82,0.28), transparent 60%)',
    'radial-gradient(ellipse 60% 50% at 85% 80%, rgba(124,58,237,0.24), transparent 60%)',
    'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(16,185,129,0.14), transparent 60%)',
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Ccircle cx='2' cy='2' r='1.4' fill='%23ffffff' fill-opacity='0.14'/%3E%3C/svg%3E\")",
  ].join(', '),
  backgroundAttachment: 'fixed, fixed, fixed, fixed',
  backgroundSize: 'cover, cover, cover, 64px 64px',
  backgroundPosition: 'center, center, center, 0 0',
}

export default function WhatsIncluded() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={parallaxStyle}>
      <div className="container-page relative">
        <div className="rounded-3xl border border-white/10 bg-secondary/70 backdrop-blur-md p-8 sm:p-12 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <p className="eyebrow mb-4">What You Get</p>
              <h2 className="display-heading text-white text-4xl sm:text-5xl mb-6">
                What&apos;s included in your website
              </h2>
              <p className="text-white/55 leading-relaxed mb-4 max-w-md">
                We don&apos;t just build pages — we deliver a complete website solution tailored to your business.
                Every essential element is included so you can focus on growing your business.
              </p>
              <a href="#contact" className="btn-primary mt-4">
                Get a Free Consultation <span aria-hidden="true">→</span>
              </a>
            </Reveal>

            <Reveal delay={150}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                {checklistItems.map((item, i) => {
                  const accent = accentAt(i)
                  return (
                    <li key={item} className="flex items-center gap-3 py-3 border-b border-white/10">
                      <svg className={`w-3.5 h-3.5 ${accent.textLight} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/75 text-sm">{item}</span>
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
