import Reveal from './Reveal'
import { accentAt } from '../lib/accentColors'
import AuroraBackground from './AuroraBackground'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '24/7', label: 'Dedicated Support' },
  { value: '2', label: 'Offices in India' },
]

const values = [
  {
    title: 'Innovation First',
    description: 'We constantly push boundaries to deliver cutting-edge websites that drive your business forward.',
  },
  {
    title: 'Client-Centric',
    description: 'Your success is our success. We build lasting relationships through clear communication and exceptional service.',
  },
  {
    title: 'Technical Excellence',
    description: 'We maintain high standards in design quality, security, performance and usability in every project.',
  },
  {
    title: 'Security & Trust',
    description: 'Your website and data are protected with secure development practices and industry best practices.',
  },
  {
    title: 'Passion Driven',
    description: 'We love what we do, and it shows in the quality and dedication we bring to every website.',
  },
  {
    title: 'Results Oriented',
    description: 'We focus on delivering measurable business value — more trust, more enquiries, and a stronger brand.',
  },
]

const offices = [
  {
    city: 'Gurugram',
    label: 'Haryana Office',
    address: '33, Golf Course Extension Road, Sector 50, Gurugram, Haryana',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=33+Golf+Course+Extension+Road+Sector+50+Gurugram+Haryana',
  },
  {
    city: 'Jaipur',
    label: 'Rajasthan Office',
    address: 'Ganesh Nagar 1st, Jhotwara, Jaipur, Rajasthan',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ganesh+Nagar+1st+Jhotwara+Jaipur+Rajasthan',
  },
]

export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-[#0B0E1A] via-[#150a26] to-[#0B0E1A] py-20 md:py-28">
      <AuroraBackground />

      <div className="container-page relative">
        <Reveal>
          <p className="eyebrow mb-6">About Us</p>
          <h2 className="display-heading text-white text-4xl sm:text-5xl lg:text-[3.75rem] max-w-4xl">
            A passionate team building websites that
            <br />
            turn your vision into <span className="gradient-text">reality.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mt-12 md:mt-16 items-stretch">
          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 md:p-10">
              <h3 className="font-display font-bold text-2xl text-white mb-5">Who We Are</h3>
              <div className="space-y-5 text-white/65 leading-relaxed">
                <p>
                  Founded with a vision to help businesses grow online,{' '}
                  <a
                    href="https://www.piwebtechnology.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold underline decoration-primary decoration-2 underline-offset-4 hover:text-primary-300 transition-colors"
                  >
                    Piweb Technology
                  </a>{' '}
                  is a team of developers, designers and innovators dedicated to turning digital ideas into
                  professional websites.
                </p>
                <p>
                  We combine creativity with technical expertise to deliver websites that look modern, load fast
                  and work for your business. Our commitment to excellence, innovation and client success drives
                  everything we do.
                </p>
                <p>
                  We believe a website should do more than exist — it should build trust, present your brand
                  clearly and make it easy for customers to contact you.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-5 grid grid-cols-3 lg:grid-cols-1 gap-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="h-full rounded-2xl bg-gradient-to-br from-primary via-fuchsia-500 to-blue-500 p-[1px]">
                  <div className="h-full rounded-2xl bg-[#120a22] px-4 py-5 lg:px-7 lg:py-6 lg:flex lg:items-center lg:gap-6">
                    <p className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl gradient-text lg:min-w-[110px]">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-white/60 mt-1.5 lg:mt-0 leading-snug">{stat.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[
            { eyebrow: 'Our Mission', tone: 'from-primary/25', text: 'To empower businesses with professional websites that drive growth, generate enquiries and create a competitive advantage. We are committed to delivering excellence through thoughtful design, clean development and exceptional service.' },
            { eyebrow: 'Our Vision', tone: 'from-blue-500/25', text: 'To be a trusted website development partner, recognised for reliability, design quality and real business impact. We want every business we work with to have a website that represents them with confidence.' },
          ].map((item, i) => (
            <Reveal key={item.eyebrow} delay={i * 100}>
              <article className={`h-full rounded-2xl border border-white/10 bg-gradient-to-br ${item.tone} to-white/[0.03] p-7 md:p-8 transition-transform duration-300 hover:-translate-y-1`}>
                <p className="eyebrow mb-4">{item.eyebrow}</p>
                <p className="text-white/70 leading-relaxed">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 md:mt-20">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">Our Core Values</h3>
            <p className="text-white/55 max-w-xl">The principles that guide how we work with every client.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {values.map((value, i) => {
            const accent = accentAt(i)
            return (
              <Reveal key={value.title} delay={i * 70}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.08]">
                  <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${accent.gradient}`} />
                  <span className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent.gradient} font-display text-sm font-bold text-white shadow-lg`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="font-display font-bold text-lg text-white mb-2.5">{value.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <blockquote className="relative mt-16 md:mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 via-fuchsia-500/10 to-blue-500/20 p-8 md:p-12">
            <span aria-hidden="true" className="absolute -top-6 left-8 font-display text-8xl leading-none text-primary/70 select-none">&ldquo;</span>
            <p className="font-display text-xl sm:text-2xl lg:text-[1.65rem] text-white leading-snug max-w-4xl">
              Technology is not just about building software; it&apos;s about building the future.
              At Piweb Tech, we don&apos;t just write code — we craft digital experiences that transform
              businesses and empower people.
            </p>
            <footer className="mt-6 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-500 font-display font-bold text-white">SR</span>
              <div>
                <p className="font-semibold text-white">Soumya Ranjan Pradhan</p>
                <p className="text-sm text-white/55">CEO &amp; Co-Founder, Piweb Technology</p>
              </div>
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-16 md:mt-20">
          <Reveal>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">Our Offices</h3>
            <p className="text-white/55 max-w-xl mb-10">Visit us in Jaipur or Gurugram — or simply call us to get started.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offices.map((office, i) => (
              <Reveal key={office.city} delay={i * 100}>
                <a
                  // href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.08]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300 mb-2">{office.label}</p>
                      <h4 className="font-display font-bold text-2xl text-white mb-3">{office.city}</h4>
                      <p className="text-white/60 leading-relaxed max-w-xs">{office.address}</p>
                    </div>
                    <span className="animate-about-float w-11 h-11 rounded-full bg-primary/20 text-primary-300 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                  </div>
                  {/* <p className="mt-6 text-sm font-semibold text-primary-300 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View on Google Maps <span aria-hidden="true">→</span>
                  </p> */}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
