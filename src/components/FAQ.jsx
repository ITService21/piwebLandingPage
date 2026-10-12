import { useState } from 'react'
import Reveal from './Reveal'
import { accentAt } from '../lib/accentColors'

const faqs = [
  {
    question: 'How much does website development cost?',
    answer: 'Website development costs depend on the type of website, number of pages, features and integrations required. We offer packages starting from basic business websites to custom solutions. Contact us for a detailed quote based on your specific requirements.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'A standard business website typically takes 2–4 weeks from start to launch. More complex websites with custom features, e-commerce or integrations may take 4–8 weeks. The timeline depends on project scope, content readiness and feedback turnaround.',
  },
  {
    question: 'Will my website work on mobile?',
    answer: 'Yes. Every website we build is fully responsive and designed mobile-first. Your website will work smoothly across mobile phones, tablets and desktop computers.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes. We regularly help businesses modernize their existing websites with improved design, better user experience, mobile responsiveness and updated content structure. We can work with your existing domain and hosting.',
  },
  {
    question: 'Can you build a website for my industry?',
    answer: 'We build websites for businesses across many industries including healthcare, real estate, education, retail, manufacturing, consulting, food and beverage, and professional services. Every website is designed around your specific business needs.',
  },
  {
    question: 'Can I update my website myself?',
    answer: 'Yes. We can integrate a content management system that lets you easily update text, images and basic content without any technical knowledge. We also provide training on how to use it.',
  },
  {
    question: 'Do you provide website maintenance?',
    answer: 'Yes. We offer ongoing website maintenance and support packages that include regular updates, security monitoring, backups, content updates and technical support.',
  },
  {
    question: 'Can you build landing pages for Google Ads?',
    answer: 'Yes. We build dedicated landing pages designed specifically for Google Ads campaigns. These pages are optimized for conversions, fast loading speed and mobile performance to help you get the best results from your advertising budget.',
  },
]

function openCallPopup() {
  window.dispatchEvent(new Event('openCallPopup'))
}

function HelpLine({ icon, label, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={href?.startsWith('tel:') ? openCallPopup : undefined}
      className="group flex items-center gap-3 py-3.5 border-b border-secondary/8 last:border-0 hover:pl-1 transition-all"
    >
      <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
        {icon}
      </span>
      <span className="text-sm font-semibold text-secondary flex-1">{label}</span>
      <span className="text-secondary/30 group-hover:text-primary group-hover:translate-x-1 transition-all">→</span>
    </a>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">FAQs</p>
            <h2 className="display-heading text-4xl sm:text-5xl">Questions, answered.</h2>
          </div>
        </Reveal>

        <div className="lg:grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 border-t border-secondary/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              const accent = accentAt(index)
              return (
                <Reveal key={faq.question} delay={index * 40}>
                  <div className="border-b border-secondary/10">
                    <button
                      type="button"
                      className={`w-full flex items-center gap-4 py-6 text-left text-secondary font-semibold ${accent.hoverText} transition-colors`}
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                    >
                      <span className={`font-display font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${accent.soft} ${accent.text}`}>
                        {index + 1}
                      </span>
                      <span className="text-base sm:text-lg flex-1">{faq.question}</span>
                      <span className={`w-7 h-7 rounded-full border border-secondary/20 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? `${accent.dot} ${accent.border} text-white rotate-45` : 'text-secondary/50'}`}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </button>
                    <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: isOpen ? '400px' : '0px' }}>
                      <p className="text-secondary/55 text-sm leading-relaxed pb-6 pl-11 pr-10">{faq.answer}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <div className="lg:col-span-5 mt-14 lg:mt-0">
            <Reveal delay={200}>
              <div className="lg:sticky lg:top-28 rounded-3xl border border-secondary/10 bg-paper p-8 relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

                <span className="relative inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-rose-600 text-white items-center justify-center shadow-[0_10px_25px_-8px_rgba(200,20,82,0.4)]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>

                <h3 className="relative font-display font-extrabold text-2xl text-secondary mt-5">Still have questions?</h3>
                <p className="relative text-sm text-secondary/55 leading-relaxed mt-2">
                  Can&apos;t find the answer you&apos;re looking for? Our team is happy to walk you through anything.
                </p>

                <div className="relative mt-6">
                  <HelpLine
                    href="tel:+919351870445"
                    label="+91 93518 70445"
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    }
                  />
                  <HelpLine
                    href="https://wa.me/919351870445"
                    external
                    label="Chat on WhatsApp"
                    icon={
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                      </svg>
                    }
                  />
                  <HelpLine
                    href="mailto:hello@piwebtechnology.com"
                    label="hello@piwebtechnology.com"
                    icon={
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                  />
                </div>

                <a href="#contact" className="relative btn-primary w-full mt-7">
                  Ask Us Directly <span aria-hidden="true">→</span>
                </a>

                <p className="relative text-xs text-secondary/35 text-center mt-4">We usually reply within a few hours.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
