import Reveal from './Reveal'
import { accentAt } from '../lib/accentColors'

const services = [
  {
    index: '01',
    title: 'Website Development',
    description: 'End-to-end design and development for businesses that need a strong, professional online presence.',
    bestFor: 'New businesses & startups',
    features: ['Custom design', 'Responsive layout', 'SEO-ready structure', 'Fast performance'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    index: '02',
    title: 'Website Maintenance',
    description: 'Ongoing updates, monitoring and support to keep your website secure, fast and running smoothly.',
    bestFor: 'Existing live websites',
    features: ['Regular updates', 'Security monitoring', 'Performance checks', 'Bug fixes'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v.5a1.5 1.5 0 001.5 1.5h.5a2 2 0 110 4h-.5A1.5 1.5 0 0015 11.5v.5a2 2 0 11-4 0v-.5A1.5 1.5 0 009.5 10H9a2 2 0 110-4h.5A1.5 1.5 0 0011 4.5V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l6 6L21 9" opacity="0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20l4.5-4.5m0 0a2 2 0 102-2 2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    index: '03',
    title: 'Website Redesign',
    description: 'Modernize an outdated website with a better design, structure and user experience.',
    bestFor: 'Outdated or underperforming sites',
    features: ['Modern UI', 'Improved UX', 'Mobile-first rebuild', 'Speed optimization'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    index: '04',
    title: 'E-Commerce Development',
    description: 'Online stores designed around product discovery, smooth checkout and conversions.',
    bestFor: 'Online stores & marketplaces',
    features: ['Product catalogue', 'Secure checkout', 'Payment integration', 'Inventory management'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    index: '05',
    title: 'Custom Software Development',
    description: 'Bespoke web applications and tools built around your specific business workflows.',
    bestFor: 'Unique business workflows',
    features: ['Custom features', 'Scalable architecture', 'API integrations', 'Cloud-ready'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
]

function ServiceCard({ service, accent, delay }) {
  return (
    <Reveal delay={delay}>
      <a
        href="#contact"
        className="group relative flex flex-col h-full rounded-3xl bg-white border border-secondary/8 p-7 overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:border-secondary/[0.02] hover:shadow-[0_35px_70px_-30px_rgba(200,20,82,0.28)]"
      >
        {/* Soft gradient glow, revealed on hover */}
        <div
          className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${accent.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.035]`}
          aria-hidden="true"
        />

        <div className="relative flex items-start justify-between mb-6">
          <span
            className={`w-[3.25rem] h-[3.25rem] rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${accent.gradient} shadow-[0_10px_25px_-8px_rgba(11,14,26,0.35)] transition-transform duration-400 group-hover:-rotate-6 group-hover:scale-110`}
          >
            {service.icon}
          </span>
          <span className={`font-display font-bold text-2xl ${accent.text} opacity-25`}>{service.index}</span>
        </div>

        <h3 className="relative font-display font-extrabold text-xl text-secondary tracking-tight mb-2.5">{service.title}</h3>
        <p className="relative text-sm text-secondary/55 leading-relaxed">{service.description}</p>

        <p className={`relative flex items-center gap-1.5 text-[11px] font-semibold ${accent.text} mt-3`}>
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Best for: {service.bestFor}
        </p>

        <div className="relative flex flex-wrap gap-1.5 mt-4">
          {service.features.map((f) => (
            <span key={f} className={`text-[11px] font-medium ${accent.text} border ${accent.borderSoft} rounded-full px-2.5 py-1`}>
              {f}
            </span>
          ))}
        </div>

        <div className="relative flex items-center justify-between mt-auto pt-6">
          <span className={`text-sm font-semibold ${accent.text}`}>Get Started</span>
          <span
            className={`w-9 h-9 rounded-full border ${accent.borderSoft} ${accent.text} flex items-center justify-center transition-all duration-300 ${accent.groupHoverBg} group-hover:text-white group-hover:translate-x-1`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </a>
    </Reveal>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-14 md:py-16 bg-paper">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow mb-3">What We Build</p>
            <h2 className="display-heading text-3xl sm:text-4xl lg:text-5xl">Services</h2>
          </div>
          <p className="section-subheading max-w-sm text-sm">
            One team, full ownership — from first sketch to the site going live.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} accent={accentAt(i)} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}
