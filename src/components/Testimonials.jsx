import { useState } from 'react'
import Reveal from './Reveal'
import { accentAt } from '../lib/accentColors'

const testimonials = [
  {
    quote: 'Piweb Technology delivered our website exactly as we wanted. The team was professional, responsive and easy to work with. Highly recommended!',
    name: 'Priya Sharma',
    title: 'Founder, GreenView Properties',
  },
  {
    quote: 'Our new website has brought in more enquiries and looks amazing on mobile. Great work by the Piweb team!',
    name: 'Rahul Mehta',
    title: 'Founder, HealthPlus Clinic',
  },
  {
    quote: 'Professional, creative and delivered on time. The team understood our business needs and built a website that truly represents our brand.',
    name: 'Anita Verma',
    title: 'Marketing Head, UrbanMart',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]
  const accent = accentAt(active)

  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">Client Voices</p>
        </Reveal>

        <Reveal delay={80} className="max-w-3xl">
          <svg className={`w-10 h-10 ${accent.textLight} mb-6 transition-colors duration-300`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
          <blockquote className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl text-white leading-snug tracking-tight">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="text-white font-semibold">{t.name}</p>
            <p className="text-white/45 text-sm">{t.title}</p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="flex items-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${i === active ? `w-10 ${accentAt(i).dot}` : 'w-4 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10 pt-10 border-t border-white/10">
            <a href="https://piwebtechnology.com/about-us/ourtestimonials" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white font-medium text-sm link-underline">
              Read all client reviews →
            </a>
            <span className="hidden sm:inline text-white/20">·</span>
            <a href="https://www.google.com/maps/search/Piweb+Technology+Jaipur" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white font-medium text-sm link-underline">
              See our Google reviews →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
