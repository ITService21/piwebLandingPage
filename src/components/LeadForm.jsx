import { useState } from 'react'
import Reveal from './Reveal'
import AuroraBackground from './AuroraBackground'

const websiteRequirements = ['Business Website', 'Corporate Website', 'E-commerce', 'Landing Page', 'Website Redesign', 'Custom Website', 'Other']
const budgetRanges = ['Less than ₹15,000', '₹15,000 – ₹25,000', '₹25,000 – ₹50,000', '₹50,000 – ₹1,00,000', 'Above ₹1,00,000', 'Not Sure']

function openCallPopup() {
  window.dispatchEvent(new Event('openCallPopup'))
}

function ContactLine({ icon, label, href, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={href?.startsWith('tel:') ? openCallPopup : undefined}
      className="group flex items-center justify-between gap-3 py-4 border-b border-white/10 hover:border-white/30 transition-colors"
    >
      <span className="flex items-center gap-3 text-white/85 font-medium">
        {icon}
        {label}
      </span>
      <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
    </a>
  )
}

export default function LeadForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', businessName: '', requirement: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [phoneError, setPhoneError] = useState('')

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    if (value.length <= 10) {
      setFormData((prev) => ({ ...prev, phone: value }))
      setPhoneError(value.length > 0 && value.length < 10 ? 'Enter 10-digit number' : '')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.phone.length !== 10) { setPhoneError('Please enter a valid 10-digit phone number'); return }
    setSubmitting(true)
    try {
      await fetch('https://piwebtechnology.com/send-form-mail?company=piwebtechnology', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'info@piwebtechnology.com',
          subject: 'Website Development Inquiry — Landing Page',
          fields: {
            Name: formData.name, Email: formData.email, Phone: formData.phone,
            'Business Name': formData.businessName, 'Website Requirement': formData.requirement,
            'Budget Range': formData.budget, Message: formData.message,
          },
        }),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
    setSubmitting(false)
  }

  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#1a0b2e] via-[#150a26] to-[#0B0E1A] overflow-hidden border-t border-white/10">
      <AuroraBackground />

      <div className="container-page relative pt-14 pb-20 md:pt-16 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-4">Get In Touch</p>
              <h2 className="display-heading text-white text-4xl sm:text-5xl mb-6">
                Ready to build something better?
              </h2>
              <p className="text-white/55 leading-relaxed mb-10 max-w-sm">
                Tell us what you&apos;re building and we&apos;ll help you turn it into a website that
                works — no obligation, just a conversation.
              </p>

              <div>
                <ContactLine
                  href="tel:+919351870445"
                  label="+91 93518 70445"
                  icon={
                    <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                />
                <ContactLine
                  href="https://wa.me/919351870445"
                  external
                  label="Chat on WhatsApp"
                  icon={
                    <svg className="w-4 h-4 text-primary-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                    </svg>
                  }
                />
                <ContactLine
                  href="mailto:hello@piwebtechnology.com"
                  label="hello@piwebtechnology.com"
                  icon={
                    <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                />
              </div>

              <p className="text-white/30 text-sm mt-8">Jaipur, Rajasthan, India</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="bg-white rounded-2xl p-7 sm:p-10">
                {submitted ? (
                  <div className="text-center py-14">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Thank you!</h3>
                    <p className="text-secondary/55 text-sm">We&apos;ve received your message and will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium text-secondary mb-1.5 block">Name <span className="text-primary">*</span></label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="input-field" placeholder="Your full name" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="text-sm font-medium text-secondary mb-1.5 block">Phone / WhatsApp <span className="text-primary">*</span></label>
                        <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handlePhoneChange} className={`input-field ${phoneError ? 'border-red-300' : ''}`} placeholder="10-digit number" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} />
                        {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-secondary mb-1.5 block">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="you@company.com" />
                      </div>
                      <div>
                        <label htmlFor="businessName" className="text-sm font-medium text-secondary mb-1.5 block">Business Name</label>
                        <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} className="input-field" placeholder="Your business name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="requirement" className="text-sm font-medium text-secondary mb-1.5 block">Website Requirement</label>
                        <select id="requirement" name="requirement" value={formData.requirement} onChange={handleChange} className="input-field">
                          <option value="">Select a requirement</option>
                          {websiteRequirements.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="text-sm font-medium text-secondary mb-1.5 block">Budget Range <span className="text-secondary/40 font-normal">(optional)</span></label>
                        <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="input-field">
                          <option value="">Select budget range</option>
                          {budgetRanges.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-secondary mb-1.5 block">Message / Requirements</label>
                      <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="input-field" placeholder="Tell us about your website needs..." />
                    </div>

                    <button type="submit" disabled={submitting} className="btn-primary w-full py-4">
                      {submitting ? 'Sending...' : 'Start Your Project'}
                      {!submitting && <span aria-hidden="true">→</span>}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
